import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from 'src/app/app.component';
import { AppSettings } from 'src/app/core/app.settings';
import { ConfigurationGateway } from 'src/app/_models/configs/configuration/ConfigurationGateway';
import { ConfigurationIp } from 'src/app/_models/configs/configuration/ConfigurationIp';
import { ConfigurationIpResponse } from 'src/app/_models/configs/configuration/response/ConfigurationIpResponse';
import { Gateway } from 'src/app/_models/configs/gateway/Gateway';
import { AlertService } from 'src/app/_services/alert.service';
import { ConfigService } from 'src/app/_services/config.service';
import { DataService } from 'src/app/_services/data.service';
import { GatewayService } from 'src/app/_services/gateway.service';
import { HistoricService } from 'src/app/_services/historic.service';
import { UtilsService } from 'src/app/_services/utils.service';

@Component({
  selector: 'app-gateway-copy-form',
  templateUrl: './gateway-copy-form.component.html',
  styleUrls: ['./gateway-copy-form.component.scss']
})
export class GatewayCopyFormComponent implements OnInit {

  copyForm!: FormGroup;
  gateway!: Gateway;

  name!: string;
  ipv!: string;
  ipCpu0!: string;
  ipCpu1!: string;
  ipGTW!: string;
  
  configurationIp!: ConfigurationIp[];
  configurationIpResponse!: ConfigurationIpResponse;

  nEmplazamiento !: string[];


  configId!: number;

  configurationIps: string[] = [];

  showSpinner: boolean = false;
  appset: any;

  constructor(public dialogRef: MatDialogRef<GatewayCopyFormComponent>, @Inject(MAT_DIALOG_DATA) public data: Gateway,
    private readonly alertService: AlertService, @Inject(AppComponent) private readonly app: AppComponent, private readonly utilService: UtilsService,
    private readonly gatewayService: GatewayService, private readonly dataService: DataService, private readonly configService: ConfigService, 
    private historicService: HistoricService, private translate: TranslateService) { }

  ngOnInit() {
    this.appset = AppSettings;
    this.gateway = this.data;
    this.ipv = this.gateway.ipv;
    this.configId = this.dataService.getDataConfigId();

    this.initIps();
    this.initForm();
  }

  async initIps() {

    const configurationGatewaysResponse = await this.configService.getConfigGateways(this.configId).toPromise();
    let configurationGateways: ConfigurationGateway[] = [];

    if (configurationGatewaysResponse && configurationGatewaysResponse.general && configurationGatewaysResponse.general.length > 0) {
      configurationGateways = [...configurationGatewaysResponse.general];
    }

    for (const gateway of configurationGateways) {
      const gatewayResult = await this.gatewayService.getGatewayById(gateway.idCGW).toPromise();

      if (gatewayResult && gatewayResult.result && gatewayResult.result.length > 0) {

        const gtw = gatewayResult.result[0];

        this.configurationIps.push(gtw.ipv);
        this.configurationIps.push(gtw.ip_cpu0);
        this.configurationIps.push(gtw.ip_cpu1);
      }
    }
  }

  initForm() {
    this.copyForm = new FormGroup({
      name: new FormControl(this.name, [Validators.required, Validators.pattern(AppSettings.NAME_PATTERN)]),
      ipv: new FormControl(this.ipv, [Validators.required, Validators.pattern(AppSettings.IP_PATTERN)]),
      ipCpu0: new FormControl(this.ipCpu0, [Validators.required, Validators.pattern(AppSettings.IP_PATTERN)]),
      ipCpu1: new FormControl(this.ipCpu1, [Validators.required, Validators.pattern(AppSettings.IP_PATTERN)]),
      ipGTW: new FormControl(this.ipGTW, [Validators.required, Validators.pattern(AppSettings.IP_PATTERN)])
    });
  }

  async checkGatewayNameError(name: string): Promise<boolean> {
    const result = await this.gatewayService.checkName(name, this.configId, this.gateway.idCGW).toPromise();
    if (result !== 'NO_ERROR') {
      const message = (result === 'NAME_DUP') ? `${this.translate.instant('gateway.alert.dup_name_gtw', {value: name})}` : result;
      await this.alertService.errorMessage(``, message, this.translate.instant('button.accept'));
      return true;
    }
    return false;
  }

  async checkIpError(ip: string): Promise<boolean> {

    if (this.configurationIps.includes(ip)) {
      await this.alertService.errorMessage(``, 
        this.translate.instant('gateway.alert.dup_ip_gtw', {ip: ip}), 
        this.translate.instant('button.accept'));
      return true;
    }

    return false;
  }

  async confirm() {
    try {
      if (this.copyForm.valid) {
        let result;
        this.showSpinner = true;
        let isValidate = await this.validateGateway(this.copyForm.value.ipv, this.copyForm.value.ipCpu0, this.copyForm.value.ipCpu1, this.copyForm.value.name)
        if (!isValidate) {
          return;
        } else {
          if (this.copyForm.value.ipv === this.copyForm.value.ipCpu0 || this.copyForm.value.ipv === this.copyForm.value.ipCpu1 
              || this.copyForm.value.ipCpu0 === this.copyForm.value.ipCpu1) {
              this.showSpinner = false;
              await this.alertService.errorMessage(``, 
                this.translate.instant('gateway.alert.err_copy_gtw_same_ip', {ip1: this.copyForm.value.ipv, ip2: this.copyForm.value.ipCpu0, ip3: this.copyForm.value.ipCpu1}),
                // `La Ip ${this.copyForm.value.ipv}, la Ip ${this.copyForm.value.ipCpu0} y la ip ${this.copyForm.value.ipCpu1} no pueden ser iguales.`, 
                this.translate.instant('button.accept'));
              return;
          }
          this.showSpinner = false;
          if ((await this.utilService.checkIps(this.copyForm.value.ipv, 0)).length === 0 &&
              (await this.utilService.checkIps(this.copyForm.value.ipCpu0, 0)).length === 0 &&
              (await this.utilService.checkIps(this.copyForm.value.ipCpu1, 0)).length === 0 && 
              !(await this.checkIpError(this.copyForm.value.ipGTW))) {
                result = await this.gatewayService.copyGtw(this.gateway.idCGW, this.copyForm.value.name, this.copyForm.value.ipv, this.copyForm.value.ipCpu0,
                this.copyForm.value.ipCpu1, this.copyForm.value.ipGTW).toPromise();
                if (result && result.data === 'OK') {
                  let title = this.dataService.getDataGatewayTitle();
                  title = title.substring(0, title.indexOf(" - {GATEWAY} ") >= 0 ? title.indexOf(" - {GATEWAY} ") : title.length);
                  await this.historicService.updateCfg(107, this.copyForm.value.name, title).toPromise();
                  await this.alertService.successMessage(``, 
                    this.translate.instant('gateway.alert.succ_copy_gtw', {value: this.gateway.name}), 
                    this.translate.instant('button.accept'));
                  this.dialogRef.close(true);
                } else {
                  if (result.error && result.error === 'ER_DUP_ENTRY') {
                    await this.alertService.errorMessage(``, 
                      this.translate.instant('err.DUPLICATED_NAME_CFG',{value:this.copyForm.value.name}), 
                      this.translate.instant('button.accept'));
                  } else if (result.error && result.error === 'ER_DUP_IP0_ENTRY') {
                    await this.alertService.errorMessage(``, 
                      this.translate.instant('err.DUPLICATED_IP_CPU0_CFG',{value: this.copyForm.value.ipCpu0}), 
                      this.translate.instant('button.accept'));
                  } else if (result.error && result.error === "ER_DUP_IP1_ENTRY") {
                    await this.alertService.errorMessage(``, 
                      this.translate.instant('err.DUPLICATED_IP_CPU1_CFG',{value: this.copyForm.value.ipCpu1}), 
                      this.translate.instant('button.accept'));
                  }
                }
          } else {
              this.configurationIpResponse = await this.configService.checkConfigIp(this.copyForm.value.ipv, 0).toPromise();
              this.configurationIp = [...this.configurationIpResponse.result];
              if (this.configurationIp.length!=0){
                this.nEmplazamiento = this.configurationIp.map((index) => {
                  return `${this.translate.instant('err.DUPLICATED_BODY', {value1: index.nombre_conf, value2: index.nombre})}`;
                })      
                await this.alertService.errorMessage(``,
                  this.translate.instant('err.DUPLICATED_IPV',{value1: this.copyForm.value.ipv, value2: this.nEmplazamiento}), 
                  this.translate.instant('button.accept'));
                return;        
              }

              this.configurationIpResponse = await this.configService.checkConfigIp(this.copyForm.value.ipCpu0, 0).toPromise();
              this.configurationIp = [...this.configurationIpResponse.result];
              if (this.configurationIp.length!=0){
                this.nEmplazamiento = this.configurationIp.map((index) => {
                  return `${this.translate.instant('err.DUPLICATED_BODY', {value1: index.nombre_conf, value2: index.nombre})}`;
                })      
                await this.alertService.errorMessage(``,
                  this.translate.instant('err.DUPLICATED_IPCPU0',{value1: this.copyForm.value.ipCpu0, value2: this.nEmplazamiento}), 
                  this.translate.instant('button.accept'));
                return;        
              }

              this.configurationIpResponse = await this.configService.checkConfigIp(this.copyForm.value.ipCpu1, 0).toPromise();
              this.configurationIp = [...this.configurationIpResponse.result];
              if (this.configurationIp.length!=0){
                this.nEmplazamiento = this.configurationIp.map((index) => {
                  return `${this.translate.instant('err.DUPLICATED_BODY', {value1: index.nombre_conf, value2: index.nombre})}`;
                })      
                await this.alertService.errorMessage(``,
                  this.translate.instant('err.DUPLICATED_IPCPU1',{value1: this.copyForm.value.ipCpu1, value2: this.nEmplazamiento}), 
                  this.translate.instant('button.accept'));
                return;        
              }
          }
        } 
      } else {
        this.alertService.errorMessage(this.translate.instant('appsettings.ERROR_FORM'), this.translate.instant('appsettings.INVALID_FORM'), this.translate.instant('button.accept'));
      }
    } catch (error: any) {
      this.app.catchError(error);
    }
  }

  async validateGateway(ipvStr: string, ipb1Str: string, ipb2Str: string, nombreStr: string) {
    const ipv = await this.checkIpError(ipvStr);
    if (ipv) {
      this.showSpinner = false;
      return false;
    }

    const ipb1 = await this.checkIpError(ipb1Str);
    if (ipb1) {
      this.showSpinner = false;
      return false;
    }

    const ipb2 = await this.checkIpError(ipb2Str);
    if (ipb2) {
      this.showSpinner = false;
      return false;
    }

    const name = await this.checkGatewayNameError(nombreStr);
    if (name) {
      this.showSpinner = false;
      return false;
    }

    return true;
  }

}