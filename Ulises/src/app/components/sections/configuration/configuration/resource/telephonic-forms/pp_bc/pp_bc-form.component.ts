import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppSettings } from 'src/app/core/app.settings';
import { AlertService } from 'src/app/_services/alert.service';

interface customValues {
    value: string;
    viewValue: string;
  }

@Component({
  selector: 'pp_bc-form',
  templateUrl: './pp_bc-form.component.html',
  styleUrls: ['./pp_bc-form.component.scss']
})
export class PPBCFormComponent implements OnInit {

  resourceForm!: FormGroup;

  constructor(private readonly alertService: AlertService) { }

  ngOnInit(): void {
  }
  
  async checkAGVNName(event: any) {
    if (event.target.value.match(AppSettings.AGVN_PATTERN) == undefined && event.target.value != '') {
      await this.alertService.errorMessage(``, `Campo AGVN no válido`);
      event.target.value = '';
      this.resourceForm.patchValue({ats_user:''});
    }
  }

}
