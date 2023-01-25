import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from 'src/app/app.component';
import { AppSettings } from 'src/app/core/app.settings';
import { Configuration } from 'src/app/_models/configs/configuration/Configuration';
import { AlertService } from 'src/app/_services/alert.service';
import { ConfigService } from 'src/app/_services/config.service';
import { HistoricService } from 'src/app/_services/historic.service';

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
  
  showSpinner: boolean = false;
  appset:any;
  
  constructor(public dialogRef: MatDialogRef<ConfigurationCopyFormComponent>, @Inject(MAT_DIALOG_DATA) public data: Configuration,
    private readonly alertService: AlertService, private readonly configurationService: ConfigService, @Inject(AppComponent) private readonly app: AppComponent
    ,private readonly historicService: HistoricService, private readonly translate: TranslateService) { }

  ngOnInit(): void {
    this.appset = AppSettings;
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
        await this.alertService.errorMessage(``, `${this.translate.instant('config.alert.err_exists_cfg')}`,this.translate.instant('button.accept'));
        return;
      }

      if (this.copyForm.valid) {
        this.showSpinner = true;
        const result = await this.configurationService.copyConfiguration(this.configuration.idCFG, this.copyForm.value.name, this.copyForm.value.description).toPromise();
        this.showSpinner = false;

        if (result.data !== 'OK') {
          console.error(result);
          var error = result.data ? result.data : 'Error request';
          await this.alertService.errorMessage(``, `Error: ${error}`, this.translate.instant('button.accept'));
          return;
        }

        //await this.historicService.updateCfg(101, this.copyForm.value.name).toPromise();

        await this.alertService.successMessage(``, `${this.translate.instant('config.alert.succ_copy_cfg')}`,this.translate.instant('button.accept'));
        this.dialogRef.close(true);
      } else {
        this.alertService.errorMessage(`${this.translate.instant('appsettings.ERROR_FORM')}`, `${this.translate.instant('appsettings.INVALID_FORM')}`,this.translate.instant('button.accept'));
      }
    } catch (error: any) {
      this.app.catchError(error);
    }
  }
}
