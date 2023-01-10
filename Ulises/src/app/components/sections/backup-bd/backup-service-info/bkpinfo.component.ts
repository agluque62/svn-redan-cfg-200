import { Component, OnInit,  EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from 'src/app/app.component';
import { LocalConfig } from 'src/app/_models/local-config/LocalConfig';
import { AlertService } from 'src/app/_services/alert.service';
import { BackupService } from 'src/app/_services/backup.service';
import { ConfigService } from 'src/app/_services/config.service';
import { LoginService } from 'src/app/_services/login.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'bkp-info',
  templateUrl: './bkpinfo.component.html',
  styleUrls: ['./bkpinfo.component.scss']
})
export class BkpinfoComponent implements OnInit {

  @Output() ServiceActive = new EventEmitter<string>();
  @Output() ServiceInactive = new EventEmitter();

  bkpHost = {
    dominio: "", estado:`${this.translate.instant('backup.alert.disconnected')}`, error: ""
  };
  localConfig!: LocalConfig;

  constructor(private readonly loginService: LoginService, private readonly app: AppComponent,
    private readonly userService: UserService, private readonly router: Router,
    private readonly backupService: BackupService, private readonly configService: ConfigService,
    private readonly alertService: AlertService, private readonly translate: TranslateService) { }

  async ngOnInit() {
    
    this.checkPermissions();
    this.initData();
  }

  async initData() {
    this.localConfig = await this.configService.getLocalConfig().toPromise();
    this.bkpHost.dominio = this.localConfig.BackupServiceDomain;
    await this.loadParameters();
  }

  async checkPermissions() {
    if (this.notPermission()) {
      await this.loginService.logout().toPromise();
      this.app.destroyAlive();
      this.router.navigate(['/access']);
    }
  }

  notPermission() {
    return !this.userService.isRole('ADMIN') && !this.userService.isRole('BACKUP');
  }

  async loadParameters(){
    const result = await this.backupService.getConfig(this.localConfig.BackupServiceDomain).toPromise();
    if (result.path === undefined || result.profundidad === undefined || result.hora === undefined || result.minuto === undefined){
      this.bkpHost.estado = "Error";
      this.bkpHost.error = `${result.resultado}`;
      this.ServiceInactive.emit();
      // await this.alertService.errorMessage(``, `${result.resultado}`);
    }
    else{
      this.ServiceActive.emit(this.localConfig.BackupServiceDomain);
      this.bkpHost.estado=`${this.translate.instant('backup.alert.connected')}`;
      this.bkpHost.error = ``;
    }

  }
}
