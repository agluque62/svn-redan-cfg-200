import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/_services/alert.service';
import { RadioResource } from 'src/app/_models/resource/RadioResource';
import { ResourceService } from 'src/app/_services/resource.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { DataService } from 'src/app/_services/data.service';
import { UserService } from 'src/app/_services/user.service';
import { LoginService } from 'src/app/_services/login.service';
import { TelephoneResource } from 'src/app/_models/resource/TelephoneResource';
import { AppSettings } from 'src/app/core/app.settings';
import { GatewayResponse } from 'src/app/_models/configs/gateway/GatewayResponse';
import { Gateway } from 'src/app/_models/configs/gateway/Gateway';
import { GatewayService } from 'src/app/_services/gateway.service';
import { ConfigService } from 'src/app/_services/config.service';
import { HistoricService } from 'src/app/_services/historic.service';
import { TableBSSService } from 'src/app/_services/tableBss.service';


import * as formsFields from '../../../../../../../assets/validateInfoFields.json';
import { TranslateService } from '@ngx-translate/core';

interface customValues {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-resource-home',
  templateUrl: './resource-home.component.html',
  styleUrls: ['./resource-home.component.scss']
})
export class ResourceHomeComponent implements OnInit, AfterViewInit {

  @ViewChild('secondTabTemplate', { read: ViewContainerRef, }) secondTabContainer!: ViewContainerRef;
  @ViewChild('thirdTabTemplate', { read: ViewContainerRef, }) thirdTabContainer!: ViewContainerRef;
  @ViewChild('collateralsTabTemplate', { read: ViewContainerRef, }) collateralsContainer!: ViewContainerRef;

  showNumberRange = true;

  date = new Date();

  gateway!: Gateway;
  gatewayResponse!: GatewayResponse;

  gatewayTitle!: string;
  title!: string;
  c = console.log.bind(document)

  GATEWAY_ID!: number;
  COLUMN!: string;
  ROW!: string;

  CFG_NAME!: string;
  LOCAT_NAME!: string;
  GTW_NAME!: string;

  resourceForm!: FormGroup;
  resource!: any;
  secondTabRef: any;
  thirdTabRef: any;
  collateralsTabRef: any;

  precisionIsSelected: boolean = false;
  registerKeyExists: boolean = false;
  displayRegKey: boolean = false;
  ready: boolean = false;
  editMode: boolean = false;
  isCheckedRegistryKey: boolean = false;
  isChangedAGCAD: boolean = false;
  isChangedAGCDA: boolean = false;

  tmpNameResource: string = '';

  // Radio
  displayRadioTab: boolean = false;
  displayComnsTab: boolean = false;
  displayListsTab: boolean = false;
  displayTbMessage: boolean = false;

  // Telephonic
  displayTelephonicTab: boolean = false;
  displayNumberRange: boolean = false;
  displayCollaterals: boolean = false;
  displayAGCAD: boolean = false;
  displayAGCDA: boolean = false;
  displayDeleteBtn: boolean = false;
  displayExportBtn: boolean = false;
  displayAudioPrecision: boolean = false;

  // Common
  types: customValues[] = [
    { value: 1, viewValue: 'resource.types_value_0' },
    { value: 2, viewValue: 'resource.types_value_1' }
  ];

  indexAudio: customValues[] = [
    { value: 1, viewValue: 'resource.indexAudio_value_0' },
    { value: 0, viewValue: 'resource.indexAudio_value_1' }
  ];

  codecs: customValues[] = [
    { value: 0, viewValue: 'resource.codecs_value_0' }
  ];

  // Radio data
  radioAgents: customValues[] = [
    { value: 0, viewValue: 'resource.radioAgents_value_0' },
    { value: 1, viewValue: 'resource.radioAgents_value_1' },
    { value: 2, viewValue: 'resource.radioAgents_value_2' },
    { value: 3, viewValue: 'resource.radioAgents_value_3' },
    { value: 4, viewValue: 'resource.radioAgents_value_4' },
    { value: 5, viewValue: 'resource.radioAgents_value_5' },
    { value: 6, viewValue: 'resource.radioAgents_value_6' }
  ];

  // Telephonic data
  telephonicInterfaces: customValues[] = [
    { value: 0, viewValue: 'resource.telephonicIntefaces_value_0' },
    { value: 1, viewValue: 'resource.telephonicIntefaces_value_1' },
    { value: 2, viewValue: 'resource.telephonicIntefaces_value_2' },
    { value: 3, viewValue: 'resource.telephonicIntefaces_value_3' },
    { value: 4, viewValue: 'resource.telephonicIntefaces_value_4' },
    { value: 5, viewValue: 'resource.telephonicIntefaces_value_5' },
    { value: 6, viewValue: 'resource.telephonicIntefaces_value_6' },
    { value: 7, viewValue: 'resource.telephonicIntefaces_value_7' }
  ];

  bssMethods: customValues[] = [
    { value: 0, viewValue: 'resource.radio.bssMethods_value_0' },
    { value: 1, viewValue: 'resource.radio.bssMethods_value_1' },
    { value: 2, viewValue: 'resource.radio.bssMethods_value_2' }
  ];

  favBssMethods: customValues[] = [
    { value: 0, viewValue: 'resource.radio.bssMethodsPref_value_0' },
    { value: 1, viewValue: 'resource.radio.bssMethodsPref_value_1' },
    { value: 2, viewValue: 'resource.radio.bssMethodsPref_value_2' }
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

  iAudio: customValues[] = [
    { value: 0, viewValue: 'resource.radio.iAudio_value_0' },
    { value: 1, viewValue: 'resource.radio.iAudio_value_1' },
    { value: 2, viewValue: 'resource.radio.iAudio_value_2' },
  ];

  typeLists: customValues[] = [
    { value: 0, viewValue: 'resource.tlf.typeList_value_0' },
    { value: 1, viewValue: 'resource.tlf.typeList_value_1' },
    { value: 2, viewValue: 'resource.tlf.typeList_value_2' }
  ];

  supCollateral: customValues[] = [
    { value: 0, viewValue: 'resource.radio.supCollateral_value_0' },
    { value: 1, viewValue: 'resource.radio.supCollateral_value_1' },
    { value: 2, viewValue: 'resource.radio.supCollateral_value_2' }
  ];

  timeOpts: customValues[] = [
    { value: 0, viewValue: 'resource.tlf.timeOpts_value_0' },
    { value: 256, viewValue: 'resource.tlf.timeOpts_value_1' }
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

  selectedResource: number = this.types[0].value;
  resourceId!: number;

  visualizationMode: boolean = false;

  showSpinner: boolean = false;
  appset: any;
  changes = false;
  tablesBss: any;
  precAudioIsDisable = false;
  rawLists: any = [];

  constructor(private readonly cfr: ComponentFactoryResolver, private readonly resourceService: ResourceService,
    private readonly alertService: AlertService, private readonly route: ActivatedRoute, private readonly app: AppComponent,
    private readonly router: Router, private readonly dataService: DataService, private readonly userService: UserService,
    private readonly loginService: LoginService, private gatewayService: GatewayService, private readonly configService: ConfigService,
    private historicService: HistoricService,
    private readonly tableBssService: TableBSSService,
    private readonly translate: TranslateService,
    private cdr: ChangeDetectorRef) { }

  async ngOnInit() {
    this.displayAudioPrecision = (await this.loginService.version().toPromise()).R16Mode; // It is no longer used in the html (ngIf)
    this.checkPermissions();
    this.appset = AppSettings;
    this.resourceId = Number(this.route.snapshot.paramMap.get('id'));
    const slot = await this.dataService.getDataSlot();
    this.tablesBss = (await this.tableBssService.getTableAudioBss().toPromise())?.tables;
    if (this.tablesBss !== null) {
      this.tablesBss.unshift({
        FechaCreacion: "",
        description: `${this.translate.instant('resource.none')}`,
        idtabla_bss: 0,
        name: `${this.translate.instant('resource.none')}`,
        valor0: 0,
        valor1: 0,
        valor2: 0,
        valor3: 0,
        valor4: 0,
        valor5: 0
      });
    }

    this.GATEWAY_ID = slot.gatewayId;

    this.COLUMN = slot.columna;
    this.ROW = slot.fila;
    this.selectedResource = slot.tipo != undefined ? slot.tipo : 1;

    this.initGateway();

    if (this.resourceId !== 0) { // edit mode
      this.resource = await this.getResource();
      if (this.selectedResource == 1) {
        if (this.resource.frecuencia == 0) {// Issue 2747
          this.resource.frecuencia = undefined;
        } else if (this.resource.frecuencia.toString().length < 7) {
          for (let i = this.resource.frecuencia.toString().length; i < 7; i++) {
            if (i === 3) {
              this.resource.frecuencia += ".";
            } else {
              this.resource.frecuencia += "0";
            }

          }
        }
        this.resource.listaUris = (await this.resourceService.getUriList(this.resource.idrecurso_radio).toPromise()).uris;
        this.resource.ranks = (await this.resourceService.getRanges(this.resource.idrecurso_telefono).toPromise()).ranks ?? [];
      } else {
        this.resource.ranks = (await this.resourceService.getRanges(this.resource.idrecurso_telefono).toPromise()).ranks ?? [];
        this.resource.uri_telefonica = this.resource.uri_telefonica.replace('sip:', '');
        this.resource.additional_uri_remota = this.resource.additional_uri_remota === null || this.resource.additional_uri_remota === undefined ? '' : this.resource.additional_uri_remota;
        this.resource.additional_uri_remota = this.resource.additional_uri_remota.replace('sip:', '');
      }
      if (this.resource.listaUris === null) {
        this.resource.listaUris = [];
      }
      this.checkIfTheRegisterKeyExists();
      this.checkAudioSettings();
      this.resource.pasarela_id = this.GATEWAY_ID;
      this.resource.columna = this.COLUMN;
      this.resource.fila = this.ROW;

      this.displayDeleteBtn = true;
      this.displayExportBtn = true;
      this.editMode = true;
    } else {
      this.initResource();
    }

    if (this.selectedResource == 1) {
      this.initRadioForm();
    } else if (this.selectedResource == 2) {
      this.initTelephoneForm();
    }

    this.setTitle();
    this.ready = true;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.checkResourceType();
    }, 500);
    this.cdr.detectChanges();

  }

  async initGateway() {
    this.gatewayResponse = await this.gatewayService.getGatewayById(+this.GATEWAY_ID).toPromise();
    if (this.gatewayResponse && this.gatewayResponse.result) {
      this.gateway = [...this.gatewayResponse.result][0];
      this.CFG_NAME = this.gateway.conf_name;
      this.LOCAT_NAME = this.gateway.emplazamiento;
      this.GTW_NAME = this.gateway.name;
    }
  }

  setTitle() {
    this.gatewayTitle = this.dataService.getDataGatewayTitle();
    this.title = this.editMode ? `${this.resource.nombre}@${this.gateway.ipv}` : ``;
  }

  async checkPermissions() {
    if (this.notPermission()) {
      await this.loginService.logout().toPromise();
      this.app.destroyAlive();
      this.router.navigate(['/access']);
    }

    this.visualizationMode = (this.visualizationPermission()) ? true : false;
  }

  notPermission() {
    return !this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && !this.userService.isRole('VISUALIZATION')
      && !this.userService.isRole('SUPERVISED_CONFIGURATION');
  }

  visualizationPermission() {
    return (!this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && this.userService.isRole('VISUALIZATION'))
      || (!this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && this.userService.isRole('SUPERVISED_CONFIGURATION'));
  }

  async getResource() {
    const res = await this.resourceService.getResource(this.resourceId, this.selectedResource).toPromise();
    return <RadioResource | TelephoneResource>res;
  }

  checkAudioSettings() {
    this.displayAGCAD = (this.resource.ajuste_ad === null);
    this.displayAGCDA = (this.resource.ajuste_da === null);
  }

  checkIfTheRegisterKeyExists() {

    this.registerKeyExists = false;
    this.displayRegKey = false;

    if (this.resource.clave_registro !== null && this.resource.clave_registro !== '') {
      this.registerKeyExists = true;
      this.displayRegKey = true;
    }
  }

  enableRegistryKey(event: boolean) {
    this.isCheckedRegistryKey = true;
    this.displayRegKey = event;
  }

  async onDelete() {
    const userInteraction = await this.alertService.confirmationMessage(``, `${this.translate.instant('resource.alert.conf_delete_res', { value: this.resourceForm.value.nombre })}`, this.translate.instant('button.accept'), this.translate.instant('button.cancel'));
    let res;
    if (userInteraction.value) {
      if (this.selectedResource == 1) {
        res = await this.resourceService.deleteRadioResource(this.resourceId).toPromise();
      } else {
        res = await this.resourceService.deleteTelResource(this.resourceId).toPromise();
      }
      if (res) {
        let title = this.dataService.getDataGatewayTitle();
        title = title + " - {TYPE} : " + (this.selectedResource == 1 ? " {RADIO} " : " {TLF} ")
        await this.historicService.updateCfg(114, this.resourceForm.value.nombre, title).toPromise();
        await this.alertService.successMessage(``, `${this.translate.instant('resource.alert.succ_delete_res', { value: this.resourceForm.value.nombre })}`, this.translate.instant('button.accept'));
        this.dataService.updateDataGatewayPreviousUrl('RESOURCE');
        this.router.navigate(['/home/gateway/' + this.resource.pasarela_id]);
      } else {
        await this.alertService.errorMessage(``, `${this.translate.instant('resource.alert.err_delete_res')}`, this.translate.instant('button.accept'));
      }
    }

  }

  async back() {
    let confirm;
    if (this.editMode && this.changes) {
      confirm = await this.alertService.confirmationMessage("", `${this.translate.instant('resource.alert.conf_back_no_changes')}`, this.translate.instant('button.accept'), this.translate.instant('button.cancel'));

    }
    if (confirm?.isConfirmed == true || confirm === undefined) {
      this.dataService.updateDataGatewayPreviousUrl('RESOURCE');
      await this.router.navigate(['/home/gateway/' + this.resource.pasarela_id]);
    }
  }

  initRadioForm() {
    this.resourceForm = new FormGroup({
      // Common
      nombre: new FormControl({ value: this.resource.nombre, disabled: this.visualizationMode }, [Validators.required, Validators.pattern(AppSettings.NAME_PATTERN)]),
      codec: new FormControl({ value: this.resource.codec, disabled: this.visualizationMode }),
      clave_registro: new FormControl({ value: this.resource.clave_registro, disabled: this.visualizationMode }),
      ajuste_ad: new FormControl({ value: this.resource.ajuste_ad, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.REAL_NUMBER), Validators.min(-13.5), Validators.max(1.20)]),
      ajuste_da: new FormControl({ value: this.resource.ajuste_da, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.REAL_NUMBER), Validators.min(-24.3), Validators.max(1.10)]),
      precision_audio: new FormControl({ value: this.resource.precision_audio == 0 ? 0 : 1, disabled: false }),
      fila: new FormControl({ value: this.resource.fila, disabled: this.visualizationMode }),
      columna: new FormControl({ value: this.resource.columna, disabled: this.visualizationMode }),
      listaUris: new FormControl({ value: this.resource.listaUris, disabled: this.visualizationMode }),
      pasarela_id: new FormControl({ value: this.resource.pasarela_id, disabled: this.visualizationMode }),
      // Radio
      climax_bss: new FormControl({ value: this.resource.climax_bss, disabled: this.visualizationMode }),
      cola_bss_sqh: new FormControl({ value: this.resource.cola_bss_sqh, disabled: this.visualizationMode }),
      evento_ptt_squelch: new FormControl({ value: this.resource.evento_ptt_squelch, disabled: this.visualizationMode }),
      frecuencia: new FormControl({ value: this.resource.frecuencia, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.AEREAL_VHF_AND_UHF)]),
      habilita_grabacion: new FormControl({ value: this.resource.habilita_grabacion, disabled: this.visualizationMode }),
      idrecurso_radio: new FormControl({ value: this.resource.idrecurso_radio, disabled: this.visualizationMode }),
      indicacion_entrada_audio: new FormControl({ value: this.resource.indicacion_entrada_audio, disabled: this.visualizationMode }),
      indicacion_salida_audio: new FormControl({ value: this.resource.indicacion_salida_audio, disabled: this.visualizationMode }),
      metodo_bss: new FormControl({ value: this.resource.metodo_bss, disabled: this.visualizationMode }),
      metodo_climax: new FormControl({ value: this.resource.metodo_climax, disabled: this.visualizationMode }),
      prioridad_ptt: new FormControl({ value: this.resource.prioridad_ptt, disabled: this.visualizationMode }),
      prioridad_sesion_sip: new FormControl({ value: this.resource.prioridad_sesion_sip, disabled: this.visualizationMode }),
      restriccion_entrantes: new FormControl({ value: this.resource.restriccion_entrantes, disabled: this.visualizationMode }),
      retardo_fijo_climax: new FormControl({ value: this.resource.retardo_fijo_climax, disabled: this.visualizationMode },
        [Validators.required, Validators.pattern(AppSettings.ONLY_NUMBERS), Validators.min(AppSettings.controlRanges.retardo_fijo_climax.min), Validators.max(AppSettings.controlRanges.retardo_fijo_climax.max)]),
      retraso_interno_grs: new FormControl({ value: this.resource.retraso_interno_grs, disabled: this.visualizationMode }, [Validators.required, Validators.min(0), Validators.max(250)]),
      tabla_bss_id: new FormControl({ value: this.resource.tabla_bss_id, disabled: this.visualizationMode }),
      tipo_agente: new FormControl({ value: this.resource.tipo_agente, disabled: this.visualizationMode }),
      tipo_climax: new FormControl({ value: this.resource.tipo_climax, disabled: this.visualizationMode }),
      umbral_vad: new FormControl({ value: this.resource.umbral_vad, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.UMBRAL_VOX), Validators.min(-35), Validators.max(-15)]),
      ventana_bss: new FormControl({ value: this.resource.ventana_bss, disabled: this.visualizationMode },
        [Validators.required, Validators.pattern(AppSettings.ONLY_NUMBERS), Validators.min(AppSettings.controlRanges.ventana_bss.min), Validators.max(AppSettings.controlRanges.ventana_bss.max)]),
    });

    this.resourceForm.valueChanges
      .subscribe(value => {
        if (this.resourceForm.dirty) {
          this.changes = true;
        } else {
          this.changes = false;
        }
      });
  }

  initTelephoneForm() {

    this.resource.destino_test = this.resource.destino_test=="" ? "399999" : this.resource.destino_test;
    this.resource.origen_test = this.resource.origen_test=="" ? "309999" : this.resource.origen_test;
    
    this.resourceForm = new FormGroup({
      // Common
      nombre: new FormControl({ value: this.resource.nombre, disabled: this.visualizationMode }, [Validators.required, Validators.pattern(AppSettings.NAME_PATTERN)]),
      codec: new FormControl({ value: this.resource.codec, disabled: this.visualizationMode }),
      clave_registro: new FormControl({ value: this.resource.clave_registro, disabled: this.visualizationMode }),
      ajuste_ad: new FormControl({ value: this.resource.ajuste_ad, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.REAL_NUMBER), Validators.min(-13.5), Validators.max(1.20)]),
      ajuste_da: new FormControl({ value: this.resource.ajuste_da, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.REAL_NUMBER), Validators.min(-24.3), Validators.max(1.10)]),
      precision_audio: new FormControl({ value: this.resource.precision_audio == 0 ? 0 : 1, disabled: false }),
      fila: new FormControl(this.resource.fila),
      columna: new FormControl(this.resource.columna),
      pasarela_id: new FormControl(this.resource.pasarela_id),
      //Telephone
      DetInversionPol: new FormControl({ value: this.resource.DetInversionPol, disabled: this.visualizationMode }),
      additional_itiporespuesta: new FormControl({ value: this.resource.additional_itiporespuesta, disabled: this.visualizationMode }),
      additional_superv_options: new FormControl({ value: this.resource.additional_superv_options, disabled: this.visualizationMode }),
      additional_uri_remota: new FormControl({ value: this.resource.additional_uri_remota, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.URI_PATTERN)]),
      ats_user: new FormControl({ value: this.resource.ats_user, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.AGVN_PATTERN)]),
      cola_vox: new FormControl({ value: this.resource.cola_vox, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.COLA_VOX), Validators.min(0), Validators.max(30)]),
      destino_test: new FormControl({ value: this.resource.destino_test, disabled: this.visualizationMode }, [Validators.required, Validators.pattern(AppSettings.AGVN_PATTERN)]),
      deteccion_vox: new FormControl({ value: this.resource.deteccion_vox, disabled: this.visualizationMode }),
      duracion_tono_interrup: new FormControl({ value: this.resource.duracion_tono_interrup, disabled: this.visualizationMode }),
      iDetLineaAB: new FormControl({ value: this.resource.iDetLineaAB, disabled: this.visualizationMode }),
      iEnableNoED137: new FormControl({ value: this.resource.iEnableNoED137, disabled: this.visualizationMode }),
      itiporespuesta: new FormControl({ value: this.resource.itiporespuesta, disabled: this.visualizationMode }),
      lado: new FormControl({ value: this.resource.lado, disabled: this.visualizationMode }),
      origen_test: new FormControl({ value: this.resource.origen_test, disabled: this.visualizationMode }, [Validators.required, Validators.pattern(AppSettings.AGVN_PATTERN)]),
      periodo_tonos: new FormControl({ value: this.resource.periodo_tonos, disabled: this.visualizationMode }, [Validators.required, Validators.pattern(AppSettings.ONLY_NUMBERS), Validators.min(0), Validators.max(10)]),
      ranks: new FormControl({ value: this.resource.ranks, disabled: this.visualizationMode }),
      respuesta_automatica: new FormControl({ value: this.resource.respuesta_automatica, disabled: this.visualizationMode }),
      supervisa_colateral: new FormControl({ value: this.resource.supervisa_colateral, disabled: this.visualizationMode }),
      tiempo_supervision: new FormControl({ value: this.resource.tiempo_supervision, disabled: this.visualizationMode }),
      tipo_interfaz_tel: new FormControl({ value: this.resource.tipo_interfaz_tel, disabled: this.visualizationMode }),
      umbral_vox: new FormControl({ value: this.resource.umbral_vox, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.UMBRAL_VOX), Validators.min(-35), Validators.max(-15)]),
      uri_telefonica: new FormControl({ value: this.resource.uri_telefonica, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.URI_PATTERN)]),
      idrecurso_telefono: new FormControl({ value: this.resource.idrecurso_telefono, disabled: this.visualizationMode }),
      llamada_automatica: new FormControl({ value: this.resource.llamada_automatica, disabled: this.visualizationMode }),
      iControlTmLlam: new FormControl({ value: this.resource.iControlTmLlam, disabled: this.visualizationMode }),
      iTmMaxConversacion: new FormControl({ value: this.resource.iTmMaxConversacion, disabled: this.visualizationMode }, [Validators.min(0), Validators.max(600)]),
      RespuestaSIP_ATSR2: new FormControl({ value: this.resource.RespuestaSIP_ATSR2, disabled: this.visualizationMode }),
      TmTonoBloqueo: new FormControl({ value: this.resource.TmTonoBloqueo, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.TM_TONO_BLOQ)]),
      TmBloqueoLib: new FormControl({ value: this.resource.TmBloqueoLib, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.TM_BLOQ_LIB)]),
    });
    this.resourceForm.valueChanges
      .subscribe(value => {
        if (this.resourceForm.dirty) {
          this.changes = true;
        } else {
          this.changes = false;
        }
      });
  }

  async checkOutgoingCallsNumbers(): Promise<boolean> {
    let result = false;
    // Tel resource ATS-R2 || ATS-N5
    if (this.selectedResource === 2 && (this.resourceForm.get('tipo_interfaz_tel')?.value === 3 || this.resourceForm.get('tipo_interfaz_tel')?.value === 4)) {
      if (this.resourceForm.get('origen_test')?.value === this.resourceForm.get('destino_test')?.value &&
        this.resourceForm.get('origen_test')?.value !== '' &&
        this.resourceForm.get('destino_test')?.value !== '') {

        const message = `${this.translate.instant('resource.alert.err_same_start_end_call')}`;
        await this.alertService.errorMessage(`Error`, message, this.translate.instant('button.accept'));
        result = true;
      }
    }

    return result
  }

  async onSubmit() {
    let res;
    let message;
    if (this.thirdTabRef && this.thirdTabRef.instance.uriListToDisplay != undefined) {
      let blList = this.thirdTabRef.instance.uriListToDisplay['LSN'];
      let wList = this.thirdTabRef.instance.uriListToDisplay['LSB'];

      let rawBlList = blList;
      let rawWList = wList;

      this.rawLists = rawBlList.concat(rawWList);

      let blListFiltered = blList.filter((x: any) => x.uri != '');
      let wListFiltered = wList.filter((x: any) => x.uri != '');

      this.resourceForm.patchValue({ listaUris: blListFiltered.concat(wListFiltered) });
    }
    if (this.thirdTabRef && this.thirdTabRef.instance && this.thirdTabRef.instance.ranks != undefined) {
      this.resourceForm.patchValue({ ranks: this.thirdTabRef.instance.ranks });
    }

    if (this.selectedResource == 2 && this.resourceForm.value.tipo_interfaz_tel !== 3) {
      if (this.resourceForm.get('TmTonoBloqueo')?.invalid)
        this.resourceForm.patchValue({ 'TmTonoBloqueo': 0 });
      if (this.resourceForm.get('TmBloqueoLib')?.invalid)
        this.resourceForm.patchValue({ 'TmBloqueoLib': 0 });
    }

    let nameIsValid = this.resourceForm.value.nombre !== undefined && this.resourceForm.value.nombre !== '' ?
      (await this.resourceService.checkIfNameIsValid(this.resourceForm.value.nombre, this.GATEWAY_ID, this.resourceId).toPromise()) : undefined;

    let ranksKO = this.checkCompleteRanks();

    let confirm;

    if (this.selectedResource == 1 && this.resourceForm.value.tipo_agente == 4 && this.resourceForm.value.tabla_bss_id == 0) {
      this.displayTbMessage = true;
    } else {
      this.displayTbMessage = false;
    }
    if (this.displayTbMessage) confirm = await this.alertService.confirmationMessage("", `${this.translate.instant('resource.alert.conf_no_table_continue')}`, this.translate.instant('button.accept'), this.translate.instant('button.cancel'));

    if (this.resourceForm.value.indicacion_entrada_audio !== 1) {
      this.resourceForm.get('umbral_vad')?.clearValidators();
      this.resourceForm.get('umbral_vad')?.updateValueAndValidity();
    }
    if (this.resourceForm.valid &&
      (nameIsValid?.toString() === 'NO_ERROR' || nameIsValid === undefined) &&
      !ranksKO &&
      !(await this.checkOutgoingCallsNumbers()) &&
      ((confirm?.isConfirmed == true && this.displayTbMessage) || !this.displayTbMessage)) {
      let confirmLoadIndex = await this.checkLoadIndex();
      if ((confirmLoadIndex.response?.isConfirmed == true && confirmLoadIndex.loadIndex > 16) || (confirmLoadIndex.response === undefined)) {
        this.resourceForm.get('frecuencia')?.setValidators([]); // Issue 2747

        if (this.displayRegKey && this.resourceForm.value.clave_registro === null) {
          this.resourceForm.patchValue({ clave_registro: "" });
        } else if (!this.displayRegKey) {
          this.resourceForm.patchValue({ clave_registro: null });
        }

        if (this.selectedResource === 1 && this.resourceForm.value.frecuencia === undefined || this.resourceForm.value.frecuencia === '') {
          this.resourceForm.patchValue({ frecuencia: 0 });
        } else if (this.selectedResource === 2 && this.resourceForm.value.duracion_tono_interrup !== undefined && this.secondTabRef.instance.timeOpt !== undefined) {// issue 2792
          this.resourceForm.patchValue({ duracion_tono_interrup: this.secondTabRef.instance.duration + this.secondTabRef.instance.timeOpt });
          this.resourceForm.value.additional_uri_remota = this.resourceForm.value.additional_uri_remota === null ? '' : this.resourceForm.value.additional_uri_remota;
        }
        if (this.displayAGCAD) {
          this.resourceForm.patchValue({ ajuste_ad: undefined });
        }

        if (this.displayAGCDA) {
          this.resourceForm.patchValue({ ajuste_da: undefined });
        }

        this.resourceForm.value.ajuste_ad = this.resourceForm.value.ajuste_ad === null || this.resourceForm.value.ajuste_ad === '' ?
          0 : this.resourceForm.value.ajuste_ad;
        this.resourceForm.value.ajuste_da = this.resourceForm.value.ajuste_da === null || this.resourceForm.value.ajuste_da === '' ?
          0 : this.resourceForm.value.ajuste_da;

        this.resourceForm.value.deteccion_vox = this.resourceForm.value.deteccion_vox ? 1 : 0;
        this.resourceForm.value.iEnableNoED137 = this.resourceForm.value.iEnableNoED137 ? 1 : 0;
        this.resourceForm.value.precision_audio = this.resourceForm.value.precision_audio ? 1 : 0;
        this.resourceForm.value.llamada_automatica = this.resourceForm.value.llamada_automatica ? 1 : 0;
        this.resourceForm.value.duracion_llamada = this.resourceForm.value.duracion_llamada ? 1 : 0;

        this.resourceForm.value.itiporespuesta = typeof (this.resourceForm.value.itiporespuesta) === 'boolean' ?
          (this.resourceForm.value.itiporespuesta ? 1 : 0) : this.resourceForm.value.itiporespuesta;

        this.resourceForm.value.additional_itiporespuesta = typeof (this.resourceForm.value.additional_itiporespuesta) === 'boolean' ?
          (this.resourceForm.value.additional_itiporespuesta ? 1 : 0) : this.resourceForm.value.additional_itiporespuesta;

        this.checkUriList();

        this.showSpinner = true;
        if (this.editMode) {
          res = await this.resourceService.updateResource(this.selectedResource, this.resourceForm.value).toPromise();
          message = `${this.translate.instant('resource.alert.succ_edit_res', { value: this.resourceForm.value.nombre })}`;
        } else {
          res = await this.resourceService.createResource(this.selectedResource, this.resourceForm.value).toPromise();
          message = `${this.translate.instant('resource.alert.succ_create_res', { value: this.resourceForm.value.nombre })}`;
        }
        this.showSpinner = false;

        let title = ` {CONFIGURATION} : ${this.CFG_NAME} - {LOCATION} : ${this.LOCAT_NAME} - {GATEWAY} : ${this.GTW_NAME} `
        title = title + " - {TYPE} : " + (this.selectedResource == 1 ? " {RADIO} " : " {TLF} ")

        if (res && res.result == 'OK') {
          if (this.editMode) {
            this.validateFormDirty(title, 115);
            if (this.resource.nombre != this.resourceForm.value.nombre)
              this.resource.nombre = this.resourceForm.value.nombre;
          } else {
            this.validateFormDirty(title, 113);
          }
          await this.alertService.successMessage(``, message, this.translate.instant('button.accept'));
          this.dataService.updateDataGatewayPreviousUrl('RESOURCE');
          this.router.navigate(['/home/gateway/' + this.resource.pasarela_id]);
        } else {
          await this.displayErrorMessage("create");
        }
      }
    } else if (!this.resourceForm.valid) {
      this.validateErrorsPrint(this.resourceForm.controls);
      await this.displayErrorMessage("form");
    } else if (nameIsValid?.toString() === 'NAME_DUP') {
      await this.displayErrorMessage("resourceName");
    } else if (ranksKO) {
      await this.displayErrorMessage("ranks");
    }
  }

  checkCompleteRanks() {
    let wrongRanks = false;
    if (this.selectedResource == 2 && this.resourceForm.value.ranks !== undefined) {
      this.resourceForm.value.ranks.forEach((rank: any) => {
        if (rank.inicial !== '' && rank.final === '') {
          wrongRanks = true;
        } else if (rank.inicial === '' && rank.final !== '') {
          wrongRanks = true;
        }
      });
    }
    return wrongRanks;
  }

  async checkLoadIndex() {

    const hardwareResume = (await this.gatewayService.getGatewayHardware(this.GATEWAY_ID).toPromise());
    let result = (await this.configService.getLocalConfig().toPromise());

    let LoadIndexControlEnabled = result.LoadIndexControlEnabled;
    let loadIndex = 0;
    let confirm;
    let recIndex = 0;
    let prevIndex = 0;
    let total = 0;
    let showMessage = false;

    if (LoadIndexControlEnabled) {
      loadIndex = this.calculateLoadIndex(hardwareResume);
      recIndex = this.calculateCurrentLoadIndex();
      prevIndex = this.calculatePreviewLoadIndex(hardwareResume);

      total = this.editMode ? (loadIndex - prevIndex) + recIndex : loadIndex + recIndex;



      if (((this.editMode && this.selectedResource == 1 && this.resource.tipo_agente != this.resourceForm.value.tipo_agente) ||
        (this.editMode && this.selectedResource == 2 && this.resource.tipo_interfaz_tel != this.resourceForm.value.tipo_interfaz_tel)) && total > 16 || this.editMode && total > 16) {
        showMessage = true;
      } else if (!this.editMode && total > 16) {
        showMessage = true;
      }

      if (showMessage) confirm = await this.alertService.confirmationMessage("", `${this.translate.instant('resource.alert.conf_index_res', { value: total })}`, this.translate.instant('button.accept'), this.translate.instant('button.cancel'));
    }
    return { 'response': confirm, 'loadIndex': total };
  }

  async displayErrorMessage(errorType: string) {
    switch (errorType) {
      case "create":
        if (this.editMode) {
          await this.alertService.errorMessage(``, `${this.translate.instant('appsettings.RES_EDIT_ERROR')}`, this.translate.instant('button.accept'));
        } else {
          await this.alertService.errorMessage(``, `${this.translate.instant('appsettings.RES_CREATE_ERROR')}`, this.translate.instant('button.accept'));
        }
        break;
      case "form":
        await this.alertService.errorMessage(`${this.translate.instant('appsettings.ERROR_FORM')}`, `${this.translate.instant('appsettings.INVALID_FORM')}`, this.translate.instant('button.accept'));
        break;
      case "resourceName":
        await this.alertService.errorMessage(`${this.translate.instant('appsettings.ERROR_FORM')}`, `${this.translate.instant('appsettings.RES_NAME_DUP')}`, this.translate.instant('button.accept'));
        break;
      case "ranks":
        await this.alertService.errorMessage(`${this.translate.instant('appsettings.ERROR_FORM')}`, `${this.translate.instant('appsettings.WRONG_RANKS')}`, this.translate.instant('button.accept'));
        break;
    }

  }

  /**
   * 
   */
  async selectRadioForm() {
    if (this.secondTabRef != null) {
      this.secondTabRef.destroy();
    }
    if (this.editMode === false) { // Needed to reset local radio forms.
      this.resourceForm.patchValue({ metodo_climax: 0 });
      this.resourceForm.patchValue({ climax_bss: 0 });
      this.resourceForm.patchValue({ indicacion_entrada_audio: 0 });
      this.resourceForm.patchValue({ umbral_vad: -35 });
    }
    switch (this.resourceForm.value.tipo_agente) {
      case 0:
      case 1:
      case 2:
      case 3:
        this.displayComnsTab = true;
        this.displayListsTab = false;
        const { LocalFormComponent } = await import('../radio-forms/local/local-form.component');
        this.secondTabRef = this.secondTabContainer.createComponent(
          this.cfr.resolveComponentFactory(LocalFormComponent)
        );

        break;
      case 4:
      case 5:
      case 6:
        this.displayComnsTab = false;
        this.displayListsTab = true;
        const { RemoteFormComponent } = await import('../radio-forms/remote/remote-form.component');
        this.secondTabRef = this.secondTabContainer.createComponent(
          this.cfr.resolveComponentFactory(RemoteFormComponent)
        );
        break;
    }

    this.secondTabRef.instance.resourceForm = this.resourceForm;
    this.secondTabRef.instance.formType = this.resourceForm.value.tipo_agente;
    this.secondTabRef.instance.checkFormType();
  }

  /**
   * 
   */
  async selectTelephonicForm() {
    if (this.secondTabRef != null) {
      this.secondTabRef.destroy();
    }
    let displayDest = false;
    let displayOnlyFirstCollateral = false;
    switch (this.resourceForm.value.tipo_interfaz_tel) {
      case 0:
        const { PPBLFormComponent } = await import('../telephonic-forms/pp_bl/pp_bl-form.component');
        this.secondTabRef = this.secondTabContainer.createComponent(
          this.cfr.resolveComponentFactory(PPBLFormComponent)
        );
        break;
      case 1:
        const { PPBCFormComponent } = await import('../telephonic-forms/pp_bc/pp_bc-form.component');
        this.secondTabRef = this.secondTabContainer.createComponent(
          this.cfr.resolveComponentFactory(PPBCFormComponent)
        );
        break;
      case 2:
        const { PPABFormComponent } = await import('../telephonic-forms/pp_ab/pp_ab-form.component');
        this.secondTabRef = this.secondTabContainer.createComponent(
          this.cfr.resolveComponentFactory(PPABFormComponent)
        );
        break;
      case 3:
      case 4:
        const { ATSFormComponent } = await import('../telephonic-forms/ats/ats-form.component');
        this.secondTabRef = this.secondTabContainer.createComponent(
          this.cfr.resolveComponentFactory(ATSFormComponent)
        );
        displayDest = true;
        break;
      case 5:
        const { LCENFormComponent } = await import('../telephonic-forms/lcen/lcen-form.component');
        this.secondTabRef = this.secondTabContainer.createComponent(
          this.cfr.resolveComponentFactory(LCENFormComponent)
        );
        break;
      case 6:
        // DO NOTHING
        break;
      case 7:
        const { TunnelFormComponent } = await import('../telephonic-forms/tunnel/tunnel-form.component');
        this.secondTabRef = this.secondTabContainer.createComponent(
          this.cfr.resolveComponentFactory(TunnelFormComponent)
        );
        displayOnlyFirstCollateral = true
        this.resourceForm.patchValue({ ranks: [] })
        break;

    }

    this.loadCollateralsTab(displayOnlyFirstCollateral);
    this.resourceForm.value.tipo_interfaz_tel !== 7 ? this.loadRangeNumberTab(displayDest) : '';
    this.resourceForm.value.tipo_interfaz_tel !== 6 ? this.secondTabRef.instance.resourceForm = this.resourceForm : '';
  }

  initResource() {
    if (this.selectedResource == 1) {
      this.resource = new RadioResource();
    } else {
      this.resource = new TelephoneResource();
    }
    this.resource.pasarela_id = this.GATEWAY_ID;
    this.resource.columna = this.COLUMN;
    this.resource.fila = this.ROW;
  }

  saveTmpName(event: any) {
    this.tmpNameResource = event.target.value;
  }

  /**
   * 
   */
  checkResourceType(changes = false) {
    if (this.selectedResource == 1) {
      if (changes) {
        this.initResource();
        this.initRadioForm();
        this.resourceForm.patchValue({ nombre: this.tmpNameResource });
      }
      this.displayRadioTab = true;
      this.displayTelephonicTab = false;
      this.displayNumberRange = false;
      this.displayCollaterals = false;
      this.selectRadioForm();
      if (this.resourceForm.get('ventana_bss')?.invalid)
        this.resourceForm.patchValue({ 'ventana_bss': 300 });
      if (this.resourceForm.get('retardo_fijo_climax')?.invalid)
        this.resourceForm.patchValue({ 'retardo_fijo_climax': 50 });
      if (this.resourceForm.value.tipo_agente >= 0 && this.resourceForm.value.tipo_agente <= 3) {
        this.displayComnsTab = true;
        this.displayListsTab = false;
        this.loadComnsTab();
      } else {
        this.displayComnsTab = false;
        this.displayListsTab = true;
        this.loadListsTab();
      }
    } else {
      this.resourceForm.patchValue({ 'precision_audio': 0 }); // issue 2867
      if (this.resourceForm.value.tipo_interfaz_tel !==3 && this.resourceForm.value.tipo_interfaz_tel !==4){
        this.resourceForm.patchValue({ 'destino_test': "399999" }); 
        this.resourceForm.patchValue({ 'origen_test': "309999" });
      }
      if (changes) {
        this.initResource();
        this.initTelephoneForm();
        this.resourceForm.patchValue({ nombre: this.tmpNameResource });
      }
      this.displayRadioTab = false;
      this.displayComnsTab = false;
      this.displayListsTab = false;
      this.displayTelephonicTab = true;
      this.displayCollaterals = true;
      this.displayNumberRange = true;
      this.selectTelephonicForm();
    }
    if (!this.editMode && this.resourceForm.value.nombre !== '') { // issue 2881
      this.resourceForm.controls['nombre'].markAsDirty();
    }
  }

  /**
   * 
   */
  async loadRangeNumberTab(displayDest: boolean) {


    setTimeout(async () => {

      if (this.thirdTabRef != null) {
        await this.thirdTabRef.destroy();
      }
      const { ResourceNRangeComponent } = await import('../resource-nrange/resource-nrange.component');
      this.thirdTabRef = this.thirdTabContainer.createComponent(
        this.cfr.resolveComponentFactory(ResourceNRangeComponent)
      );
      this.thirdTabRef.instance.resourceForm = this.resourceForm;
      this.thirdTabRef.instance.displayDestination = displayDest;

    }, 500);

  }

  /**
   * 
   */
  async loadCollateralsTab(display: boolean) {

    if (this.collateralsTabRef != null) {
      await this.collateralsTabRef.destroy();
    }
    const { ResourceCollateralsComponent } = await import('../resource-collaterals/resource-collaterals.component');
    this.collateralsTabRef = this.collateralsContainer.createComponent(
      this.cfr.resolveComponentFactory(ResourceCollateralsComponent)
    );
    this.collateralsTabRef.instance.resourceForm = this.resourceForm;
    this.collateralsTabRef.instance.gatewayId = this.GATEWAY_ID;
    this.collateralsTabRef.instance.showOnlyFirst = display;
    this.collateralsTabRef.instance.resourceName = this.resource.nombre;
    this.collateralsTabRef.instance.idGateway = this.GATEWAY_ID;
  }

  /**
   * 
   */
  async loadComnsTab() {
    if (this.thirdTabRef != null) {
      await this.thirdTabRef.destroy();
    }

    const { ResourceComnsComponent } = await import('../resource-comns/resource-comns.component');
    this.thirdTabRef = this.thirdTabContainer.createComponent(
      this.cfr.resolveComponentFactory(ResourceComnsComponent)
    );
    this.thirdTabRef.instance.resourceForm = this.resourceForm;
  }

  /**
   * 
   */
  async loadListsTab() {

    if (this.thirdTabRef != null) {
      await this.thirdTabRef.destroy();
    }

    const { ResourceListsComponent } = await import('../resource-lists/resource-lists.component');
    this.thirdTabRef = this.thirdTabContainer.createComponent(
      this.cfr.resolveComponentFactory(ResourceListsComponent)
    );
    this.thirdTabRef.instance.resourceForm = this.resourceForm;


  }

  calculateCurrentLoadIndex() {
    let loadIndex = 0;
    if (this.selectedResource === 1) {

      if (this.resourceForm.value.precision_audio == 0) {
        if (this.resourceForm.value.tipo_agente == 0 || this.resourceForm.value.tipo_agente == 1 || this.resourceForm.value.tipo_agente == 5) {
          loadIndex += 1;
        } else if ((this.resourceForm.value.tipo_agente == 4 || this.resourceForm.value.tipo_agente == 6) && this.resourceForm.value.metodo_bss == 2) {
          loadIndex += 1;
        } else if ((this.resourceForm.value.tipo_agente == 4 || this.resourceForm.value.tipo_agente == 6) &&
          (this.resourceForm.value.metodo_bss == 0 || this.resourceForm.value.metodo_bss == 1)) {
          loadIndex += 4;
        }

      } else if (this.resourceForm.value.precision_audio == 1) {

        if (this.resourceForm.value.tipo_agente == 0 || this.resourceForm.value.tipo_agente == 1 || this.resourceForm.value.tipo_agente == 5) {
          loadIndex += 2;
        } else if ((this.resourceForm.value.tipo_agente == 4 || this.resourceForm.value.tipo_agente == 6) && this.resourceForm.value.metodo_bss == 2) {
          loadIndex += 2;
        } else if ((this.resourceForm.value.tipo_agente == 4 || this.resourceForm.value.tipo_agente == 6) &&
          (this.resourceForm.value.metodo_bss == 0 || this.resourceForm.value.metodo_bss == 1)) {
          loadIndex += 4;
        } else if (this.resourceForm.value.tipo_agente == 2 || this.resourceForm.value.tipo_agente == 3) {
          loadIndex += 8;
        }
      }

    } else if (this.selectedResource === 2) {
      if (this.resourceForm.value.precision_audio == 0) {
        if (this.resourceForm.value.tipo_interfaz_tel == 3 || this.resourceForm.value.tipo_interfaz_tel == 4 || this.resourceForm.value.tipo_interfaz_tel == 5) {
          loadIndex += 2;
        } else if (this.resourceForm.value.tipo_interfaz_tel == 0 || this.resourceForm.value.tipo_interfaz_tel == 1 || this.resourceForm.value.tipo_interfaz_tel == 2) {
          loadIndex++;
        } else if (this.resourceForm.value.tipo_interfaz_tel == 7){ // Recursos tipo TUNNEL.
          loadIndex++;
        }
      }
    }
    return loadIndex;
  }

  calculatePreviewLoadIndex(hardwareResume: any) {
    let radio = hardwareResume.radio;
    let telResources = hardwareResume.tfno;
    let loadIndex = 0;
    radio.forEach((resource: any) => {
      if (this.resourceForm.value.idrecurso_radio == resource.idrecurso_radio) {
        if (resource.precision_audio == 0) {
          if (resource.tipo_agente == 0 || resource.tipo_agente == 1 || resource.tipo_agente == 5) {
            loadIndex += 1;
          } else if ((resource.tipo_agente == 4 || resource.tipo_agente == 6) && resource.metodo_bss == 2) {
            loadIndex += 1;
          } else if ((resource.tipo_agente == 4 || resource.tipo_agente == 6) && (resource.metodo_bss == 0 || resource.metodo_bss == 1)) {
            loadIndex += 4;
          }

        } else if (resource.precision_audio == 1) {
          if (resource.tipo_agente == 0 || resource.tipo_agente == 1 || resource.tipo_agente == 5) {
            loadIndex += 2;
          } else if ((resource.tipo_agente == 4 || resource.tipo_agente == 6) && resource.metodo_bss == 2) {
            loadIndex += 2;
          } else if ((resource.tipo_agente == 4 || resource.tipo_agente == 6) && resource.metodo_bss == 0 || resource.metodo_bss == 1) {
            loadIndex += 4;
          } else if (resource.tipo_agente == 2 || resource.tipo_agente == 3) {
            loadIndex += 8;
          }

        }
      }

    });
    telResources.forEach((resource: any) => {
      if (this.resourceForm.value.idrecurso_telefono == resource.idrecurso_telefono) {
        if (resource.precision_audio == 0) {
          if (resource.tipo_interfaz_tel == 3 || resource.tipo_interfaz_tel == 4 || resource.tipo_interfaz_tel == 5) {
            loadIndex += 2;
          } else if (resource.tipo_interfaz_tel == 0 || resource.tipo_interfaz_tel == 1 || resource.tipo_interfaz_tel == 2) {
            loadIndex++;
          } else if (resource.tipo_interfaz_tel == 7){ // Recursos tipo TUNNEL.
            loadIndex++;
          }
        }
      }
    });
    return loadIndex;
  }

  calculateLoadIndex(hardwareResume: any) {
    let radioResources = hardwareResume.radio;
    let telResources = hardwareResume.tfno;
    let loadIndex = 0;

    radioResources.forEach((resource: any) => {
      if (resource.precision_audio == 0) {
        if (resource.tipo_agente == 0 || resource.tipo_agente == 1 || resource.tipo_agente == 5) {
          loadIndex += 1;

        } else if ((resource.tipo_agente == 4 || resource.tipo_agente == 6) && resource.metodo_bss == 2) {
          loadIndex += 1;
        } else if ((resource.tipo_agente == 4 || resource.tipo_agente == 6) && (resource.metodo_bss == 0 || resource.metodo_bss == 1)) {
          loadIndex += 4;
        }

      } else if (resource.precision_audio == 1) {
        if (resource.tipo_agente == 0 || resource.tipo_agente == 1 || resource.tipo_agente == 5) {
          loadIndex += 2;
        } else if ((resource.tipo_agente == 4 || resource.tipo_agente == 6) && resource.metodo_bss == 2) {
          loadIndex += 2;
        } else if ((resource.tipo_agente == 4 || resource.tipo_agente == 6) && resource.metodo_bss == 0 || resource.metodo_bss == 1) {
          loadIndex += 4;
        } else if (resource.tipo_agente == 2 || resource.tipo_agente == 3) {
          loadIndex += 8;
        }

      }
    });

    telResources.forEach((resource: any) => {
      if (resource.precision_audio == 0) {
        if (resource.tipo_interfaz_tel == 3 || resource.tipo_interfaz_tel == 4 || resource.tipo_interfaz_tel == 5) {
          loadIndex += 2;
        } else if (resource.tipo_interfaz_tel == 0 || resource.tipo_interfaz_tel == 1 || resource.tipo_interfaz_tel == 2) {
          loadIndex++;
        } else if (resource.tipo_interfaz_tel == 7){ // Recursos tipo TUNNEL.
          loadIndex++;
        }
      }
    });

    return loadIndex;
  }

  async validateFormDirty(initTitle: string, code: number) {
    let title = `${initTitle} - {PARAMS} `;
    let arrayToCheckFields = this.selectedResource == 1 ? formsFields.common.concat(formsFields.radio) : formsFields.common.concat(formsFields.tel);

    if (this.isCheckedRegistryKey) {
      let keyCondition = (this.resourceForm.value.clave_registro !== null && this.resourceForm.value.clave_registro !== '' && this.isCheckedRegistryKey);
      title += ` {REGISTER_KEY_AVAILABLE} : ${keyCondition ? ' {YES} ' : ' {NO} '} `
      await this.historicService.updateCfg(code, this.resourceForm.value.nombre, title).toPromise();
    }

    if (this.isChangedAGCAD) {
      title = `${initTitle} - {PARAMS} `;
      title += `{AD_AVAILABLE} : ${this.displayAGCAD ? ' {YES} ' : ' {NO} '} `
      await this.historicService.updateCfg(code, this.resourceForm.value.nombre, title).toPromise();
    }

    if (this.isChangedAGCDA) {
      title = `${initTitle} - {PARAMS} `;
      title += `{DA_AVAILABLE} : ${this.displayAGCDA ? ' {YES} ' : ' {NO} '} `
      await this.historicService.updateCfg(code, this.resourceForm.value.nombre, title).toPromise();
    }
    if (this.resourceForm.dirty || this.isCheckedRegistryKey || this.isChangedAGCAD || this.isChangedAGCDA) {

      arrayToCheckFields.forEach(async (data: any, index: number) => {
        let value: string = "";
        let msg: string = "";
        let indexFinded: number;

        title = `${initTitle} - {PARAMS} `;
        if (this.resourceForm.get(data.field)?.dirty) {
          switch (data.field) {
            case "nombre":
              msg = `${data.label} ${this.resourceForm.get(data.field)?.value}`;
              break;
            case "tipo_agente":
              value = this.customFilter(this.radioAgents, data.field);
              msg = `${data.label} ${value}`;
              break;
            case "tipo_interfaz_tel":
              value = this.customFilter(this.telephonicInterfaces, data.field);
              msg = `${data.label} ${value}`;
              break;
            case "indicacion_entrada_audio":
              value = this.customFilter(this.iAudio, data.field);
              if (value === "VAD" && !this.resourceForm.get("umbral_vad")?.dirty) {
                msg = `${data.label} ${value} ; {UMBRAL_VAD} : ${this.resourceForm.value.umbral_vad}`;
                arrayToCheckFields.splice(index, 1);
              } else {
                msg = `${data.label} ${value}`;
              }
              break;
            case "climax_bss":
            case "tipo_climax":
            case "metodo_climax":
              if (this.resourceForm.value.climax_bss === true || this.resourceForm.value.climax_bss === 1) {
                if (this.resourceForm.value.tipo_climax === 0) {
                  msg = `${data.label} {YES} , {BSS_WD} : ${this.resourceForm.value.ventana_bss} ,
                  {CLIMAX_MODE} : {NO}`;
                } else if (this.resourceForm.value.tipo_climax === 1) {
                  value = this.customFilter(this.climaxModes, 'tipo_climax');

                  let calClimax = this.customFilter(this.calClimaxModes, 'metodo_climax');
                  msg = `${data.label} {YES} , {BSS_WD} : ${this.resourceForm.value.ventana_bss} ;
                  {CLIMAX_MODE} : ${value}, {CALC_CLIMAX} : ${calClimax}`;

                  // DELETE ventana_bss on array
                  indexFinded = arrayToCheckFields.findIndex(function (data: any) {
                    return data.field == 'ventana_bss';
                  });
                  arrayToCheckFields.splice(indexFinded, 1);

                  // DELETE tipo_climax on array
                  indexFinded = arrayToCheckFields.findIndex(function (data: any) {
                    return data.field == 'tipo_climax';
                  });
                  arrayToCheckFields.splice(indexFinded, 1);

                  // DELETE metodo_climax on array
                  indexFinded = arrayToCheckFields.findIndex(function (data: any) {
                    return data.field == 'metodo_climax';
                  });
                  arrayToCheckFields.splice(indexFinded, 1);
                } else {
                  value = this.customFilter(this.climaxModes, 'tipo_climax');

                  let calClimax = this.customFilter(this.calClimaxModes, 'metodo_climax');
                  msg = `${data.label} {YES} ; {BSS_WD} : ${this.resourceForm.value.ventana_bss} ; 
                  {CLIMAX_MODE} : ${value}; {CALC_CLIMAX} : ${calClimax}; 
                  {DELAY_CLIMAX} : ${this.resourceForm.value.retardo_fijo_climax} ; `;
                  // DELETE ventana_bss on array
                  indexFinded = arrayToCheckFields.findIndex(function (data: any) {
                    return data.field == 'ventana_bss';
                  });
                  arrayToCheckFields.splice(indexFinded, 1);

                  // DELETE tipo_climax on array
                  indexFinded = arrayToCheckFields.findIndex(function (data: any) {
                    return data.field == 'tipo_climax';
                  });
                  arrayToCheckFields.splice(indexFinded, 1);

                  // DELETE metodo_climax on array
                  indexFinded = arrayToCheckFields.findIndex(function (data: any) {
                    return data.field == 'metodo_climax';
                  });

                  arrayToCheckFields.splice(indexFinded, 1);
                  // DELETE retardo_fijo_climax on array
                  indexFinded = arrayToCheckFields.findIndex(function (data: any) {
                    return data.field == 'retardo_fijo_climax';
                  });
                  arrayToCheckFields.splice(indexFinded, 1);
                }
              } else if (this.resourceForm.value.climax_bss === false) {
                msg = `${data.label} {NOT}`;
              }
              break;
            case "listaUris":
              msg = '';
              if (this.rawLists && this.rawLists.length > 0) {
                // BL - WL
                this.rawLists.forEach(async (uri: any, index: number) => {
                  if (uri.hasOwnProperty("modified") && uri.modified === true) {

                    title = `${initTitle} - {PARAMS} `;

                    title += `${data.label} ${uri.tipo}: ${uri.uri === '' ? " {EMPTY} " : uri.uri}; {LAST_URI} : ${uri.previous};`;

                    await this.historicService.updateCfg(code, this.resourceForm.value.nombre, title).toPromise();
                  }

                });
              } else {
                this.resourceForm.get(data.field)?.value.forEach(async (uri: any, index: number) => {
                  if (uri.hasOwnProperty("modified") && uri.modified === true) {
                    let emp = ` {LOCATION} `;

                    if (uri.nivel_colateral === 1 || uri.nivel_colateral === 2) {
                      emp += 1;
                    } else if (uri.nivel_colateral === 3 || uri.nivel_colateral === 4) {
                      emp += 2;
                    } else if (uri.nivel_colateral === 5 || uri.nivel_colateral === 6) {
                      emp += 3;
                    } else {
                      emp = '';
                    }
                    title = `${initTitle} - {PARAMS} `;

                    title += `${data.label} ${uri.tipo}: ${uri.uri === '' ? " {EMPTY} " : uri.uri}, ${emp}, {LAST_URI} : ${uri.previous}`;

                    delete this.resourceForm.get(data.field)?.value[index].modified;
                    delete this.resourceForm.get(data.field)?.value[index].previous;
                    await this.historicService.updateCfg(code, this.resourceForm.value.nombre, title).toPromise();
                  }

                });
              }

              break;
            case "restriccion_entrantes":
              value = this.customFilter(this.typeLists, data.field);
              msg = `${data.label} ${value}`;
              break;
            case "prioridad_sesion_sip":
              value = this.customFilter(this.prioritySessionsSIP, data.field);
              msg = `${data.label} ${value}`;
              break;
            case "prioridad_ptt":
              value = this.customFilter(this.pttPriority, data.field);
              msg = `${data.label} ${value}`;
              break;
            case "metodo_bss":
              if (this.resourceForm.value.tipo_agente < 3) {
                value = this.customFilter(this.bssMethods, data.field);
              } else {
                value = this.customFilter(this.favBssMethods, data.field);
              }
              msg = `${data.label} ${value} ; `;
              break;
            case "tabla_bss_id":
              msg = `${data.label} ${this.tablesBss[this.tablesBss.findIndex((x: any) => x.idtabla_bss === this.resourceForm.value.tabla_bss_id)].name} `;
              break;
            case "iEnableNoED137":
            case "DetInversionPol":
            case "evento_ptt_squelch":
            case "habilita_grabacion":
            case "iDetLineaAB":
              msg = `${data.label} ${this.resourceForm.get(data.field)?.value === true ? ' {YES} ' : ' {NO} '}`;
              break;
            case "deteccion_vox":
              msg = `${data.label} ${this.resourceForm.get(data.field)?.value === true ? ' {YES} ' : ' {NO} '}, 
              {UMBRAL_VOX} : ${this.resourceForm.get('umbral_vox')?.value} , {VOX_QUEQUE} : ${this.resourceForm.get('cola_vox')?.value} `;

              // DELETE umbral_vox on array
              indexFinded = arrayToCheckFields.findIndex(function (data: any) {
                return data.field == 'umbral_vox';
              });
              arrayToCheckFields.splice(indexFinded, 1);

              // DELETE cola_vox on array
              indexFinded = arrayToCheckFields.findIndex(function (data: any) {
                return data.field == 'cola_vox';
              });
              arrayToCheckFields.splice(indexFinded, 1);
              break;
            case "respuesta_automatica":
              msg = `${data.label} ${this.resourceForm.get(data.field)?.value === 1 || this.resourceForm.get(data.field)?.value === true ? ' {YES} ' : ' {NO} '}, {TM_TONO_BLOQUEO} : ${this.resourceForm.get('periodo_tonos')?.value}`;
              // DELETE periodo_tonos on array
              indexFinded = arrayToCheckFields.findIndex(function (data: any) {
                return data.field == 'periodo_tonos';
              });
              arrayToCheckFields.splice(indexFinded, 1);
              break;
            case "lado":
              msg = `${data.label} ${this.resourceForm.get(data.field)?.value === 0 ? 'A' : 'B'} `
              break;
            case "ranks":
              msg = '';
              this.resourceForm.get(data.field)?.value.forEach(async (rank: any, index: number) => {

                if (rank.hasOwnProperty("modified") && rank.modified === true) {
                  title = `${initTitle} - {PARAMS} `;
                  title += `${data.label} ${rank.tipo === 0 ? ' {START} : ' : ' {END} : '} ${rank.inicial} - ${rank.final} `
                  delete this.resourceForm.get(data.field)?.value[index].modified;
                  await this.historicService.updateCfg(code, this.resourceForm.value.nombre, title).toPromise();
                }

              });
              break;
            case "supervisa_colateral":
              value = this.customFilter(this.supCollateral, data.field);
              msg = `${data.label} ${value}, {OPTION_RESPONSE} : ${this.resourceForm.value.itiporespuesta === 0 ? ' {NO} ' : ' {YES} '}, {SUPERV_TIME} ${this.resourceForm.value.tiempo_supervision} `;
              // DELETE itiporespuesta on array
              indexFinded = arrayToCheckFields.findIndex(function (data: any) {
                return data.field == 'itiporespuesta';
              });
              arrayToCheckFields.splice(indexFinded, 1);

              // DELETE tiempo_supervision on array
              indexFinded = arrayToCheckFields.findIndex(function (data: any) {
                return data.field == 'tiempo_supervision';
              });
              arrayToCheckFields.splice(indexFinded, 1);
              break;
            case "additional_superv_options":
              value = this.customFilter(this.supCollateral, data.field);
              msg = `${data.label} ${value} ; {ADD_OPT_RES} : ${this.resourceForm.value.additional_itiporespuesta === 0 ? ' {NO} ' : ' {YES} '}, {SUPERV_TIME} ${this.resourceForm.value.tiempo_supervision};`;
              // DELETE additional_itiporespuesta on array
              indexFinded = arrayToCheckFields.findIndex(function (data: any) {
                return data.field == 'additional_itiporespuesta';
              });
              arrayToCheckFields.splice(indexFinded, 1);
              // DELETE tiempo_supervision on array
              indexFinded = arrayToCheckFields.findIndex(function (data: any) {
                return data.field == 'tiempo_supervision';
              });
              arrayToCheckFields.splice(indexFinded, 1);
              break;
            case "itiporespuesta":
            case "additional_itiporespuesta":
              msg = `${data.label} ${this.resourceForm.get(data.field)?.value === 0 ? ' {NO} ' : ' {YES} '}`
              break;
            case "duracion_tono_interrup":
              let result = this.timeOpts.filter((datarow: any) => {
                if ((datarow.value == this.secondTabRef.instance.timeOpt)) {
                  return datarow;
                }
              })[0].viewValue;
              msg = `{TIMEOUT_CALL} : ${result}; 
              ${data.label} ${this.resourceForm.get(data.field)?.value > 256 ?
                  (this.resourceForm.get(data.field)?.value - 256) : this.resourceForm.get(data.field)?.value} `;
              break;
            case "precision_audio":
              value = this.customFilter(this.indexAudio, data.field);
              msg = `${data.label} ${value}`;
              break;
            case "llamada_automatica":
              value = `${this.resourceForm.value.llamada_automatica ? ' {YES} ' : ' {NO} '}`;
              msg = `${data.label} ${value} `;
              break;
            case "iControlTmLlam":
              value = `${this.resourceForm.value.iControlTmLlam ? ' {YES} ' : ' {NO} '}`;
              msg = `${data.label} ${value}`;
              break;
            case "RespuestaSIP_ATSR2":
              msg = `${data.label} ${this.resourceForm.get(data.field)?.value === 0 ? ' {ED137} ' : ' {SDC91} '}`
              break;
            default:
              msg = `${data.label} ${this.resourceForm.get(data.field)?.value} `;
              break;
          }

          if (msg !== '') {
            title += msg;
            await this.historicService.updateCfg(code, this.resourceForm.value.nombre, title).toPromise();
          }

        }
      });
    }
  }

  checkControlsAudioAD(checked: any) {
    this.isChangedAGCAD = true;
    this.displayAGCAD = checked;
  }

  checkControlsAudioDA(checked: any) {
    this.isChangedAGCDA = true;
    this.displayAGCDA = checked;
  }

  customFilter(array: any, key: string) {
    let result = array.filter((datarow: any) => {
      if ((datarow.value == this.resourceForm.get(key)?.value)) {
        return datarow;
      }
    })[0].viewValue;
    return result;
  }

  checkUriList() {
    switch (this.resourceForm.value.tipo_agente) {
      case 0:
        this.updateUriList([1]);
        break;
      case 1:
        this.updateUriList([1, 2]);
        break;
      case 2:
        this.updateUriList([1, 3, 5]);
        break;
      case 3:
        this.updateUriList([1, 2, 3, 4, 5, 6]);
        break;
    }
  }

  updateUriList(collateralLevels: number[]) {
    let uriList: any = [];
    let cnt = 0;
    for (let index = 0; index < this.resourceForm.value.listaUris.length; index++) {
      if (collateralLevels.includes(this.resourceForm.value.listaUris[index].nivel_colateral)) {
        uriList[cnt] = this.resourceForm.value.listaUris[index];
        cnt++;
      }
    }
    this.resourceForm.value.listaUris = uriList;
  }

  validateErrorsPrint(controles: Object) {
    console.error("Validate Errors");
    for (const [key, val] of Object.entries(controles)) {
      if (val.invalid) {
        console.error(key);
      }
    }
  }

  async export() {
    let result
    this.showSpinner = true
    if (this.selectedResource == 1) {
      result = await this.resourceService.getRadioResourceById(this.resourceId).toPromise();
    } else {
      result = await this.resourceService.getTlfResourceById(this.resourceId).toPromise();
    }
    this.showSpinner = false
    const fileName = `${this.resource.nombre}_${`${('00' + new Date().getDate()).slice(-2)}/${('00' + (new Date().getMonth() + 1)).slice(-2)}/${new Date().getFullYear()}`}.json`;
    this.saveText(JSON.stringify(result, undefined, 2), fileName);
  }

  saveText(text: string, filename: string) {
    var a = document.createElement('a');
    a.setAttribute('href', 'data:text/json;charset=utf-u,' + encodeURIComponent(text));
    a.setAttribute('download', filename);
    a.click()
  }
}