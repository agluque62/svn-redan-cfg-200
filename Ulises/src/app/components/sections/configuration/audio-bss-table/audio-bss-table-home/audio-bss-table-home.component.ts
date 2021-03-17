import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { TableBss } from 'src/app/_models/table-bss/TableBss';
import { TableBssResponse } from 'src/app/_models/table-bss/TableBssResponse';
import { AlertService } from 'src/app/_services/alert.service';
import { LoginService } from 'src/app/_services/login.service';
import { TableBSSService } from 'src/app/_services/tableBss.service';
import { UserService } from 'src/app/_services/user.service';
import { AudioBssTableFormComponent } from '../audio-bss-table-form/audio-bss-table-form.component';

@Component({
  selector: 'audio-bss-table-home',
  templateUrl: './audio-bss-table-home.component.html',
  styleUrls: ['./audio-bss-table-home.component.scss']
})
export class AudioBssTableHomeComponent implements OnInit {

  tableBssResponse!: TableBssResponse;
  tablesBss!: TableBss[];

  visualizationMode: boolean = false;

  showSpinner: boolean = false;

  dataSource!: MatTableDataSource<TableBss>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  mockTableResponse: TableBssResponse = {
    "error": null,
    "tables": [
      {
        "idtabla_bss": 1,
        "name": "Tabla1",
        "description": "Desc. tabla 1",
        "FechaCreacion": "2021-01-18T14:20:41.000Z",
        "valor0": 1,
        "valor1": 2,
        "valor2": 3,
        "valor3": 4,
        "valor4": 5,
        "valor5": 6
      }
    ]
  };

  constructor(private readonly tableBssService: TableBSSService, private readonly alertService: AlertService, public dialog: MatDialog,
    private readonly userService: UserService, private readonly loginService: LoginService, private readonly app: AppComponent,
    private readonly router: Router) { }

  async ngOnInit() {
    this.checkPermissions();
    this.retrieveTableBssResponse();
  }

  async checkPermissions() {
    if (this.notPermission()) {
      await this.loginService.logout().toPromise();
      this.app.destroyAlive();
      this.router.navigate(['/access']);
    }

    this.visualizationMode = (this.visualizationPermission()) ? true : false;
  }

  notPermission() {
    return !this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && !this.userService.isRole('VISUALIZATION')
      && !this.userService.isRole('SUPERVISED_CONFIGURATION');;
  }

  visualizationPermission() {
    return (!this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && this.userService.isRole('VISUALIZATION'))
      || (!this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && this.userService.isRole('SUPERVISED_CONFIGURATION'));
  }

  createTableAudioBSS() {
    const dialogRef = this.dialog.open(AudioBssTableFormComponent, {
      data: new TableBss(),
      autoFocus: false
    });

    this.refreshAfterClosedDialog(dialogRef);
  }

  modifyTableBss(tableBss: TableBss) {
    const dialogRef = this.dialog.open(AudioBssTableFormComponent, {
      data: tableBss,
      autoFocus: false
    });

    this.refreshAfterClosedDialog(dialogRef);
  }

  visualizeTableBss(tableBss: TableBss) {
    const dialogRef = this.dialog.open(AudioBssTableFormComponent, {
      data: tableBss,
      autoFocus: false
    });

    this.refreshAfterClosedDialog(dialogRef);
  }

  async refreshAfterClosedDialog(dialogRef: any) {
    dialogRef.afterClosed().subscribe(async () => {
      this.retrieveTableBssResponse();
      this.assignDataSource(this.tablesBss);
    });
  }

  assignDataSource(tablesBss: TableBss[]) {
    this.dataSource = new MatTableDataSource(tablesBss);
    setTimeout(() => this.dataSource.paginator = this.paginator);
  }

  async retrieveTableBssResponse() {

    this.showSpinner = true;
    this.tableBssResponse = await this.tableBssService.getTableAudioBss().toPromise();

    if (this.tableBssResponse.error != null) {
      await this.alertService.errorMessage(`Error`, this.tableBssResponse.error);
      return;
    }

    this.showSpinner = false;
    this.assignDataSource(this.tableBssResponse.tables);
  }
}
