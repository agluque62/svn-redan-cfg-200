import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
// import { LocalConfig } from 'src/app/_models/local-config/LocalConfig';
import { AlertService } from 'src/app/_services/alert.service';
import { BackupService } from 'src/app/_services/backup.service';
import { ConfigService } from 'src/app/_services/config.service';
import { LoginService } from 'src/app/_services/login.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.scss']
})
export class ParamsComponent implements OnInit {

  ServiceDomainLocation: string = '';
  ServiceDomainAvailable: boolean = false;

  daysOptions = _Array.range(1, 31, 1);
  hoursOptions = [...Array(24).keys()];
  minutesOptions = [...Array(60).keys()];

  path: string = `C:\\ProgramData\\MySQLBackup\\Backup\\`;
  days: number = 7;
  hours: number = 0;
  minutes: number = 1;

  // localConfig!: LocalConfig;

  constructor(private readonly loginService: LoginService, private readonly app: AppComponent,
    private readonly userService: UserService, private readonly router: Router,
    private readonly backupService: BackupService, private readonly configService: ConfigService,
    private readonly alertService: AlertService) { }

  async ngOnInit() {
    
    this.checkPermissions();
    this.initData();
  }

  async initData() {
    // this.localConfig = await this.configService.getLocalConfig().toPromise();
//    await this.loadParameters();
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

  async confirm() {
    const confirm = await this.alertService.confirmationMessage(``, `??Confirma la actualizaci??n de par??metros?`);
    if (confirm.value){
      const data = {
        'path': this.path,
        'profundidad': this.days,
        'hora': this.hours,
        'minuto': this.minutes
      };
  
      const result = await this.backupService.changeConfig(/*this.localConfig.BackupServiceDomain*/this.ServiceDomainLocation, data).toPromise();
  
      if (result.resultado !== 'OK') {
        await this.alertService.errorMessage(``, `${result.resultado}`);
      }
      else{

        await this.alertService.successMessage(``, `Configuraci??n actualizada`);
      }
    }
  }

  async loadParameters(){
    const result = await this.backupService.getConfig(this.ServiceDomainLocation).toPromise();
    if (!result.path || !result.profundidad || !result.hora || !result.minuto){
      await this.alertService.errorMessage(``, `${result.resultado}`);
    }
    else{
      this.path = (result.path) ? result.path : `C:\\ProgramData\\MySQLBackup\\Backup\\`;
      this.hours = (result.hora) ? result.hora : 0;
      this.minutes = (result.minuto) ? result.minuto : 1;
      this.days = (result.profundidad) ? result.profundidad : 7;  
    }
  }

  onServiceActive(domain: string){
    this.ServiceDomainLocation=domain;
    this.ServiceDomainAvailable=true;
    this.loadParameters();
    console.log('Backup Service active on ', domain);
  }

  onServiceInactive(){
    this.ServiceDomainLocation='';
    this.ServiceDomainAvailable=false;
    console.log('Backup Service inactive');
  }
}


interface _Iterable extends Iterable<{}> {
  length: number;
}

class _Array<T> extends Array<T> {
  static range(from: number, to: number, step: number): number[] {
    return Array.from(
      <_Iterable>{ length: Math.floor((to - from) / step) + 1 },
      (v, k) => from + k * step
    );
  }
}