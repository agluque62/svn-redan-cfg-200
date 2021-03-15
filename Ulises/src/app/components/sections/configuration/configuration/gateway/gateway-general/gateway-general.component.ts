import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
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

  constructor(private readonly route: ActivatedRoute, private readonly siteService: SiteService, private readonly app: AppComponent, 
    private readonly alertService: AlertService, private readonly dataService: DataService) { }

  async ngOnInit() {

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
          await this.alertService.errorMessage(``, result.error);
        }
  
        this.siteOptions = (result.data != 'NO_DATA') ? [...result.data] : [];  
      }
    } catch (error) {
      this.app.catchError(error);
    }
  }

  async siteChanges(value: number) {

    const site = this.siteOptions.find(sites => { return sites.idEMPLAZAMIENTO === value });
    const result = await this.alertService.confirmationMessage(``,
      `¿Quiere transladar la pasarela ${this.gateway.name} del emplazamiento ${this.gateway.emplazamiento} al emplazamiento ${site?.name}?`);

    if (result.value) {
      const result = await this.siteService.changeSite(this.gateway.idCGW, this.gateway.EMPLAZAMIENTO_idEMPLAZAMIENTO, value).toPromise();
      if (result.error) {
        await this.alertService.errorMessage(``, result.error);
      }

      if (result.data === 'OK') {
        await this.alertService.successMessage(``, `La pasarela ha sido cambiada de emplazamiento.`);
      }
    } else {
      this.form.value.EMPLAZAMIENTO_idEMPLAZAMIENTO = this.gateway.EMPLAZAMIENTO_idEMPLAZAMIENTO;
    }
  }
}
