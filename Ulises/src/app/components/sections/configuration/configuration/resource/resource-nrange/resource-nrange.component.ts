import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AppSettings } from 'src/app/core/app.settings';
import { AlertService } from 'src/app/_services/alert.service';
import { UserService } from 'src/app/_services/user.service';

interface customValues {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'resource-nrange',
  templateUrl: './resource-nrange.component.html',
  styleUrls: ['./resource-nrange.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResourceNRangeComponent implements OnInit {

  tableCols: string[] = ['Inicio', 'Final'];
  inicio: string = "Inicio";

  displayDestination: boolean = false;

  originRanks: any = [];
  destinationRanks: any = [];
  ranks: any;

  resourceForm!: FormGroup;
  ready: boolean = false;

  visualizationMode: boolean = false;

  constructor(private readonly alertService: AlertService, private readonly userService: UserService,
    private readonly translate: TranslateService) { }

  ngOnInit(): void {
    this.visualizationMode = (this.visualizationPermission()) ? true : false;
    this.initRanks(this.resourceForm.value.ranks);
  }

  visualizationPermission() {
    return !this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && this.userService.isRole('VISUALIZATION');
  }

  initRanks(ranks: any) {

    // Tipo 0 = Origin
    // tipo 1 = Destination
    if (ranks !== undefined && ranks.length > 0) {
      let result = ranks.filter((x: any) => x.tipo == 0);
      this.originRanks = result;
      result = ranks.filter((x: any) => x.tipo == 1);
      this.destinationRanks = result;
    } else {
      const total = 4;
      for (let i = 0; i < total; i++) {
        this.originRanks.push({ "inicial": "", "final": "", "tipo": 0 });
        this.destinationRanks.push({ "inicial": "", "final": "", "tipo": 1 });
      }

    }
    this.ranks = this.originRanks.concat(this.destinationRanks);
    this.ready = true;
  }

  async saveValue(event: any, pos: number, type: number, key: string) {
    if (event.target.value.match(AppSettings.AGVN_PATTERN) != undefined) {
      if (type == 0) { // Origin
        if (key === 'inicial') {
          if (this.originRanks[pos]['final'] !== '' && event.target.value > this.originRanks[pos]['final']) {
            await this.alertService.errorMessage(``, `${this.translate.instant('resource.tlf.err_start_bigger')}`, this.translate.instant('button.accept'));
            event.target.value = "";
            this.originRanks[pos][key] = event.target.value;
          } else {
            this.resourceForm.get('ranks')?.markAsDirty();
            this.originRanks[pos][key] = event.target.value;
            this.originRanks[pos]['modified'] = true;
          }
        } else if (key === 'final') {
          if (this.originRanks[pos]['inicial'] !== '' && event.target.value < this.originRanks[pos]['inicial']) {
            await this.alertService.errorMessage(``, `${this.translate.instant('resource.tlf.err_final_smaller')}`, this.translate.instant('button.accept'));
            event.target.value = "";
            this.originRanks[pos][key] = event.target.value;
          } else {
            this.resourceForm.get('ranks')?.markAsDirty();
            this.originRanks[pos][key] = event.target.value;
            this.originRanks[pos]['modified'] = true;
          }
        }
      } else if (type == 1) { // Destination
        if (key === 'inicial') {
          if (this.destinationRanks[pos]['final'] !== '' && event.target.value > this.destinationRanks[pos]['final']) {
            await this.alertService.errorMessage(``, `${this.translate.instant('resource.tlf.err_start_bigger')}`, this.translate.instant('button.accept'));
            event.target.value = "";
            this.destinationRanks[pos][key] = event.target.value;
          } else {
            this.resourceForm.get('ranks')?.markAsDirty();
            this.destinationRanks[pos][key] = event.target.value;
            this.destinationRanks[pos]['modified'] = true;
          }
        } else if (key === 'final') {
          if (this.destinationRanks[pos]['inicial'] !== '' && event.target.value < this.destinationRanks[pos]['inicial']) {
            await this.alertService.errorMessage(``, `${this.translate.instant('resource.tlf.err_final_smaller')}`, this.translate.instant('button.accept'));
            event.target.value = "";
            this.destinationRanks[pos][key] = event.target.value;
          } else {
            this.resourceForm.get('ranks')?.markAsDirty();
            this.destinationRanks[pos][key] = event.target.value;
            this.destinationRanks[pos]['modified'] = true;
          }
        }
      }
    } else if (event.target.value === "") {
      if (type == 0) {
        this.originRanks[pos][key] = event.target.value;
        this.originRanks[pos]['modified'] = true;
      } else if (type == 1) {
        this.destinationRanks[pos][key] = event.target.value;
        this.destinationRanks[pos]['modified'] = true;
      }

      this.resourceForm.get('ranks')?.markAsDirty();
    } else if (event.target.value.match(AppSettings.AGVN_PATTERN) == undefined && event.target.value != '') {
      await this.alertService.errorMessage(``, `${this.translate.instant('appsettings.AVGN_PATTERN_ERROR')}`, this.translate.instant('button.accept'));
      event.target.value = "";
      if (type == 0) {
        this.originRanks[pos][key] = event.target.value;
        this.originRanks[pos]['modified'] = true;
      } else if (type == 1) {
        this.destinationRanks[pos][key] = event.target.value;
        this.destinationRanks[pos]['modified'] = true;
      }
    }
    this.ranks = this.originRanks.concat(this.destinationRanks);
  }
}
