import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
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
  localConfig!: LocalConfig;

  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private readonly loginService: LoginService, private readonly app: AppComponent, 
    private readonly userService: UserService, private readonly router: Router, private readonly alertService: AlertService,
    private readonly backupService: BackupService, private readonly configService: ConfigService) { }

  ngOnInit(): void {
    this.checkPermissions();
    this.retrieveBackupLog();
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
    this.localConfig = await this.configService.getLocalConfig().toPromise();
    this.backupLogResponse = await this.backupService.getBackupLog(this.localConfig.BackupServiceDomain).toPromise();

    if (this.backupLogResponse.error != null) {
      await this.alertService.errorMessage(`Error`, this.backupLogResponse.error);
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

    const confirm = await this.alertService.confirmationMessage(``, `¿Eliminar definitivamente el archivo log?`);

    if (confirm.value) {
      this.localConfig = await this.configService.getLocalConfig().toPromise();
      const deleteLogResponse = await this.backupService.deleteBackupLog(this.localConfig.BackupServiceDomain).toPromise();
  
      if (deleteLogResponse && deleteLogResponse.resultado === 'OK') {
        await this.alertService.successMessage(``, `Log borrado correctamente`);    
        this.retrieveBackupLog();
        return;
      }  
    }
  }
}

interface Log {
    date: string,
    level: string,
    description: string
}
