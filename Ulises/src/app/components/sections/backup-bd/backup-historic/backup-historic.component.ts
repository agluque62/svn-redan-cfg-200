import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
  selector: 'backup-historic',
  templateUrl: './backup-historic.component.html',
  styleUrls: ['./backup-historic.component.scss']
})
export class BackupHistoricComponent implements OnInit {

  backupLogResponse!: any;
  // localConfig!: LocalConfig;
  ServiceDomainLocation: string = '';
  ServiceDomainAvailable: boolean = false;

  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private readonly loginService: LoginService, private readonly app: AppComponent, 
    private readonly userService: UserService, private readonly router: Router, private readonly alertService: AlertService,
    private readonly backupService: BackupService, private readonly configService: ConfigService,
    private readonly translate: TranslateService) { }

  ngOnInit(): void {
    this.checkPermissions();
    // this.retrieveBackupLog();
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

  assignDataSource(backupLog: any[]) {
    this.dataSource = new MatTableDataSource(backupLog);
    setTimeout(() => this.dataSource.paginator = this.paginator);
  }

  async retrieveBackupLog() {
    // this.localConfig = await this.configService.getLocalConfig().toPromise();
    this.backupLogResponse = await this.backupService.getBackupLog(this.ServiceDomainLocation).toPromise();

    if (this.backupLogResponse.error != null) {
      await this.alertService.errorMessage(`Error`, this.backupLogResponse.error,this.translate.instant('button.accept'));
      return;
    }

    const data = this.parseResponse(this.backupLogResponse.log);
    this.assignDataSource(data);
  }

  parseResponse(logs: string[]) {

    let data: Log[] = [];

    logs.forEach(log => {
      const splittedLog = log.split(" - ");
      data.push({date: splittedLog[0], level: splittedLog[1], description: splittedLog[2]});
    });

    return data;
  }

  async deleteLog() {

    const confirm = await this.alertService.confirmationMessage(``, `${this.translate.instant('backup.alert.delete_log')}`,this.translate.instant('button.accept'),this.translate.instant('button.cancel'));

    if (confirm.value) {
      // this.localConfig = await this.configService.getLocalConfig().toPromise();
      const deleteLogResponse = await this.backupService.deleteBackupLog(this.ServiceDomainLocation).toPromise();
  
      if (deleteLogResponse && deleteLogResponse.resultado === 'OK') {
        await this.alertService.successMessage(``, `${this.translate.instant('backup.alert.delete_success')}`, this.translate.instant('button.cancel'));    
        this.dataSource.data=[];
        this.retrieveBackupLog();
        return;
      }  
    }
  }

  onServiceActive(domain: string){
    this.ServiceDomainLocation=domain;
    this.ServiceDomainAvailable=true;
    this.retrieveBackupLog();
    console.log(`${this.translate.instant('backup.alert.backup_active')}`, domain);
  }

  onServiceInactive(){
    this.ServiceDomainLocation='';
    this.ServiceDomainAvailable=false;
    this.dataSource ? this.dataSource.data=[] : '';
    console.log(`${this.translate.instant('backup.alert.backup_no_con')}`);
  }
}

interface Log {
    date: string,
    level: string,
    description: string
}
