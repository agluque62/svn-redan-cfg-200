import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from 'src/app/app.component';
import { AppSettings } from 'src/app/core/app.settings';
import { Gateway } from 'src/app/_models/configs/gateway/Gateway';
import { SiteGW } from 'src/app/_models/configs/site/SiteGW';
import { AlertService } from 'src/app/_services/alert.service';
import { DataService } from 'src/app/_services/data.service';
import { SiteService } from 'src/app/_services/site.service';

@Component({
  selector: 'gateway-general',
  templateUrl: './gateway-general.component.html',
  styleUrls: ['./gateway-general.component.scss']
})
export class GatewayGeneralComponent implements OnInit {

  @Input('gateway') gateway!: Gateway;
  @Input('type') type!: string;
  @Input('form') form!: FormGroup;

  ready: boolean = false;
  siteOptions: SiteGW[] = [];
  
  configId!: number;

  sppeOptions: number[] = [1, 2, 4, 8];
  dvrrpOptions: number[] = [2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000, 18000, 20000];

  appset: any;

  constructor(private readonly route: ActivatedRoute, private readonly siteService: SiteService, private readonly app: AppComponent, 
    private readonly alertService: AlertService, private readonly dataService: DataService,
    private readonly translate: TranslateService) { }

  async ngOnInit() {

    this.appset = AppSettings;
    this.configId = this.dataService.getDataConfigId();

    if (this.type == 'EDIT') {
      await this.getSites();
    }

    this.ready = true;
  }

  async getSites() {
    try {
      this.siteOptions = [];
      
      if (this.configId) {
        const result = await this.siteService.getSites(this.configId).toPromise();
        if (result.error) {
          await this.alertService.errorMessage(``, result.error,this.translate.instant('button.accept'));
        }
  
        this.siteOptions = (result.data != 'NO_DATA') ? [...result.data] : [];  
      }
    } catch (error: any) {
      this.app.catchError(error);
    }
  }

  async siteChanges(value: number) {
    this.form.value.EMPLAZAMIENTO_idEMPLAZAMIENTO = value;
  }
}
