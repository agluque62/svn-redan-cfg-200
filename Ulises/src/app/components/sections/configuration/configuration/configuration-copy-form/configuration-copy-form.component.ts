import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';
import { AppSettings } from 'src/app/core/app.settings';
import { Configuration } from 'src/app/_models/configs/configuration/Configuration';
import { AlertService } from 'src/app/_services/alert.service';
import { ConfigService } from 'src/app/_services/config.service';

@Component({
  selector: 'app-configuration-copy-form',
  templateUrl: './configuration-copy-form.component.html',
  styleUrls: ['./configuration-copy-form.component.scss']
})
export class ConfigurationCopyFormComponent implements OnInit {

  copyForm!: FormGroup;
  configuration!: Configuration;

  name!: string;
  description!: string;

  constructor(public dialogRef: MatDialogRef<ConfigurationCopyFormComponent>, @Inject(MAT_DIALOG_DATA) public data: Configuration,
    private readonly alertService: AlertService, private readonly configurationService: ConfigService, @Inject(AppComponent) private readonly app: AppComponent) { }

  ngOnInit(): void {
    this.configuration = this.data;
    this.initForm();
  }

  initForm() {
    this.copyForm = new FormGroup({
      name: new FormControl(this.name, [Validators.required, Validators.pattern(AppSettings.NAME_PATTERN)]),
      description: new FormControl(this.description),
    });
  }

  async existDuplicateConfigurationName() {
    const configurationsResponse = await this.configurationService.getConfigurations().toPromise();
    let configurations: Configuration[] = [];

    if (configurationsResponse && configurationsResponse.result && configurationsResponse.result.length > 0) {
      configurations = [...configurationsResponse.result];
    }

    if (configurations.length > 0) {
      const result = configurations.find(config => config.name === this.copyForm.value.name);
      if (result) {
        return true;
      }
    }

    return false;
  }

  async confirm() {
    try {
      if (await this.existDuplicateConfigurationName()) {
        await this.alertService.errorMessage(``, `Ya existe una configuración con ese nombre`);
        return;
      }

      if (this.copyForm.valid) {
        const result = await this.configurationService.copyConfiguration(this.configuration.idCFG, this.copyForm.value.name, this.copyForm.value.description).toPromise();

        if (result.data !== 'OK') {
          await this.alertService.errorMessage(``, result.data);
          return;
        }

        await this.alertService.successMessage(``, `La configuración ha sido copiada`);
        this.dialogRef.close(true);
      } else {
        this.alertService.errorMessage(``, `Formulario inválido, compruebe los datos`);
      }
    } catch (error) {
      this.app.catchError(error);
    }
  }
}
