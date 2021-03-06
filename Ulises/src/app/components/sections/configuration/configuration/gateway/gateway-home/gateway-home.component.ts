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
import { UtilsService } from 'src/app/_services/utils.service';
import { GatewayCopyFormComponent } from '../gateway-copy-form/gateway-copy-form.component';

import { Configuration } from "src/app/_models/configs/configuration/Configuration";
import { ConfigurationsResponse } from "src/app/_models/configs/configuration/response/ConfigurationsResponse";

import { ConfigurationIpResponse } from 'src/app/_models/configs/configuration/response/ConfigurationIpResponse';
import { ConfigurationIp } from 'src/app/_models/configs/configuration/ConfigurationIp';
import { ConfigurationById } from 'src/app/_models/configs/configuration/ConfigurationById';
import { ConfigurationByIdResponse } from 'src/app/_models/configs/configuration/response/ConfigurationByIdRespose';
import { SiteService } from 'src/app/_services/site.service';
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


  configurationsResponseA!: ConfigurationsResponse;
  configurationsA!: Configuration[];

  configurationByIdResponse!: ConfigurationByIdResponse;
  configurationById!: ConfigurationById[];

  configurationIp!: ConfigurationIp[];
  configurationIpResponse!: ConfigurationIpResponse;

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
  changes: boolean = false;

  msg !: string[];

  siteOptions!: any[];

  dirtyCaseOnlyValue: any[] = [
    { id: 0, value: 'nombre', msg: ' Nombre: ' },
    { id: 1, value: 'ipv', msg: ' Dir. IP Virtual: ' },
    { id: 2, value: 'EMPLAZAMIENTO_idEMPLAZAMIENTO', msg: ' Emplazamiento: ' },
    { id: 3, value: 'dvrrp', msg: ' Retardo activacion modo dual(ms.): ' },
    { id: 4, value: 'pendiente_actualizar', msg: ' Pendiente actualizar: ' },
    { id: 5, value: 'ultima_actualizacion', msg: ' ??ltima actualizaci??n: ' },
    { id: 6, value: 'ipb1', msg: ' Ip cpu0: ' },
    { id: 7, value: 'ipb2', msg: ' Ip cpu1: ' },
    { id: 8, value: 'ipg1', msg: ' Ip gateway0: ' },
    { id: 9, value: 'ipg2', msg: ' Ip gateway1: ' },
    { id: 10, value: 'msb1', msg: ' M??scara cpu0: ' },
    { id: 11, value: 'msb2', msg: ' M??scara cpu1: ' },
    { id: 12, value: 'PuertoLocalSIP ', msg: ' Puerto local SIP: ', servicetab: 'SIP' },
    { id: 13, value: 'periodo_supervision', msg: ' Periodo de supervisi??n: ', servicetab: 'SIP' },
    { id: 14, value: 'puerto_servicio_snmp', msg: ' Puerto Servicio SNMP: ', servicetab: 'SNMP' },
    { id: 15, value: 'comunidad_snmp', msg: ' Comunidad SNMP: ', servicetab: 'SNMP' },
    { id: 16, value: 'puerto_snmp', msg: ' Puerto SNMP: ', servicetab: 'SNMP' },
    { id: 17, value: 'nombre_snmp', msg: ' Nombre SNMP: ', servicetab: 'SNMP' },
    { id: 18, value: 'localizacion_snmp', msg: ' Ubicaci??n SNMP: ', servicetab: 'SNMP' },
    { id: 19, value: 'contacto_snmp', msg: ' Contacto SNMP: ', servicetab: 'SNMP' },
    { id: 20, value: 'puerto_servicio_web', msg: ' Puerto Servicio Web: ', servicetab: 'Web' },
    { id: 21, value: 'tiempo_sesion', msg: ' Tiempo Sesion: ', servicetab: 'Web' },
    { id: 22, value: 'puerto_rtsp', msg: ' Puerto RTSP: ', servicetab: 'REC' },
    { id: 23, value: 'servidor_rtsp', msg: ' IP Servidor RTSP (A): ', servicetab: 'REC' },
    { id: 24, value: 'servidor_rtspb', msg: ' IP Servidor RTSP (B): ', servicetab: 'REC' },
  ]

  dirtyCaseTernary: any[] = [
    { id: 26, value: 'dual', msg: ' CPU Dual: ', op1: 'No', op2: 'Si' },
    { id: 27, value: 'sppe', msg: ' Supervisi??n Puerta de Enlace: ', op1: 'No', op2: ' Segundos' },
    { id: 28, value: 'snmpv2', msg: ' SNMP V2: ', op1: 'No', op2: 'Si', servicetab: 'SNMP' }
  ]

  dirtyCaseArrays: any[] = [
    { id: 29, value: 'proxys', msg: ' Proxys: ', servicetab: 'SIP' },
    { id: 30, value: 'registrars', msg: ' SIP Servers: ', servicetab: 'SIP' },
    { id: 31, value: 'listServers', msg: ' List Servers: ', servicetab: 'Sync' },
    { id: 32, value: 'traps', msg: ' Traps : ', servicetab: 'SNMP' }
  ]

  constructor(private readonly utilService: UtilsService, private readonly route: ActivatedRoute, private readonly router: Router, private readonly app: AppComponent, public dialog: MatDialog,
    private readonly gatewayService: GatewayService, private readonly alertService: AlertService, private historicService: HistoricService,
    private readonly dataService: DataService, private readonly userService: UserService, private readonly loginService: LoginService,
    private readonly gatewayFieldService: GatewayFieldService, private readonly configService: ConfigService, private readonly siteService: SiteService) {
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
        this.LoadIndexControlEnabled = result.LoadIndexControlEnabled;
        if (this.LoadIndexControlEnabled) {
          this.calculateLoadIndex(hardwareResume);
        }

        this.type = 'EDIT';
        await this.initEdit(gatewayId);
        this.title = `${await this.getGatewayTitle()} - Pasarela: ${this.gateway.name}`;
        this.dataService.updateDataGatewayTitle(this.title);
      } else {
        this.type = 'CREATE';
        this.initCreate();
      }

      this.gatewayPost = new GatewayPost(this.gateway, this.gatewayIps);
      this.gatewayForm = this.initForm();
      this.checkFormChanges();
      this.initStatusGateway = { ...this.gatewayForm.value };
      await this.getSites();
      this.ready = true;
    } catch (error: any) {
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
    const title = `Configuraci??n: ${config.result[0].NAME} - Emplazamiento: ${this.gateway.emplazamiento}`;
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

  checkFormChanges() {
    this.gatewayForm.valueChanges
      .subscribe(value => {
        if (this.gatewayForm.dirty) {
          this.changes = true;
        } else {
          this.changes = false;
        }
      });
  }

  async activateInField() {
    let confName = (await this.configService.getConfigurationById(this.configId).toPromise()).result[0]?.NAME;
    let siteName = this.siteOptions.filter((site: any) => { return site.idEMPLAZAMIENTO === this.siteId })[0]?.name;

    if (this.changes || this.gatewayForm.dirty || JSON.stringify(this.gatewayForm.value) !== JSON.stringify(this.initStatusGateway)) {
      await this.alertService.errorMessage(``, `No ha guardado los cambios de la pasarela`);
      return;
    }

    const confirm = await this.alertService.confirmationMessage(``, `??Seguro que quieres activar esta pasarela en campo?`);
    if (confirm.value) {
      this.showSpinner = true;

      let title = this.dataService.getDataGatewayTitle();

      // Check CPU 0
      const gtwFieldCpu0 = await this.gatewayFieldService.getGatewayField(this.gateway.idCGW, this.gatewayForm.value.ipb1).toPromise();

      if (this.validateGtwFieldJson(gtwFieldCpu0)) {
        const gtwActual = await this.gatewayService.getGatewayAll(this.gateway.idCGW).toPromise();
        const result = await this.gatewayFieldService.updateGatewayField(this.gateway.idCGW, this.gatewayForm.value.ipb1, gtwActual).toPromise();

        if (result.res && result.res === 'Configuracion Activada...') {
          await this.initEdit(this.gateway.idCGW);
          this.gatewayPost = new GatewayPost(this.gateway, this.gatewayIps);
          this.gatewayForm = this.initForm();
          this.checkFormChanges();
          await this.historicService.updateCfg(121, `Configuraci??n: ${confName} - Emplazamiento: ${siteName} - Pasarela: ${this.gateway.name} CPU 0`).toPromise();
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
          this.checkFormChanges();
          await this.historicService.updateCfg(121, `Configuraci??n: ${confName} - Emplazamiento: ${siteName} - Pasarela: ${this.gateway.name} CPU 1`).toPromise();
          await this.alertService.successMessage(``, result.res);
          this.showSpinner = false;
          return;
        }
      }

      if (gtwFieldCpu0.code === 'ECONNREFUSED' || gtwFieldCpu1.code === 'ECONNREFUSED') {
        await this.historicService.updateCfg(122, `Configuraci??n: ${confName} - Emplazamiento: ${siteName} - Pasarela: ${this.gateway.name} Error conexi??n a la pasarela`).toPromise();
        await this.alertService.errorMessage(``, `Error de conexi??n a la pasarela`);
        this.showSpinner = false;
        return;
      }

      if (gtwFieldCpu0.code === 'ETIMEDOUT' && gtwFieldCpu1.code === 'ETIMEDOUT') {
        await this.historicService.updateCfg(122, `Configuraci??n: ${confName} - Emplazamiento: ${siteName} - Pasarela: ${this.gateway.name} Error timeout`).toPromise();
        await this.alertService.errorMessage(``, `Error de timeout en la conexi??n a la pasarela`);
        this.showSpinner = false;
        return;
      }

      if (gtwFieldCpu0.code === 'EHOSTUNREACH' || gtwFieldCpu1.code === 'EHOSTUNREACH') {
        await this.historicService.updateCfg(122, `Configuraci??n: ${confName} - Emplazamiento: ${siteName} - Pasarela: ${this.gateway.name} Error de conexi??n al host`).toPromise();
        await this.alertService.errorMessage(``, `Error no es posible conectar con la pasarela`);
        this.showSpinner = false;
        return;
      }

      if (!this.validateGtwFieldJson(gtwFieldCpu0) && !this.validateGtwFieldJson(gtwFieldCpu1)) {
        await this.historicService.updateCfg(122, `Configuraci??n: ${confName} - Emplazamiento: ${siteName} - Pasarela: ${this.gateway.name} Error de formato`).toPromise();
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
    } catch (error: any) {
      this.app.catchError(error);
    }
  }

  async back() {
    let confirm;
    if (this.type === 'EDIT' && (this.changes || this.gatewayForm.dirty)) {
      confirm = await this.alertService.confirmationMessage("", `Existen cambios en la pasarela sin guardar. ??Desea continuar?`);
    }
    if (confirm?.isConfirmed == true || confirm === undefined) {
      await this.router.navigate(['/home/config/' + this.configId]);
    }

  }

  async validateGateway() {
    const ipv = await this.checkIpError(this.gatewayForm.value.ipv);
    if (ipv) {
      this.showSpinner = false;
      return false;
    }

    const ipb1 = await this.checkIpError(this.gatewayForm.value.ipb1);
    if (ipb1) {
      this.showSpinner = false;
      return false;
    }

    const ipb2 = await this.checkIpError(this.gatewayForm.value.ipb2);
    if (ipb2) {
      this.showSpinner = false;
      return false;
    }

    const name = await this.checkGatewayNameError(this.gatewayForm.value.nombre);
    if (name) {
      this.showSpinner = false;
      return false;
    }

    if (await this.checkRTSPIPs()) {
      this.showSpinner = false;
      return false;
    }

    return true;
  }

  async createGateway() {

    try {
      this.showSpinner = false;
      let result = await this.validateGateway();
      this.configurationByIdResponse = await this.configService.getConfigurationById(this.configId).toPromise();
      this.configurationById = [...this.configurationByIdResponse.result];
      let activa = this.configurationById.map((index) => {
        return index.activa;
      });
      let gateway = Object.assign({}, this.gatewayForm.getRawValue());

      if (result) {
        if (activa[0] === 1) {
          this.configurationIpResponse = await this.configService.checkConfigIp(gateway.ipv, 0).toPromise();
          this.configurationIp = [...this.configurationIpResponse.result];
          if (this.configurationIp.length != 0) {
            this.msg = this.configurationIp.map((index) => {
              return `la configuraci??n ${index.nombre_conf} de la pasarela ${index.nombre}`;
            })
            await this.alertService.errorMessage(``, `La IP virtual ${gateway.ipv} esta duplicada en ${this.msg}`);
            return;
          }
          this.configurationIpResponse = await this.configService.checkConfigIp(gateway.ipb1, 0).toPromise();
          this.configurationIp = [...this.configurationIpResponse.result];
          if (this.configurationIp.length != 0) {
            this.msg = this.configurationIp.map((index) => {
              return `la configuraci??n ${index.nombre_conf} de la pasarela ${index.nombre}`;
            })
            await this.alertService.errorMessage(``, `La IP cpu0 ${gateway.ipb1} esta duplicada en ${this.msg}`);
            return;
          }
          this.configurationIpResponse = await this.configService.checkConfigIp(gateway.ipb2, 0).toPromise();
          this.configurationIp = [...this.configurationIpResponse.result];
          if (this.configurationIp.length != 0) {
            this.msg = this.configurationIp.map((index) => {
              return `la configuraci??n ${index.nombre_conf} de la pasarela ${index.nombre}`;
            })
            await this.alertService.errorMessage(``, `La IP cpu1 ${gateway.ipb2} esta duplicada en ${this.msg}`);
            return;
          }
        }
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
        let title = this.dataService.getDataGatewayTitle();
        title = title.substring(0, title.indexOf(" - Pasarela") >= 0 ? title.indexOf(" - Pasarela") : title.length);
        await this.historicService.updateCfg(107, this.gatewayForm.value.nombre, title).toPromise();
        this.showSpinner = false;
        await this.alertService.successMessage(``, `Pasarela ${newGtw.name} creada correctamente`);
        this.dataService.updateDataConfigId(this.configId);
        this.dataService.updateDataGatewayPreviousUrl('NEW');
        this.router.navigate(['/home/gateway/' + newGtw.insertId]);

      }
    } catch (error: any) {
      this.app.catchError(error);
    }
  }

  async checkGatewayNameError(name: string): Promise<boolean> {
    const result = await this.gatewayService.checkName(name, this.configId, this.gateway.idCGW).toPromise();
    if (result !== 'NO_ERROR') {
      const message = (result === 'NAME_DUP') ? `El identificador de pasarela ${name} ya se encuentra dada de alta en esta configuraci??n` : result;
      await this.alertService.errorMessage(`Error`, message);
      return true;
    }
    return false;
  }

  async checkIpError(ip: string): Promise<boolean> {
    const result = await this.gatewayService.checkIpAddress(ip, this.configId, this.gateway.idCGW).toPromise();
    if (result !== 'NO_ERROR') {
      const message = (result === 'IP_DUP') ? `La direcci??n ${ip} ya se encuentra dada de alta en esta configuraci??n` : result;
      await this.alertService.errorMessage(`Error`, message);
      return true;
    }
    return false;
  }

  async checkRTSPIPs() {
    if (this.gatewayForm.value.servidor_rtsp === this.gatewayForm.value.servidor_rtspb &&
      this.gatewayForm.value.servidor_rtsp !== '' &&
      this.gatewayForm.value.servidor_rtspb !== '') {
      const message = `La direcci??n IP RTSP (A) no puede ser igual que la RTSP (B)`;
      await this.alertService.errorMessage(`Error`, message);
      return true;
    } else if (this.gatewayForm.value.servidor_rtsp === '' && this.gatewayForm.value.servidor_rtspb !== '') {
      const message = `El campo de direcci??n IP RTSP (A) no puede estar vac??o`;
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
        message = `El identificador de la pasarela no cumple con el patr??n permitido`;
      }

      if (this.gatewayForm.hasError('ipEqualsValidator')) {
        message = `La direcci??n IP Virtual y las IPs de las CPUs deben ser diferentes`;
      }

      if (this.gatewayForm.controls['ipv'].hasError('pattern')) {
        message = `La IP Virtual no es una IP v??lida`;
      }

      if (this.gatewayForm.controls['ipv'].hasError('required')) {
        message = `La IP Virtual es obligatoria`;
      }

      if (this.gatewayForm.controls['ipb1'].hasError('pattern')) {
        message = `La IP de la CPU 0 no es una IP v??lida`;
      }

      if (this.gatewayForm.controls['ipb1'].hasError('required')) {
        message = `La IP de la CPU 0 es obligatoria`;
      }

      if (this.gatewayForm.controls['ipb2'].hasError('pattern')) {
        message = `La IP de la CPU 1 no es una IP v??lida`;
      }

      if (this.gatewayForm.controls['ipb2'].hasError('required')) {
        message = `La IP de la CPU 1 es obligatoria`;
      }

      if (this.gatewayForm.controls['ipg1'].hasError('pattern')) {
        message = `La IP gateway de la CPU 0 no es una IP v??lida`;
      }

      if (this.gatewayForm.controls['ipg1'].hasError('required')) {
        message = `La IP gateway de la CPU 0 es obligatoria`;
      }

      if (this.gatewayForm.controls['ipg2'].hasError('pattern')) {
        message = `La IP gateway de la CPU 1 no es una IP v??lida`;
      }

      if (this.gatewayForm.controls['ipg2'].hasError('required')) {
        message = `La IP gateway de la CPU 1 es obligatoria`;
      }

      if (this.gatewayForm.controls['msb1'].hasError('pattern')) {
        message = `La m??scara de la CPU 0 no es una IP v??lida`;
      }

      if (this.gatewayForm.controls['msb1'].hasError('required')) {
        message = `La m??scara de la CPU 0 es obligatoria`;
      }

      if (this.gatewayForm.controls['msb2'].hasError('pattern')) {
        message = `La m??scara CPU 1 no es una IP v??lida`;
      }

      if (this.gatewayForm.controls['msb2'].hasError('required')) {
        message = `La m??scara de la CPU 1 es obligatoria`;
      }

      if (this.gatewayForm.controls['servidor_rtsp'].hasError('pattern')) {
        message = `La IP del servidor RSTP (A) no es una IP v??lida`;
      }

      if (this.gatewayForm.controls['servidor_rtspb'].hasError('pattern')) {
        message = `La IP del servidor RSTP (B) no es una IP v??lida`;
      }

      if (this.gatewayForm.controls['periodo_supervision'].hasError('pattern')) {
        message = `El valor periodo de supervisi??n es inv??lido`;
      }

      if (this.gatewayForm.controls['tiempo_sesion'].hasError('pattern')) {
        message = `El valor tiempo de sesi??n es inv??lido`;
      }

      if (this.gatewayForm.controls['puerto_rtsp'].hasError('pattern')) {
        message = `Puerto RTSP inv??lido`;
      }

      if (this.gatewayForm.controls['puerto_servicio_web'].hasError('pattern')) {
        message = `Puerto de servicio web inv??lido`;
      }

      if (this.gatewayForm.controls['puerto_snmp'].hasError('pattern')) {
        message = `Puerto SNMP inv??lido`;
      }

      await this.alertService.errorMessage(`Formulario inv??lido`, message);
      return true;
    }

    return false;
  }

  async getSites() {
    try {
      this.siteOptions = [];

      if (this.configId) {
        const result = await this.siteService.getSites(this.configId).toPromise();
        if (result.error) {
          await this.alertService.errorMessage(``, result.error);
        }

        this.siteOptions = (result.data != 'NO_DATA') ? [...result.data] : [];
      }
    } catch (error: any) {
      this.app.catchError(error);
    }
  }

  async siteChanges() {

    const result = await this.siteService.changeSite(this.gateway.idCGW, this.gateway.EMPLAZAMIENTO_idEMPLAZAMIENTO,
      this.gatewayForm.value.EMPLAZAMIENTO_idEMPLAZAMIENTO).toPromise();

    return result;
  }

  async updateGateway() {

    if (await this.isInvalidGateway()) return;

    this.showSpinner = true;

    let result = await this.validateGateway();
    if (result) {
      let gateway = Object.assign({}, this.gatewayForm.getRawValue());
      delete gateway.EMPLAZAMIENTO_idEMPLAZAMIENTO;
      gateway.snmpv2 = gateway.snmpv2 ? 1 : 0;
      gateway.pendiente_actualizar = 1;

      const updatedGtw = await this.gatewayService.updateGtw(this.gateway.idCGW, gateway).toPromise();
      if (updatedGtw.error) {
        this.showSpinner = false;
        await this.alertService.errorMessage(`Error`, updatedGtw.error);
        return;
      }

      let title = this.dataService.getDataGatewayTitle();
      this.validateFormDirty(title);
      if (this.gatewayPost.nombre != this.gatewayForm.value.nombre)
        this.gatewayPost.nombre = this.gatewayForm.value.nombre;
      this.gatewayForm.patchValue({
        pendiente_actualizar: true
      });
      this.initStatusGateway = { ...this.gatewayForm.value };
      await this.siteChanges();
      this.showSpinner = false;
      await this.alertService.successMessage(``, `Pasarela ${updatedGtw.name} actualizada correctamente`);
      this.gatewayForm.markAsPristine();
      this.changes = false;
    }
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

    const confirm = await this.alertService.confirmationMessage(``, `??Desea eliminar la gateway ${this.gateway.name}?`);
    if (confirm.value) {

      this.showSpinner = true;
      await this.gatewayService.deleteGtw(this.gateway.idCGW).toPromise();

      let title = this.dataService.getDataGatewayTitle();
      title = title.substring(0, title.indexOf(" - Pasarela") >= 0 ? title.indexOf(" - Pasarela") : title.length); await this.historicService.updateCfg(108, this.gateway.name, title).toPromise();
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
    } catch (error: any) {
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
      msb1: new FormControl({ value: this.gatewayPost.msb1, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.SUBNET_MASK)]),
      msb2: new FormControl({ value: this.gatewayPost.msb2, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.SUBNET_MASK)]),
      PuertoLocalSIP: new FormControl({ value: this.gatewayPost.PuertoLocalSIP, disabled: true }),
//      periodo_supervision: new FormControl({ value: this.gatewayPost.periodo_supervision, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.ONLY_NUMBERS)]),
      periodo_supervision: new FormControl({ 
        value: this.gatewayPost.periodo_supervision, 
        disabled: this.visualizationMode }, 
        [Validators.pattern(AppSettings.ONLY_NUMBERS), Validators.min(90), Validators.max(1800)]),
      proxys: new FormControl(this.gatewayPost.proxys),
      registrars: new FormControl(this.gatewayPost.registrars),
      listServers: new FormControl(this.gatewayPost.listServers),
      puerto_servicio_snmp: new FormControl({ value: this.gatewayPost.puerto_servicio_snmp, disabled: true }),
      snmpv2: new FormControl({ value: this.gatewayPost.snmpv2 === 1, disabled: this.visualizationMode }),
      comunidad_snmp: new FormControl({ value: this.gatewayPost.comunidad_snmp, disabled: this.visualizationMode || this.gatewayPost.snmpv2 === 0 }),
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

  calculateLoadIndex(hardwareResume: any) {
    let radioResources = hardwareResume.radio;
    let telResources = hardwareResume.tfno;
    let loadIndex = 0;
    radioResources.forEach((resource: any) => {
      if (resource.precision_audio == 0) {
        if (resource.tipo_agente == 0 || resource.tipo_agente == 1 || resource.tipo_agente == 5) {
          loadIndex += 1;
        } else if ((resource.tipo_agente == 4 || resource.tipo_agente == 6) && resource.metodo_bss == 2) {
          loadIndex += 1;
        } else if ((resource.tipo_agente == 4 || resource.tipo_agente == 6) && (resource.metodo_bss == 0 || resource.metodo_bss == 1)) {
          loadIndex += 4;
        }

      } else if (resource.precision_audio == 1) {
        if (resource.tipo_agente == 0 || resource.tipo_agente == 1 || resource.tipo_agente == 5) {
          loadIndex += 2;
        } else if ((resource.tipo_agente == 4 || resource.tipo_agente == 6) && resource.metodo_bss == 2) {
          loadIndex += 2;
        } else if ((resource.tipo_agente == 4 || resource.tipo_agente == 6) && (resource.metodo_bss == 0 || resource.metodo_bss == 1)) {
          loadIndex += 4;
        } else if (resource.tipo_agente == 2 || resource.tipo_agente == 3) {
          loadIndex += 8;
        }
      }

    });

    telResources.forEach((resource: any) => {

      if (resource.tipo_interfaz_tel == 3 || resource.tipo_interfaz_tel == 4 || resource.tipo_interfaz_tel == 5) {
        loadIndex += 2;
      } else if (resource.tipo_interfaz_tel == 0 || resource.tipo_interfaz_tel == 1 || resource.tipo_interfaz_tel == 2) {
        loadIndex += 1;
      }

    });

    if (loadIndex > 16) {
      this.selectedClass = "indexOverload"
      this.loadIndex = `${loadIndex} - Indice m??ximo sobrepasado.`
    } else {
      this.selectedClass = "indexLoad";
      this.loadIndex = loadIndex.toString();
    }
  }

  showDataDirtyCaseOnlyValue(value: string, msg: string) {
    let result = ``;
    if (value === 'EMPLAZAMIENTO_idEMPLAZAMIENTO') {
      let infoFiltered = this.siteOptions.filter((res: any) => { return res.idEMPLAZAMIENTO === this.gatewayForm.get(value)?.value });

      if (this.gatewayForm.get(value)?.dirty) {
        result = ` ${msg} ${infoFiltered[0]?.name}`;
      }
    } else {
      if (this.gatewayForm.get(value)?.dirty) {
        result = ` ${msg} ${this.gatewayForm.get(value)?.value}`;
      }
    }

    return result;
  }

  showDataDirtyCaseTernary(value: string, msg: string, op1: string, op2: string) {
    if (this.gatewayForm.get(value)?.dirty) {
      if (value === 'sppe') {
        return `${msg} ${this.gatewayForm.get(value)?.value === 0 ? op1 : this.gatewayForm.get(value)?.value + op2} `;
      } else {
        return `${msg} ${this.gatewayForm.get(value)?.value === 0 ? op1 : op2} `;
      }
    } else {
      return ``;
    }
  }

  showDataDirtyCaseArrays(value: string, msg: string) {
    let historic = msg;
    if (this.gatewayForm.get(value)?.dirty) {
      if (value === 'traps') {
        this.gatewayForm.get(value)?.value.forEach((element: any) => {
          if (this.gatewayForm.get(value)?.value[this.gatewayForm.get(value)?.value.length - 1] === element) {
            historic += element;
          } else {
            historic += `${element} - `
          }
        })
      } else {
        this.gatewayForm.get(value)?.value.forEach((element: any) => {
          if (this.gatewayForm.get(value)?.value[this.gatewayForm.get(value)?.value.length - 1] === element) {
            historic += element.ip;
          } else {
            historic += `${element.ip} - `
          }
        });
      }
      return historic;
    } else {
      return ``;
    }
  }

  isEmpty(title: string) {
    if (title == ``)
      return true;
    return false;
  }

  typeService(element: any) {
    let serviceType = ``;
    if ((typeof (element.servicetab) != 'undefined')) {
      if (element.servicetab === 'SIP') {
        serviceType += ` (SIP) `
      }
      if (element.servicetab === 'Sync') {
        serviceType += ' (Sincronizaci??n) '
      }
      if (element.servicetab === 'SNMP') {
        serviceType += ` (SNMP) `
      }
      if (element.servicetab === 'Web') {
        serviceType += ` (Web) `
      }
      if (element.servicetab === 'REC') {
        serviceType += ` (Grabaci??n) `
      }
    }
    return serviceType;
  }

  validateFormDirty(title: string) {
    let emptyString = true;
    let changeHistorics = ``;
    this.dirtyCaseOnlyValue.forEach((element: any) => {
      changeHistorics = ` Parametro(s): `;
      emptyString = this.isEmpty(this.showDataDirtyCaseOnlyValue(element.value, element.msg));
      if (!emptyString) {
        changeHistorics = `${title} ${changeHistorics} ${this.typeService(element)} ${this.showDataDirtyCaseOnlyValue(element.value, element.msg)}`;
        this.historicService.updateCfg(109, this.gatewayPost.nombre, changeHistorics).toPromise();
      }
    });
    this.dirtyCaseTernary.forEach((element: any) => {
      changeHistorics = ` Parametro(s): `;
      emptyString = this.isEmpty(this.showDataDirtyCaseTernary(element.value, element.msg, element.op1, element.op2));
      if (!emptyString) {
        changeHistorics = `${title} ${changeHistorics} ${this.typeService(element)} ${this.showDataDirtyCaseTernary(element.value, element.msg, element.op1, element.op2)}`;
        this.historicService.updateCfg(109, this.gatewayPost.nombre, changeHistorics).toPromise();
      }
    });
    this.dirtyCaseArrays.forEach((element: any) => {
      changeHistorics = ` Parametro(s): `;
      emptyString = this.isEmpty(this.showDataDirtyCaseArrays(element.value, element.msg));
      if (!emptyString) {
        changeHistorics = `${title} ${changeHistorics} ${this.typeService(element)} ${this.showDataDirtyCaseArrays(element.value, element.msg)}`;
        this.historicService.updateCfg(109, this.gatewayPost.nombre, changeHistorics).toPromise();
      }
    });
  }
}

export const ipEqualsValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const ipv = control.get('ipv');
  const ip_cpu0 = control.get('ipb1');
  const ip_cpu1 = control.get('ipb2');

  return ipv && ip_cpu0 && ip_cpu1 && (ipv.value === ip_cpu0.value || ipv.value === ip_cpu1.value || ip_cpu0.value === ip_cpu1.value) ?
    { ipEqualsValidator: true } : null;
}