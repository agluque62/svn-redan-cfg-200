import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppSettings } from 'src/app/core/app.settings';

interface customValues {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'local-form',
  templateUrl: './local-form.component.html',
  styleUrls: ['./local-form.component.scss']
})
export class LocalFormComponent implements OnInit {

  resourceForm!: FormGroup;
  formType!: number;

  vadIsSelected: boolean = false;
  displayBSSClimax: boolean = false;
  climaxModeActive: boolean = false;
  displayClimaxTime: boolean = false;
  checkClimaxBSS: boolean = false;
  displayClimaxMethod: boolean = false;
  displayBSSWindow: boolean = false;

  iAudio: customValues[] = [
    { value: 0, viewValue: 'resource.radio.iAudio_value_0' },
    { value: 1, viewValue: 'resource.radio.iAudio_value_1' },
    { value: 2, viewValue: 'resource.radio.iAudio_value_2' },
  ];

  oAudio: customValues[] = [
    { value: 0, viewValue: 'resource.radio.oAudio_value_0' }
  ];

  bssMethods: customValues[] = [
    { value: 0, viewValue: 'resource.radio.bssMethods_value_0' },
    { value: 1, viewValue: 'resource.radio.bssMethods_value_1' },
    { value: 2, viewValue: 'resource.radio.bssMethods_value_2' },
  ];

  pttPriority: customValues[] = [
    { value: 0, viewValue: 'resource.radio.pttPriority_value_0' },
    { value: 1, viewValue: 'resource.radio.pttPriority_value_1' },
    { value: 2, viewValue: 'resource.radio.pttPriority_value_2' },
  ];

  climaxModes: customValues[] = [
    { value: 0, viewValue: 'resource.radio.climaxModes_value_0' },
    { value: 1, viewValue: 'resource.radio.climaxModes_value_1' },
    { value: 2, viewValue: 'resource.radio.climaxModes_value_2' }
  ];

  calClimaxModes: customValues[] = [
    { value: 0, viewValue: 'resource.radio.calClimaxModes_value_0' },
    { value: 1, viewValue: 'resource.radio.calClimaxModes_value_1' }
  ];

  prioritySessionsSIP: customValues[] = [
    { value: 0, viewValue: 'resource.radio.prioritySessionSIP_value_0' },
    { value: 1, viewValue: 'resource.radio.prioritySessionSIP_value_1' }
  ];
  appset: any;

  constructor() { }

  ngOnInit(): void {
    this.appset = AppSettings;
    this.checkIfClimaxBSSIsSelected();
    this.displayUmbralVAD(this.resourceForm.value.indicacion_entrada_audio);
  }

  ngOnCheckBssClimax(value: boolean){
    this.climaxModeActive=value;
    if (value){
      this.checkBssType();
      this.checkClimaxType();
    }
  }

  displayUmbralVAD(valueSelected: number) {
    this.vadIsSelected = (valueSelected === 1);
  }

  checkFormType() {
    if (this.formType == 2 || this.formType == 3) {
      this.displayBSSClimax = true;
    } else {
      this.displayBSSClimax = false;
    }
  }

  checkClimaxType() {
    this.displayClimaxTime = (this.resourceForm.value.tipo_climax === 2);
    this.checkClimaxMethod();
  }

  checkBssType(){
    this.displayBSSWindow = (this.resourceForm.value.metodo_bss !== 0);
  }

  checkIfClimaxBSSIsSelected() {
    if ((this.resourceForm.value.climax_bss === 1 || this.resourceForm.value.climax_bss) && this.resourceForm.value.tipo_agente != 0 &&  this.resourceForm.value.tipo_agente != 1) {
      this.checkClimaxBSS = true;
      this.climaxModeActive = true;
      this.checkClimaxType();
      this.checkBssType();
    }else{
      this.checkClimaxBSS = false;
      this.climaxModeActive = false;
    }
  }
  checkClimaxMethod() {
    this.displayClimaxMethod = (this.resourceForm.value.tipo_climax !== 0 || this.resourceForm.value.tipo_climax);
  }
}
