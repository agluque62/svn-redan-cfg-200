import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RadioResource } from 'src/app/_models/resource/RadioResource';
import { TelephoneResource } from 'src/app/_models/resource/TelephoneResource';
import { ConfigService } from 'src/app/_services/config.service';
import { DataService } from 'src/app/_services/data.service';
import { GatewayService } from 'src/app/_services/gateway.service';
import { ResourceService } from 'src/app/_services/resource.service';
import { UserService } from 'src/app/_services/user.service';

interface customValues {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'resource-collaterals',
  templateUrl: './resource-collaterals.component.html',
  styleUrls: ['./resource-collaterals.component.scss']
})
export class ResourceCollateralsComponent implements OnInit {

  arrows: string = "<<";

  resourceTypes: customValues[] = [
    { value: 0, viewValue: 'Recursos configurados' },
    { value: 1, viewValue: 'Recursos externos' }
  ];

  optionsFilter: customValues[] = [
    { value: 4, viewValue: 'Buscar por Alias' },
    { value: 5, viewValue: 'Buscar por URI' },
    { value: 3, viewValue: 'Todos (Telefono)' }
  ];

  time: customValues[] = [
    { value: 5, viewValue: '5' },
    { value: 10, viewValue: '10' },
    { value: 15, viewValue: '15' },
    { value: 20, viewValue: '20' },
    { value: 25, viewValue: '25' },
    { value: 30, viewValue: '30' }
  ];

  supCollateral: customValues[] = [
    { value: 0, viewValue: 'No' },
    { value: 1, viewValue: 'A Usuario' },
    { value: 2, viewValue: 'A Dominio' }
  ];

  selectedTypeResource: number = this.resourceTypes[0].value;
  selectedSite!: number;
  selectedGateway!: number;
  selectedResource!: number;
  selectedOptFilter!: number;
  stringToFilter!: string;
  gatewayId!: number;

  displaySearchBar: boolean = false;
  displaySites: boolean = false;
  displaySelectFilter: boolean = false;
  displayGateways: boolean = false;

  visualizationMode: boolean = false;

  displayTimeSelect: boolean = false;
  displayOptResponse1: boolean = false;
  displayOptResponse2: boolean = false;
  displayConfResource: boolean = false;
  displayExtResource: boolean = false;
  sites: any = [];
  gateways: any = [];
  resources: any = [];
  telhardwareResume: any;
  telAGVNNameSelected!: string;

  resourceForm!: FormGroup;

  constructor(private readonly userService: UserService, private readonly resourceService: ResourceService,
    private readonly dataService: DataService, private readonly configService: ConfigService, private readonly gatewayService: GatewayService) { }

  ngOnInit(): void {
    this.visualizationMode = (this.visualizationPermission()) ? true : false;
    this.getSites();

    this.resourceForm.patchValue({
      uri_telefonica: this.resourceForm.value.uri_telefonica.replace('sip:', ''),
      additional_uri_remota: this.resourceForm.value.additional_uri_remota.replace('sip:', '')
    });

    this.checkResourceTypeSelected();
    this.displaySupSelect();
  }

  visualizationPermission() {
    return !this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && this.userService.isRole('VISUALIZATION');
  }

  async checkResourceTypeSelected() {
    if (this.selectedTypeResource == 0) {
      await this.getGateways();
      await this.getConfResources();
      if (this.selectedResource != undefined) {
        await this.checkIfAGVNNameExist();
      }
      this.displaySites = true;
      this.displaySelectFilter = false;
      this.displaySearchBar = false;
      this.displayExtResource = false;
    } else {
      await this.checkExtOptSelected();
      this.displaySites = false;
      this.displaySelectFilter = true;
      this.displaySearchBar = true;
      this.displayGateways = false;
      this.displayConfResource = false;
    }
  }

  displaySupSelect() {

    this.displayOptResponse1 = (this.resourceForm.value.supervisa_colateral != 0);
    this.displayOptResponse2 = (this.resourceForm.value.additional_superv_options != 0);
    this.displayTimeSelect = (this.displayOptResponse1 || this.displayOptResponse2);
  }

  async getSites() {
    const configId = this.dataService.getDataConfigId();
    this.sites = await this.resourceService.getCommunicationsSites(configId).toPromise();
  }

  async getConfigName() {
    const configId = this.dataService.getDataConfigId();
    const config = await this.configService.getConfigurationById(configId).toPromise();
    return config.result[0].NAME;
  }

  async getGateways() {
    let confName = await this.getConfigName();
    if (this.selectedSite != undefined) {
      let tmpGateways = await this.resourceService.getCollateralGateways(confName, this.selectedSite).toPromise();
      let temp: any = [];
      this.gateways = [];
      this.resources = [];
      this.selectedResource = -1;
      this.telAGVNNameSelected = '';
      await tmpGateways.data.forEach((gateway: any) => {
        if (!temp.includes(gateway.gName)) {
          temp.push(gateway.gName);
          this.gateways.push(gateway);
        }
      });
      this.displayGateways = true;
    }

  }

  async getConfResources() {
    let confName = await this.getConfigName();
    this.resources = [];
    this.telAGVNNameSelected = '';
    this.selectedResource = -1;
    if (this.selectedSite != undefined && this.selectedGateway != undefined) {
      this.resources = (await this.resourceService.getTelResources(confName, this.selectedSite, this.selectedGateway, 2).toPromise()).data;
      this.displayConfResource = true;
    }
  }

  makeURI(additional: boolean = false) {

    let firstPartUri = '';
    let secondPartUri = '';
    let uri = '';
    
    if (this.resources[this.selectedResource] !== undefined) {

      if (this.telAGVNNameSelected != '' && this.telAGVNNameSelected != undefined) {
        firstPartUri = this.telAGVNNameSelected;
        secondPartUri = this.selectedTypeResource === 0 ? this.resources[this.selectedResource]["gIpv"] : this.resources[this.selectedResource]["gIpv"].split("@")[1];
        uri = `${firstPartUri}@${secondPartUri}`;
      } else {
        firstPartUri = this.resources[this.selectedResource]["rName"];
        secondPartUri = this.resources[this.selectedResource]["gIpv"];
        uri = this.selectedTypeResource === 0 ? `${firstPartUri}@${secondPartUri}` : this.resources[this.selectedResource]["gIpv"];
      }

      if (!additional) {
        this.resourceForm.patchValue({ uri_telefonica: `${uri}` });
      } else {
        this.resourceForm.patchValue({ additional_uri_remota: `${uri}` });
      }
    }
  }

  getFilterValue(event: any) {
    this.stringToFilter = event.target.value;
  }

  /**
   * 
   */
  async checkExtOptSelected() {
    let temp: any = [];
    this.resources = [];
    this.telAGVNNameSelected = '';
    switch (this.selectedOptFilter) {
      case 3:
        temp = await this.resourceService.getCommunicationsExtTelResources(this.selectedOptFilter).toPromise();
        break;
      case 4:
      case 5:
        temp = await this.resourceService.getCommunicationsFilteredTelResources(this.selectedOptFilter, this.stringToFilter).toPromise();
        break;
    }
    if (temp.lista_recursos != undefined) {
      await temp.lista_recursos.forEach((recurso: any) => {
        this.resources.push({ 'rName': recurso.alias, 'gIpv': recurso.uri });
      });
    }

    this.displayExtResource = true;
  }

  async checkIfAGVNNameExist() {
    this.telhardwareResume = (await this.gatewayService.getGatewayHardware(this.selectedGateway).toPromise()).tfno;
    let obtainedResourceId;
    if (this.selectedResource !== -1) {
      this.telhardwareResume.forEach((resource: any) => {
        if (this.resources[this.selectedResource].rName === resource.nombre) {
          obtainedResourceId = resource.idrecurso_telefono;
          
        }
      });
      if (obtainedResourceId !== undefined) {
        let res = (await this.resourceService.getTelResource(obtainedResourceId, 2).toPromise());
        if (res !== undefined) {
          this.telAGVNNameSelected = res.ats_user;
        }
      }
    }
  }
}
