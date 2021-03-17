import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  
  constructor(private readonly alertService: AlertService) { }

  ngOnInit(): void {
    this.appset = AppSettings;
  }
  
  async checkAGVNName(event: any) {
    if (event.target.value.match(AppSettings.AGVN_PATTERN) == undefined && event.target.value != '') {
      await this.alertService.errorMessage(``, `Campo AGVN no válido`);
      event.target.value = '';
      this.resourceForm.patchValue({ats_user:''});
    }
  }
}
