import { AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
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

  gateway!: Gateway;
  gatewayResponse!: GatewayResponse;

  gatewayTitle!: string;
  title!: string;

  GATEWAY_ID!: number;
  COLUMN!: string;
  ROW!: string;

  resourceForm!: FormGroup;
  resource!: any;
  secondTabRef: any;
  thirdTabRef: any;
  collateralsTabRef: any;

  registerKeyExists: boolean = false;
  displayRegKey: boolean = false;
  ready: boolean = false;
  editMode: boolean = false;

  tmpNameResource: string = '';

  // Radio
  displayRadioTab: boolean = false;
  displayComnsTab: boolean = false;
  displayListsTab: boolean = false;

  // Telephonic
  displayTelephonicTab: boolean = false;
  displayNumberRange: boolean = false;
  displayCollaterals: boolean = false;
  displayAGCAD: boolean = false;
  displayAGCDA: boolean = false;
  displayDeleteBtn: boolean = false;
  displayAudioPrecision: boolean = false;

  // Common
  types: customValues[] = [
    { value: 1, viewValue: 'Radio' },
    { value: 2, viewValue: 'Telefónico' }
  ];

  audio_prec: customValues[] = [
    { value: 0, viewValue: 'Estricto' }
  ];

  codecs: customValues[] = [
    { value: 0, viewValue: 'G711-A' }
  ];

  // Radio data
  radioAgents: customValues[] = [
    { value: 0, viewValue: 'Local-Simple' },
    { value: 1, viewValue: 'Local-P/R' },
    { value: 2, viewValue: 'Local FD-Simple' },
    { value: 3, viewValue: 'Local FD-P/R' },
    { value: 4, viewValue: 'Remoto RxTx' },
    { value: 5, viewValue: 'Remoto Tx' },
    { value: 6, viewValue: 'Remoto Rx' }
  ];

  // Telephonic data
  telephonicInterfaces: customValues[] = [
    { value: 0, viewValue: 'PP-BL' },
    { value: 1, viewValue: 'PP-BC' },
    { value: 2, viewValue: 'PP-AB' },
    { value: 3, viewValue: 'ATS-R2' },
    { value: 4, viewValue: 'ATS-N5' },
    { value: 5, viewValue: 'LCEN' },
    { value: 6, viewValue: 'ATS-QSIG' }
  ];

  selectedResource: number = this.types[0].value;
  resourceId!: number;

  visualizationMode: boolean = false;

  showSpinner: boolean = false;
  appset: any;
  changes: boolean = false;

  constructor(private readonly cfr: ComponentFactoryResolver, private readonly resourceService: ResourceService,
    private readonly alertService: AlertService, private readonly route: ActivatedRoute, private readonly app: AppComponent,
    private readonly router: Router, private readonly dataService: DataService, private readonly userService: UserService,
    private readonly loginService: LoginService, private gatewayService: GatewayService, private readonly configService: ConfigService) { }

  async ngOnInit() {
    this.displayAudioPrecision = (await this.loginService.version().toPromise()).R16Mode;
    this.checkPermissions();
    this.appset = AppSettings;
    this.resourceId = Number(this.route.snapshot.paramMap.get('id'));
    const slot = await this.dataService.getDataSlot();

    this.GATEWAY_ID = slot.gatewayId;

    this.COLUMN = slot.columna;
    this.ROW = slot.fila;
    this.selectedResource = slot.tipo != undefined ? slot.tipo : 1;

    this.initGateway();

    if (this.resourceId != 0) { // edit mode
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
      } else {
        this.resource.ranks = (await this.resourceService.getRanges(this.resource.idrecurso_telefono).toPromise()).ranks;
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
  }

  async initGateway() {
    this.gatewayResponse = await this.gatewayService.getGatewayById(+this.GATEWAY_ID).toPromise();
    if (this.gatewayResponse && this.gatewayResponse.result) {
      this.gateway = [...this.gatewayResponse.result][0];
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

  async onDelete() {
    const userInteraction = await this.alertService.confirmationMessage(``, `¿Desea borrar el recurso ${this.resourceForm.value.nombre}?`);
    let res;
    if (userInteraction.value) {
      if (this.selectedResource == 1) {
        res = await this.resourceService.deleteRadioResource(this.resourceId).toPromise();
      } else {
        res = await this.resourceService.deleteTelResource(this.resourceId).toPromise();
      }
      if (res) {
        await this.alertService.successMessage(``, `El recurso ${this.resourceForm.value.nombre} ha sido eliminado`);
        this.dataService.updateDataGatewayPreviousUrl('RESOURCE');
        this.router.navigate(['/home/gateway/' + this.resource.pasarela_id]);
      } else {
        await this.alertService.errorMessage(``, `Error al borrar el recurso`);
      }
    }

  }

  async back() {
    let confirm;
    if (this.editMode && this.changes) {
      confirm = await this.alertService.confirmationMessage("", `Existen cambios en el recurso sin guardar. ¿Desea continuar?`);

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
      precision_audio: new FormControl({ value: this.resource.precision_audio, disabled: true }),
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
      retardo_fijo_climax: new FormControl({ value: this.resource.retardo_fijo_climax, disabled: this.visualizationMode }),
      retraso_interno_grs: new FormControl({ value: this.resource.retraso_interno_grs, disabled: this.visualizationMode }),
      tabla_bss_id: new FormControl({ value: this.resource.tabla_bss_id, disabled: this.visualizationMode }),
      tipo_agente: new FormControl({ value: this.resource.tipo_agente, disabled: this.visualizationMode }),
      tipo_climax: new FormControl({ value: this.resource.tipo_climax, disabled: this.visualizationMode }),
      umbral_vad: new FormControl({ value: this.resource.umbral_vad, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.UMBRAL_VOX), Validators.min(-35), Validators.max(-15)]),
      ventana_bss: new FormControl({ value: this.resource.ventana_bss, disabled: this.visualizationMode }),
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
    this.resourceForm = new FormGroup({
      // Common
      nombre: new FormControl({ value: this.resource.nombre, disabled: this.visualizationMode }, [Validators.required, Validators.pattern(AppSettings.NAME_PATTERN)]),
      codec: new FormControl({ value: this.resource.codec, disabled: this.visualizationMode }),
      clave_registro: new FormControl({ value: this.resource.clave_registro, disabled: this.visualizationMode }),
      ajuste_ad: new FormControl({ value: this.resource.ajuste_ad, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.REAL_NUMBER), Validators.min(-13.5), Validators.max(1.20)]),
      ajuste_da: new FormControl({ value: this.resource.ajuste_da, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.REAL_NUMBER), Validators.min(-24.3), Validators.max(1.10)]),
      precision_audio: new FormControl({ value: this.resource.precision_audio, disabled: true }),
      fila: new FormControl(this.resource.fila),
      columna: new FormControl(this.resource.columna),
      pasarela_id: new FormControl(this.resource.pasarela_id),
      //Telephone
      DetInversionPol: new FormControl({ value: this.resource.DetInversionPol, disabled: this.visualizationMode }),
      additional_itiporespuesta: new FormControl({ value: this.resource.additional_itiporespuesta, disabled: this.visualizationMode }),
      additional_superv_options: new FormControl({ value: this.resource.additional_superv_options, disabled: this.visualizationMode }),
      additional_uri_remota: new FormControl({ value: this.resource.additional_uri_remota, disabled: this.visualizationMode }),
      ats_user: new FormControl({ value: this.resource.ats_user, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.AGVN_PATTERN)]),
      cola_vox: new FormControl({ value: this.resource.cola_vox, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.COLA_VOX), Validators.min(0), Validators.max(30)]),
      destino_test: new FormControl({ value: this.resource.destino_test, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.AGVN_PATTERN)]),
      deteccion_vox: new FormControl({ value: this.resource.deteccion_vox, disabled: this.visualizationMode }),
      duracion_tono_interrup: new FormControl({ value: this.resource.duracion_tono_interrup, disabled: this.visualizationMode }),
      iDetLineaAB: new FormControl({ value: this.resource.iDetLineaAB, disabled: this.visualizationMode }),
      iEnableNoED137: new FormControl({ value: this.resource.iEnableNoED137, disabled: this.visualizationMode }),
      itiporespuesta: new FormControl({ value: this.resource.itiporespuesta, disabled: this.visualizationMode }),
      lado: new FormControl({ value: this.resource.lado, disabled: this.visualizationMode }),
      origen_test: new FormControl({ value: this.resource.origen_test, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.AGVN_PATTERN)]),
      periodo_tonos: new FormControl({ value: this.resource.periodo_tonos, disabled: this.visualizationMode }),
      ranks: new FormControl({ value: this.resource.ranks, disabled: this.visualizationMode }),
      respuesta_automatica: new FormControl({ value: this.resource.respuesta_automatica, disabled: this.visualizationMode }),
      supervisa_colateral: new FormControl({ value: this.resource.supervisa_colateral, disabled: this.visualizationMode }),
      tiempo_supervision: new FormControl({ value: this.resource.tiempo_supervision, disabled: this.visualizationMode }),
      tipo_interfaz_tel: new FormControl({ value: this.resource.tipo_interfaz_tel, disabled: this.visualizationMode }),
      umbral_vox: new FormControl({ value: this.resource.umbral_vox, disabled: this.visualizationMode }, [Validators.pattern(AppSettings.UMBRAL_VOX), Validators.min(-35), Validators.max(-15)]),
      uri_telefonica: new FormControl({ value: this.resource.uri_telefonica, disabled: this.visualizationMode }),
      idrecurso_telefono: new FormControl({ value: this.resource.idrecurso_telefono, disabled: this.visualizationMode })
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

  async onSubmit() {
    let res;
    let message;

    if (this.thirdTabRef.instance.uriListToDisplay != undefined) {

      let blList = this.thirdTabRef.instance.uriListToDisplay['LSN'];
      let blListFiltered = blList.filter((x: any) => x.uri != '');

      let wList = this.thirdTabRef.instance.uriListToDisplay['LSB'];
      let wListFiltered = wList.filter((x: any) => x.uri != '');

      this.resourceForm.patchValue({ listaUris: blListFiltered.concat(wListFiltered) });
    }
    if (this.thirdTabRef.instance.ranks != undefined) {
      this.resourceForm.patchValue({ ranks: this.thirdTabRef.instance.ranks });
    }

    let nameIsValid = this.resourceForm.value.nombre !== undefined && this.resourceForm.value.nombre !== '' ?
      (await this.resourceService.checkIfNameIsValid(this.resourceForm.value.nombre, this.GATEWAY_ID, this.resourceId).toPromise()) : undefined;

    let ranksKO = this.checkCompleteRanks();

    if (this.resourceForm.valid && (nameIsValid?.toString() === 'NO_ERROR' || nameIsValid === undefined) && !ranksKO) {
      let confirmLoadIndex = await this.checkLoadIndex();
      if ((confirmLoadIndex.response?.isConfirmed == true && confirmLoadIndex.loadIndex > 16) || (confirmLoadIndex.response === undefined)) {
        this.resourceForm.get('frecuencia')?.setValidators([]); // Issue 2747

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
        this.resourceForm.value.precision_audio = 0;

        this.resourceForm.value.itiporespuesta = typeof (this.resourceForm.value.itiporespuesta) === 'boolean' ?
          (this.resourceForm.value.itiporespuesta ? 1 : 0) : this.resourceForm.value.itiporespuesta;

        this.resourceForm.value.additional_itiporespuesta = typeof (this.resourceForm.value.additional_itiporespuesta) === 'boolean' ?
          (this.resourceForm.value.additional_itiporespuesta ? 1 : 0) : this.resourceForm.value.additional_itiporespuesta;

        this.showSpinner = true;
        if (this.editMode) {
          res = await this.resourceService.updateResource(this.selectedResource, this.resourceForm.value).toPromise();
          message = `El recurso ${this.resourceForm.value.nombre} ha sido editado correctamente`;
        } else {
          res = await this.resourceService.createResource(this.selectedResource, this.resourceForm.value).toPromise();
          message = `El recurso ${this.resourceForm.value.nombre} ha sido creado correctamente`;
        }
        this.showSpinner = false;

        if (res && res.result == 'OK') {
          await this.alertService.successMessage(``, message);
          this.dataService.updateDataGatewayPreviousUrl('RESOURCE');
          this.router.navigate(['/home/gateway/' + this.resource.pasarela_id]);
        } else {
          await this.displayErrorMessage("create");
        }
      }

    } else if (!this.resourceForm.valid) {
      await this.displayErrorMessage("form");
    } else if (nameIsValid?.toString() === 'NAME_DUP') {
      await this.displayErrorMessage("resourceName");
    } else if (ranksKO) {
      await this.displayErrorMessage("ranks");
    }
  }

  checkCompleteRanks() {
    let wrongRanks = false;
    if (this.selectedResource == 2) {
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
    const force_rdaudio_normal = this.displayAudioPrecision;
    let result = (await this.configService.getLocalConfig().toPromise());

    let LoadIndexControlEnabled = result.LoadIndexControlEnabled;
    let loadIndex = 0;
    let confirm;
    let recIndex = 0;
    let total = 0;
    let showMessage = false;

    if (LoadIndexControlEnabled) {
      loadIndex = this.calculateLoadIndex(hardwareResume, force_rdaudio_normal);
      recIndex = this.calculateCurrentLoadIndex(force_rdaudio_normal);
      total = this.editMode ? loadIndex - recIndex : loadIndex;

      if (((this.editMode && this.selectedResource == 1 && this.resource.tipo_agente !== this.resourceForm.value.tipo_agente) ||
        (this.editMode && this.selectedResource == 2 && this.resource.tipo_interfaz_tel !== this.resourceForm.value.tipo_interfaz_tel)) && total > 16) {
        showMessage = true;
      } else if (!this.editMode && total > 16) {
        showMessage = true;
      }
      if (showMessage) confirm = await this.alertService.confirmationMessage("", `El índice de carga al añadir este tipo de recurso es de: ${total}. ¿Desea continuar?`);
    }
    return { 'response': confirm, 'loadIndex': total };
  }

  async displayErrorMessage(errorType: string) {
    switch (errorType) {
      case "create":
        if (this.editMode) {
          await this.alertService.errorMessage(``, AppSettings.RES_EDIT_ERROR);
        } else {
          await this.alertService.errorMessage(``, AppSettings.RES_CREATE_ERROR);
        }
        break;
      case "form":
        await this.alertService.errorMessage(AppSettings.ERROR_FORM, AppSettings.INVALID_FORM);
        break;
      case "resourceName":
        await this.alertService.errorMessage(AppSettings.ERROR_FORM, AppSettings.RES_NAME_DUP);
        break;
      case "ranks":
        await this.alertService.errorMessage(AppSettings.ERROR_FORM, AppSettings.WRONG_RANKS);
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
    switch (this.resource.tipo_interfaz_tel) {
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
    }
    this.secondTabRef.instance.resourceForm = this.resourceForm;
    this.loadRangeNumberTab(displayDest);
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
      if (changes) {
        this.initResource();
        this.initTelephoneForm();
        this.resourceForm.patchValue({ nombre: this.tmpNameResource });
      }
      this.displayRadioTab = false;
      this.displayComnsTab = false;
      this.displayListsTab = false;
      this.displayTelephonicTab = true;
      this.displayNumberRange = true;
      this.displayCollaterals = true;
      this.selectTelephonicForm();
      this.loadCollateralsTab();
    }
  }

  /**
   * 
   */
  async loadRangeNumberTab(displayDest: boolean) {
    if (this.thirdTabRef != null) {
      await this.thirdTabRef.destroy();
    }
    const { ResourceNRangeComponent } = await import('../resource-nrange/resource-nrange.component');
    this.thirdTabRef = this.thirdTabContainer.createComponent(
      this.cfr.resolveComponentFactory(ResourceNRangeComponent)
    );
    this.thirdTabRef.instance.resourceForm = this.resourceForm;
    this.thirdTabRef.instance.displayDestination = displayDest;

  }

  /**
   * 
   */
  async loadCollateralsTab() {
    if (this.collateralsTabRef != null) {
      await this.collateralsTabRef.destroy();
    }
    const { ResourceCollateralsComponent } = await import('../resource-collaterals/resource-collaterals.component');
    this.collateralsTabRef = this.collateralsContainer.createComponent(
      this.cfr.resolveComponentFactory(ResourceCollateralsComponent)
    );
    this.collateralsTabRef.instance.resourceForm = this.resourceForm;
    this.collateralsTabRef.instance.gatewayId = this.GATEWAY_ID;
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

  calculateCurrentLoadIndex(force_rdaudio_normal: boolean) {
    let loadIndex = 0;
    if (this.selectedResource === 1) {
      if (this.resource.tipo_agente == 2 || this.resource.tipo_agente == 3) {
        loadIndex += 8;
      } else if (this.resource.tipo_agente == 4 || this.resource.tipo_agente == 6) {
        loadIndex += (force_rdaudio_normal == true ? 2 : 4);
      } else {
        loadIndex += 2;
      }
    } else if (this.selectedResource === 2) {
      if (this.resource.tipo_interfaz_tel == 5 || this.resource.tipo_interfaz_tel == 4 || this.resource.tipo_interfaz_tel == 3) {
        loadIndex += 2;
      }
      else {
        loadIndex++;
      }
    }
    return loadIndex;
  }

  calculateLoadIndex(hardwareResume: any, force_rdaudio_normal: boolean) {
    let radioResources = hardwareResume.radio;
    let telResources = hardwareResume.tfno;
    let loadIndex = 0;

    radioResources.forEach((resource: any) => {
      if (resource.tipo_agente == 2 || resource.tipo_agente == 3)
        loadIndex += 8;
      else if (resource.tipo_agente == 4 || resource.tipo_agente == 6)
        loadIndex += (force_rdaudio_normal == true ? 2 : 4);
      else
        loadIndex += 2
    });

    telResources.forEach((resource: any) => {
      if (resource.tipo_interfaz_tel == 5 || resource.tipo_interfaz_tel == 4 || resource.tipo_interfaz_tel == 3) {
        loadIndex += 2;
      }
      else {
        loadIndex++;
      }
    });

    if (this.selectedResource === 1) {
      if (this.resourceForm.value.tipo_agente == 2 || this.resourceForm.value.tipo_agente == 3) {
        loadIndex += 8;
      } else if (this.resourceForm.value.tipo_agente == 4 || this.resourceForm.value.tipo_agente == 6) {
        loadIndex += (force_rdaudio_normal == true ? 2 : 4);
      } else {
        loadIndex += 2;
      }
    } else if (this.selectedResource === 2) {
      if (this.resourceForm.value.tipo_interfaz_tel == 5 || this.resourceForm.value.tipo_interfaz_tel == 4 || this.resourceForm.value.tipo_interfaz_tel == 3) {
        loadIndex += 2;
      }
      else {
        loadIndex++;
      }
    }


    return loadIndex;
  }
}
