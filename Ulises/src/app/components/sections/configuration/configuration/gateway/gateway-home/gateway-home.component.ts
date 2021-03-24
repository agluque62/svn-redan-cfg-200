import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AppSettings } from 'src/app/core/app.settings';
import { Gateway } from 'src/app/_models/configs/gateway/Gateway';
import { GatewayIp } from 'src/app/_models/configs/gateway/GatewayIpResponse';
import { GatewayPost } from 'src/app/_models/configs/gateway/GatewayPost';
import { GatewayResponse } from 'src/app/_models/configs/gateway/GatewayResponse';
import { AlertService } from 'src/app/_services/alert.service';
import { ConfigService } from 'src/app/_services/config.service';
import { DataService } from 'src/app/_services/data.service';
import { GatewayFieldService } from 'src/app/_services/gateway-field.service';
import { GatewayService } from 'src/app/_services/gateway.service';
import { HistoricService } from 'src/app/_services/historic.service';
import { LoginService } from 'src/app/_services/login.service';
import { UserService } from 'src/app/_services/user.service';
import { GatewayCopyFormComponent } from '../gateway-copy-form/gateway-copy-form.component';

@Component({
  selector: 'gateway-home',
  templateUrl: './gateway-home.component.html',
  styleUrls: ['./gateway-home.component.scss']
})
export class GatewayHomeComponent implements OnInit {

  gateway!: Gateway;
  gatewayResponse!: GatewayResponse;
  gatewayIps!: GatewayIp[];

  gatewayPost!: GatewayPost;

  initStatusGateway!: any;
  gatewayForm!: FormGroup;
  gatewayGeneralForm!: FormGroup;

  title!: string;
  configId!: number;
  siteId!: number | undefined;
  ready: boolean = false;
  type!: string;

  showSpinner: boolean = false;
  tabIdx: number = 0;
  visualizationMode: boolean = false;

  selectedClass: string = "indexLoad";
  loadIndex!: string;
  LoadIndexControlEnabled: boolean = false;

  constructor(private readonly route: ActivatedRoute, private readonly router: Router, private readonly app: AppComponent, public dialog: MatDialog,
    private readonly gatewayService: GatewayService, private readonly alertService: AlertService, private historicService: HistoricService,
    private readonly dataService: DataService, private readonly userService: UserService, private readonly loginService: LoginService,
    private readonly gatewayFieldService: GatewayFieldService, private readonly configService: ConfigService) {
  }

  async ngOnInit() {

    try {

      this.checkPermissions();
      this.configId = this.dataService.getDataConfigId();
      this.siteId = this.dataService.getDataSiteId();

      if (this.dataService.getDataGatewayPreviousUrl() === 'RESOURCE') {
        this.tabIdx = 3;
      }

      const gatewayId = Number(this.route.snapshot.paramMap.get('id'));

      if (gatewayId) {
        const hardwareResume = (await this.gatewayService.getGatewayHardware(gatewayId).toPromise());
        let result = (await this.configService.getLocalConfig().toPromise());
        const force_rdaudio_normal = (await this.configService.getLocalConfig().toPromise()).R16Mode;
        this.LoadIndexControlEnabled = result.LoadIndexControlEnabled;
        if (this.LoadIndexControlEnabled) {
          this.calculateLoadIndex(hardwareResume, force_rdaudio_normal);
        }

        this.type = 'EDIT';
        await this.initEdit(gatewayId);
        this.title = await this.getGatewayTitle();
      } else {
        this.type = 'CREATE';
        this.initCreate();
      }

      this.gatewayPost = new GatewayPost(this.gateway, this.gatewayIps);
      this.gatewayForm = this.initForm();
      this.initStatusGateway = { ...this.gatewayForm.value };
      this.ready = true;
    } catch (error) {
      this.app.catchError(error);
    }
  }

  async checkPermissions() {
    if (this.notPermission()) {
      await this.loginService.logout().toPromise();
      this.app.destroyAlive();
      this.router.navigate(['/access']);
    }

    this.visualizationMode = (this.visualizationPermission()) ? true : false;
  }

  async getGatewayTitle() {
    const config = await this.configService.getConfigurationById(this.configId).toPromise();
    const title = `Configuración: ${config.result[0].NAME} - Emplazamiento: ${this.gateway.emplazamiento} - Pasarela: ${this.gateway.name}`;
    this.dataService.updateDataGatewayTitle(title);
    return title;
  }

  notPermission() {
    return !this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && !this.userService.isRole('VISUALIZATION')
      && !this.userService.isRole('SUPERVISED_CONFIGURATION');
  }

  visualizationPermission() {
    return (!this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && this.userService.isRole('VISUALIZATION'))
      || (!this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && this.userService.isRole('SUPERVISED_CONFIGURATION'));
  }

  initCreate() {
    this.gateway = new Gateway(this.siteId);
    this.gatewayIps = [];
  }

  async activateInField() {

    if (JSON.stringify(this.gatewayForm.value) !== JSON.stringify(this.initStatusGateway)) {
      await this.alertService.errorMessage(``, `No ha guardado los cambios de la pasarela`);
      return;
    }

    const confirm = await this.alertService.confirmationMessage(``, `¿Seguro que quieres activar esta pasarela en campo?`);
    if (confirm.value) {
      this.showSpinner = true;

      // Check CPU 0
      const gtwFieldCpu0 = await this.gatewayFieldService.getGatewayField(this.gateway.idCGW, this.gatewayForm.value.ipb1).toPromise();

      if (this.validateGtwFieldJson(gtwFieldCpu0)) {
        const gtwActual = await this.gatewayService.getGatewayAll(this.gateway.idCGW).toPromise();
        const result = await this.gatewayFieldService.updateGatewayField(this.gateway.idCGW, this.gatewayForm.value.ipb1, gtwActual).toPromise();
        if (result.res && result.res === 'Configuracion Activada...') {
          await this.initEdit(this.gateway.idCGW);
          this.gatewayPost = new GatewayPost(this.gateway, this.gatewayIps);
          this.gatewayForm = this.initForm();
          await this.historicService.succesGatewayFieldActivation(`${this.gateway.name} CPU 0`).toPromise();
          await this.alertService.successMessage(``, result.res);
          this.showSpinner = false;
          return;
        }
      }

      // Check CPU 1
      const gtwFieldCpu1 = await this.gatewayFieldService.getGatewayField(this.gateway.idCGW, this.gatewayForm.value.ipb2).toPromise();
      if (this.validateGtwFieldJson(gtwFieldCpu1)) {
        const gtwActual = await this.gatewayService.getGatewayAll(this.gateway.idCGW).toPromise();
        const result = await this.gatewayFieldService.updateGatewayField(this.gateway.idCGW, this.gatewayForm.value.ipb2, gtwActual).toPromise();
        if (result.res && result.res === 'Configuracion Activada...') {
          await this.initEdit(this.gateway.idCGW);
          this.gatewayPost = new GatewayPost(this.gateway, this.gatewayIps);
          this.gatewayForm = this.initForm();
          await this.historicService.succesGatewayFieldActivation(`${this.gateway.name} CPU 1`).toPromise();
          await this.alertService.successMessage(``, result.res);
          this.showSpinner = false;
          return;
        }
      }

      if (gtwFieldCpu0.code === 'ECONNREFUSED' || gtwFieldCpu1.code === 'ECONNREFUSED') {
        await this.historicService.errorGatewayFieldActivation(`${this.gateway.name} Error conexión a la pasarela`).toPromise();
        await this.alertService.errorMessage(``, `Error de conexión a la pasarela`);
        this.showSpinner = false;
        return;
      }

      if (gtwFieldCpu0.code === 'ETIMEDOUT' && gtwFieldCpu1.code === 'ETIMEDOUT') {
        await this.historicService.errorGatewayFieldActivation(`${this.gateway.name} Error timeout`).toPromise();
        await this.alertService.errorMessage(``, `Error de timeout en la conexión a la pasarela`);
        this.showSpinner = false;
        return;
      }

      if (gtwFieldCpu0.code === 'EHOSTUNREACH' || gtwFieldCpu1.code === 'EHOSTUNREACH') {
        await this.historicService.errorGatewayFieldActivation(`${this.gateway.name} Error de conexión al host`).toPromise();
        await this.alertService.errorMessage(``, `Error no es posible conectar con la pasarela`);
        this.showSpinner = false;
        return;
      }

      if (!this.validateGtwFieldJson(gtwFieldCpu0) && !this.validateGtwFieldJson(gtwFieldCpu1)) {
        await this.historicService.errorGatewayFieldActivation(`${this.gateway.name} Error de formato`).toPromise();
        await this.alertService.errorMessage(``, `Error el formato del JSON recibido no es correcto`);
        this.showSpinner = false;
        return;
      }
    }
  }

  async initEdit(gatewayId: number) {
    try {
      this.gatewayResponse = await this.gatewayService.getGatewayById(gatewayId).toPromise();
      if (this.gatewayResponse && this.gatewayResponse.result) {
        this.gateway = [...this.gatewayResponse.result][0];
        this.siteId = this.gateway.EMPLAZAMIENTO_idEMPLAZAMIENTO;
      }
      this.gatewayIps = [];
      this.gatewayIps = [...await this.gatewayService.getGatewayIpList(gatewayId).toPromise()];
    } catch (error) {
      this.app.catchError(error);
    }
  }

  back() {
    this.router.navigate(['/home/config/' + this.configId]);
  }

  async createGateway() {

    if (await this.isInvalidGateway()) return;

    this.showSpinner = true;

    const ipv = await this.checkIpError(this.gatewayForm.value.ipv);
    if (ipv) {
      this.showSpinner = false;
      return;
    }

    const ipb1 = await this.checkIpError(this.gatewayForm.value.ipb1);
    if (ipb1) {
      this.showSpinner = false;
      return;
    }

    const ipb2 = await this.checkIpError(this.gatewayForm.value.ipb2);
    if (ipb2) {
      this.showSpinner = false;
      return;
    }

    const name = await this.checkGatewayNameError(this.gatewayForm.value.nombre);
    if (name) {
      this.showSpinner = false;
      return;
    }

    let gateway = Object.assign({}, this.gatewayForm.getRawValue());
    delete gateway.EMPLAZAMIENTO_idEMPLAZAMIENTO;
    gateway.snmpv2 = gateway.snmpv2 ? 1 : 0;
    gateway.pendiente_actualizar = gateway.pendiente_actualizar ? 1 : 0;

    const siteId = (this.siteId) ? this.siteId : 0;

    const newGtw = await this.gatewayService.createGtw(siteId, gateway).toPromise();
    if (newGtw.error) {
      this.showSpinner = false;
      await this.alertService.errorMessage(`Error`, newGtw.error);
      return;
    }

    await this.historicService.createGateway(this.gatewayForm.value.nombre).toPromise();

    this.showSpinner = false;
    await this.alertService.successMessage(``, `Pasarela ${newGtw.name} creada correctamente`);

    this.dataService.updateDataConfigId(this.configId);
    this.dataService.updateDataGatewayPreviousUrl('NEW');
    this.router.navigate(['/home/gateway/' + newGtw.insertId]);
  }

  async checkGatewayNameError(name: string): Promise<boolean> {
    const result = await this.gatewayService.checkName(name, this.configId, this.gateway.idCGW).toPromise();
    if (result !== 'NO_ERROR') {
      const message = (result === 'NAME_DUP') ? `El identificador de pasarela ${name} ya se encuentra dada de alta en esta configuración` : result;
      await this.alertService.errorMessage(`Error`, message);
      return true;
    }
    return false;
  }

  async checkIpError(ip: string): Promise<boolean> {
    const result = await this.gatewayService.checkIpAddress(ip, this.configId, this.gateway.idCGW).toPromise();
    if (result !== 'NO_ERROR') {
      const message = (result === 'IP_DUP') ? `La dirección ${ip} ya se encuentra dada de alta en esta configuración` : result;
      await this.alertService.errorMessage(`Error`, message);
      return true;
    }
    return false;
  }

  async isInvalidGateway() {
    if (!this.gatewayForm.valid) {

      let message = ``;

      if (this.gatewayForm.controls['nombre'].hasError('required')) {
        message = `El identificador de la pasarela es obligatorio`;
      }

      if (this.gatewayForm.controls['nombre'].hasError('pattern')) {
        message = `El identificador de la pasarela no cumple con el patrón permitido`;
      }

      if (this.gatewayForm.hasError('ipEqualsValidator')) {
        message = `La dirección IP Virtual y las IPs de las CPUs deben ser diferentes`;
      }

      if (this.gatewayForm.controls['ipv'].hasError('pattern')) {
        message = `La IP Virtual no es una IP válida`;
      }

      if (this.gatewayForm.controls['ipv'].hasError('required')) {
        message = `La IP Virtual es obligatoria`;
      }

      if (this.gatewayForm.controls['ipb1'].hasError('pattern')) {
        message = `La IP de la CPU 0 no es una IP válida`;
      }

      if (this.gatewayForm.controls['ipb1'].hasError('required')) {
        message = `La IP de la CPU 0 es obligatoria`;
      }

      if (this.gatewayForm.controls['ipb2'].hasError('pattern')) {
        message = `La IP de la CPU 1 no es una IP válida`;
      }

      if (this.gatewayForm.controls['ipb2'].hasError('required')) {
        message = `La IP de la CPU 1 es obligatoria`;
      }

      if (this.gatewayForm.controls['ipg1'].hasError('pattern')) {
        message = `La IP gateway de la CPU 0 no es una IP válida`;
      }

      if (this.gatewayForm.controls['ipg1'].hasError('required')) {
        message = `La IP gateway de la CPU 0 es obligatoria`;
      }

      if (this.gatewayForm.controls['ipg2'].hasError('pattern')) {
        message = `La IP gateway de la CPU 1 no es una IP válida`;
      }

      if (this.gatewayForm.controls['ipg2'].hasError('required')) {
        message = `La IP gateway de la CPU 1 es obligatoria`;
      }

      if (this.gatewayForm.controls['msb1'].hasError('pattern')) {
        message = `La máscara de la CPU 0 no es una IP válida`;
      }

      if (this.gatewayForm.controls['msb1'].hasError('required')) {
        message = `La máscara de la CPU 0 es obligatoria`;
      }

      if (this.gatewayForm.controls['msb2'].hasError('pattern')) {
        message = `La máscara CPU 1 no es una IP válida`;
      }

      if (this.gatewayForm.controls['msb2'].hasError('required')) {
        message = `La máscara de la CPU 1 es obligatoria`;
      }

      if (this.gatewayForm.controls['servidor_rtsp'].hasError('pattern')) {
        message = `La IP del servidor RSTP (A) no es una IP válida`;
      }

      if (this.gatewayForm.controls['servidor_rtspb'].hasError('pattern')) {
        message = `La IP del servidor RSTP (B) no es una IP válida`;
      }

      if (this.gatewayForm.controls['periodo_supervision'].hasError('pattern')) {
        message = `El valor periodo de supervisión es inválido`;
      }

      if (this.gatewayForm.controls['tiempo_sesion'].hasError('pattern')) {
        message = `El valor tiempo de sesión es inválido`;
      }

      if (this.gatewayForm.controls['puerto_rtsp'].hasError('pattern')) {
        message = `Puerto RTSP inválido`;
      }

      if (this.gatewayForm.controls['puerto_servicio_web'].hasError('pattern')) {
        message = `Puerto de servicio web inválido`;
      }

      if (this.gatewayForm.controls['puerto_snmp'].hasError('pattern')) {
        message = `Puerto SNMP inválido`;
      }

      await this.alertService.errorMessage(`Formulario inválido`, message);
      return true;
    }

    return false;
  }

  async updateGateway() {

    if (await this.isInvalidGateway()) return;

    this.showSpinner = true;
    const ipv = await this.checkIpError(this.gatewayForm.value.ipv);
    if (ipv) {
      this.showSpinner = false;
      return;
    }

    const ipb1 = await this.checkIpError(this.gatewayForm.value.ipb1);
    if (ipb1) {
      this.showSpinner = false;
      return;
    }

    const ipb2 = await this.checkIpError(this.gatewayForm.value.ipb2);
    if (ipb2) {
      this.showSpinner = false;
      return;
    }

    const name = await this.checkGatewayNameError(this.gatewayForm.value.nombre);
    if (name) {
      this.showSpinner = false;
      return;
    }

    let gateway = Object.assign({}, this.gatewayForm.getRawValue());
    delete gateway.EMPLAZAMIENTO_idEMPLAZAMIENTO;
    gateway.snmpv2 = gateway.snmpv2 ? 1 : 0;
    gateway.pendiente_actualizar = gateway.pendiente_actualizar ? 1 : 0;

    const updatedGtw = await this.gatewayService.updateGtw(this.gateway.idCGW, gateway).toPromise();
    if (updatedGtw.error) {
      this.showSpinner = false;
      await this.alertService.errorMessage(`Error`, updatedGtw.error);
      return;
    }

    await this.historicService.updateGateway(this.gatewayForm.value.nombre).toPromise();
    this.gatewayForm.patchValue({
      pendiente_actualizar: true
    });
    this.initStatusGateway = { ...this.gatewayForm.value };
 
    this.showSpinner = false;
    await this.alertService.successMessage(``, `Pasarela ${updatedGtw.name} actualizada correctamente`);
  }

  copyGateway() {
    const dialogRef = this.dialog.open(GatewayCopyFormComponent, {
      data: this.gateway,
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(async (saved) => {
      if (saved) {
        this.router.navigate(['/home/config/' + this.configId]);
      }
    });
  }

  async deleteGateway() {

    const confirm = await this.alertService.confirmationMessage(``, `¿Desea eliminar la gateway ${this.gateway.name}?`);
    if (confirm.value) {
       
      this.showSpinner = true;
      await this.gatewayService.deleteGtw(this.gateway.idCGW).toPromise();
      await this.historicService.deleteGateway(this.gateway.name).toPromise();
      this.showSpinner = false;
      
      await this.alertService.successMessage(``, `Pasarela ${this.gateway.name} eliminada correctamente`);
      this.router.navigate(['/home/config/' + this.configId]);
    }
  }

  async exportGateway() {
    try {
      this.showSpinner = true;
      const result = await this.gatewayService.exportGtw(this.gateway.idCGW).toPromise();
      this.showSpinner = false;
      const fileName = `${result.general.emplazamiento}_${result.general.name}_${result.fechaHora}.json`;
      this.saveText(JSON.stringify(result, undefined, 2), fileName);
    } catch (error) {
      this.app.catchError(error);
    }
  }

  saveText(text: string, filename: string) {
    var a = document.createElement('a');
    a.setAttribute('href', 'data:text/json;charset=utf-u,' + encodeURIComponent(text));
    a.setAttribute('download', filename);
    a.click()
  }

  initForm() {
    return new FormGroup({
      nombre: new FormControl({ value: this.gatewayPost.nombre, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.NAME_PATTERN)]),
      ipv: new FormControl({ value: this.gatewayPost.ipv, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.IP_PATTERN)]),
      dual: new FormControl(true),
      EMPLAZAMIENTO_idEMPLAZAMIENTO: new FormControl({ value: this.gateway.EMPLAZAMIENTO_idEMPLAZAMIENTO, disabled: this.visualizationMode }),
      dvrrp: new FormControl({ value: this.gatewayPost.dvrrp, disabled: this.visualizationMode }),
      sppe: new FormControl({ value: this.gatewayPost.sppe, disabled: this.visualizationMode }),
      pendiente_actualizar: new FormControl({ value: this.gatewayPost.pendiente_actualizar === 1, disabled: true }),
      ultima_actualizacion: new FormControl({ value: this.gatewayPost.ultima_actualizacion, disabled: true }),
      ipb1: new FormControl({ value: this.gatewayPost.ipb1, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.IP_PATTERN)]),
      ipb2: new FormControl({ value: this.gatewayPost.ipb2, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.IP_PATTERN)]),
      ipg1: new FormControl({ value: this.gatewayPost.ipg1, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.IP_PATTERN)]),
      ipg2: new FormControl({ value: this.gatewayPost.ipg2, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.IP_PATTERN)]),
      msb1: new FormControl({ value: this.gatewayPost.msb1, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.IP_PATTERN)]),
      msb2: new FormControl({ value: this.gatewayPost.msb2, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.IP_PATTERN)]),
      PuertoLocalSIP: new FormControl({value: this.gatewayPost.PuertoLocalSIP, disabled: true}),
      periodo_supervision: new FormControl({ value: this.gatewayPost.periodo_supervision, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.ONLY_NUMBERS)]),
      proxys: new FormControl(this.gatewayPost.proxys),
      registrars: new FormControl(this.gatewayPost.registrars),
      listServers: new FormControl(this.gatewayPost.listServers),
      puerto_servicio_snmp: new FormControl({value: this.gatewayPost.puerto_servicio_snmp, disabled: true}),
      snmpv2: new FormControl({ value: this.gatewayPost.snmpv2 === 1, disabled: this.visualizationMode }),
      comunidad_snmp: new FormControl({ value: this.gatewayPost.comunidad_snmp, disabled: this.visualizationMode || this.gatewayPost.snmpv2 === 0}),
      puerto_snmp: new FormControl({ value: this.gatewayPost.puerto_snmp, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.PORT)]),
      nombre_snmp: new FormControl({ value: this.gateway.nombre_snmp, disabled: true }),
      localizacion_snmp: new FormControl({ value: this.gateway.localizacion_snmp, disabled: true }),
      contacto_snmp: new FormControl({ value: this.gateway.contacto_snmp, disabled: true }),
      traps: new FormControl(this.gatewayPost.traps),
      puerto_servicio_web: new FormControl({ value: this.gatewayPost.puerto_servicio_web, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.PORT)]),
      tiempo_sesion: new FormControl({ value: this.gatewayPost.tiempo_sesion, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.ONLY_NUMBERS)]),
      puerto_rtsp: new FormControl({ value: this.gatewayPost.puerto_rtsp, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.PORT)]),
      servidor_rtsp: new FormControl({ value: this.gatewayPost.servidor_rtsp, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.IP_PATTERN)]),
      servidor_rtspb: new FormControl({ value: this.gatewayPost.servidor_rtspb, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.IP_PATTERN)]),
    }, { validators: ipEqualsValidator });
  }

  validateGtwFieldJson(data: any) {
    return (data.hasOwnProperty('fechaHora') && data.hasOwnProperty('general') && data.hasOwnProperty('idConf') && data.hasOwnProperty('hardware')
      && data.hasOwnProperty('recursos') && data.hasOwnProperty('servicios') && data.hasOwnProperty('tipo') && data.hasOwnProperty('users')
      && data.tipo === 0);
  }

  calculateLoadIndex(hardwareResume: any, force_rdaudio_normal: boolean) {
    let radioResources = hardwareResume.radio;
    let telResources = hardwareResume.tfno;
    let loadIndex = 0;
    radioResources.forEach((resource: any) => {
      if (resource.tipo_agente == 2 || resource.tipo_agente == 3)
        loadIndex += 8;
      else if (resource.tipo_agente == 4 || resource.tipo_agente == 6)
        loadIndex += (force_rdaudio_normal == true ? 1 : 4);
      else
        loadIndex += (force_rdaudio_normal == true ? 1 : 2);
    });

    telResources.forEach((resource: any) => {
      if (resource.tipo_interfaz_tel == 5 || resource.tipo_interfaz_tel == 4 || resource.tipo_interfaz_tel == 3) {
        loadIndex += 2;
      }
      else {
        loadIndex++;
      }
    });

    if (loadIndex > 16) {
      this.selectedClass = "indexOverload"
      this.loadIndex = `${loadIndex} - Indice máximo sobrepasado.`
    } else {
      this.selectedClass = "indexLoad";
      this.loadIndex = loadIndex.toString();
    }
    
  }
}

export const ipEqualsValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const ipv = control.get('ipv');
  const ip_cpu0 = control.get('ipb1');
  const ip_cpu1 = control.get('ipb2');

  return ipv && ip_cpu0 && ip_cpu1 && (ipv.value === ip_cpu0.value || ipv.value === ip_cpu1.value || ip_cpu0.value === ip_cpu1.value) ?
    { ipEqualsValidator: true } : null;
}