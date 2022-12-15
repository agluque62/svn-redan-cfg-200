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
  selector: 'lcen-form',
  templateUrl: './lcen-form.component.html',
  styleUrls: ['./lcen-form.component.scss']
})
export class LCENFormComponent implements OnInit {

  resourceForm!: FormGroup;
  appset: any;
  automaticResponse: boolean = false;

  constructor(private readonly alertService: AlertService,
    private readonly translate: TranslateService) { }

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
      await this.alertService.errorMessage(``, `${this.translate.instant('resource.tlf.err.AVGN_no_valid')}`,this.translate.instant('button.cancel'));
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
