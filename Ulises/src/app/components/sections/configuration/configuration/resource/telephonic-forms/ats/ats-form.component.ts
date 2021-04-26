import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppSettings } from 'src/app/core/app.settings';
import { UserService } from 'src/app/_services/user.service';

interface customValues {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'ats-form',
  templateUrl: './ats-form.component.html',
  styleUrls: ['./ats-form.component.scss']
})
export class ATSFormComponent implements OnInit {

  resourceForm!: FormGroup;

  sides: customValues[] = [
    { value: 0, viewValue: 'A' },
    { value: 1, viewValue: 'B' }
  ];

  timeOpt!: number;
  duration!: number;

  timeOpts: customValues[] = [
    { value: 0, viewValue: 'Normal' },
    { value: 256, viewValue: 'Siempre Tránsito' }
  ];

  durations: customValues[] = [
    { value: 5, viewValue: '5' },
    { value: 6, viewValue: '6' },
    { value: 7, viewValue: '7' },
    { value: 8, viewValue: '8' },
    { value: 9, viewValue: '9' },
    { value: 10, viewValue: '10' },
    { value: 11, viewValue: '11' },
    { value: 12, viewValue: '12' },
    { value: 13, viewValue: '13' },
    { value: 14, viewValue: '14' },
    { value: 15, viewValue: '15' }
  ];

  isR2: boolean = false;
  isReady: boolean = false;
  automaticResponse: boolean = false;

  visualizationMode: boolean = false;
  appset: any;

  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
    this.appset = AppSettings;
    this.visualizationMode = (this.visualizationPermission()) ? true : false;

    if (this.resourceForm.value.tipo_interfaz_tel === 3) {
      this.isR2 = true;
      this.checkTimeOut();
    } else {
      this.isR2 = false;
    }
    
    if(this.resourceForm.value.respuesta_automatica === 1){
      this.automaticResponse = true;
    }else{
      this.automaticResponse = false;
    }

    this.isReady = true;
  }

  visualizationPermission() {
    return !this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && this.userService.isRole('VISUALIZATION');
  }

  checkTimeOut() {
    if (this.resourceForm.value.duracion_tono_interrup > 256) {
      this.timeOpt = 256;
      this.duration = this.resourceForm.value.duracion_tono_interrup - this.timeOpt;
    } else {
      this.timeOpt = 0;
      this.duration = this.resourceForm.value.duracion_tono_interrup;
    }
  }

  changeTimeOpt(event: any) {
    this.timeOpt = event.value;
  }

  automaticResponseIsChecked(opt: boolean) {
    this.automaticResponse = opt;
    if (this.automaticResponse) {
      this.resourceForm.patchValue({ respuesta_automatica: 1 });
    }else{
      this.resourceForm.patchValue({ respuesta_automatica: 0 });
      this.resourceForm.patchValue({ periodo_tonos: 5 });
    }
  }
}
