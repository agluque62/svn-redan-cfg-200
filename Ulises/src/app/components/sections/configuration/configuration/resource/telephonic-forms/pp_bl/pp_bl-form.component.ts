import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AppSettings } from 'src/app/core/app.settings';
import { AlertService } from 'src/app/_services/alert.service';

interface customValues {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'pp_bl-form',
  templateUrl: './pp_bl-form.component.html',
  styleUrls: ['./pp_bl-form.component.scss']
})
export class PPBLFormComponent implements OnInit {

  resourceForm!: FormGroup;

  detectVoxIsChecked: boolean = false;
  duracionLlamadaIsChecked: boolean = false;
  appset: any;

  constructor(private readonly alertService: AlertService,
    private readonly translate: TranslateService) { }

  ngOnInit(): void {
    this.appset = AppSettings;
    this.displayDetectVox();
    this.displayCallDuration();
    this.duracionLlamadaIsChecked = this.resourceForm.value.iControlTmLlam === 0 ? false : true
  }

  async checkAGVNName(event: any) {
    if (event.target.value.match(AppSettings.AGVN_PATTERN) == undefined && event.target.value != '') {
      await this.alertService.errorMessage(``, `${this.translate.instant('resource.tlf.err.AVGN_no_valid')}`,this.translate.instant('button.accept'));
      event.target.value = '';
      this.resourceForm.patchValue({ ats_user: '' });
    }
  }

  displayDetectVox() {
    if (this.resourceForm.value.deteccion_vox) {
      this.detectVoxIsChecked = true;
    }
  }

  resetVoxValues(isChecked: boolean) {
    this.detectVoxIsChecked = isChecked;
    if (!this.detectVoxIsChecked) {
      this.resourceForm.patchValue({ umbral_vox: -35 });
      this.resourceForm.patchValue({ cola_vox: 0 });
    }
  }

  displayCallDuration() {
    if (this.resourceForm.value.duracion_llamada)
      this.duracionLlamadaIsChecked = true
  }

  resetCallDuration(isChecked: boolean) {
    this.duracionLlamadaIsChecked = isChecked;
    if (!this.duracionLlamadaIsChecked) {
      this.resourceForm.patchValue({ iTmMaxConversacion: 0 });
    }
  }


}
