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

import * as XLSX from 'xlsx'
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
import { SweetAlertResult } from 'sweetalert2';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';
import { ConfReportPDFService } from 'src/app/_services/_pdf/conf-report.service';
import { ConfReportExcelService } from 'src/app/_services/_excel/conf-report.service';

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

  trapMsg: any = [];

  constructor(private readonly route: ActivatedRoute, private readonly configService: ConfigService, private readonly router: Router,
    private readonly app: AppComponent, private readonly siteService: SiteService, public dialog: MatDialog,
    private readonly alertService: AlertService, private readonly dataService: DataService, private readonly loginService: LoginService,
    private readonly userService: UserService, private readonly gatewayFieldService: GatewayFieldService, private readonly gatewayService: GatewayService,
    private readonly historicService: HistoricService, private readonly translate: TranslateService,
    private readonly configPDF: ConfReportPDFService, private readonly configEXCEL: ConfReportExcelService) { }

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
          this.getIpandTrapsArrays();
        }
        this.ready = true;
      }

    } catch (error: any) {
      this.app.catchError(error);
    }
  }

  async getIpandTrapsArrays() {
    this.arrayIdGTW.forEach(async element => {
      this.gatewayResponse = await this.gatewayService.getGatewayById(element).toPromise();
      this.arrayipv.push(
        this.gatewayResponse.result.map((ipv) => {
          return ipv.ipv;
        })
      )
      this.arrayipcp0.push(
        this.gatewayResponse.result.map((ipv) => {
          return ipv.ip_cpu0;
        })
      )
      this.arrayipcp1.push(
        this.gatewayResponse.result.map((ipv) => {
          return ipv.ip_cpu1;
        })
      )
      let gtw = await this.gatewayService.getGatewayAll(element).toPromise()
      if (gtw.servicios.snmp.traps.length === 0) {
        this.trapMsg.push(gtw.general.name)
      }
    });
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
      confirm = await this.alertService.confirmationMessage("", `${this.translate.instant('config.alert.conf_save_changes')}`,this.translate.instant('button.accept'),this.translate.instant('button.cancel'));
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
    const title = `${this.translate.instant('config.modify_title', { value1: config.result[0].NAME, value2: site.nameSite })}`;
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

    const confirm = await this.alertService.confirmationMessage(``, `${this.translate.instant('config.alert.conf_activate_cfg')}`,this.translate.instant('button.accept'),this.translate.instant('button.cancel'));
    if (confirm.value) {
      if (this.trapMsg.length !== 0) {
        let confirm = await this.alertService.confirmationMessage(`${this.translate.instant('config.alert.conf_no_traps', { value: (this.trapMsg.join(', ')) })}`, `${this.translate.instant('config.alert.conf_continue')}`,this.translate.instant('button.accept'),this.translate.instant('button.cancel'));
        if (confirm.value) {
          await this.activate(message, error)
        }
      } else {
        await this.activate(message, error);
      }

    }
  }

  async activate(message: any, error: any) {
    if (this.configurationGateways.length===0){
      const alertMsg = this.translate.instant('config.alert.empty_cfg');
      await this.alertService.fieldMessage(``, alertMsg, this.translate.instant('button.accept'));
      return;
    }
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
          await this.historicService.updateCfg(122, `${gateway.result[0].name} {ECONNREFUSED}`).toPromise();
          message.push(`${this.translate.instant('err.ECONNREFUSED', { value: gateway.result[0].name })}`/*,this.translate.instant('button.accept')*/);
          error = true;
        } else if (!success && gtwFieldCpu0.code === 'ETIMEDOUT' && (gtwFieldCpu1 && gtwFieldCpu1.code === 'ETIMEDOUT')) {
          await this.historicService.updateCfg(122, `${gateway.result[0].name} {ETIMEDOUT}`).toPromise();
          message.push(`${this.translate.instant('err.ETIMEDOUT', { value: gateway.result[0].name })}`/*,this.translate.instant('button.accept')*/);
          error = true;
        } else if (!success && gtwFieldCpu0.code === 'EHOSTUNREACH' || (gtwFieldCpu1 && gtwFieldCpu1.code === 'EHOSTUNREACH')) {
          await this.historicService.updateCfg(122, `${gateway.result[0].name} {EHOSTUNREACH}`).toPromise();
          message.push(`${this.translate.instant('err.EHOSTUNREACH', { value: gateway.result[0].name })}`/*,this.translate.instant('button.accept')*/);
          error = true;
        } else if (!success && gtwFieldCpu0 && !this.validateGtwFieldJson(gtwFieldCpu0) && gtwFieldCpu1 && !this.validateGtwFieldJson(gtwFieldCpu1)) {
          await this.historicService.updateCfg(122, `${gateway.result[0].name} {EFORMAT}`).toPromise();
          message.push(`${this.translate.instant('err.EFORMAT', { value: gateway.result[0].name })}`/*,this.translate.instant('button.accept')*/);
          error = true;
        }
      }
    }));

    (error) ?
      await this.historicService.updateCfg(120, this.configuration.name).toPromise()
      : await this.historicService.updateCfg(119, this.configuration.name).toPromise();

    this.showSpinner = false;
    const alertMsg = message.toString().replace(/,/g, '<br/>');
    await this.alertService.fieldMessage(``, alertMsg, this.translate.instant('button.accept'));
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

      var result = await this.check4Supervised();
      if (result===false){
          return;
      }

      if (form.valid) {
        const checkName = await this.configService.checkConfigurationName(form.value.idCFG, form.value.name).toPromise();

        if (checkName.data == 'DUP_NAME') {
          await this.alertService.errorMessage(``, `${this.translate.instant('config.alert.err_name_exists', { value: this.configForm.value.name })}`,this.translate.instant('button.accept'));
          return;
        }

        const result = await this.configService.updateConfiguration(form.value).toPromise();

        if (result.error) {
          await this.alertService.errorMessage(``, result.error, this.translate.instant('button.accept'));
          return;
        }
        if (this.supervised != this.configActived) {
          let title = " - {SUPERVISED_CONF} : ";
          title += this.supervised ? " {ACTIVE} " : " {DISABLED} ";
          await this.historicService.updateCfg(103, form.value.name + title).toPromise();
        }
        await this.alertService.successMessage(``, `${this.translate.instant('config.alert.succ_update_cfg', { value: form.value.name })}`,this.translate.instant('button.accept'));
      } else {
        this.alertService.errorMessage(`${this.translate.instant('appsettings.ERROR_FORM')}`, `${this.translate.instant('appsettings.INVALID_FORM')}`,this.translate.instant('button.accept'));
      }
    } catch (error: any) {
      this.app.catchError(error);
    }
  }

  async saveConfig() {
    // let confirm: SweetAlertResult;
    // try {
    //   if (this.configuration.activa == 1) {
    //     var i = 0;

    //     while (i < this.arrayipv.length) {
    //       this.configurationIpResponse = await this.configService.checkConfigIp(this.arrayipv[i], this.configuration.idCFG).toPromise();
    //       this.configurationIp = [...this.configurationIpResponse.result];

    //       if (this.configurationIp.length != 0) {
    //         this.nEmplazamiento = this.configurationIp.map((index) => {
    //           return `${this.translate.instant('err.DUPLICATED_BODY', { value1: index.nombre_conf, value2: index.nombre })}`;
    //         })
    //         await this.alertService.errorMessage(``, `${this.translate.instant('err.DUPLICATED_IPV', { value1: this.arrayipv[i], value2: this.nEmplazamiento })}`,this.translate.instant('button.accept'));
    //         return;
    //       }
    //       this.configurationIpResponse = await this.configService.checkConfigIp(this.arrayipcp0[i], this.configuration.idCFG).toPromise();
    //       this.configurationIp = [...this.configurationIpResponse.result];
    //       if (this.configurationIp.length != 0) {
    //         this.nEmplazamiento = this.configurationIp.map((index) => {
    //           return `${this.translate.instant('err.DUPLICATED_BODY', { value1: index.nombre_conf, value2: index.nombre })}`;
    //         })
    //         await this.alertService.errorMessage(``, `${this.translate.instant('err.DUPLICATED_IPCPU0', { value1: this.arrayipcp0[i], value2: this.nEmplazamiento })}`,this.translate.instant('button.accept'));
    //         return;
    //       }
    //       this.configurationIpResponse = await this.configService.checkConfigIp(this.arrayipcp1[i], this.configuration.idCFG).toPromise();
    //       this.configurationIp = [...this.configurationIpResponse.result];
    //       if (this.configurationIp.length != 0) {
    //         this.nEmplazamiento = this.configurationIp.map((index) => {
    //           return `${this.translate.instant('err.DUPLICATED_BODY', { value1: index.nombre_conf, value2: index.nombre })}`;
    //         })
    //         await this.alertService.errorMessage(``, `${this.translate.instant('err.DUPLICATED_IPCPU1', { value1: this.arrayipcp1[i], value2: this.nEmplazamiento })}`,this.translate.instant('button.accept'));
    //         return;
    //       }
    //       i++;
    //     }
    //   }

    //   if (this.trapMsg.length !== 0) {
    //     confirm = await this.alertService.confirmationMessage(`${this.translate.instant('config.alert.conf_no_traps', { value: (this.trapMsg.join(', ')) })}`, `${this.translate.instant('config.alert.conf_continue')}`,this.translate.instant('button.accept'),this.translate.instant('button.cancel'));
    //     if (confirm.value) {
    //       this.save()
    //     }
    //   } else {
    //     this.save();
    //   }
    // }
    // catch (error: any) {
    //   this.app.catchError(error);
    // }
    var result = await this.check4Supervised();
    if (result===true){
        this.save();
    }
  }

  async save() {
    if (this.configForm.valid) {
      this.showSpinner = true;
      const checkName = await this.configService.checkConfigurationName(this.configForm.value.idCFG, this.configForm.value.name).toPromise();
      if (checkName.data == 'DUP_NAME') {
        this.showSpinner = false;
        await this.alertService.errorMessage(``, `${this.translate.instant('config.alert.err_name_exists', { value: this.configForm.value.name })}`,this.translate.instant('button.accept'));
        return;
      }
      const result = await this.configService.updateConfiguration(this.configForm.value).toPromise();

      if (result.error) {
        this.showSpinner = false;
        await this.alertService.errorMessage(``, result.error,this.translate.instant('button.accept'));
        return;
      }

      if (this.configForm.value.activa != this.configActived) {
        let title = " - {SUPERVISED_CONF} : ";
        title += this.configForm.value.activa ? " {ACTIVE} " : " {DISABLED} ";
        await this.historicService.updateCfg(103, this.configForm.value.name + title).toPromise();
      }

      this.showSpinner = false;
      await this.alertService.successMessage(``, `${this.translate.instant('config.alert.succ_update_cfg', { value: this.configForm.value.name })}`,this.translate.instant('button.accept'));
      await this.init();
      this.changes = false;
    } else {
      this.alertService.errorMessage(`${this.translate.instant('appsettings.ERROR_FORM')}`, `${this.translate.instant('appsettings.INVALID_FORM')}`,this.translate.instant('button.accept'));
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
      const confirmed = await this.alertService.confirmationMessage(`${this.translate.instant('config.alert.conf_delete_cfg', { value: this.configuration.name })}`,
        `${this.translate.instant('config.alert.conf_delete_info')}`,this.translate.instant('button.accept'), this.translate.instant('button.cancel'));

      if (confirmed.value) {
        this.showSpinner = true;
        const result = await this.configService.deleteConfiguration(this.configuration.idCFG).toPromise();
        this.showSpinner = false;

        if (result.data !== 'OK') {
          const header2 = "ER_NISAMCHK: ";
          var value2 = result.data.includes(header2)===true ? this.translate.instant('config.alert.delete.error1') : result.data;
          this.alertService.errorMessage(``, `${this.translate.instant('config.alert.err_delete_cfg', { value1: this.configuration.name, value2: value2 })}`,this.translate.instant('button.accept'));
          return;
        }

        await this.historicService.updateCfg(102, this.configuration.name).toPromise();
        await this.alertService.successMessage(``, `${this.translate.instant('config.alert.succ_delete_cfg', { value: this.configuration.name })}`,this.translate.instant('button.accept'));
        this.router.navigate(['/home/config/']);
      }
    } catch (error: any) {
      this.app.catchError(error);
    }
  }

  async downloadPDF() {
    try {
      this.showSpinner = true;
      let reportData = this.getReportData('PDF')
      const data = await this.configService.getConfig(this.configuration.idCFG).toPromise();
      const pdfBlob = this.configPDF.createReportCFG(data, this.configForm.value.name, reportData)
      this.showSpinner = false;
    } catch (error: any) {
      this.app.catchError(error);
    }
  }

  async downloadExcel() {
    try {
      this.showSpinner = true;
      let reportData = this.getReportData('Excel')
      const data = await this.configService.getConfig(this.configuration.idCFG).toPromise();
      const pdfBlob = this.configEXCEL.createReportCFG(data, this.configForm.value.name, reportData);
      this.showSpinner = false;
    } catch (error: any) {
      this.app.catchError(error);
    }
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

  getReportData(type: string) {

    let reportData = {};

    let supervisaColateralOptions = [
      'resource.radio.supCollateral_value_0',
      'resource.radio.supCollateral_value_1',
      'resource.radio.supCollateral_value_2'
    ].map(x => this.translate.instant(x))

    let tipoAgenteArray = [
      'resource.radioAgents_value_0',
      'resource.radioAgents_value_1',
      'resource.radioAgents_value_2',
      'resource.radioAgents_value_3',
      'resource.radioAgents_value_4',
      'resource.radioAgents_value_5',
      'resource.radioAgents_value_6'
    ].map(x => this.translate.instant(x))

    let indicacionArray = [
      'resource.radio.iAudio_value_0',
      'resource.radio.iAudio_value_1',
      'resource.radio.iAudio_value_2'
    ].map(x => this.translate.instant(x))

    let indicacionSalidaAudio = [
      'resource.radio.oAudio_value_0'
    ].map(x => this.translate.instant(x))

    let prioridadPTT = [
      'resource.radio.pttPriority_value_0',
      'resource.radio.pttPriority_value_1',
      'resource.radio.pttPriority_value_2'
    ].map(x => this.translate.instant(x))

    let prioridadSIP = [
      'resource.radio.prioritySessionSIP_value_0',
      'resource.radio.prioritySessionSIP_value_1'
    ].map(x => this.translate.instant(x))

    let metodoBSS = [
      'resource.radio.bssMethods_value_0',
      'resource.radio.bssMethods_value_1',
      'resource.radio.bssMethods_value_2'
    ].map(x => this.translate.instant(x))

    let metodoBSSPreferido = [
      'resource.radio.bssMethodsPref_value_0',
      'resource.radio.bssMethodsPref_value_1',
      'resource.radio.bssMethodsPref_value_2'
    ].map(x => this.translate.instant(x))

    let modoClimax = [
      'resource.radio.climaxModes_value_0',
      'resource.radio.climaxModes_value_1',
      'resource.radio.climaxModes_value_2'
    ].map(x => this.translate.instant(x))

    let modoCalculoClimax = [
      'resource.radio.calClimaxModes_value_0',
      'resource.radio.calClimaxModes_value_1'
    ].map(x => this.translate.instant(x))

    let tablaCalificacionAudio = [
      'resource.radio.none',
      'audio'
    ].map(x => this.translate.instant(x))

    let interfaz_telefonico = [
      'resource.telephonicIntefaces_value_0',
      'resource.telephonicIntefaces_value_1',
      'resource.telephonicIntefaces_value_2',
      'resource.telephonicIntefaces_value_3',
      'resource.telephonicIntefaces_value_4',
      'resource.telephonicIntefaces_value_5',
      'resource.telephonicIntefaces_value_6',
      'resource.telephonicIntefaces_value_7'
    ].map(x => this.translate.instant(x))

    let respuestaSIP = [
      'resource.tlf.SIPResponse_value_0',
      'resource.tlf.SIPResponse_value_1'
    ].map(x => this.translate.instant(x))

    let ladoOptions = [
      'A',
      'B'
    ].map(x => this.translate.instant(x))

    let tipoRestriccion = [
      'resource.tlf.typeList_value_0',
      'resource.tlf.typeList_value_1',
      'resource.tlf.typeList_value_2'
    ].map(x => this.translate.instant(x))

    let refreserArray = [
      'gateway.refresh_value0',
      'gateway.refresh_value1',
      'gateway.refresh_value2'
    ].map(x => this.translate.instant(x))

    let data = {
      "LOCATION": this.translate.instant('gateway.location'),
      "GATEWAY": this.translate.instant('gateway.gateway'),
      "IP_VIRTUAL": this.translate.instant('gateway.ip_virtual'),
      "LAST_LOAD": this.translate.instant('gateway.last_load_UTC'),
      "GATEWAY_SUPERVISION": this.translate.instant('gateway.gateway_supervision'),
      "ACTIVATION_DELAY": this.translate.instant('gateway.activation_delay'),
      "IP_CPU0": this.translate.instant('gateway.ip_cpu0'),
      "MASK": this.translate.instant('gateway.Mask'),
      "IP_CPU1": this.translate.instant('gateway.ip_cpu1'),
      "PORT": this.translate.instant('gateway.port'),
      "TLF_SUPERVISION": this.translate.instant('gateway.telf_supervision'),
      "SUPERVISION_PERIOD": this.translate.instant('gateway.supervision_period'),
      "REFRESHER": this.translate.instant('gateway.refresher'),
      "NTP_1": this.translate.instant('util.ntp_1_server'),
      "NTP_2": this.translate.instant('util.ntp_2_server'),
      "SNMPV2": this.translate.instant('gateway.snmp_v2'),
      "SERVICE_PORT": this.translate.instant('gateway.service_port'),
      "SNMP_PORT": this.translate.instant('gateway.snmp_port'),
      "SNMP_NAME": this.translate.instant('gateway.snmp_name'),
      "SNMP_COMMUNITY": this.translate.instant('gateway.snmp_community'),
      "SNMP_LOCATION": this.translate.instant('gateway.snmp_location'),
      "SNMP_CONTACT": this.translate.instant('gateway.snmp_contact'),
      "SESSION_TIME": this.translate.instant('gateway.session_time'),
      "RSTP_PORT": this.translate.instant('gateway.rstp_server_port'),
      "RSTPA": this.translate.instant('gateway.rstp_a_ip_server'),
      "RSTPB": this.translate.instant('gateway.rstp_b_ip_server'),
      "TRAPS": this.translate.instant('util.traps'),
      "RESOURCE_TYPE": this.translate.instant('ext_res.resource_type'),
      "NAME": this.translate.instant('resource.name'),
      "CODEC": this.translate.instant('resource.codec'),
      "KEY": this.translate.instant('resource.key'),
      "FREC": this.translate.instant('resource.frec'),
      "SETT_AD": this.translate.instant('resource.sett_ad'),
      "SETT_DA": this.translate.instant('resource.sett_da'),
      "PREC_AUDIO": this.translate.instant('resource.prec_audio'),
      "RAD_TYPE": this.translate.instant('resource.rad_type'),
      "AUDIO_INPUT": this.translate.instant('resource.radio.audio_input'),
      "AUDIO_OUTPUT": this.translate.instant('resource.radio.audio_output'),
      "UMBRAL_VAD": this.translate.instant('resource.radio.umbral_vad'),
      "PTT_EVENT": this.translate.instant('resource.radio.ptt_event'),
      "PTT_PRIORITY": this.translate.instant('resource.radio.ptt_priority'),
      "SIP_PRIORITY": this.translate.instant('resource.radio.sip_priority'),
      "BSS_CLIMAX": this.translate.instant('resource.radio.bss_climax'),
      "BSS_AVAILABLE": this.translate.instant('resource.radio.bss_available'),
      "BASS_WINDOWS": this.translate.instant('resource.radio.bss_windows'),
      "CLIMAX_MODE": this.translate.instant('resource.radio.climax_mode'),
      "MODE_CALC_CLIMAX": this.translate.instant('resource.radio.mode_calc_climax'),
      "TIME": this.translate.instant('resource.radio.time'),
      "METODO_BSS": this.translate.instant('resource.radio.metodo_BSS'),
      "TABLE_BSS": this.translate.instant('resource.radio.tableBSS'),
      "RADIO_GRS": this.translate.instant('resource.radio.grs'),
      "ENABLE_RECORD": this.translate.instant('resource.radio.enable_record'),
      "RESTRICTION_TYPE": this.translate.instant('util.restriction_type'),
      "URI": this.translate.instant('ext_res.uri'),
      "TYPE": this.translate.instant('ext_res.type'),
      "COLATERAL_URI": this.translate.instant('util.colateral_uri'),
      "COLATERAL": this.translate.instant('resource.colateral'),
      "TLF_TYPE": this.translate.instant('resource.tlf_type'),
      "AVGNUSER": this.translate.instant('resource.tlf.AVGNUser'),
      "ED137": this.translate.instant('resource.tlf.iEnableED137'),
      "DETECT_VOX": this.translate.instant('resource.tlf.detect_vox'),
      "UMBRAL_VOX": this.translate.instant('resource.tlf.umbral_vox'),
      "VOX_TAIL": this.translate.instant('resource.tlf.vox_tail'),
      "CALL_DUR_PER_TIME": this.translate.instant('resource.tlf.call_dur_per_time'),
      "TIME_MAX_CALL": this.translate.instant('resource.tlf.time_max_call'),
      "DET_INV_POL": this.translate.instant('resource.tlf.det_inv_pol'),
      "DET_LINEA_AB": this.translate.instant('resource.tlf.det_linea_AB'),
      "AUTOMATIC_RESP": this.translate.instant('resource.tlf.automatic_resp'),
      "PERIOD_SHADES": this.translate.instant('resource.tlf.period_shades'),
      "SIP_R2_RESP": this.translate.instant('resource.tlf.SIP_R2_resp'),
      "TONOBLOQUEO": this.translate.instant('resource.tlf.TmTonoBloqueo'),
      "RMBLOQUEO": this.translate.instant('resource.tlf.RMBloqueoLib'),
      "SIDE": this.translate.instant('resource.tlf.side'),
      "ORIGEN_TEST": this.translate.instant('resource.tlf.origen_test'),
      "DESTINO_TEST": this.translate.instant('resource.tlf.destino_test'),
      "DURATION_SHADES": this.translate.instant('resource.tlf.duration_shades'),
      "AUTOMATIC_CALL": this.translate.instant('resource.tlf.automatic_call'),
      "REMOTE_URI": this.translate.instant('util.remote_uri'),
      "COLATERAL_SUPER": this.translate.instant('resource.radio.colateral_super'),
      "ANY_RESP_IS_VALID": this.translate.instant('resource.radio.any_resp_is_valid'),
      "ADD_REMOTE_URI": this.translate.instant('util.add_remote_uri'),
      "ADD_COLATERAL_SUPER": this.translate.instant('util.add_colateral_super'),
      "ADD_ANY_RESP_IS_VALID": this.translate.instant('util.add_any_resp_is_valid'),
      "SUPERVISION_TIME": this.translate.instant('resource.radio.supervision_time'),
      "ATS_TYPE": this.translate.instant('util.ATS_type'),
      "ATS_START": this.translate.instant("util.ATS_start"),
      "ATS_FINAL": this.translate.instant("util.ATS_final"),
      'CONFIGURATION': this.translate.instant('gateway.configuration'),
      'NOT': this.translate.instant('util.not'),
      'YES': this.translate.instant('util.yes'),
      "SECONDS": this.translate.instant('gateway.seconds'),
      "NORMAL": this.translate.instant('resource.indexAudio_value_0'),
      "STRICT": this.translate.instant('resource.indexAudio_value_1'),
      "RAD": this.translate.instant('util.rad'),
      "TLF": this.translate.instant('util.tlf'),
      "START": this.translate.instant('util.start'),
      "END": this.translate.instant('util.end'),
      "REPORT": this.translate.instant('util.report'),
      "LISTAS_BN" :  this.translate.instant('resource.tlf.lists'),
      "RESOURCE": this.translate.instant('util.resource'),
      "ID_CONF": this.translate.instant('config.id_conf'),
      "LAST_MODIF": this.translate.instant('config.last_modif'),
      "SUPERVISED": this.translate.instant('config.supervised_conf'),
      "DESCRIPTION": this.translate.instant('config.description'),
      "TRAP_VERSION": this.translate.instant('util.trap_version'),
      "TRAP_IP_ADRESS": this.translate.instant('util.trap_adress'),
      "TRAP_PORT": this.translate.instant('util.trap_port'),
      "CONFIG_REPORT": this.translate.instant('util.config_report'),
      "RIGTHS": this.translate.instant('util.rights_reserved')
    }

    if (type === "Excel") {

      let first_header = [
        'config.name',
        'config.desc',
        'config.supervised',
        'config.last_modif'].map(x => this.translate.instant(x))

      reportData = {
        "supervisaColateralOptions": supervisaColateralOptions,
        "tipoAgenteArray": tipoAgenteArray,
        "indicacionArray": indicacionArray,
        "indicacionSalidaAudio": indicacionSalidaAudio,
        "prioridadPTT": prioridadPTT,
        "prioridadSIP": prioridadSIP,
        "metodoBSS": metodoBSS,
        "metodoBSSPreferido": metodoBSSPreferido,
        "modoClimax": modoClimax,
        "modoCalculoClimax": modoCalculoClimax,
        "tablaCalificacionAudio": tablaCalificacionAudio,
        "interfaz_telefonico": interfaz_telefonico,
        "respuestaSIP": respuestaSIP,
        "ladoOptions": ladoOptions,
        "tipoRestriccion": tipoRestriccion,
        "refreserArray": refreserArray,
        "first_header": first_header,
        "data_excel": data
      }
    }

    if (type === "PDF") {

      reportData = {
        "supervisaColateralOptions": supervisaColateralOptions,
        "tipoAgenteArray": tipoAgenteArray,
        "indicacionArray": indicacionArray,
        "indicacionSalidaAudio": indicacionSalidaAudio,
        "prioridadPTT": prioridadPTT,
        "prioridadSIP": prioridadSIP,
        "metodoBSS": metodoBSS,
        "metodoBSSPreferido": metodoBSSPreferido,
        "modoClimax": modoClimax,
        "modoCalculoClimax": modoCalculoClimax,
        "tablaCalificacionAudio": tablaCalificacionAudio,
        "interfaz_telefonico": interfaz_telefonico,
        "respuestaSIP": respuestaSIP,
        "ladoOptions": ladoOptions,
        "tipoRestriccion": tipoRestriccion,
        "refreserArray": refreserArray,
        "pdf_data": data
      }
    }

    return reportData

  }

  // AGL. Checking for Supervised.
  async check4Supervised(){
    let confirm: SweetAlertResult;
    try {
      if (this.configuration.activa == 1) {
        var i = 0;

        while (i < this.arrayipv.length) {
          this.configurationIpResponse = await this.configService.checkConfigIp(this.arrayipv[i], this.configuration.idCFG).toPromise();
          this.configurationIp = [...this.configurationIpResponse.result];

          if (this.configurationIp.length != 0) {
            this.nEmplazamiento = this.configurationIp.map((index) => {
              return `${this.translate.instant('err.DUPLICATED_BODY', { value1: index.nombre_conf, value2: index.nombre })}`;
            })
            await this.alertService.errorMessage(``, `${this.translate.instant('err.DUPLICATED_IPV', { value1: this.arrayipv[i], value2: this.nEmplazamiento })}`,this.translate.instant('button.accept'));
            return false;
          }
          this.configurationIpResponse = await this.configService.checkConfigIp(this.arrayipcp0[i], this.configuration.idCFG).toPromise();
          this.configurationIp = [...this.configurationIpResponse.result];
          if (this.configurationIp.length != 0) {
            this.nEmplazamiento = this.configurationIp.map((index) => {
              return `${this.translate.instant('err.DUPLICATED_BODY', { value1: index.nombre_conf, value2: index.nombre })}`;
            })
            await this.alertService.errorMessage(``, `${this.translate.instant('err.DUPLICATED_IPCPU0', { value1: this.arrayipcp0[i], value2: this.nEmplazamiento })}`,this.translate.instant('button.accept'));
            return false;
          }
          this.configurationIpResponse = await this.configService.checkConfigIp(this.arrayipcp1[i], this.configuration.idCFG).toPromise();
          this.configurationIp = [...this.configurationIpResponse.result];
          if (this.configurationIp.length != 0) {
            this.nEmplazamiento = this.configurationIp.map((index) => {
              return `${this.translate.instant('err.DUPLICATED_BODY', { value1: index.nombre_conf, value2: index.nombre })}`;
            })
            await this.alertService.errorMessage(``, `${this.translate.instant('err.DUPLICATED_IPCPU1', { value1: this.arrayipcp1[i], value2: this.nEmplazamiento })}`,this.translate.instant('button.accept'));
            return false;
          }
          i++;
        }
      }

      if (this.trapMsg.length !== 0) {
        confirm = await this.alertService.confirmationMessage(`${this.translate.instant('config.alert.conf_no_traps', { value: (this.trapMsg.join(', ')) })}`, `${this.translate.instant('config.alert.conf_continue')}`,this.translate.instant('button.accept'),this.translate.instant('button.cancel'));
        if (confirm.value) {
          // this.save()
          return true;
        }
      } else {
        // this.save();
        return true;
      }
    }
    catch (error: any) {
      this.app.catchError(error);
    }
    return false;
  }
}