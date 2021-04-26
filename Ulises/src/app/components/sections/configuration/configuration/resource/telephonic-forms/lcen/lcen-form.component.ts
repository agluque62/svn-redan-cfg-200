import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppSettings } from 'src/app/core/app.settings';
import { AlertService } from 'src/app/_services/alert.service';

interface customValues {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'lcen-form',
  templateUrl: './lcen-form.component.html',
  styleUrls: ['./lcen-form.component.scss']
})
export class LCENFormComponent implements OnInit {

  resourceForm!: FormGroup;
  appset: any;
  automaticResponse: boolean = false;

  constructor(private readonly alertService: AlertService) { }

  ngOnInit(): void {
    this.appset = AppSettings;
    if (this.resourceForm.value.respuesta_automatica === 1) {
      this.automaticResponse = true;
    } else {
      this.automaticResponse = false;
    }
  }

  async checkAGVNName(event: any) {
    if (event.target.value.match(AppSettings.AGVN_PATTERN) == undefined && event.target.value != '') {
      await this.alertService.errorMessage(``, `Campo AGVN no válido`);
      event.target.value = '';
      this.resourceForm.patchValue({ ats_user: '' });
    }
  }

  automaticResponseIsChecked(opt: boolean) {
    this.automaticResponse = opt;
    if (this.automaticResponse) {
      this.resourceForm.patchValue({ respuesta_automatica: 1 });
    } else {
      this.resourceForm.patchValue({ respuesta_automatica: 0 });
      this.resourceForm.patchValue({ periodo_tonos: 5 });
    }
  }
}
