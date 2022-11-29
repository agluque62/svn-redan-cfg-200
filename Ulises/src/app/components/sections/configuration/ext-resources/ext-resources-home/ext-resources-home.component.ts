import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { ExternalResource } from 'src/app/_models/external-resource/ExternalResource';
import { ExternalResourceResponse } from 'src/app/_models/external-resource/ExternalResourceResponse';
import { ExtResourcesFormComponent } from '../ext-resources-form/ext-resources-form.component';
import { ExternalResourceService } from 'src/app/_services/externalResource.service';
import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/_services/user.service';
import { LoginService } from 'src/app/_services/login.service';
import { Router } from '@angular/router';

interface ExternalResourceType {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'ext-resources-home',
  templateUrl: './ext-resources-home.component.html',
  styleUrls: ['./ext-resources-home.component.scss']
})
export class ExtResourcesHomeComponent implements OnInit {

  externalResources!: ExternalResourceResponse;

  showSpinner: boolean = false;

  dataSource!: MatTableDataSource<ExternalResource>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  types: ExternalResourceType[] = [
    { value: -1, viewValue: 'ext_res.all_res'},
    { value: 0, viewValue: 'ext_res.radio_tx'},
    { value: 1, viewValue: 'ext_res.radio_tx_rx'},
    { value: 2, viewValue: 'ext_res.radio_rx'},
    { value: 3, viewValue: 'ext_res.telephone'}
  ];

  selectedType: ExternalResourceType = this.types[0];

  constructor(private readonly externalResourceService: ExternalResourceService, public dialog: MatDialog, private readonly app: AppComponent,
    private readonly userService: UserService, private readonly loginService: LoginService, private readonly router: Router) { }

  ngOnInit() { }

  async checkPermissions() {
    if (this.notPermission()) {
      await this.loginService.logout().toPromise();
      this.app.destroyAlive();
      this.router.navigate(['/access']);
    }
  }

  notPermission() {
    return !this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION');
  }

  async ngAfterViewInit() {
    this.retrieveExternalResources();
  }

  async changeType() {
    this.retrieveExternalResources();
  }

  async retrieveExternalResources() {
    try {
      this.showSpinner = true;
      this.externalResources = await this.externalResourceService.getExternalResourcesByType(this.selectedType.value).toPromise();
      this.showSpinner = false;
      this.assignDataSource(this.externalResources.lista_recursos);  
    } catch(error:any) {
      this.app.catchError(error);
    }
  }

  getType(intType: number): string {
    const value = this.types.find(x => x.value == intType);
    return value ? value.viewValue : '';
  }

  createExternalResource() {
    
    const dialogRef = this.dialog.open(ExtResourcesFormComponent, {
      data: new ExternalResource(),
      autoFocus: false
    });

    this.refreshAfterClosedDialog(dialogRef);
  }

  modifyExternalResource(externalResource: ExternalResource) {
    const dialogRef = this.dialog.open(ExtResourcesFormComponent, {
      data: externalResource,
      autoFocus: false
    });

    this.refreshAfterClosedDialog(dialogRef);
  }

  async refreshAfterClosedDialog(dialogRef: any) {
    dialogRef.afterClosed().subscribe(async () => {
      this.retrieveExternalResources();
    });
  }

  assignDataSource(externalResources: ExternalResource[]) {
    this.dataSource = new MatTableDataSource(externalResources);
    setTimeout(() => this.dataSource.paginator = this.paginator);
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }  
}
