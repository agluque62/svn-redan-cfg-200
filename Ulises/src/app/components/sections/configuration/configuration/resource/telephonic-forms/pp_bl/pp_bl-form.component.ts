import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  constructor(private readonly alertService: AlertService) { }

  ngOnInit(): void {
    this.displayDetectVox();
  }

  async checkAGVNName(event: any) {
    if (event.target.value.match(AppSettings.AGVN_PATTERN) == undefined && event.target.value != '') {
      await this.alertService.errorMessage(``, `Campo AGVN no válido`);
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
}
