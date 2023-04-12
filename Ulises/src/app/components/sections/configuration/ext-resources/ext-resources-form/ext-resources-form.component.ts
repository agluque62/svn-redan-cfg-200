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
      uri: new FormControl(this.data.uri, [Validators.required, Validators.pattern(AppSettings.URI_PATTERN)]),
      alias: new FormControl(this.data.alias, [Validators.required, Validators.pattern(AppSettings.NAME_PATTERN)]),
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
      const confirmed = await this.alertService.confirmationMessage(``, `${this.translate.instant('ext_res.alert.conf_delete_res', {value: this.data.alias})}`,this.translate.instant('button.accept'),this.translate.instant('button.cancel'));

      if (confirmed.value) {
        this.showSpinner = true;
        const deleteResult = await this.externalResourceService.deleteExternalResourcesById(this.data.idrecursos_externos).toPromise();
        this.showSpinner = false;

        if (deleteResult && deleteResult.error) {
          await this.alertService.errorMessage(``, deleteResult.error,this.translate.instant('button.accept'));
        } else {
          await this.alertService.successMessage(``, `${this.translate.instant('ext_res.alert.succ_delete_res', {value: this.data.alias})}`,this.translate.instant('button.accept'));
          this.dialogRef.close();
        }
      }
    } else {
      await this.alertService.errorMessage(`${this.translate.instant('appsettings.ERROR_FORM')}`, `${this.translate.instant('appsettings.INVALID_FORM')}`,this.translate.instant('button.accept'));
    }
  }

  async createOrEditExternalResource() {

    if (this.extResourceFrom.valid) {
      this.showSpinner = true;
      const createResult = await this.externalResourceService.createOrEditExternalResource(this.extResourceFrom.value).toPromise();
      this.showSpinner = false;

      if (createResult && createResult.error) {
        await this.alertService.errorMessage(``, this.translateError(createResult.error), this.translate.instant('button.accept'));
      } else {

        const msg = this.type == 'CREATE' ? `${this.translate.instant('ext_res.alert.succ_create_res')}` : `${this.translate.instant('ext_res.alert.succ_save_res')}`;
        await this.alertService.successMessage(``, msg, this.translate.instant('button.accept'));
        this.dialogRef.close();
      }
    } else {
      await this.alertService.errorMessage(`${this.translate.instant('appsettings.ERROR_FORM')}`, `${this.translate.instant('appsettings.INVALID_FORM')}`,this.translate.instant('button.accept'));
    }
  }

  translateError (error: any) {
    if (error == 'ER_DUP_URI') {
      return this.translate.instant('ext_res.alert.err_duplicate_uri');
    } else if (error == 'ER_DUP_ALIAS') {
      return this.translate.instant('ext_res.alert.err_duplicate_alias');
    } else {
      return error;
    }
  }
}
