import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { AppSettings } from 'src/app/core/app.settings';
import { ExternalResource } from 'src/app/_models/external-resource/ExternalResource';
import { AlertService } from 'src/app/_services/alert.service';
import { ExternalResourceService } from 'src/app/_services/externalResource.service';

@Component({
  selector: 'ext-resources-form',
  templateUrl: './ext-resources-form.component.html',
  styleUrls: ['./ext-resources-form.component.scss']
})

export class ExtResourcesFormComponent implements OnInit {

  extResourceFrom!: FormGroup;
  typesMap!: any;
  type: string = 'CREATE';

  showSpinner: boolean = false;
  appset: any;

  constructor(public dialogRef: MatDialogRef<ExtResourcesFormComponent>, @Inject(MAT_DIALOG_DATA) public data: ExternalResource,
    private readonly alertService: AlertService, private readonly externalResourceService: ExternalResourceService,
    private readonly translate: TranslateService) { }

  ngOnInit(): void {

    this.appset = AppSettings;
    this.typesMap = this.initTypesMap();

    if (this.data.uri != '') {
      this.type = 'EDIT';
    }

    this.extResourceFrom = new FormGroup({
      idrecursos_externos: new FormControl(this.data.idrecursos_externos),
      uri: new FormControl(this.data.uri, [Validators.pattern(AppSettings.URI_PATTERN)]),
      alias: new FormControl(this.data.alias, [Validators.pattern(AppSettings.NAME_PATTERN)]),
      tipo: new FormControl(this.data.tipo)
    });
  }

  initTypesMap() {
    return [
      { value: 0, viewValue: 'ext_res.radio_tx' },
      { value: 1, viewValue: 'ext_res.radio_tx_rx' },
      { value: 2, viewValue: 'ext_res.radio_rx' },
      { value: 3, viewValue: 'ext_res.telephone' }
    ];
  }

  async deleteExtResource() {

    if (this.extResourceFrom.valid) {
      const confirmed = await this.alertService.confirmationMessage(``, `${this.translate.instant('ext_res.alert.conf_delete_res', {value: this.data.alias})}`);

      if (confirmed.value) {
        this.showSpinner = true;
        const deleteResult = await this.externalResourceService.deleteExternalResourcesById(this.data.idrecursos_externos).toPromise();
        this.showSpinner = false;

        if (deleteResult && deleteResult.error) {
          await this.alertService.errorMessage(`Error`, deleteResult.error);
        } else {
          await this.alertService.successMessage(`Éxito`, `${this.translate.instant('ext_res.alert.succ_delete_res', {value: this.data.alias})}`);
          this.dialogRef.close();
        }

      }
    } else {
      await this.alertService.errorMessage(`${this.translate.instant('appsettings.ERROR_FORM')}`, `${this.translate.instant('appsettings.INVALID_FORM')}`);
    }
  }

  async createOrEditExternalResource() {

    if (this.extResourceFrom.valid) {
      this.showSpinner = true;
      const createResult = await this.externalResourceService.createOrEditExternalResource(this.extResourceFrom.value).toPromise();
      this.showSpinner = false;

      if (createResult && createResult.error) {
        await this.alertService.errorMessage(`Error`, createResult.error);
      } else {

        const msg = this.type == 'CREATE' ? `${this.translate.instant('ext_res.alert.succ_create_res')}` : `${this.translate.instant('ext_res.alert.succ_save_res')}`;
        await this.alertService.successMessage(`Éxito`, msg);
        this.dialogRef.close();
      }
    } else {
      await this.alertService.errorMessage(`${this.translate.instant('appsettings.ERROR_FORM')}`, `${this.translate.instant('appsettings.INVALID_FORM')}`);
    }
  }
}
