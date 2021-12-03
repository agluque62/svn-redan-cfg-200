import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppSettings } from 'src/app/core/app.settings';
import { AlertService } from 'src/app/_services/alert.service';
import { DataService } from 'src/app/_services/data.service';
import { ResourceService } from 'src/app/_services/resource.service';
import { UserService } from 'src/app/_services/user.service';

interface customValues {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'resource-comns',
  templateUrl: './resource-comns.component.html',
  styleUrls: ['./resource-comns.component.scss']
})
export class ResourceComnsComponent implements OnInit {

  arrow: string = "<";
  resourceTypes: customValues[] = [
    { value: 0, viewValue: 'Recursos configurados' },
    { value: 1, viewValue: 'Recursos externos' }
  ];

  optionsFilter: customValues[] = [
    { value: 4, viewValue: 'Buscar por Alias' },
    { value: 5, viewValue: 'Buscar por URI' },
    { value: -1, viewValue: 'Todos (Radio)' },
    { value: 0, viewValue: 'Radio Tx' },
    { value: 1, viewValue: 'Radio Tx Rx' },
    { value: 2, viewValue: 'Radio Rx' }
  ];

  subURILabels: string[] = ["A", "B"]

  resourceForm!: FormGroup;

  sites: any;
  gateways: any;
  resourcesConf: any;
  extResources: any;

  stringToFilter!: string;

  selectedResourceType!: number;
  selectedSite!: number;
  selectedGateway!: number;
  selectedConfResource!: number;
  selectedExtResource!: any;
  selectedOptFilter!: number;

  uriList: any = [];

  displayConfResourceOpts: boolean = false;
  displayExtResourceOpts: boolean = false;
  displaySearchBar: boolean = false;
  displayGateways: boolean = false;
  displayResource: boolean = false;
  displayExtResource: boolean = false;

  visualizationMode: boolean = false;

  readonly RADIO_TX = 0;
  readonly RADIO_TX_RX = 1;
  readonly RADIO_RX = 2;
  readonly CONFIGURATION_RESOURCE_TYPE = 0;
  readonly EXTERNAL_RESOURCE_TYPE = 1;

  constructor(private readonly resourceService: ResourceService, private readonly dataService: DataService, private readonly userService: UserService, private readonly alertService: AlertService) { }

  ngOnInit(): void {

    this.visualizationMode = (this.visualizationPermission()) ? true : false;

    this.getSites();
    this.checkNumberUriFieldsToDisplay();
    this.checkIfUrisExists();
  }

  checkNumberUriFieldsToDisplay() {
    switch (this.resourceForm.value.tipo_agente) {
      case 0:
        this.uriList = [{ name: 'EMPLAZAMIENTO 1', fields: { tx: this.initUriArray("TX", 1), rx: this.initUriArray("RX", 1) } }];
        break;
      case 1:
        this.uriList = [{ name: 'EMPLAZAMIENTO 1', fields: { tx: this.initUriArray("TX", 1, true), rx: this.initUriArray("RX", 1, true) } }];
        break;
      case 2:
        this.uriList = [{ name: 'EMPLAZAMIENTO 1', fields: { tx: this.initUriArray("TX", 1), rx: this.initUriArray("RX", 1) } },
        { name: 'EMPLAZAMIENTO 2', fields: { tx: this.initUriArray("TX", 3), rx: this.initUriArray("RX", 3) } },
        { name: 'EMPLAZAMIENTO 3', fields: { tx: this.initUriArray("TX", 5), rx: this.initUriArray("RX", 5) } }];

        break;
      case 3:
        this.uriList = [{ name: 'EMPLAZAMIENTO 1', fields: { tx: this.initUriArray("TX", 1, true), rx: this.initUriArray("RX", 1, true) } },
        { name: 'EMPLAZAMIENTO 2', fields: { tx: this.initUriArray("TX", 3, true), rx: this.initUriArray("RX", 3, true) } },
        { name: 'EMPLAZAMIENTO 3', fields: { tx: this.initUriArray("TX", 5, true), rx: this.initUriArray("RX", 5, true) } }];
        break;
    }
  }

  initUriArray(type: string, level: number, subURI: boolean = false) {
    let arr = [{ tipo: `${type}A`, uri: "", nivel_colateral: level }];
    if (subURI) {
      arr.push({ tipo: `${type}B`, uri: "", nivel_colateral: (level + 1) })
    }
    return arr;
  }

  visualizationPermission() {
    return !this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && this.userService.isRole('VISUALIZATION');
  }

  checkResourceTypeSelected() {
    if (this.selectedResourceType === this.CONFIGURATION_RESOURCE_TYPE) {
      this.displayConfResourceOpts = true;
      this.displayExtResourceOpts = false;
    } else {
      this.displayConfResourceOpts = false;
      this.displayExtResourceOpts = true;
    }
  }

  async checkExtOptSelected() {
    switch (this.selectedOptFilter) {
      case -1:
      case 0:
      case 1:
      case 2:
        this.extResources = await this.resourceService.getCommunicationsExtRadioResources(this.selectedOptFilter).toPromise();
        break;
      case 4:
      case 5:
        this.extResources = await this.resourceService.getCommunicationsFilteredRadioResources(this.selectedOptFilter, this.stringToFilter).toPromise();
        break;

    }
    this.displayExtResource = true;
  }

  checkIfUrisExists() {
    if (this.resourceForm.value.listaUris != undefined && this.resourceForm.value.listaUris.length > 0) {
      let keys = ['tx', 'rx'];
      this.uriList.forEach((site: any, i: number) => {
        keys.forEach((key: string) => {
          site.fields[key].forEach((row: any, j: number) => {
            this.resourceForm.value.listaUris.forEach((rowTmp: any) => {
              if (row.nivel_colateral == rowTmp.nivel_colateral && row.tipo == rowTmp.tipo) {
                this.uriList[i].fields[key][j].uri = rowTmp.uri.replace('sip:', '');
              }
            });
          });
        });
      });
    }
  }

  async checkUri(event: any, collateralLevel: string, type: string) {
    if (event.target.value.match(AppSettings.URI_PATTERN) == undefined && event.target.value != '') {
      await this.alertService.errorMessage(``, AppSettings.INVALID_URI);
      event.target.value = '';
    } else {
      this.resourceForm.get('listaUris')?.markAsDirty();

      let uri = this.resourceForm.value.listaUris.find((uri: any) => uri.tipo === type && uri.nivel_colateral === collateralLevel);
      if (event.target.value === '') {
        this.resourceForm.value.listaUris[this.resourceForm.value.listaUris.indexOf(uri)]['modified'] = true;
        this.resourceForm.value.listaUris[this.resourceForm.value.listaUris.indexOf(uri)]['previous'] = this.resourceForm.value.listaUris[this.resourceForm.value.listaUris.indexOf(uri)].uri;
        this.resourceForm.value.listaUris[this.resourceForm.value.listaUris.indexOf(uri)].uri = event.target.value;
        // this.resourceForm.value.listaUris.splice(this.resourceForm.value.listaUris.indexOf(uri), 1);
      } else {

        if (uri) {
          this.resourceForm.value.listaUris[this.resourceForm.value.listaUris.indexOf(uri)]['previous'] = this.resourceForm.value.listaUris[this.resourceForm.value.listaUris.indexOf(uri)].uri;
          this.resourceForm.value.listaUris[this.resourceForm.value.listaUris.indexOf(uri)].uri = event.target.value;
          this.resourceForm.value.listaUris[this.resourceForm.value.listaUris.indexOf(uri)]['modified'] = true;
        } else {
          this.resourceForm.value.listaUris.push({ 'uri': event.target.value, 'tipo': type, 'nivel_colateral': collateralLevel, modified: true });
        }
      }
    }
  }

  /**
   * 
   * @param level 
   * @param type 
   * @param uri 
   */

   pushUri(type: string, pos: number, subUri: boolean) {
    let uripush;
    let cnt = 0;
    this.resourceForm.value.listaUris.forEach((element: any) => {
      if (element.tipo === type && element.nivel_colateral === pos)
        cnt++;
      else {
        if (subUri) {
          if (element.tipo === type && element.nivel_colateral === pos + 1) {
            cnt++;
          }
        }
      }
    });
    return uripush = cnt != 0 ? false : true;
  };

  updateUri (type: string, level: number, uri: string, subUri: boolean){
    for (let index = 0; index < this.resourceForm.value.listaUris.length; index++) {
      if (this.resourceForm.value.listaUris[index].tipo === type && this.resourceForm.value.listaUris[index].nivel_colateral === level){
            this.resourceForm.value.listaUris[index]['previous'] = this.resourceForm.value.listaUris[index].uri;
            this.resourceForm.value.listaUris[index]['modified'] = true; 
            this.resourceForm.value.listaUris[index].uri = uri;
      } else {
        if (subUri) {
          if(this.resourceForm.value.listaUris[index].tipo === type && this.resourceForm.value.listaUris[index].nivel_colateral === level+1){
            this.resourceForm.value.listaUris[index]['previous'] = this.resourceForm.value.listaUris[index].uri;
            this.resourceForm.value.listaUris[index]['modified'] = true;
            this.resourceForm.value.listaUris[index].uri = uri;
          }
        }
      }
    }
  };

  pushUpdateUri(lenght: number, type: string, level:number, uri: string, prevUri: string, bool: boolean){
    if (this.resourceForm.value.listaUris.length < lenght) {
      if (this.resourceForm.value.listaUris.length === 0) {
        this.resourceForm.value.listaUris.push({ 'uri': uri, 'tipo': type, 'nivel_colateral': level, previous: prevUri, 'modified': true });
      } else {
        if (this.pushUri(type, level, bool)) {
          this.resourceForm.value.listaUris.push({ 'uri': uri, 'tipo': type, 'nivel_colateral': level, previous: prevUri, 'modified': true });
        }else {
          this.updateUri(type, level, uri, bool);
        }
      }
    } else {
      
      this.updateUri(type, level, uri, bool);
    }
  }

  makeURI(site: number, level: number, type: string) {

    let uri = ``;
    if (this.displayConfResourceOpts) {
      uri = `${this.resourcesConf.data[this.selectedConfResource].rName}@${this.resourcesConf.data[this.selectedConfResource].gIpv}:${this.resourcesConf.data[this.selectedConfResource].puerto_sip}`;
    } else {
      uri = `${this.selectedExtResource.uri}`;
    }
    let keyType = "";
    keyType = (type.includes('TX')) ? 'tx' : 'rx';
    let pos = level === 1 || level === 3 || level === 5 ? 0 : 1;
    let prevUri = this.uriList[site].fields[keyType][pos].uri;
    this.uriList[site].fields[keyType][pos].uri = uri;
    this.resourceForm.get('listaUris')?.markAsDirty();
    switch (this.resourceForm.value.tipo_agente) {
      case 0:
        this.pushUpdateUri(2, type, level, uri, prevUri, false);
        break;
      case 1:
        this.pushUpdateUri(4, type, level, uri, prevUri, true);
        break;
      case 2:
        this.pushUpdateUri(6, type, level, uri, prevUri, false);
        break;
      case 3:
        this.pushUpdateUri(12, type, level, uri, prevUri, true);
        break;
    }
  }
  


  async getSites() {
    const configId = this.dataService.getDataConfigId();
    this.sites = await this.resourceService.getCommunicationsSites(configId).toPromise();
  }

  async getGateways() {
    this.gateways = await this.resourceService.getCommunicationsGateways(this.selectedSite).toPromise();
    this.displayGateways = true;
  }

  async getResources() {
    this.resourcesConf = await this.resourceService.getCommunicationsResources(this.selectedGateway, undefined).toPromise();
    this.displayResource = true;
  }
}
