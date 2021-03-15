import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppSettings } from 'src/app/core/app.settings';
import { Configuration } from 'src/app/_models/configs/configuration/Configuration';
import { AlertService } from 'src/app/_services/alert.service';
import { ConfigService } from 'src/app/_services/config.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-configuration-form',
  templateUrl: './configuration-form.component.html',
  styleUrls: ['./configuration-form.component.scss']
})
export class ConfigurationFormComponent implements OnInit {

  configForm!: FormGroup;

  constructor(public dialogRef: MatDialogRef<ConfigurationFormComponent>, @Inject(MAT_DIALOG_DATA) public data: Configuration, 
    private readonly alertService: AlertService, private readonly configService: ConfigService, private readonly userService: UserService) { }

  ngOnInit() {

    this.initForm();
  }

  supervisedConfigPermission() {
    return this.userService.isRole('ADMIN') ||
      (!this.userService.isRole('ADMIN') && this.userService.isRole('SUPERVISED_CONFIGURATION'));
  }

  initForm() {

    this.configForm = new FormGroup({
      idCFG: new FormControl(this.data.idCFG),
      description: new FormControl(this.data.description),
      name: new FormControl(this.data.name, [Validators.required, Validators.pattern(AppSettings.NAME_PATTERN)]),
      region: new FormControl(this.data.region),
      activa: new FormControl(this.data.activa),
      ts_activa: new FormControl(this.data.ts_activa)
    });
  }

  async createConfiguration() {

    if (this.configForm.valid) {
      const result = await this.configService.createConfiguration(this.configForm.value.name, this.configForm.value.description, 
        this.configForm.value.activa).toPromise();

      if (result && result.error) {
        await this.alertService.errorMessage(`Error `, result.error);
      } else {
        const msg = `Configuración creada correctamente`;
        await this.alertService.successMessage(`Éxito`, msg);
        this.dialogRef.close();
      }
    }
  }
}
