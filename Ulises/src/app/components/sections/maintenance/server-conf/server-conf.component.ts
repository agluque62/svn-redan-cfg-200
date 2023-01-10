import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from 'src/app/app.component';
import { AppSettings } from 'src/app/core/app.settings';
import { LocalConfig } from 'src/app/_models/local-config/LocalConfig';
import { AlertService } from 'src/app/_services/alert.service';
import { ConfigService } from 'src/app/_services/config.service';
import { LoginService } from 'src/app/_services/login.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-server-conf',
  templateUrl: './server-conf.component.html',
  styleUrls: ['./server-conf.component.scss']
})
export class ServerConfComponent implements OnInit {

  ready: boolean = false;
  localConfig!: LocalConfig;
  serverConfigForm!: FormGroup;
  historicsDeepOptions: number[] = [30, 90, 180, 365];
  loginTimeOutOptions: number[] = [5, 10, 30, 60, 120];
  logOptions: string[] = ['none', 'silly', 'info', 'warn'];
  
  showSpinner: boolean = false;

  constructor(private readonly configService: ConfigService, private readonly app: AppComponent, private readonly alertService: AlertService,
    private readonly userService: UserService, private readonly loginService: LoginService, private readonly router: Router,
    private readonly translate: TranslateService) { }

  async ngOnInit() {
    try {
      this.checkPermissions();
      this.localConfig = await this.configService.getLocalConfig().toPromise();
      this.localConfig.ntpDefault = this.localConfig.ntpDefault === undefined ? "127.0.0.1" : this.localConfig.ntpDefault;
      this.initForm();
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
  }

  notPermission() {
    return !this.userService.isRole('ADMIN');
  }

  initForm(): void {
    this.serverConfigForm = new FormGroup({
      Region: new FormControl(this.localConfig.Region),
      BackupServiceDomain: new FormControl(this.localConfig.BackupServiceDomain),
      HistoricsDeep: new FormControl(this.localConfig.HistoricsDeep),
      LoginTimeOut: new FormControl(this.localConfig.LoginTimeOut),
      refreshTime: new FormControl(this.localConfig.refreshTime),
      maxCycleTime: new FormControl(this.localConfig.maxCycleTime),
      log2con: new FormControl(this.localConfig.log2con),
      log2file: new FormControl(this.localConfig.log2file),
      LoginSystemTrace: new FormControl(this.localConfig.LoginSystemTrace),
      Date: new FormControl(this.localConfig.Date),
      Files: new FormControl(this.localConfig.Files),
      LoadIndexControlEnabled: new FormControl(this.localConfig.LoadIndexControlEnabled),
      MySQL: new FormControl(this.localConfig.MySQL),
      NodeJS: new FormControl(this.localConfig.NodeJS),
      R16Mode: new FormControl(this.localConfig.R16Mode),
      SubVersion: new FormControl(this.localConfig.SubVersion),
      Version: new FormControl(this.localConfig.Version),
      dbdatabase: new FormControl(this.localConfig.dbdatabase),
      dbhost: new FormControl(this.localConfig.dbhost),
      dbpassword: new FormControl(this.localConfig.dbpassword),
      dbport: new FormControl(this.localConfig.dbport),
      dbuser: new FormControl(this.localConfig.dbuser),
      logfile_maxfiles: new FormControl(this.localConfig.logfile_maxfiles),
      logfile_path: new FormControl(this.localConfig.logfile_path),
      logfile_sizefile: new FormControl(this.localConfig.logfile_sizefile),
      morgan: new FormControl(this.localConfig.morgan),
      timeout: new FormControl(this.localConfig.timeout),
      ntpDefault: new FormControl(this.localConfig.ntpDefault)
    });
  }

  async saveServerConfig() {
    if (this.serverConfigForm.valid) {

      const confirmed = await this.alertService.confirmationMessage(``, `${this.translate.instant('maintenance.alert.save_changes')}` ,this.translate.instant('button.accept'),this.translate.instant('button.cancel'));

      if (confirmed.value) {
        this.showSpinner = true;
        
        // this.serverConfigForm.value.timeout = Number(this.serverConfigForm.value.timeout);
        // this.serverConfigForm.value.maxCycleTime = Number(this.serverConfigForm.value.maxCycleTime);
        // this.serverConfigForm.value.logfile_sizefile = Number(this.serverConfigForm.value.logfile_sizefile);
        // this.serverConfigForm.value.LoginTimeOut = Number(this.serverConfigForm.value.LoginTimeOut);
        // this.serverConfigForm.value.HistoricsDeep = Number(this.serverConfigForm.value.HistoricsDeep);
        // this.serverConfigForm.value.refreshTime = Number(this.serverConfigForm.value.refreshTime);

        const res = await this.configService.updateLocalConfig(this.serverConfigForm.value).toPromise();
        this.showSpinner = false;
        if (res.res) {
          await this.alertService.successMessage(`${this.translate.instant('maintenance.alert.updated_conf')}`, `${this.translate.instant('maintenance.alert.changes')}`,this.translate.instant('button.accept'));
        } else {
          await this.alertService.errorMessage(``, res.txt,this.translate.instant('button.accept'));
        }
      }

    } else {
      await this.alertService.errorMessage(`${this.translate.instant('appsettings.ERROR_FORM')}`, `${this.translate.instant('appsettings.INVALID_FORM')}`,this.translate.instant('button.accept'));
    }
  }
}
