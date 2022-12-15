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
  selector: 'pp_ab-form',
  templateUrl: './pp_ab-form.component.html',
  styleUrls: ['./pp_ab-form.component.scss']
})
export class PPABFormComponent implements OnInit {

  resourceForm!: FormGroup;
  appset: any;
  
  constructor(private readonly alertService: AlertService,
    private readonly translate: TranslateService) { }

  ngOnInit(): void {
    this.appset = AppSettings;
  }
  
  async checkAGVNName(event: any) {
    if (event.target.value.match(AppSettings.AGVN_PATTERN) == undefined && event.target.value != '') {
      await this.alertService.errorMessage(``, `${this.translate.instant('resource.tlf.err.AVGN_no_valid')}`,this.translate.instant('button.accept'));
      event.target.value = '';
      this.resourceForm.patchValue({ats_user:''});
    }
  }
}
