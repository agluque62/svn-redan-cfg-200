import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

import { Configuration } from 'src/app/_models/configs/configuration/Configuration';
import { ConfigurationByIdResponse } from 'src/app/_models/configs/configuration/response/ConfigurationByIdRespose';
import { ConfigurationGateway } from 'src/app/_models/configs/configuration/ConfigurationGateway';
import { ConfigurationGatewaysResponse } from 'src/app/_models/configs/configuration/response/ConfigurationGatewaysResponse';
import { Site } from 'src/app/_models/configs/site/Site';
import { AlertService } from 'src/app/_services/alert.service';


import { ConfigService } from 'src/app/_services/config.service';
import { SiteService } from 'src/app/_services/site.service';
import { SiteFormComponent } from '../site-form/site-form.component';
import { ConfigurationCopyFormComponent } from '../configuration-copy-form/configuration-copy-form.component';
import { AppSettings } from 'src/app/core/app.settings';
import { DataService } from 'src/app/_services/data.service';
import { LoginService } from 'src/app/_services/login.service';
import { UserService } from 'src/app/_services/user.service';
import { GatewayService } from 'src/app/_services/gateway.service';
import { GatewayFieldService } from 'src/app/_services/gateway-field.service';
import { HistoricService } from 'src/app/_services/historic.service';

import { GatewayResponse } from 'src/app/_models/configs/gateway/GatewayResponse';
import { ConfigurationIpResponse } from 'src/app/_models/configs/configuration/response/ConfigurationIpResponse';
import { ConfigurationIp } from 'src/app/_models/configs/configuration/ConfigurationIp';

@Component({
  selector: 'configuration-view',
  templateUrl: './configuration-view.component.html',
  styleUrls: ['./configuration-view.component.scss']
})
export class ConfigurationViewComponent implements OnInit {

  configuration!: Configuration;
  configurationSites: Site[] = [];
  configurationGateways: ConfigurationGateway[] = [];
  configurationGatewaysResponse!: ConfigurationGatewaysResponse;
  configurationByIdResponse!: ConfigurationByIdResponse;
  ready: boolean = false;
  configForm!: FormGroup;
  gatewayResponse!: GatewayResponse;
  configurations!: Configuration[];
  configurationIp!: ConfigurationIp[];
  configurationIpResponse!: ConfigurationIpResponse;

  clickButton: boolean = false;

  fileBlobUrl!: string | null | ArrayBuffer;

  visualizationMode: boolean = false;
  supervisionMode: boolean = false;
  supervisionCheckboxMode: boolean = false;
  supervised: boolean = false;

  showSpinner: boolean = false;
  appset: any;
  changes: boolean = false;
  supervisedcb: boolean = false;

  arrayipv: any[] = [];
  arrayipcp0: any[] = [];
  arrayipcp1: any[] = [];

  arrayIdGTW!: number[];
  configActived: boolean = false;

  nEmplazamiento!: string[];
  
  constructor(private readonly route: ActivatedRoute, private readonly configService: ConfigService, private readonly router: Router,
    private readonly app: AppComponent, private readonly siteService: SiteService, public dialog: MatDialog,
    private readonly alertService: AlertService, private readonly dataService: DataService, private readonly loginService: LoginService,
    private readonly userService: UserService, private readonly gatewayFieldService: GatewayFieldService, private readonly gatewayService: GatewayService,
    private readonly historicService: HistoricService) { }

  async ngOnInit() {
    this.appset = AppSettings;
    this.checkPermissions();
    this.init();
  }

  async checkPermissions() {
    if (this.notPermission()) {
      await this.loginService.logout().toPromise();
      this.app.destroyAlive();
      this.router.navigate(['/access']);
    }

    this.visualizationMode = (this.visualizationPermission()) ? true : false;
    this.supervisionCheckboxMode = (this.supervisedConfigPermissionButton()) ? true : false;
    this.supervisionMode = (this.supervisedConfigPermission()) ? true : false;
  }

  notPermission() {
    return !this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && !this.userService.isRole('VISUALIZATION')
      && !this.userService.isRole('SUPERVISED_CONFIGURATION');;
  }

  visualizationPermission() {
    return (!this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && this.userService.isRole('VISUALIZATION'))
      || (!this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && this.userService.isRole('SUPERVISED_CONFIGURATION'));
  }

  supervisedConfigPermissionButton() {
    return this.userService.isRole('ADMIN') ||
      (!this.userService.isRole('ADMIN') && this.userService.isRole('SUPERVISED_CONFIGURATION'));
  }

  supervisedConfigPermission() {
    return (!this.userService.isRole('ADMIN') && this.userService.isRole('SUPERVISED_CONFIGURATION'));
  }

  async init() {
    try {
      this.configurationSites = [];
      this.configurationGateways = [];

      let configurationId = this.dataService.getDataConfigId();
      if (!configurationId) {
        configurationId = Number(this.route.snapshot.paramMap.get('id'));
      }

      if (configurationId) {
        this.configurationByIdResponse = await this.configService.getConfigurationById(configurationId).toPromise();
        this.configurationGatewaysResponse = await this.configService.getConfigGateways(configurationId).toPromise();

        if (this.configurationByIdResponse && this.configurationByIdResponse.result && this.configurationByIdResponse.result.length > 0) {
          this.initConfig();
          this.initSites();
          this.initForm();
          this.getGatewayTitle(); //name(s) in local storage
        }

        if (this.configurationGatewaysResponse && this.configurationGatewaysResponse.general && this.configurationGatewaysResponse.general.length > 0) {
          this.initGateways();
          this.arrayIdGTW = this.configurationGateways.map((id) => {
            return id.idCGW;
          });
          this.getIpArrays();
        }

        this.ready = true;
      }

    } catch (error: any) {
      this.app.catchError(error);
    }
  }

  async getIpArrays() {
    var i = 0;
    while (i != this.arrayIdGTW.length) {
      this.gatewayResponse = await this.gatewayService.getGatewayById(this.arrayIdGTW[i]).toPromise();
      this.arrayipv.push(
        this.gatewayResponse.result.map((ipv) => {
          return ipv.ipv;
        })
      )
      this.gatewayResponse = await this.gatewayService.getGatewayById(this.arrayIdGTW[i]).toPromise();
      this.arrayipcp0.push(
        this.gatewayResponse.result.map((ipv) => {
          return ipv.ip_cpu0;
        })
      )
      this.gatewayResponse = await this.gatewayService.getGatewayById(this.arrayIdGTW[i]).toPromise();
      this.arrayipcp1.push(
        this.gatewayResponse.result.map((ipv) => {
          return ipv.ip_cpu1;
        })
      )
      i++;
      }
 }
  
 initGateways() {
    this.configurationGateways = [...this.configurationGatewaysResponse.general];
  }

  initConfig() {
    const config = this.configurationByIdResponse.result[0];
    this.configuration = new Configuration({
      activa: config.activa,
      description: config.description,
      idCFG: config.idCFG,
      name: config.NAME,
      region: null,
      fecha_activacion: config.fecha_activacion
    });
    this.supervised = config.activa === 1;
    this.configActived = config.activa === 1;
  }

  initSites() {

    this.configurationByIdResponse.result.forEach(conf => {
      this.configurationSites.push(new Site({
        idEMPLAZAMIENTO: conf.idEMPLAZAMIENTO,
        nameSite: conf.nameSite
      }));
    });
  }

  initForm() {
    this.configForm = new FormGroup({
      idCFG: new FormControl({ value: this.configuration.idCFG, disabled: this.visualizationMode }),
      description: new FormControl({ value: this.configuration.description, disabled: this.visualizationMode }),
      name: new FormControl({ value: this.configuration.name, disabled: this.visualizationMode }, [Validators.required, Validators.pattern(AppSettings.NAME_PATTERN)]),
      activa: new FormControl({ value: this.configuration.activa === 1, disabled: !this.supervisionCheckboxMode }),
      fecha_activacion: new FormControl({ value: this.configuration.fecha_activacion, disabled: true })
    });
    this.configForm.valueChanges
      .subscribe(value => {
        if (this.configForm.dirty) {
          this.changes = true;
        } else {
          this.changes = false;
        }
      });
  }

  goToGateway(gateway: ConfigurationGateway) {

    const site = this.configurationSites.find(site => site.nameSite === gateway.nameSite);
    if (site) {
      this.dataService.updateDataSiteId(site.idEMPLAZAMIENTO);
    }

    this.dataService.updateDataConfigId(this.configuration.idCFG);
    this.dataService.updateDataGatewayPreviousUrl('CONFIG');
    this.router.navigate(['/home/gateway/' + gateway.idCGW]);
  }

  getValidSites() {
    return this.configurationSites.filter(site => { return site.idEMPLAZAMIENTO !== null });
  }

  async openedSite(site: Site) {
    try {
      const siteResponse = await this.siteService.getSiteGateways(site.idEMPLAZAMIENTO).toPromise();
      site.gateways = [...siteResponse.data];
    } catch (error: any) {
      this.app.catchError(error);
    }
  }

  async back() {
    let confirm;
    if (this.changes) {
      confirm = await this.alertService.confirmationMessage("", `Existen cambios en la configuración sin guardar. ¿Desea continuar?`);
    }
    if (confirm?.isConfirmed == true || confirm === undefined) {
      await this.router.navigate(['/home/config/']);
    }

  }

  createSite() {

    const dialogRef = this.dialog.open(SiteFormComponent, {
      data: new Site(),
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(async (saved) => {
      if (saved) {
        this.init();
      }
    });
  }

  async isSupervisedcb() {

    this.configuration.activa = this.configuration.activa === 1 ? 0 : 1;
  }
  modifySite(site: Site) {

    let config = this.configurationByIdResponse;
    const title = `Configuración: ${config.result[0].NAME} - Emplazamiento: ${site.nameSite}`;
    this.dataService.updateDataGatewayTitle(title);

    this.clickButton = true;
    const dialogRef = this.dialog.open(SiteFormComponent, {
      data: site,
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(async (saved) => {
      if (saved) {
        this.init();
      }
    });
  }

  async applyChanges() {

    let message: string[] = [];
    let error: boolean = false;

    const confirm = await this.alertService.confirmationMessage(``, `¿Seguro que quieres activar las pasarelas de esta configuración en campo?`);
    if (confirm.value) {
      this.showSpinner = true;

      await Promise.all(this.configurationGateways.map(async gtw => {

        const gateway = await this.gatewayService.getGatewayById(gtw.idCGW).toPromise();
        let success: boolean = false;

        if (gateway && gateway.result && gateway.result.length > 0) {

          // Check CPU 0
          const gtwFieldCpu0 = await this.gatewayFieldService.getGatewayField(gateway.result[0].idCGW, gateway.result[0].ip_cpu0).toPromise();
          let gtwFieldCpu1 = null;
          let checkCpu1: boolean = true;

          if (this.validateGtwFieldJson(gtwFieldCpu0)) {
            const gtwActual = await this.gatewayService.getGatewayAll(gateway.result[0].idCGW).toPromise();
            const result = await this.gatewayFieldService.updateGatewayField(gateway.result[0].idCGW, gateway.result[0].ip_cpu0, gtwActual).toPromise();

            if (result.res && result.res === 'Configuracion Activada...') {
              await this.historicService.updateCfg(121, `${gateway.result[0].name} CPU 0`).toPromise();
              message.push(`${gateway.result[0].name}: ${result.res}`);
              checkCpu1 = false;
              success = true;
            }
          }

          if (checkCpu1) {
            // Check CPU 1
            gtwFieldCpu1 = await this.gatewayFieldService.getGatewayField(gateway.result[0].idCGW, gateway.result[0].ip_cpu1).toPromise();
            if (this.validateGtwFieldJson(gtwFieldCpu1)) {
              const gtwActual = await this.gatewayService.getGatewayAll(gateway.result[0].idCGW).toPromise();
              const result = await this.gatewayFieldService.updateGatewayField(gateway.result[0].idCGW, gateway.result[0].ip_cpu1, gtwActual).toPromise();
              if (result.res && result.res === 'Configuracion Activada...') {
                await this.historicService.updateCfg(121, `${gateway.result[0].name} CPU 1`).toPromise();
                message.push(`${gateway.result[0].name}: ${result.res}`);
                success = true;
              }
            }
          }

          if (!success && gtwFieldCpu0.code === 'ECONNREFUSED' || (gtwFieldCpu1 && gtwFieldCpu1.code === 'ECONNREFUSED')) {
            await this.historicService.updateCfg(122, `${gateway.result[0].name}}: Error conexión a la pasarela`).toPromise();
            message.push(`${gateway.result[0].name}: Error de conexión a la pasarela`);
            error = true;
          } else if (!success && gtwFieldCpu0.code === 'ETIMEDOUT' || (gtwFieldCpu1 && gtwFieldCpu1.code === 'ETIMEDOUT')) {
            await this.historicService.updateCfg(122, `${gateway.result[0].name}} Error timeout`).toPromise();
            message.push(`${gateway.result[0].name}: Error de timeout en la conexión a la pasarela`);
            error = true;
          } else if (!success && gtwFieldCpu0.code === 'EHOSTUNREACH' || (gtwFieldCpu1 && gtwFieldCpu1.code === 'EHOSTUNREACH')) {
            message.push(`${gateway.result[0].name}: Error no es posible conectar con la pasarela`);
            error = true;
          } else if (!success && gtwFieldCpu0 && !this.validateGtwFieldJson(gtwFieldCpu0) && gtwFieldCpu1 && !this.validateGtwFieldJson(gtwFieldCpu1)) {
            await this.historicService.updateCfg(122, `${gateway.result[0].name}} Error de formato`).toPromise();
            message.push(`${gateway.result[0].name}: Error el formato del JSON recibido no es correcto`);
            error = true;
          }
        }
      }));

      (error) ?
        await this.historicService.updateCfg(120, this.configuration.name).toPromise()
        : await this.historicService.updateCfg(119, this.configuration.name).toPromise();

      this.showSpinner = false;
      const alertMsg = message.toString().replace(/,/g, '<br/>');
      await this.alertService.fieldMessage(``, alertMsg);
    }
  }

  async saveSupervisedConfig() {
    const form = new FormGroup({
      idCFG: new FormControl(this.configuration.idCFG),
      description: new FormControl(this.configuration.description),
      name: new FormControl(this.configuration.name, [Validators.required, Validators.pattern(AppSettings.NAME_PATTERN)]),
      activa: new FormControl(this.supervised),
      last_updated: new FormControl(this.configuration.fecha_activacion)
    });

    try {
      if (form.valid) {
        const checkName = await this.configService.checkConfigurationName(form.value.idCFG, form.value.name).toPromise();

        if (checkName.data == 'DUP_NAME') {
          await this.alertService.errorMessage(``, `El nombre ${this.configForm.value.name} ya existe en el sistema. Utilice otro`);
          return;
        }

        const result = await this.configService.updateConfiguration(form.value).toPromise();

        if (result.error) {
          await this.alertService.errorMessage(``, result.error);
          return;
        }
        if(this.supervised != this.configActived){
          let title = " - Configuración Supervisada:";
          title += this.supervised? " Activada" : " Desactivada";
          await this.historicService.updateCfg(103, form.value.name+title).toPromise();
        }
        await this.alertService.successMessage(``, `Configuración ${form.value.name} actualizada`);
      } else {
        this.alertService.errorMessage(AppSettings.ERROR_FORM, AppSettings.INVALID_FORM);
      }
    } catch (error: any) {
      this.app.catchError(error);
    }
  }

  async saveConfig() {
    try {
      if (this.configuration.activa == 1) {
        var i = 0;
        
        while (i < this.arrayipv.length) {
          this.configurationIpResponse = await this.configService.checkConfigIp(this.arrayipv[i], this.configuration.idCFG).toPromise();
          this.configurationIp = [...this.configurationIpResponse.result];

          if (this.configurationIp.length != 0) {
            this.nEmplazamiento = this.configurationIp.map((index) => {
              return `la configuración ${index.nombre_conf} de la pasarela ${index.nombre}`;
            })
            await this.alertService.errorMessage(``,`La IP virtual ${this.arrayipv[i]} esta duplicada en ${this.nEmplazamiento}`);
            return;
          }
          this.configurationIpResponse = await this.configService.checkConfigIp(this.arrayipcp0[i],this.configuration.idCFG).toPromise();
          this.configurationIp = [...this.configurationIpResponse.result];
          if (this.configurationIp.length != 0) {
            this.nEmplazamiento = this.configurationIp.map((index) => {
              return `la configuración ${index.nombre_conf} de la pasarela ${index.nombre}`;
            })
            await this.alertService.errorMessage(``,`La IP cpu0 ${this.arrayipcp0[i]} esta duplicada en ${this.nEmplazamiento}`);
            return;
          }
          this.configurationIpResponse = await this.configService.checkConfigIp(this.arrayipcp1[i], this.configuration.idCFG).toPromise();
          this.configurationIp = [...this.configurationIpResponse.result];
          if (this.configurationIp.length != 0) {
            this.nEmplazamiento = this.configurationIp.map((index) => {
              return `la configuración ${index.nombre_conf} de la pasarela ${index.nombre}`;
            })
            await this.alertService.errorMessage(``,`La IP cpu1 ${this.arrayipcp1[i]} esta duplicada en ${this.nEmplazamiento}`);
            return;
          }         

        i++;
        }
      }


      if (this.configForm.valid) {
        this.showSpinner = true;
        const checkName = await this.configService.checkConfigurationName(this.configForm.value.idCFG, this.configForm.value.name).toPromise();

        if (checkName.data == 'DUP_NAME') {
          this.showSpinner = false;
          await this.alertService.errorMessage(``, `El nombre ${this.configForm.value.name} ya existe en el sistema. Utilice otro`);
          return;
        }
        const result = await this.configService.updateConfiguration(this.configForm.value).toPromise();

        if (result.error) {
          this.showSpinner = false;
          await this.alertService.errorMessage(``, result.error);
          return;
        }

        if(this.configForm.value.activa != this.configActived){
          let title = " - Configuración Supervisada:";
          title += this.configForm.value.activa? " Activada" : " Desactivada";
          await this.historicService.updateCfg(103, this.configForm.value.name+title).toPromise();
        }
        
        this.showSpinner = false;
        await this.alertService.successMessage(``, `Configuración ${this.configForm.value.name} actualizada`);
        await this.init();
        this.changes = false;
      } else {
        this.alertService.errorMessage(AppSettings.ERROR_FORM, AppSettings.INVALID_FORM);
      }
    }
    catch (error: any) {
      this.app.catchError(error);
    }
  }

  copyConfig() {
    const dialogRef = this.dialog.open(ConfigurationCopyFormComponent, {
      data: this.configuration,
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(async (saved) => {
      if (saved) {
        this.init();
      }
    });
  }

  async deleteConfig() {
    try {
      const confirmed = await this.alertService.confirmationMessage(`¿Desea eliminar la configuración ${this.configuration.name}?`,
        `También se eliminarán todos los emplazamientos y pasarelas asociadas a dicha configuración`);

      if (confirmed.value) {
        this.showSpinner = true;
        const result = await this.configService.deleteConfiguration(this.configuration.idCFG).toPromise();
        this.showSpinner = false;

        if (result.data !== 'OK') {
          this.alertService.errorMessage(``, `Error al eliminar ${this.configuration.name}. ${result.data}`);
          return;
        }

        await this.historicService.updateCfg(102, this.configuration.name).toPromise();
        await this.alertService.successMessage(``, `Configuración ${this.configuration.name} eliminada`);
        this.router.navigate(['/home/config/']);
      }
    } catch (error: any) {
      this.app.catchError(error);
    }
  }

  async downloadPDF() {
    try {
      this.showSpinner = true;
      const pdfBlob = await this.configService.getConfigPDF(this.configuration.idCFG).toPromise();
      this.showSpinner = false;
      const pdfFilename = pdfBlob.file_name;
      const pdfData = 'data:application/pdf;base64,' + pdfBlob.data;
      this.downloadFile(pdfFilename, pdfData);
    } catch (error: any) {
      this.app.catchError(error);
    }
  }

  async downloadExcel() {
    try {
      this.showSpinner = true;
      const excelBlob = await this.configService.getConfigExcel(this.configuration.idCFG).toPromise();
      this.showSpinner = false;
      const excelFilename = excelBlob.file_name;
      const excelData = "data:application/csv," + escape(excelBlob.data);
      this.downloadFile(excelFilename, excelData);
      this.showSpinner = false;
    } catch (error: any) {
      this.app.catchError(error);
    }
  }

  downloadFile(filename: string, file: any) {

    var link = document.createElement("a");
    link.setAttribute("href", file);
    link.setAttribute("download", filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    link.remove();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  }

  validateGtwFieldJson(data: any) {
    return (data.hasOwnProperty('fechaHora') && data.hasOwnProperty('general') && data.hasOwnProperty('idConf') && data.hasOwnProperty('hardware')
      && data.hasOwnProperty('recursos') && data.hasOwnProperty('servicios') && data.hasOwnProperty('tipo') && data.hasOwnProperty('users')
      && data.tipo === 0);
  }

  getGatewayTitle() {
    let config = this.configurationByIdResponse;
    const title = `Configuración: ${config.result[0].NAME}`;
    this.dataService.updateDataGatewayTitle(title);
    return title;
  }
}