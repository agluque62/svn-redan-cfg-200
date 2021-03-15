import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  constructor(public dialogRef: MatDialogRef<ExtResourcesFormComponent>, @Inject(MAT_DIALOG_DATA) public data: ExternalResource, 
    private readonly alertService: AlertService, private readonly externalResourceService: ExternalResourceService) { }

  ngOnInit(): void {

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
      { value: 0, viewValue: 'Radio Tx' },
      { value: 1, viewValue: 'Radio TxRx' },
      { value: 2, viewValue: 'Radio Rx' },
      { value: 3, viewValue: 'Teléfono' }
    ];
  }

  async deleteExtResource() {

    if (this.extResourceFrom.valid) {
      const confirmed = await this.alertService.confirmationMessage(``, `¿Desea eliminar el recurso ${this.data.alias}?`);

      if (confirmed.value) {
        const deleteResult = await this.externalResourceService.deleteExternalResourcesById(this.data.idrecursos_externos).toPromise();

        if (deleteResult && deleteResult.error) {
          await this.alertService.errorMessage(`Error`, deleteResult.error);
        } else {
          await this.alertService.successMessage(`Éxito`, `Recurso ${this.data.alias} externo eliminado correctamente correctamente`);
          this.dialogRef.close();  
        }

      }
    } else {
      await this.alertService.errorMessage(`Formulario inválido`, `Compruebe el formulario`);
    }
  }

  async createOrEditExternalResource() {

    if (this.extResourceFrom.valid) {
      const createResult = await this.externalResourceService.createOrEditExternalResource(this.extResourceFrom.value).toPromise();
      if (createResult && createResult.error) {
        await this.alertService.errorMessage(`Error`, createResult.error);
      } else {

        const msg = this.type == 'CREATE' ? `Recurso externo creado correctamente` : `Recurso externo guardado correctamente`;
        await this.alertService.successMessage(`Éxito`, msg);
        this.dialogRef.close();
      }
    } else {
      await this.alertService.errorMessage(`Formulario inválido`, `Compruebe el formulario`);
    }
  }
}
