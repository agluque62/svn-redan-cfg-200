import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AppSettings } from 'src/app/core/app.settings';
import { Site } from 'src/app/_models/configs/site/Site';
import { AlertService } from 'src/app/_services/alert.service';
import { DataService } from 'src/app/_services/data.service';
import { GatewayService } from 'src/app/_services/gateway.service';
import { HistoricService } from 'src/app/_services/historic.service';
import { SiteService } from 'src/app/_services/site.service';
import { UserService } from 'src/app/_services/user.service';
import { UtilsService } from 'src/app/_services/utils.service';
import { ConfigService } from 'src/app/_services/config.service';
import { ConfigurationIpResponse } from 'src/app/_models/configs/configuration/response/ConfigurationIpResponse';
import { ConfigurationIp } from 'src/app/_models/configs/configuration/ConfigurationIp';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-site-form',
  templateUrl: './site-form.component.html',
  styleUrls: ['./site-form.component.scss']
})
export class SiteFormComponent implements OnInit {

  siteForm!: FormGroup;
  site!: Site;
  type: string = 'CREATE';
  configurationId!: number;

  importForm!: FormGroup;
  importJson!: any;
  importJsonName!: string;

  configurationIp!: ConfigurationIp[];
  configurationIpResponse!: ConfigurationIpResponse;
  nEmplazamiento!: string[];


  @ViewChild('importGW') importGW!: ElementRef;

  visualizationMode: boolean = false;
  appset: any;

  constructor(private readonly router: Router, public dialogRef: MatDialogRef<SiteFormComponent>, private readonly configService: ConfigService,
    private readonly utilService: UtilsService, @Inject(MAT_DIALOG_DATA) public data: Site,
    private readonly alertService: AlertService, private readonly siteService: SiteService, private readonly app: AppComponent,
    private readonly gatewayService: GatewayService, private readonly dataService: DataService, private readonly userService: UserService,
    private historicService: HistoricService, private readonly translate: TranslateService) { }

  ngOnInit(): void {


    this.appset = AppSettings;
    this.visualizationMode = (this.visualizationPermission()) ? true : false;

    this.site = this.data;
    this.initConfigId();
    if (this.site.idEMPLAZAMIENTO != -1) {
      this.type = 'EDIT';
    }
    this.initForm();
  }

  visualizationPermission() {
    return (!this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && this.userService.isRole('VISUALIZATION'))
      || (!this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && this.userService.isRole('SUPERVISED_CONFIGURATION'));
  }

  initConfigId() {
    let url_splited = this.router.url.split('/');
    let id = url_splited.slice(-1);
    this.configurationId = Number(id);
  }

  initForm() {
    this.siteForm = new FormGroup({
      name: new FormControl({ value: this.data.nameSite, disabled: this.visualizationMode }, [Validators.required, Validators.pattern(AppSettings.NAME_PATTERN)]),
    });
  }

  initImportForm() {
    this.importForm = new FormGroup({
      name: new FormControl(this.importJson.general.name, [Validators.required, Validators.pattern(AppSettings.NAME_PATTERN)]),
      ipv: new FormControl(this.importJson.general.ipv, [Validators.required, Validators.pattern(AppSettings.IP_PATTERN)]),
      gatewayf: new FormControl(this.importJson.general.cpus[0].ipg || this.importJson.general.cpus[1].ipg, [Validators.required, Validators.pattern(AppSettings.IP_PATTERN)]),
      cpu0: new FormControl(this.importJson.general.cpus[0].ipb, [Validators.required, Validators.pattern(AppSettings.IP_PATTERN)]),
      cpu1: new FormControl(this.importJson.general.cpus[1].ipb, [Validators.required, Validators.pattern(AppSettings.IP_PATTERN)]),
    });
  }

  async saveSite() {
    try {
      if (this.siteForm.valid) {
        const result = await this.siteService.createSite(this.configurationId, this.siteForm.value.name).toPromise();
        if (result.error && result.error === 'ER_DUP_ENTRY') {
          await this.alertService.errorMessage(``, `${this.translate.instant('location.alert.err_create_loc', { value: this.siteForm.value.name })}`);
          return;
        } else if (result.error) {
          await this.alertService.errorMessage(``, result.error);
          return;
        } else {
          await this.alertService.successMessage(``, `${this.translate.instant('location.alert.succ_create_loc', { value: this.siteForm.value.name })}`);
          this.dialogRef.close(true);
        }
      } else {
        this.alertService.errorMessage(`${this.translate.instant('appsettings.ERROR_FORM')}`, `${this.translate.instant('appsettings.INVALID_FORM')}`);
      }
    } catch (error: any) {
      this.app.catchError(error);
    }
  }

  async updateSite() {
    try {
      if (this.siteForm.valid) {
        const result = await this.siteService.updateSite(this.site.idEMPLAZAMIENTO, this.configurationId, this.siteForm.value.name).toPromise();

        if (result.error) {
          await this.alertService.errorMessage(``, result.error);
          return;
        }
        await this.alertService.successMessage(``, `${this.translate.instant('location.alert.succ_update_loc', { value: this.siteForm.value.name })}`);
        this.dialogRef.close(true);
      } else {
        this.alertService.errorMessage(`${this.translate.instant('appsettings.ERROR_FORM')}`, `${this.translate.instant('appsettings.INVALID_FORM')}`);
      }
    } catch (error: any) {
      this.app.catchError(error);
    }
  }

  async deleteSite() {
    try {
      const confirmed = await this.alertService.confirmationMessage(`${this.translate.instant('location.alert.conf_delete_loc')}`,
        `${this.translate.instant('ocation.alert.conf_delete_info', {value: this.siteForm.value.name})}`);

      if (confirmed.value) {
        const result = await this.siteService.deleteSite(this.site.idEMPLAZAMIENTO).toPromise();

        if (result.data !== 'OK') {
          this.alertService.errorMessage(``, `${this.translate.instant('location.alert.err_delete_loc', { value1: this.site.nameSite, value2: result.data })}`);
          return;
        }

        await this.alertService.successMessage(``, `${this.translate.instant('location.alert.succ_delete_loc', { value: this.site.nameSite })}`);
        this.dialogRef.close(true);
      }
    } catch (error: any) {
      this.app.catchError(error);
    }
  }

  createGateway() {
    this.dialogRef.close();
    this.dataService.updateDataConfigId(this.configurationId);
    this.dataService.updateDataSiteId(this.site.idEMPLAZAMIENTO);
    this.dataService.updateDataGatewayPreviousUrl('NEW');
    this.router.navigate(['/home/gateway/new']);
  }

  async importGateway($event: any) {
    try {
      const conf = await this.configService.getConfigurationById(this.configurationId).toPromise();
      let result;
      const fileToUpload = $event.target.files[0];
      this.importJsonName = $event.target.files[0].name;
      const fileReader = new FileReader();
      fileReader.readAsText(fileToUpload, "UTF-8");
      const context = this;
      fileReader.onload = function (fileLoadedEvent) {
        context.importJson = JSON.parse(fileLoadedEvent.target?.result! as string);
        context.initImportForm();
      }
      const confirm = await this.alertService.confirmationMessage(``, `${this.translate.instant('gateway.alert.conf_import_gtw')}`);
      if (confirm.value && fileToUpload !== null) {
        if (conf.result[0].activa == 1) {
          if ((await this.utilService.checkIps(this.importJson.general.ipv, null)).length == 0 &&
            (await this.utilService.checkIps(this.importJson.general.cpus[0].ipb, null)).length == 0 &&
            (await this.utilService.checkIps(this.importJson.general.cpus[1].ipb, null)).length == 0) {
            result = await this.gatewayService.importGtw(fileToUpload, this.configurationId, this.site.idEMPLAZAMIENTO).toPromise();
            if (result && result.msg) {
              let title = this.dataService.getDataGatewayTitle();
              title = title.substring(0, title.indexOf(" - Pasarela") >= 0 ? title.indexOf(" - Pasarela") : title.length);
              let beginIndexName = this.importJsonName.indexOf("_") > 0 ? this.importJsonName.indexOf("_") : 0;
              let finalIndexName = this.importJsonName.indexOf("_", beginIndexName + 1) > 0 ? this.importJsonName.indexOf("_", beginIndexName + 1) : this.importJsonName.length;
              let name = this.importJsonName.substring(beginIndexName + 1, finalIndexName - 2)
              await this.historicService.updateCfg(107, name, title).toPromise();
              await this.alertService.successMessage(``, `${this.translate.instant('config.alert.succ_import_cfg')}`);
              this.importGW.nativeElement.value = '';
              this.dialogRef.close(true);
              return;
            } else {
              await this.alertService.errorMessage(`Error`, `${result.err}.`);
              context.type = 'IMPORT';
              this.importGW.nativeElement.value = '';
              return;
            }
          }
          else {
            await this.alertService.errorMessage(`Error`, `${this.translate.instant('config.alert.err_import_cfg', { value: this.importJson.general.name })}`);
            context.type = 'IMPORT';
            this.importGW.nativeElement.value = '';
            return;
          }
        } else {
          result = await this.gatewayService.importGtw(fileToUpload, this.configurationId, this.site.idEMPLAZAMIENTO).toPromise();
          if (result && result.msg) {
            let title = this.dataService.getDataGatewayTitle();
            title = title.substring(0, title.indexOf(" - Pasarela") >= 0 ? title.indexOf(" - Pasarela") : title.length);
            let beginIndexName = this.importJsonName.indexOf("_") > 0 ? this.importJsonName.indexOf("_") : 0;
            let finalIndexName = this.importJsonName.indexOf("_", beginIndexName + 1) > 0 ? this.importJsonName.indexOf("_", beginIndexName + 1) : this.importJsonName.length;
            let name = this.importJsonName.substring(beginIndexName + 1, finalIndexName - 2)
            await this.historicService.updateCfg(107, name, title).toPromise();
            await this.alertService.successMessage(``, `${this.translate.instant('config.alert.succ_import_cfg')}`);
            this.importGW.nativeElement.value = '';
            this.dialogRef.close(true);
            return;
          } else {
            await this.alertService.errorMessage(`Error`, `${result.err}.`);
            context.type = 'IMPORT';
            this.importGW.nativeElement.value = '';
            return;
          }
        }
      } else {
        this.cancelModifyImportGtw;
      }
    } catch (error: any) {
      this.app.catchError(error);
    }
  }
  async importGtwModified() {
    try {
      if (this.importForm.valid) {
        let result;
        this.importJson.general.name = this.importForm.value.name;
        this.importJson.general.ipv = this.importForm.value.ipv;
        this.importJson.general.cpus[0].ipg = this.importForm.value.gatewayf; //gateway
        this.importJson.general.cpus[1].ipg = this.importForm.value.gatewayf; //gateway
        this.importJson.general.cpus[0].ipb = this.importForm.value.cpu0;
        this.importJson.general.cpus[1].ipb = this.importForm.value.cpu1;
        const fileTxt = JSON.stringify(this.importJson);
        const bytes = new TextEncoder().encode(fileTxt);
        const file: File = new File([bytes], this.importJsonName);
        if (this.importJson.general.ipv !== this.importJson.general.cpus[0].ipb &&
          this.importJson.general.cpus[0].ipb !== this.importJson.general.cpus[1].ipb &&
          this.importJson.general.cpus[1].ipb !== this.importJson.general.ipv) {

          if ((await this.utilService.checkIps(this.importJson.general.ipv, null)).length == 0 &&
            (await this.utilService.checkIps(this.importJson.general.cpus[0].ipb, null)).length == 0 &&
            (await this.utilService.checkIps(this.importJson.general.cpus[1].ipb, null)).length == 0) {

            result = await this.gatewayService.importGtw(file, this.configurationId, this.site.idEMPLAZAMIENTO).toPromise();
            if (result && result.msg) {
              let title = this.dataService.getDataGatewayTitle();
              title = title.substring(0, title.indexOf(" - Pasarela") >= 0 ? title.indexOf(" - Pasarela") : title.length);
              await this.historicService.updateCfg(107, this.importForm.value.name, title).toPromise();
              await this.alertService.successMessage(``, `${this.translate.instant('config.alert.succ_import_cfg')}`);
              this.dialogRef.close(true);
              return;
            } else {
              await this.alertService.errorMessage(``, `${result.err}.`);
            }
          } else {

            if ((await this.utilService.checkIps(this.importJson.general.ipv, null)).length != 0) {
              if (this.utilService.configurationIp.length != 0) {
                this.nEmplazamiento = this.utilService.configurationIp.map((index) => {
                  return `${this.translate.instant('err.DUPLICATED_IP_BODY_GTW', {value: index.nombre})}`;
                })
                await this.alertService.errorMessage(``, `${this.translate.instant('err.DUPLICATED_IPV', {value1: this.importJson.general.ipv, value2: this.nEmplazamiento })}`);
                return;
              }
            }
            if (await (await this.utilService.checkIps(this.importJson.general.cpus[0].ipb, null)).length != 0) {
              if (this.utilService.configurationIp.length != 0) {
                this.nEmplazamiento = this.utilService.configurationIp.map((index) => {
                  return `${this.translate.instant('err.DUPLICATED_IP_BODY_GTW', {value: index.nombre})}`;
                })
                await this.alertService.errorMessage(``, `${this.translate.instant('err.DUPLICATED_IPCPU0', {value1: this.importJson.general.cpus[0].ipb, value2: this.nEmplazamiento })}`);
                return;
              }
            }
            if ((await this.utilService.checkIps(this.importJson.general.cpus[1].ipb, null)).length != 0) {
              if (this.utilService.configurationIp.length != 0) {
                this.nEmplazamiento = this.utilService.configurationIp.map((index) => {
                  return `${this.translate.instant('', {value: index.nombre})}`;
                })
                await this.alertService.errorMessage(`err.DUPLICATED_IP_BODY_GTW`, `${this.translate.instant('err.DUPLICATED_IPCPU1', {value1: this.importJson.general.cpus[1].ipb, value2: this.nEmplazamiento })}`);
                return;
              }
            }
          }


        } else {
          await this.alertService.errorMessage(`Error`, `${this.translate.instant('err.DUPLICATED_IP')}`);
        }
      } else {
        this.alertService.errorMessage(`${this.translate.instant('appsettings.ERROR_FORM')}`, `${this.translate.instant('appsettings.INVALID_FORM')}`);
      }
    } catch (error: any) {
      this.app.catchError(error);
    }
  }

  cancelModifyImportGtw() {
    this.type = 'EDIT';
  }
}

