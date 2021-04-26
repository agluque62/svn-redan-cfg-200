import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppSettings } from 'src/app/core/app.settings';
import { TableBSSService } from 'src/app/_services/tableBss.service';

interface customValues {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'remote-form',
  templateUrl: './remote-form.component.html',
  styleUrls: ['./remote-form.component.scss']
})
export class RemoteFormComponent implements OnInit {

  formType!: number;
  resourceForm!: FormGroup;

  iAudio: customValues[] = [
    { value: 0, viewValue: 'Hardware' },
    { value: 1, viewValue: 'VAD' },
    { value: 2, viewValue: 'Forzado' },
  ];

  oAudio: customValues[] = [
    { value: 0, viewValue: 'Hardware' }
  ];

  bssMethods: customValues[] = [
    { value: 0, viewValue: 'RSSI' },
    { value: 1, viewValue: 'NUCLEO' },
    { value: 2, viewValue: 'Ninguno' }
  ];

  tablesBss: any;

  displayInputAudio: boolean = false;
  displayOutputAudio: boolean = false;
  displayPreferredBSSMethod: boolean = false;
  displayGRSDelay: boolean = false;
  displayRecordCheckbox: boolean = false;

  vadIsSelected: boolean = false;
  appset: any;

  disableTableSelector: boolean = false;

  constructor(private readonly tableBssService: TableBSSService) { }

  async ngOnInit() {
    this.appset = AppSettings;
    this.tablesBss = (await this.tableBssService.getTableAudioBss().toPromise()).tables;
    this.displayUmbralVAD(this.resourceForm.value.indicacion_entrada_audio);
    this.checkSelectedMethod();
  }

  /**
   * 
   * @param valueSelected 
   */
  displayUmbralVAD(valueSelected: number) {
    this.vadIsSelected = (valueSelected === 1);
  }

  /**
   * 
   */
  checkFormType() {

    switch (this.formType) {
      case 4:
        this.displayInputAudio = true;
        this.displayOutputAudio = true;
        this.displayPreferredBSSMethod = true;
        this.displayGRSDelay = true;
        this.displayRecordCheckbox = true;
        break;
      case 5:
        this.displayInputAudio = false;
        this.displayOutputAudio = true;
        this.displayPreferredBSSMethod = false;
        this.displayGRSDelay = true;
        this.displayRecordCheckbox = false;
        break;
      case 6:
        this.displayInputAudio = true;
        this.displayOutputAudio = false;
        this.displayPreferredBSSMethod = true;
        this.displayGRSDelay = false;
        this.displayRecordCheckbox = true;
        break;
    }
  }

  checkSelectedMethod() {
    if (this.resourceForm.value.metodo_bss === 0) {
      this.disableTableSelector = false;
    } else if (this.resourceForm.value.metodo_bss === 1 || this.resourceForm.value.metodo_bss === 2) {
      this.resourceForm.patchValue({ tabla_bss_id: null });
      this.disableTableSelector = true;
    }
  }

}
