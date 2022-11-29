import { Component, ComponentFactoryResolver, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { element } from 'protractor';
import { AppComponent } from 'src/app/app.component';
import { AppSettings } from 'src/app/core/app.settings';
import { AlertService } from 'src/app/_services/alert.service';
import { DataService } from 'src/app/_services/data.service';
import { ResourceService } from 'src/app/_services/resource.service';
import { UserService } from 'src/app/_services/user.service';

const RADIO_TYPE = 1;
const TELEPHONE_TYPE = 2;

@Component({
  selector: 'app-resource-import',
  templateUrl: './resource-import.component.html',
  styleUrls: ['./resource-import.component.scss']
})
export class ResourceImportComponent implements OnInit {

  row!: number;
  column !: number;
  importJson !: any;
  mode: string = 'IMPORT';
  importForm !: FormGroup;
  siteForm !: FormGroup;
  appset: any;
  name: any = "";
  visualizationMode: boolean = false;


  constructor(public dialogRef: MatDialogRef<ResourceImportComponent>,
    private readonly dataService: DataService,
    private readonly router: Router,
    private readonly alertService: AlertService,
    private readonly resouceService: ResourceService,
    private readonly app: AppComponent,
    private readonly userService: UserService,
    private readonly translate: TranslateService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {

    this.appset = AppSettings;
    this.visualizationMode = (this.visualizationPermission()) ? true : false;
    this.initForm()
  }

  initForm() {
    this.siteForm = new FormGroup({
      name: new FormControl({ value: this.name, disabled: this.visualizationMode }, [Validators.required, Validators.pattern(AppSettings.NAME_PATTERN)]),
    });
  }


  visualizationPermission() {
    return (!this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && this.userService.isRole('VISUALIZATION'))
      || (!this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && this.userService.isRole('SUPERVISED_CONFIGURATION'));
  }

  createImportJSON(fileToUpload: File) {
    this.importForm = new FormGroup({
      data: new FormControl(fileToUpload),
      columna: new FormControl(this.data.column),
      fila: new FormControl(this.data.row),
      gatewayId: new FormControl(this.data.gatewayId)
    })
  }

  createResource() {

    this.dataService.updateDataSlot(
      {
        'gatewayId': this.data.gatewayId,
        'columna': this.data.column,
        'fila': this.data.row
      }
    );
    this.router.navigate(['/home/resource/new']);
    this.dialogRef.close()
  }

  async importResource($event: any) {

    let result;
    const fileToUpload = $event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(fileToUpload, "UTF-8");
    const context = this;
    fileReader.onload = function (fileLoadedEvent) {
      context.importJson = JSON.parse(fileLoadedEvent.target?.result! as string);
      context.createImportJSON(context.importJson);
    }
    const confirm = await this.alertService.confirmationMessage(``, `${this.translate.instant('resource.alert.conf_import_res')}`);
    this.siteForm.patchValue({ name: this.importJson.IdRecurso })
    if (this.resourceIsIncluded(this.importJson.IdRecurso)) {
      await this.alertService.errorMessage(`Error`, `${this.translate.instant('resource.alert.err_duply_name_res')}`);
      this.mode = "NAME_CONFLICT";
      return;
    } else if (confirm.value && fileToUpload !== null) {
      const resource_data = this.importForm.value.data;
      if (resource_data.Radio_o_Telefonia === RADIO_TYPE) {
        result = await this.resouceService.importRadioResource(this.importJson, this.data.gatewayId, this.data.column, this.data.row).toPromise();
      } else if (resource_data.Radio_o_Telefonia === TELEPHONE_TYPE) {
        result = await this.resouceService.importTlfResource(this.importJson, this.data.gatewayId, this.data.column, this.data.row).toPromise();
      }
      if (result && result.data) {
        await this.alertService.successMessage(``, `${this.translate.instant('resource.alert.succ_import_res', {value: this.importJson.IdRecurso})}`);
      }
      console.log(result)
    }
    this.dialogRef.close()
  }



  resourceIsIncluded(name: string) {

    let isIncluded;
    let found = this.data.resources.find((element: any) => element && element.nombre === name)
    isIncluded = found === undefined ? false : true;
    return isIncluded
  }

  async importModifiedResources() {
    let result;
    if (this.resourceIsIncluded(this.siteForm.value.name)) {
      await this.alertService.errorMessage(`Error`, `${this.translate.instant('resource.alert.err_duply_name_res')}`);
      return;
    }
    this.importJson.IdRecurso = this.siteForm.value.name;
    if (this.importJson.Radio_o_Telefonia === RADIO_TYPE) {
      result = await this.resouceService.importRadioResource(this.importJson, this.data.gatewayId, this.data.column, this.data.row).toPromise();
    } else if (this.importJson.Radio_o_Telefonia === TELEPHONE_TYPE) {
      result = await this.resouceService.importTlfResource(this.importJson, this.data.gatewayId, this.data.column, this.data.row).toPromise();
    }

    if (result && result.data) {
      await this.alertService.successMessage(``, `${this.translate.instant('resource.alert.succ_import_res', {value: this.importJson.IdRecurso})}`);
    }

    this.dialogRef.close()
  }


}
