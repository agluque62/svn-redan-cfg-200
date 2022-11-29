import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from 'src/app/app.component';
// import { LocalConfig } from 'src/app/_models/local-config/LocalConfig';
import { AlertService } from 'src/app/_services/alert.service';
import { BackupService } from 'src/app/_services/backup.service';
import { ConfigService } from 'src/app/_services/config.service';
import { LoginService } from 'src/app/_services/login.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'backup-manual',
  templateUrl: './backup-manual.component.html',
  styleUrls: ['./backup-manual.component.scss']
})
export class BackupManualComponent implements OnInit {

  ServiceDomainLocation = '';
  ServiceDomainAvailable = false;

  constructor(private readonly loginService: LoginService, private readonly app: AppComponent,
    private readonly userService: UserService, private readonly router: Router,
    private readonly backupService: BackupService, private readonly configService: ConfigService,
    private readonly alertService: AlertService, private readonly translate: TranslateService) { }

  ngOnInit(): void {
    this.checkPermissions();
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

  async backup() {

    const confirm = await this.alertService.confirmationMessage(``, `${this.translate.instant('backup.alert.backup_now')}`);

    if (confirm.value) {
      // this.localConfig = await this.configService.getLocalConfig().toPromise();
      const result = await this.backupService.makeManualBackup(this.ServiceDomainLocation).toPromise();
      if (result.resultado.includes('Error')) {
        await this.alertService.errorMessage(``, `${result.resultado}`);
        return;
      }
      await this.alertService.successMessage(``, `${result.resultado}`);        
    }
  }

  onServiceActive(domain: string){
    this.ServiceDomainLocation = domain;
    this.ServiceDomainAvailable=true;
    console.log(`${this.translate.instant('backup.alert.backup_active')}`, domain);
  }

  onServiceInactive(){
    this.ServiceDomainLocation = '';
    this.ServiceDomainAvailable=false;
    console.log(`${this.translate.instant('backup.alert.backup_no_con')}`);
  }
}
