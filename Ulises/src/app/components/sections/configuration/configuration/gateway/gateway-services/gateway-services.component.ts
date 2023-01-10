import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from 'src/app/app.component';
import { AppSettings } from 'src/app/core/app.settings';
import { Gateway } from 'src/app/_models/configs/gateway/Gateway';
import { GatewayIp } from 'src/app/_models/configs/gateway/GatewayIpResponse';
import { Server } from 'src/app/_models/configs/gateway/GatewayPost';
import { GatewayAvaibleServicesItem } from 'src/app/_models/configs/gateway/services/GatewayAvaibleServicesItem';
import { GatewayAvailableServicesResponse } from 'src/app/_models/configs/gateway/services/GatewayAvailableServicesResponse';
import { AlertService } from 'src/app/_services/alert.service';
import { GatewayService } from 'src/app/_services/gateway.service';
import { UserService } from 'src/app/_services/user.service';
import { LocalConfig } from 'src/app/_models/local-config/LocalConfig';
import { ConfigService } from 'src/app/_services/config.service';

@Component({
  selector: 'gateway-services',
  templateUrl: './gateway-services.component.html',
  styleUrls: ['./gateway-services.component.scss']
})
export class GatewayServicesComponent implements OnInit {

  @Input('gateway') gateway!: Gateway;
  @Input('gatewayIps') gatewayIps!: GatewayIp[];
  @Input('form') form!: FormGroup;

  gatewayAvailableServicesResponse!: GatewayAvailableServicesResponse;
  gatewayAvaibleServicesItem!: GatewayAvaibleServicesItem[];

  proxyFormControl: FormControl = new FormControl('', [Validators.pattern(AppSettings.IP_PATTERN)]);
  registrarsFormControl: FormControl = new FormControl('', [Validators.pattern(AppSettings.IP_PATTERN)]);
  serversFormControl: FormControl = new FormControl('', [Validators.pattern(AppSettings.IP_PATTERN)]);

  trapFormControl: FormControl = new FormControl('', [Validators.required, Validators.pattern(AppSettings.IP_PATTERN)]);
  trapPortFormControl: FormControl = new FormControl('', [Validators.required, Validators.pattern(AppSettings.PORT)]);
  trapServerFormControl: FormControl = new FormControl('', [Validators.required]);

  selectedProxy!: Server | null;
  selectedRegistrar!: Server | null;
  selectedServer!: Server | null;
  selectedTrap: string | null = null;

  ready: boolean = false;

  servers!: any[];
  proxies!: any[];
  registrars!: any[];
  traps!: any[];

  MAX_PROXIES: number = 2;
  MAX_REGISTRARS: number = 2;
  MAX_SERVERS: number = 2;
  MAX_TRAPS: number = 4;

  refresher: any = [
    { value: 0, viewValue: 'gateway.refresh_value0'},
    { value: 1, viewValue: 'gateway.refresh_value1'},
    { value: 2, viewValue: 'gateway.refresh_value2'},
  ]

  visualizationMode: boolean = false;
  showSpinner: boolean = false;
  supervisionSelected: boolean = false;
  appset: any;

  localConfig!: LocalConfig;


  constructor(private readonly gatewayService: GatewayService, private readonly app: AppComponent, private readonly alertService: AlertService,
    private readonly userService: UserService, private readonly translate: TranslateService, private readonly configService: ConfigService ) { }

  async ngOnInit() {
    this.appset = AppSettings;
    try {
      this.visualizationMode = (this.visualizationPermission()) ? true : false;
      this.traps = [...this.form.value.traps];
      this.initSelectedProxy();
      this.initSelectedRegistrar();
      this.initSelectedServer();
      this.gatewayAvailableServicesResponse = await this.gatewayService.getAvailableServices().toPromise();
      if (this.gatewayAvailableServicesResponse && this.gatewayAvailableServicesResponse.result) {
        this.gatewayAvaibleServicesItem = [...this.gatewayAvailableServicesResponse.result];
        this.ready = true;
      }
      this.supervisionSelected = this.form.value.supervisionTlf === 1 ? true : false;

      this.initSNMPV2();

      this.localConfig = await this.configService.getLocalConfig().toPromise();
      this.localConfig.ntpDefault = this.localConfig.ntpDefault === undefined ? "127.0.0.1" : this.localConfig.ntpDefault;

    } catch (error: any) {
      this.app.catchError(error);
    }
  }

  visualizationPermission() {
    return (!this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && this.userService.isRole('VISUALIZATION'))
      || (!this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && this.userService.isRole('SUPERVISED_CONFIGURATION'));
  }

  initSelectedProxy() {
    setTimeout(() => {
      this.proxies = [];
      this.proxies = [...this.form.value.proxys];

      const selected = this.proxies.find(proxy => proxy.selected);
      if (selected) {
        this.selectedProxy = selected;
      } else {
        if (this.proxies.length > 0) {
          this.selectedProxy = Object.assign({}, this.proxies[0]);
          this.form.value.proxys[0].selected = true;
        }
      }
    });
  }

  initSelectedRegistrar() {
    setTimeout(() => {
      this.registrars = [];
      this.registrars = [...this.form.value.registrars];

      const selected = this.registrars.find(registrar => registrar.selected);
      if (selected) {
        this.selectedRegistrar = selected;
      } else {
        if (this.registrars.length > 0) {
          this.selectedRegistrar = Object.assign({}, this.registrars[0]);
          this.form.value.registrars[0].selected = true;
        }
      }
    });
  }

  initSelectedServer() {
    setTimeout(() => {
      this.servers = [];
      this.servers = [...this.form.value.listServers];

      const selected = this.servers.find(server => server.selected);
      if (selected) {
        this.selectedServer = selected;
      } else {
        if (this.servers.length > 0) {
          this.selectedServer = Object.assign({}, this.servers[0]);
          this.form.value.listServers[0].selected = true;
        }
      }
    });
  }

  initSNMPV2() {
    (this.form.getRawValue().snmpv2 && !this.visualizationMode) ? this.form.controls['comunidad_snmp'].enable()
      : this.form.controls['comunidad_snmp'].disable();    
  }

  changeSNMPV2() {
    (!this.form.getRawValue().snmpv2 && !this.visualizationMode) ? this.form.controls['comunidad_snmp'].enable()
      : this.form.controls['comunidad_snmp'].disable();
  }

  resetErrors() {
    this.proxyFormControl.setErrors(null);
    this.registrarsFormControl.setErrors(null);
    this.serversFormControl.setErrors(null);
    this.trapFormControl.setErrors(null);
    this.trapPortFormControl.setErrors(null);
    this.trapServerFormControl.setErrors(null);
  }

  async copyFrom(gateway: GatewayAvaibleServicesItem) {

    try {

      this.showSpinner = true;
      const res = await this.gatewayService.getGatewayCopy(gateway.idpasarela).toPromise();
      const ips = [...await this.gatewayService.getGatewayIpList(gateway.idpasarela).toPromise()];
      this.showSpinner = false;

      if (res && res.result && res.result.length > 0) {
        const gtwData = res.result[0];

        this.form.patchValue({
          PuertoLocalSIP: gtwData.puerto_sip,
          periodo_supervision: (gtwData.periodo_supervision),
          puerto_servicio_snmp: gtwData.puerto_servicio_snmp,
          snmpv2: gtwData.snmpv2 === 1,
          comunidad_snmp: gtwData.comunidad_snmp,
          puerto_snmp: (gtwData.puerto_snmp),
          nombre_snmp: gtwData.nombre_snmp,
          localizacion_snmp: gtwData.localizacion_snmp,
          contacto_snmp: gtwData.contacto_snmp,
          puerto_servicio_web: (gtwData.puerto_servicio_web),
          tiempo_sesion: (gtwData.tiempo_sesion),
          puerto_rtsp: (gtwData.puerto_rtsp),
          servidor_rtsp: gtwData.servidor_rtsp,
          servidor_rtspb: gtwData.servidor_rtspb,
          listServers: [...this.getServerItems(ips, "NTP")],
          proxys: [...this.getServerItems(ips, "PRX")],
          registrars: [...this.getServerItems(ips, "REG")],
          traps: [...this.getTraps(ips)],
          refresher: gtwData.refresher,
          supervisionTlf: gtwData.supervisionTlf
        });

        this.traps = [];
        this.traps = [...this.form.value.traps];

        this.initSelectedProxy();
        this.initSelectedRegistrar();
        this.initSelectedServer();
        this.form.markAsDirty();
      }
    } catch (error: any) {
      this.app.catchError(error);
    }
  }

  onTabChanged() {
    this.resetErrors();
  }

  checkDuplicateProxy(proxy: string) {
    const find = this.form.value.proxys.find((item: Server) => { return item.ip === proxy });
    return find !== null && find !== undefined;
  }

  checkDuplicateRegistrar(registrar: string) {
    const find = this.form.value.registrars.find((item: Server) => { return item.ip === registrar });
    return find !== null && find !== undefined;
  }

  checkDuplicateServer(server: string) {
    const find = this.form.value.listServers.find((item: Server) => { return item.ip === server });
    return find !== null && find !== undefined;
  }

  checkDuplicateTrap(trap: string) {
    const find = this.form.value.traps.find((item: string) => { return item === trap });
    return find !== null && find !== undefined;
  }

  async deleteProxy() {
    if (this.selectedProxy == null) {
      await this.alertService.errorMessage(``, `${this.translate.instant('gateway.alert.warn_select_item')},this.translate.instant('button.accept')`,this.translate.instant('button.accept'));
      this.resetErrors();
      return;
    }

    const result = await this.alertService.confirmationMessage(``, `${this.translate.instant(('gateway.alert.conf_delete_proxy'))}`,this.translate.instant('button.accept'),this.translate.instant('button.cancel'));
    if (result.value) {
      this.form.value.proxys.forEach((server: Server, idx: number) => {
        if (server.selected) {
          this.form.value.proxys.splice(idx, 1);
        }
      });

      this.proxies = [];
      this.selectedProxy = null;
      if (this.form.value.proxys.length > 0) {
        this.proxies = [...this.form.value.proxys];
        this.selectedProxy = Object.assign({}, this.proxies[0]);
        this.form.value.proxys[0].selected = true;
      }
      this.form.markAsDirty();
      this.serversFormControl.reset();
      this.resetErrors();
      this.form.get("proxys")?.markAsDirty();
      await this.alertService.successMessage(``, `${this.translate.instant('gateway.alert.succ_delete_proxy')}`,this.translate.instant('button.accept'));
    }
  }

  async addProxy() {
    if (this.proxyFormControl.value === null || this.proxyFormControl.value === '') {
      await this.alertService.errorMessage('', `${this.translate.instant('gateway.alert.err_empty_proxy')}`,this.translate.instant('button.accept'));
      this.resetErrors();
      return;
    }

    if (this.form.value.proxys.length === this.MAX_PROXIES) {
      await this.alertService.errorMessage('', `${this.translate.instant('gateway.alert.err_max_proxy')}`,this.translate.instant('button.accept'));
      this.proxyFormControl.reset();
      this.resetErrors();
      return;
    }

    if (this.proxyFormControl.valid) {

      if (this.checkDuplicateProxy(this.proxyFormControl.value)) {
        await this.alertService.errorMessage('', `${this.translate.instant('gateway.alert.err_duply_proxy')}`,this.translate.instant('button.accept'));
        this.resetErrors();
        return;
      }

      const selected = this.form.value.proxys.length === 0 ? true : false;
      this.form.value.proxys.push({ 'ip': this.proxyFormControl.value, 'selected': selected });
      this.form.markAsDirty();
      this.form.get("proxys")?.markAsDirty();
      await this.alertService.successMessage(``, `${this.translate.instant('gateway.alert.succ_add_proxy', {value: this.proxyFormControl.value})}`,this.translate.instant('button.accept'));

      this.proxies = [];
      this.proxies = [...this.form.value.proxys];
      this.initSelectedProxy();
      this.proxyFormControl.reset();
      this.resetErrors();
    } else {
      await this.alertService.errorMessage('', `${this.translate.instant('gateway.alert.info_proxy_value')}`,this.translate.instant('button.accept'));
      this.proxyFormControl.reset();
      this.resetErrors();
    }
  }

  async deleteRegistrar() {
    if (this.selectedRegistrar == null) {
      await this.alertService.errorMessage(``, `${this.translate.instant('gateway.alert.warn_select_item')}`,this.translate.instant('button.accept'));
      this.resetErrors();
      return;
    }

    const result = await this.alertService.confirmationMessage(``, `${this.translate.instant('gateway.alert.conf_delete_registrar')}`,this.translate.instant('button.accept'),this.translate.instant('button.cancel'));
    if (result.value) {
      this.form.value.registrars.forEach((server: Server, idx: number) => {
        if (server.selected) {
          this.form.value.registrars.splice(idx, 1);
        }
      });

      this.registrars = [];
      this.selectedRegistrar = null;
      if (this.form.value.registrars.length > 0) {
        this.registrars = [...this.form.value.registrars];
        this.selectedRegistrar = Object.assign({}, this.registrars[0]);
        this.form.value.registrars[0].selected = true;
      }
      this.form.markAsDirty();
      this.serversFormControl.reset();
      this.resetErrors();
      this.form.get("registrars")?.markAsDirty();
      await this.alertService.successMessage(``, `${this.translate.instant('gateway.alert.succ_delete_registrar')}`,this.translate.instant('button.accept'));
    }
  }

  async addRegistrar() {
    if (this.registrarsFormControl.value === null || this.registrarsFormControl.value === '') {
      await this.alertService.errorMessage('', `${this.translate.instant('gateway.alert.err_empty_registrar')}`,this.translate.instant('button.accept'));
      this.resetErrors();
      return;
    }

    if (this.form.value.registrars.length === this.MAX_REGISTRARS) {
      await this.alertService.errorMessage('', `${this.translate.instant('gateway.alert.err_max_registrar')}`,this.translate.instant('button.accept'));
      this.registrarsFormControl.reset();
      this.resetErrors();
      return;
    }

    if (this.registrarsFormControl.valid) {

      if (this.checkDuplicateRegistrar(this.registrarsFormControl.value)) {
        await this.alertService.errorMessage('', `${this.translate.instant('gateway.alert.err_duply_registrar')}`,this.translate.instant('button.accept'));
        this.resetErrors();
        return;
      }

      const selected = this.form.value.registrars.length === 0 ? true : false;
      this.form.value.registrars.push({ 'ip': this.registrarsFormControl.value, 'selected': selected });
      this.form.markAsDirty();
      this.form.get("registrars")?.markAsDirty();
      await this.alertService.successMessage(``, `${this.translate.instant('gateway.alert.succ_add_registrar', {value: this.registrarsFormControl.value})}`,this.translate.instant('button.accept'));

      this.registrars = [];
      this.registrars = [...this.form.value.registrars];
      this.initSelectedRegistrar();
      this.registrarsFormControl.reset();
      this.resetErrors();
    } else {
      await this.alertService.errorMessage('', `${this.translate.instant('gateway.alert.info_registrar_value')}`,this.translate.instant('button.accept'));
      this.registrarsFormControl.reset();
      this.resetErrors();
    }
  }

  async deleteNTP() {
    if (this.selectedServer == null) {
      await this.alertService.errorMessage(``, `${this.translate.instant('gateway.alert.warn_select_item')}`,this.translate.instant('button.accept'));
      this.resetErrors();
      return;
    }

    const result = await this.alertService.confirmationMessage(``, `${this.translate.instant('gateway.alert.conf_delete_NTP')}`,this.translate.instant('button.accept'),this.translate.instant('button.cancel'));
    if (result.value) {
      this.form.value.listServers.forEach((server: Server, idx: number) => {
        if (server.selected) {
          this.form.value.listServers.splice(idx, 1);
        }
      });

      this.servers = [];
      this.selectedServer = null;
      if (this.form.value.listServers.length > 0) {
        this.servers = [...this.form.value.listServers];
        this.selectedServer = Object.assign({}, this.servers[0]);
        this.form.value.listServers[0].selected = true;
      }
      this.form.markAsDirty();
      this.serversFormControl.reset();
      this.resetErrors();
      this.form.get("listServers")?.markAsDirty();
      await this.alertService.successMessage(``, `${this.translate.instant('gateway.alert.succ_delete_NTP')}`,this.translate.instant('button.accept'));
    }
  }

  async addNTP() {
    if (this.serversFormControl.value === null || this.serversFormControl.value === '') {
      await this.alertService.errorMessage('', `${this.translate.instant('gateway.alert.err_empty_NTP')}`,this.translate.instant('button.accept'));
      this.resetErrors();
      return;
    }
    
    if (this.form.value.listServers.length === this.MAX_SERVERS) {
      await this.alertService.errorMessage('', `${this.translate.instant('gateway.alert.err_max_NTP')}`,this.translate.instant('button.accept'));
      this.serversFormControl.reset();
      this.resetErrors();
      return;
    }

    if (this.serversFormControl.valid) {

      if (this.checkDuplicateServer(this.serversFormControl.value)) {
        await this.alertService.errorMessage('', `${this.translate.instant('gateway.alert.err_duply_NTP')}`,this.translate.instant('button.accept'));
        this.resetErrors();
        return;
      }

      const selected = this.form.value.listServers.length === 0 ? true : false;
      this.form.value.listServers.push({ 'ip': this.serversFormControl.value, 'selected': selected });
      this.form.markAsDirty();
      this.form.get("listServers")?.markAsDirty();
      await this.alertService.successMessage(``, `${this.translate.instant('gateway.alert.succ_add_NTP', {value: this.serversFormControl.value})} `,this.translate.instant('button.accept'));

      this.servers = [];
      this.servers = [...this.form.value.listServers];
      this.initSelectedServer();
      this.serversFormControl.reset();
      this.resetErrors();
    } else {
      await this.alertService.errorMessage('', `${this.translate.instant('gateway.alert.info_NTP_value')}`,this.translate.instant('button.accept'));
      this.proxyFormControl.reset();
      this.resetErrors();
    }
  }

  async deleteTrap() {
    if (this.selectedTrap == null) {
      await this.alertService.errorMessage(``, `${this.translate.instant('gateway.alert.warn_select_item')}`,this.translate.instant('button.accept'));
      this.resetErrors();
      return;
    }

    const result = await this.alertService.confirmationMessage(``, `${this.translate.instant('gateway.alert.conf_delete_trap', {value: this.selectedTrap})}`,this.translate.instant('button.accept'),this.translate.instant('button.cancel'));
    if (result.value) {
      const index: number = this.form.value.traps.indexOf(this.selectedTrap);
      this.form.value.traps.splice(index, 1);
      this.traps = [];
      this.traps = [...this.form.value.traps];
      this.selectedTrap = null;
      this.resetErrors();
      this.form.markAsDirty();
      this.form.get("traps")?.markAsDirty();
    }
  }

  async addTrap() {
    if (this.trapFormControl.value === null || this.trapFormControl.value === '') {
      this.trapFormControl.updateValueAndValidity();
    }
    if (this.trapPortFormControl.value === null || this.trapPortFormControl.value === '') {
      this.trapPortFormControl.updateValueAndValidity();
    }
    if (this.trapServerFormControl.value === null || this.trapServerFormControl.value === '') {
      this.trapServerFormControl.updateValueAndValidity();
    }

    if (this.form.value.traps.length === this.MAX_TRAPS) {
      await this.alertService.errorMessage('', `${this.translate.instant('gateway.alert.err_max_trap')}`,this.translate.instant('button.accept'));
      this.trapFormControl.reset();
      this.trapPortFormControl.reset();
      this.trapServerFormControl.reset();
      this.resetErrors();
      return;
    }

    if (this.trapFormControl.valid && this.trapPortFormControl.valid && this.trapServerFormControl.valid) {

      const trap = `${this.trapServerFormControl.value},${this.trapFormControl.value}/${this.trapPortFormControl.value}`;

      if (this.checkDuplicateTrap(trap)) {
        await this.alertService.errorMessage('', `${this.translate.instant('gateway.alert.err_duply_trap')}`,this.translate.instant('button.accept'));
        this.resetErrors();
        return;
      }

      if (trap.match(AppSettings.TRAP_PATTERN) == undefined) {
        await this.alertService.errorMessage(``, `${this.translate.instant('gateway.alert.err_empty_trap')}`,this.translate.instant('button.accept'));
        this.resetErrors();
        return;
      }

      this.form.value.traps.push(trap);
      this.form.markAsDirty();
      this.traps = [];
      this.traps = [...this.form.value.traps];
      this.trapFormControl.reset();
      this.trapPortFormControl.reset();
      this.trapServerFormControl.reset();
      this.resetErrors();
    } else {
      await this.alertService.errorMessage('', `${this.translate.instant('gateway.alert.info_trap_value')}`,this.translate.instant('button.accept'));
      this.trapFormControl.reset();
      this.trapPortFormControl.reset();
      this.trapServerFormControl.reset();
      this.resetErrors();
    }
    this.form.get("traps")?.markAsDirty();
  }

  selectTrap(trap: string) {
    if (this.visualizationMode) {
      return;
    }

    this.selectedTrap = (this.selectedTrap === trap) ? null : trap;
  }

  selectProxy(proxy: Server) {
    if (this.visualizationMode) {
      return;
    }

    if (this.selectedProxy !== null && !this.serverComparision(this.selectedProxy, proxy)) {
      this.selectedProxy = proxy;
      this.proxyChange();
    }
  }

  selectRegistrar(registrar: Server) {
    if (this.visualizationMode) {
      return;
    }

    if (this.selectedRegistrar !== null && !this.serverComparision(this.selectedRegistrar, registrar)) {
      this.selectedRegistrar = registrar;
      this.registrarChange();
    }
  }

  selectNTP(server: Server) {
    if (this.visualizationMode) {
      return;
    }

    if (this.selectedServer !== null && !this.serverComparision(this.selectedServer, server)) {
      this.selectedServer = server;
      this.serverChange();
    }
  }

  serverComparision(option: Server, value: Server): boolean {
    return option.ip === value.ip;
  }

  proxyChange() {
    this.form.value.proxys.forEach((proxy: Server) => {
      proxy.selected = (proxy.ip == this.selectedProxy?.ip);
    });
  }

  registrarChange() {
    this.form.value.registrars.forEach((registrar: Server) => {
      registrar.selected = (registrar.ip == this.selectedRegistrar?.ip);
    });
  }

  serverChange() {
    this.form.value.listServers.forEach((server: Server) => {
      server.selected = (server.ip == this.selectedServer?.ip);
    });
  }

  getServerItems(gatewayIps: GatewayIp[], type: string) {
    if (gatewayIps.length === 0) return [];

    return gatewayIps.filter(ips => ips.tipo === type).map((gatewayIp: GatewayIp) => {
      return { 'ip': gatewayIp.ip, 'selected': gatewayIp.selected === 1 }
    });
  }

  getTraps(gatewayIps: GatewayIp[]) {
    if (gatewayIps.length === 0) return [];

    return gatewayIps.filter(ips => ips.tipo === "TRPV1" || ips.tipo === "TRPV2").map((gatewayIp: GatewayIp) => {
      return gatewayIp.ip;
    })
  }

  changeRefresher(event:any){
    this.form.get('refresher')?.markAsDirty()
  }

  resetSupervisionTlf(opt: any){
    this.supervisionSelected = opt;
    if(!this.supervisionSelected){
      this.form.patchValue({ refresh: 0 })
    }
  }
}
