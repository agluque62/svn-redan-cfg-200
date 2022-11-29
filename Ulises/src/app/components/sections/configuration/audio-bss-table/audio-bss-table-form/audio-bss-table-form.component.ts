import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { AppSettings } from 'src/app/core/app.settings';
import { TableBss } from 'src/app/_models/table-bss/TableBss';
import { AlertService } from 'src/app/_services/alert.service';
import { GatewayService } from 'src/app/_services/gateway.service';
import { TableBSSService } from 'src/app/_services/tableBss.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'audio-bss-table-form',
  templateUrl: './audio-bss-table-form.component.html',
  styleUrls: ['./audio-bss-table-form.component.scss']
})
export class AudioBssTableFormComponent implements OnInit {

  tableBssForm!: FormGroup;
  type: string = 'CREATE';
  visualizationMode: boolean = false;
  rssiValues: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  showSpinner: boolean = false;

  appset: any;

  constructor(public dialogRef: MatDialogRef<AudioBssTableFormComponent>, @Inject(MAT_DIALOG_DATA) public data: TableBss,
    private readonly alertService: AlertService, private readonly tableBssService: TableBSSService,
    private readonly gatewayService: GatewayService, private readonly userService: UserService,
    private readonly translate: TranslateService) { }

  ngOnInit(): void {
    this.appset = AppSettings;

    if (this.data.idtabla_bss === -1) {
      this.type = 'CREATE';
    } else {
      this.type = 'EDIT';
    }

    this.visualizationMode = (this.visualizationPermission()) ? true : false;

    this.initForm();
  }

  visualizationPermission() {
    return (!this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && this.userService.isRole('VISUALIZATION'))
      || (!this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && this.userService.isRole('SUPERVISED_CONFIGURATION'));
  }

  initForm(): void {

    this.tableBssForm = new FormGroup({
      idtabla_bss: new FormControl(this.data.idtabla_bss),
      name: new FormControl({ value: this.data.name, disabled: this.visualizationMode }, [Validators.required, Validators.pattern(AppSettings.NAME_PATTERN)]),
      description: new FormControl({ value: this.data.description, disabled: this.visualizationMode }),
      FechaCreacion: new FormControl({ value: this.data.FechaCreacion, disabled: true }),
      valor0: new FormControl({ value: this.data.valor0, disabled: this.visualizationMode }),
      valor1: new FormControl({ value: this.data.valor1, disabled: this.visualizationMode }),
      valor2: new FormControl({ value: this.data.valor2, disabled: this.visualizationMode }),
      valor3: new FormControl({ value: this.data.valor3, disabled: this.visualizationMode }),
      valor4: new FormControl({ value: this.data.valor4, disabled: this.visualizationMode }),
      valor5: new FormControl({ value: this.data.valor5, disabled: this.visualizationMode })
    });
  }

  async createTableBss() {

    if (this.tableBssForm.valid) {

      this.showSpinner = true;
      const createResult = await this.tableBssService.createTableAudioBss(this.tableBssForm.value).toPromise();
      this.showSpinner = false;

      if (createResult && createResult.error) {
        (createResult.error.includes('ER_DUP_ENTRY')) ?
          await this.alertService.errorMessage(`Error`, `${this.translate.instant('audiobss.alert.err_duplicated_id')}`)
          : await this.alertService.errorMessage(`Error`, createResult.error);
      } else {
        await this.alertService.successMessage(`Éxito`, `${this.translate.instant('audiobss.alert.succ_create_table')}`);
        this.dialogRef.close();
      }
    } else {
      await this.alertService.errorMessage(`${this.translate.instant('appsettings.ERROR_FORM')}`, `${this.translate.instant('appsettings.INVALID_FORM')}`);
    }
  }

  async editTableBss() {
    if (this.tableBssForm.valid) {

      this.showSpinner = true;
      const editResult = await this.tableBssService.editTableAudioBss(this.tableBssForm.value).toPromise();
      this.showSpinner = false;

      if (editResult && editResult.error) {
        await this.alertService.errorMessage(`Error`, editResult.error);
      } else {
        await this.alertService.successMessage(`Éxito`, `${this.translate.instant('audiobss.alert.succ_save_table')}`);

        const gatewaysResult = await this.gatewayService.updateTableBss(this.tableBssForm.value.idtabla_bss).toPromise();
        if (gatewaysResult && gatewaysResult.error) {
          await this.alertService.errorMessage(`Error`, gatewaysResult.error);
        } else {
          await this.alertService.successMessage(`Éxito`, `${this.translate.instant('audiobss.alert.succ_update_gtw')}`);
        }
        this.dialogRef.close();
      }
    } else {
      await this.alertService.errorMessage(`${this.translate.instant('appsettings.ERROR_FORM')}`, `${this.translate.instant('appsettings.INVALID_FORM')}`);
    }
  }

  async deleteTableBss() {

    const confirmed = await this.alertService.confirmationMessage(``, `${this.translate.instant('audiobss.alert.conf_delete_table', {value: this.data.name})}`);

    if (confirmed.value) {
      const deleteResult = await this.tableBssService.deleteTableAudioBss(this.data).toPromise();

      if (deleteResult && deleteResult.error) {
        let msg = deleteResult.error;
        
        if (deleteResult.error === 'CANT_DELETE') {
          msg = `${this.translate.instant('audiobss.alert.err_delete_table'), {value:deleteResult.ResourceName}}`;
        }
        await this.alertService.errorMessage(`Error`, msg);
      } else {
        await this.alertService.successMessage(`Éxito`, `${this.translate.instant('audiobss.alert.succ_delete_table',{value: this.data.name})}`);
        this.dialogRef.close();
      }

    }
  }
}
