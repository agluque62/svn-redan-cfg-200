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

  iAudio: customValues[] = [
    { value: 0, viewValue: 'Hardware' },
    { value: 1, viewValue: 'VAD' },
    { value: 2, viewValue: 'Forzado' },
  ];

  bssMethods: customValues[] = [
    { value: 0, viewValue: 'Ninguno' },
    { value: 1, viewValue: 'RSSI' },
    { value: 2, viewValue: 'RSSI/NUCLEO' },
  ];

  pttPriority: customValues[] = [
    { value: 0, viewValue: 'PTT Normal' },
    { value: 1, viewValue: 'PTT Prioritario' },
    { value: 2, viewValue: 'PTT Emergencia' },
  ];

  climaxModes: customValues[] = [
    { value: 0, viewValue: 'No' },
    { value: 1, viewValue: 'ASAP' },
    { value: 2, viewValue: 'Tiempo' }
  ];

  calClimaxModes: customValues[] = [
    { value: 0, viewValue: 'Modo relativo' },
    { value: 1, viewValue: 'Modo absoluto' }
  ];

  prioritySessionsSIP: customValues[] = [
    { value: 0, viewValue: 'Normal' },
    { value: 1, viewValue: 'Emergencia' }
  ];
  appset: any;

  constructor() { }

  ngOnInit(): void {
    this.appset = AppSettings;
    this.checkIfClimaxBSSIsSelected();
    this.displayUmbralVAD(this.resourceForm.value.indicacion_entrada_audio);
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

  checkIfClimaxBSSIsSelected() {
    if (this.resourceForm.value.climax_bss === 1 || this.resourceForm.value.climax_bss) {
      this.checkClimaxBSS = true;
      this.climaxModeActive = true;
      this.checkClimaxType();
    }
  }
  checkClimaxMethod() {
    this.displayClimaxMethod = (this.resourceForm.value.tipo_climax !== 0 || this.resourceForm.value.tipo_climax);
  }
}
