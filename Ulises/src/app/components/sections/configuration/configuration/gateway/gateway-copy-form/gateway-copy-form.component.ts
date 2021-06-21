import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';
import { AppSettings } from 'src/app/core/app.settings';
import { ConfigurationGateway } from 'src/app/_models/configs/configuration/ConfigurationGateway';
import { Gateway } from 'src/app/_models/configs/gateway/Gateway';
import { AlertService } from 'src/app/_services/alert.service';
import { ConfigService } from 'src/app/_services/config.service';
import { DataService } from 'src/app/_services/data.service';
import { GatewayService } from 'src/app/_services/gateway.service';

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

  configId!: number;

  configurationIps: string[] = [];

  showSpinner: boolean = false;
  appset: any;

  constructor(public dialogRef: MatDialogRef<GatewayCopyFormComponent>, @Inject(MAT_DIALOG_DATA) public data: Gateway,
    private readonly alertService: AlertService, @Inject(AppComponent) private readonly app: AppComponent,
    private readonly gatewayService: GatewayService, private readonly dataService: DataService, private readonly configService: ConfigService) { }

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
    });
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

    if (this.configurationIps.includes(ip)) {
      await this.alertService.errorMessage(`Error`, `La ip ${ip} ya se encuentra en la configuración.`);
      return true;
    }

    return false;
  }

  async confirm() {
    try {
      if (this.copyForm.valid) {

        this.showSpinner = true;
        let isValidate = await this.validateGateway(this.copyForm.value.ipv, this.copyForm.value.ipCpu0, this.copyForm.value.ipCpu1, this.copyForm.value.name)
        if (!isValidate) return;

        if (this.copyForm.value.ipv === this.copyForm.value.ipCpu0 || this.copyForm.value.ipv === this.copyForm.value.ipCpu1
          || this.copyForm.value.ipCpu0 === this.copyForm.value.ipCpu1) {
          this.showSpinner = false;
          await this.alertService.errorMessage(`Error`, `Los valores de las ips deben ser diferentes`);
          return;
        }

        const result = await this.gatewayService.copyGtw(this.gateway.idCGW, this.copyForm.value.name, this.copyForm.value.ipv, this.copyForm.value.ipCpu0,
          this.copyForm.value.ipCpu1).toPromise();
        this.showSpinner = false;

        if (result && result.data === 'OK') {
          await this.alertService.successMessage(``, `La pasarela ${this.gateway.name} ha sido copiada`);
          this.dialogRef.close(true);
        } else {
          if (result.error && result.error === 'ER_DUP_ENTRY') {
            await this.alertService.errorMessage(``, `El nombre ${this.copyForm.value.name} ya existe en esta configuración`);
          } else if (result.error && result.error === 'ER_DUP_IP0_ENTRY') {
            await this.alertService.errorMessage(``, `La ip ${this.copyForm.value.ipCpu0} ya existe en esta configuración`);
          } else if (result.error && result.error === "ER_DUP_IP1_ENTRY") {
            await this.alertService.errorMessage(``, `La ip ${this.copyForm.value.ipCpu1} ya existe en esta configuración`);
          } else {
            await this.alertService.errorMessage(``, result.data);
          }
        }
      } else {
        this.alertService.errorMessage(AppSettings.ERROR_FORM, AppSettings.INVALID_FORM);
      }
    } catch (error) {
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