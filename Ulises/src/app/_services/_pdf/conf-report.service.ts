import { Injectable } from '@angular/core';
import * as moment from 'moment';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import 'pdfmake/build/vfs_fonts.js';
import { TDocumentDefinitions } from 'pdfmake/interfaces';

@Injectable({
  providedIn: 'root'
})

export class ConfReportPDFService {

  constructor() { }

  supervisaColateralOptions !: any;
  tipoAgenteArray !: any;
  indicacionArray !: any;
  indicacionSalidaAudio !: any;
  prioridadPTT !: any;
  prioridadSIP !: any;
  metodoBSS !: any;
  metodoBSSPreferido !: any;
  modoClimax !: any;
  modoCalculoClimax !: any;
  tablaCalificacionAudio !: any;
  interfaz_telefonico !: any;
  respuestaSIP !: any;
  ladoOptions !: any;
  tipoRestriccion !: any;
  main_header !: any;
  refreserArray !: any;

  LOCATION_VALUE !: any;
  GATEWAY_VALUE !: any;
  IP_VIRTUAL_VALUE !: any;
  LAST_LOAD_VALUE !: any;
  GATEWAY_SUPERVISION_VALUE !: any;
  ACTIVATION_DELAY_VALUE !: any;
  IP_CPU0_VALUE !: any;
  MASK_VALUE !: any;
  IP_CPU1_VALUE !: any;
  PORT_VALUE !: any;
  TLF_SUPERVISION_VALUE !: any;
  SUPERVISION_PERIOD_VALUE !: any;
  REFRESHER_VALUE !: any;
  NTP_1_VALUE !: any;
  NTP_2_VALUE !: any;
  SNMPV2_VALUE !: any;
  SERVICE_PORT_VALUE !: any;
  SNMP_PORT_VALUE !: any;
  SNMP_NAME_VALUE !: any;
  SNMP_COMMUNITY_VALUE !: any;
  SNMP_LOCATION_VALUE !: any;
  SNMP_CONTACT_VALUE !: any;
  SESSION_TIME_VALUE !: any;
  RSTP_PORT_VALUE !: any;
  RSTPA_VALUE !: any;
  RSTPB_VALUE !: any;
  TRAPS_VALUE !: any;
  RESOURCE_TYPE_VALUE !: any;
  NAME_VALUE !: any;
  CODEC_VALUE !: any;
  KEY_VALUE !: any;
  FREC_VALUE !: any;
  SETT_AD_VALUE !: any;
  SETT_DA_VALUE !: any;
  PREC_AUDIO_VALUE !: any;
  RAD_TYPE_VALUE !: any;
  AUDIO_INPUT_VALUE !: any;
  AUDIO_OUTPUT_VALUE !: any;
  UMBRAL_VAD_VALUE !: any;
  PTT_EVENT_VALUE !: any;
  PTT_PRIORITY_VALUE !: any;
  SIP_PRIORITY_VALUE !: any;
  BSS_CLIMAX_VALUE !: any;
  BSS_AVAILABLE_VALUE !: any;
  BASS_WINDOWS_VALUE !: any;
  CLIMAX_MODE_VALUE !: any;
  MODE_CALC_CLIMAX_VALUE !: any;
  TIME_VALUE !: any;
  METODO_BSS_VALUE !: any;
  TABLE_BSS_VALUE !: any;
  RADIO_GRS_VALUE !: any;
  ENABLE_RECORD_VALUE !: any;
  RESTRICTION_TYPE_VALUE !: any;
  URI_VALUE !: any;
  TYPE_VALUE !: any;
  COLATERAL_URI_VALUE !: any;
  COLATERAL_VALUE !: any;
  TLF_TYPE_VALUE !: any;
  AVGNUSER_VALUE !: any;
  ED137_VALUE !: any;
  DETECT_VOX_VALUE !: any;
  UMBRAL_VOX_VALUE !: any;
  VOX_TAIL_VALUE !: any;
  CALL_DUR_PER_TIME_VALUE !: any;
  TIME_MAX_CALL_VALUE !: any;
  DET_INV_POL_VALUE !: any;
  DET_LINEA_AB_VALUE !: any;
  AUTOMATIC_RESP_VALUE !: any;
  PERIOD_SHADES_VALUE !: any;
  SIP_R2_RESP_VALUE !: any;
  TONOBLOQUEO_VALUE !: any;
  RMBLOQUEO_VALUE !: any;
  SIDE_VALUE !: any;
  ORIGEN_TEST_VALUE !: any;
  DESTINO_TEST_VALUE !: any;
  DURATION_SHADES_VALUE !: any;
  AUTOMATIC_CALL_VALUE !: any;
  REMOTE_URI_VALUE !: any;
  COLATERAL_SUPER_VALUE !: any;
  ANY_RESP_IS_VALID_VALUE !: any;
  ADD_REMOTE_URI_VALUE !: any;
  ADD_COLATERAL_SUPER_VALUE !: any;
  ADD_ANY_RESP_IS_VALID_VALUE !: any;
  SUPERVISION_TIME_VALUE !: any;
  ATS_TYPE_VALUE !: any;
  ATS_START_VALUE !: any;
  ATS_FINAL_VALUE !: any;
  CONFIGURATION_VALUE !: any;
  NOT_VALUE !: any;
  YES_VALUE !: any;
  SECONDS_VALUE !: any;
  NORMAL_VALUE !: any;
  STRICT_VALUE !: any;
  RAD_VALUE !: any;
  TLF_VALUE !: any;
  START_VALUE !: any;
  END_VALUE !: any;
  REPORT_VALUE !: any;
  LISTAS_BN_VALUE !: any
  RESOURCE_VALUE !: any;
  ID_CONF_VALUE !: any;
  LAST_MODIF_VALUE !: any;
  SUPERVISED_VALUE !: any;
  DESCRIPTION_VALUE !: any;
  TRAP_VERSION_VALUE !: any;
  TRAP_IP_ADRESS_VALUE !: any;
  TRAP_PORT_VALUE !: any;
  RIGTHS_VALUE !: any;
  CONFIG_REPORT_VALUE !: any;

  createReportCFG(data: any, name: any, data_array: any) {
    this.assignData(data_array);
    (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
    const cfgName = data.length == 0 ? "NO-GW" : data.nombre;
    const pdfDoc = pdfMake.createPdf(this.getPdfDocDefinition(data, cfgName))
    pdfDoc.getBase64((cb: any) => {
      let title = moment().format('YYYYMMDD-HHmm ') + 'Cfg_(' + name + ')_' + this.REPORT_VALUE + 'Cfg.pdf';
      const pdfData = 'data:application/pdf;base64,' + cb;
      this.downloadFile(title, pdfData);
    })
  }

  getPdfDocDefinition(conf: any, cfgName: any): TDocumentDefinitions | any {
    return {
      pageSize: 'A4',
      pageOrientation: 'portrait',
      //pageMargins: [10,10,10,10],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          color: 'grey', alignment: 'center',
          margin: [0, 20, 0, 10]
        },
        footer: {
          fontSize: 9, color: 'grey',
          margin: [10, 10, 10, 20]
        },
        table: {
          margin: [0, 5, 0, 15]
        },
        table1: {
          margin: [0, 5, 0, 15],
          fillColor: "grey"
        }
      },

      defaultStyle: {
        alignment: 'center',
        font: 'Roboto'
      },
      header: {
        margin: [10, 10, 10, 10],
        text: this.CONFIG_REPORT_VALUE + " " + cfgName + " - " + (new Date()).toLocaleString(), style: 'header'
      },
      footer: (currentPage: any, pageCount: any) => {
        return {
          margin: [10, 10, 10, 10],
          columns: [
            { text: "Amper. 2017-" + new Date().getFullYear() + ". " + this.RIGTHS_VALUE + ".", style: 'footer', alignment: 'left' },
            { text: 'Pg ' + currentPage.toString() + ' de ' + pageCount, style: 'footer', alignment: 'right' }
          ]
        };
      },
      content: this.PdfPrint(conf)
    };
  }

  PdfPrint(conf: any) {

    let content = []

    let supervisada = conf.activa === 1 ? this.YES_VALUE : this.NOT_VALUE
    let ult_modi = conf.fecha_activacion.toLocaleString()

    content.push(
      {
        style: 'table1',
        table: {
          widths: ['*', '*', '*'],
          body: [
            [this.ID_CONF_VALUE, this.LAST_MODIF_VALUE, this.SUPERVISED_VALUE],
            [conf.nombre, ult_modi, supervisada]
          ]
        }
      },
      {

        style: 'table',
        table: {
          widths: ['*'],
          body: [
            [this.DESCRIPTION_VALUE],
            [conf.descripcion]
          ]
        }
      },

      {
        style: 'table',
        table: {
          widths: ['*', '*'],
          body: this.getEmplzFromConf(conf)
        },
        pageBreak: 'after'
      }
    )

    this.PDFPrintEmplz(content, conf)
    return content
  }


  PDFPrintEmplz(content: any, conf: any) {


    conf.emplz.forEach((emplz: any) => {
      content.push(
        {
          style: 'table1',
          table: {
            widths: ['*', '*'],
            body: [
              [this.ID_CONF_VALUE, this.LOCATION_VALUE],
              [conf.nombre, emplz.nombre]
            ]
          }
        },
        {
          style: 'table',
          table: {
            widths: ['*', '*', '*', '*'],
            body: this.getGtwFromEmplz(emplz)
          },
          pageBreak: 'after'
        },
      )

      this.PDFPrintGTW(content, conf, emplz);
    })

  }

  PDFPrintGTW(content: any, conf: any, emplz: any) {

    emplz.gtws.forEach((gtw: any) => {

      console.log(this.refreserArray)
      console.log(gtw.refresher)
      const supervision = gtw.supervision_puerta === 0 || !gtw.supervision_puerta ? this.NOT_VALUE : gtw.supervision_puerta + ' ' + this.SECONDS_VALUE
      const ultima_carga = gtw.ultima_actualizacion.toLocaleString()
      const retardo = gtw.retardo / 1000 + " " + this.SECONDS_VALUE
      const supervisionTlf = gtw.supervisionTlf === 0 ? this.NOT_VALUE : this.YES_VALUE
      const per_supervision = gtw.supervisionTlf === 0 ? ' - ' : gtw.periodo_supervision
      const refreser = gtw.supervisionTlf === 0 ? ' - ' : this.refreserArray[gtw.refresher]
      const snmpv = gtw.snmpv2 === 0 ? this.NOT_VALUE : this.YES_VALUE;
      const NTP1 = gtw.ntp[0] ? gtw.ntp[0].ip : ' - '
      const NTP2 = gtw.ntp[1] ? gtw.ntp[1].ip : ' - '

      content.push(
        {
          style: 'table1',
          table: {
            widths: ['*', '*'],
            body: [
              [this.CONFIGURATION_VALUE, conf.nombre ?? ' - '],
              [this.LOCATION_VALUE, emplz.nombre ?? ' - '],
              [this.GATEWAY_VALUE, gtw.nombre ?? ' - ']
            ]
          }
        },
        {
          style: 'table',
          table: {
            widths: ['*', '*'],
            body: [
              [this.IP_VIRTUAL_VALUE, gtw.ip_virtual ?? ' - '],
              [this.LAST_LOAD_VALUE, ultima_carga ?? ' - '],
              [this.GATEWAY_SUPERVISION_VALUE, supervision ?? ' - '],
              [this.ACTIVATION_DELAY_VALUE, retardo ?? ' - ']
            ]
          }
        },
        {
          style: 'table',
          table: {
            widths: ['*', '*', '*', '*'],
            body: [
              ['', 'IP', 'IP Gateway', this.MASK_VALUE ?? ' - '],
              ['CPU 0', gtw.ip_cpu0, gtw.ip_gtw0, gtw.mask_cpu0 ?? ' - '],
              ['CPU 1', gtw.ip_cpu1, gtw.ip_gtw1, gtw.mask_cpu1 ?? ' - ']
            ]
          }
        },
        {
          style: 'table',
          table: {
            widths: ['*', '*'],
            body: [
              [this.PORT_VALUE, gtw.puerto_sip ?? ' - '],
              [this.TLF_SUPERVISION_VALUE, supervisionTlf ?? ' - '],
              [this.SUPERVISION_PERIOD_VALUE, per_supervision ?? ' - '],
              [this.REFRESHER_VALUE, refreser ?? ' - '],
              [this.NTP_1_VALUE, NTP1 ?? ' - '],
              [this.NTP_2_VALUE, NTP2 ?? ' - '],
              [this.SERVICE_PORT_VALUE, gtw.puerto_servicio_snmp ?? ' - '],
              [this.SNMP_PORT_VALUE, gtw.puerto_snmp ?? ' - '],
              [this.SNMPV2_VALUE, snmpv ?? ' - '],
              [this.SNMP_NAME_VALUE, gtw.nombre_snmp ?? ' - '],
              [this.SNMP_COMMUNITY_VALUE, gtw.comunidad_snmp ?? ' - '],
              [this.SNMP_LOCATION_VALUE, gtw.localizacion_snmp ?? ' - '],
              [this.SNMP_CONTACT_VALUE, gtw.contacto_snmp ?? ' - '],
              [this.SERVICE_PORT_VALUE, gtw.puerto_servicio_web ?? ' - '],
              [this.SESSION_TIME_VALUE, gtw.tiempo_sesion ?? ' - '],
              [this.RSTP_PORT_VALUE, gtw.puerto_rtsp ?? ' - '],
              [this.RSTPA_VALUE, gtw.servidor_rtsp ?? ' - '],
              [this.RSTPB_VALUE, gtw.servidor_rtspb ?? ' - ']
            ]
          },
        },
        {
          style: 'table',
          table: {
            widths: ['*', '*', '*'],
            body: this.getTRAPSFromGTW(gtw)
          },
          pageBreak: 'after'
        },
        {
          style: 'table',
          table: {
            widths: ['*', '*'],
            body: this.getResourcesFromGTW(gtw)
          },
          pageBreak: 'after'
        },
      )

      this.PDFPrintRSC(content, conf, emplz, gtw)
    })
  }

  PDFPrintRSC(content: any, conf: any, emplz: any, gtw: any) {

    gtw.radio.forEach((radio: any) => {

      const codec = radio.codec === 0 ? 'GT11-A' : ' - '
      const clave = !radio.clave_registro ? ' - ' : radio.clave_registro
      const ajusteAD = radio.ajuste_ad === null ? ' - ' : radio.ajuste_ad
      const ajusteDA = radio.ajuste_da === null ? ' - ' : radio.ajuste_da
      const precision_audio = radio.precision_audio === 0 ? this.STRICT_VALUE : this.NORMAL_VALUE

      content.push(
        {
          style: 'table1',
          table: {
            widths: ['*', '*'],
            body: [
              [this.CONFIGURATION_VALUE, conf.nombre ?? ' - '],
              [this.LOCATION_VALUE, emplz.nombre ?? ' - '],
              [this.GATEWAY_VALUE, gtw.nombre ?? ' - '],
              [this.RESOURCE_VALUE, radio.nombre ?? ' - ']
            ]
          }
        },
        {
          style: 'table',
          table: {
            widths: ['*', '*'],
            body: [
              [this.RESOURCE_TYPE_VALUE, this.RAD_VALUE ?? ' - '],
              [this.CODEC_VALUE, codec ?? ' - '],
              [this.KEY_VALUE, clave ?? ' - '],
              [this.FREC_VALUE, radio.frecuencia ?? ' - '],
            ]
          }
        },
        {
          style: 'table',
          table: {
            widths: ['*', '*'],
            body: [
              [this.SETT_AD_VALUE, ajusteAD ?? ' - '],
              [this.SETT_DA_VALUE, ajusteDA ?? ' - '],
              [this.PREC_AUDIO_VALUE, precision_audio ?? ' - '],
            ]
          }
        },
        {
          style: 'table',
          table: {
            widths: ['*', '*'],
            body: this.getDataResourceRadio(radio)
          }
        }
      )
      this.PDFPrintRadioUri(content, radio)
    })

    gtw.tlf.forEach((tlf: any) => {

      const codec = tlf.codec === 0 ? 'GT11-A' : ' - '
      const clave = !tlf.clave_registro ? ' - ' : tlf.clave_registro
      const ajusteAD = tlf.ajuste_ad === null ? ' - ' : tlf.ajuste_ad
      const ajusteDA = tlf.ajuste_da === null ? ' - ' : tlf.ajuste_da

      content.push(
        {
          style: 'table1',
          table: {
            widths: ['*', '*'],
            body: [
              [this.CONFIGURATION_VALUE, conf.nombre ?? ' - '],
              [this.LOCATION_VALUE, emplz.nombre ?? ' - '],
              [this.GATEWAY_VALUE, gtw.nombre ?? ' - '],
              [this.RESOURCE_VALUE, tlf.nombre ?? ' - ']
            ]
          }
        },
        {
          style: 'table',
          table: {
            widths: ['*', '*'],
            body: [
              [this.RESOURCE_TYPE_VALUE, this.TLF_VALUE ?? ' - '],
              [this.CODEC_VALUE, codec ?? ' - '],
              [this.KEY_VALUE, clave ?? ' - '],
              ]
          }
        },
        {
          style: 'table',
          table: {
            widths: ['*', '*'],
            body: [
              [this.SETT_AD_VALUE, ajusteAD ?? ' - '],
              [this.SETT_DA_VALUE, ajusteDA ?? ' - '],
            ]
          }
        },
        {
          style: 'table',
          table: {
            widths: ['*', '*'],
            body: this.getDataResourceTlf(tlf)
          }
        },
        {
          style: 'table',
          table: {
            widths: ['*', '*'],
            body: this.getDataCollateral(tlf)
          }
        },
        {
          style: 'table',
          table: {
            widths: ['*', '*', '*'],
            body: this.getDataATS(tlf)
          },
          pageBreak: 'after'

        },

      )
    })
  }


  getDataCollateral(tlf: any) {

    const uri_remota = tlf.uri_telefonica === "" ? ' - ' : tlf.uri_telefonica
    const supervisa_colateral = this.supervisaColateralOptions[tlf.supervisa_colateral]
    const cualquier_respuesta = tlf.itiporespuesta === 0 ? this.NOT_VALUE : this.YES_VALUE
    const uri_remota_add = tlf.additional_uri_remota === "" ? ' - ' : tlf.additional_uri_remota
    const supervisa_colateral_add = this.supervisaColateralOptions[tlf.additional_superv_options]
    const cualquier_respuesta_add = tlf.additional_itiporespuesta === 0 ? this.NOT_VALUE : this.YES_VALUE
    const tiempo_supervision = tlf.supervisa_colateral !== 0 || tlf.additional_superv_options !== 0 ? tlf.tiempo_supervision : ' - '

    let body = []

    body.push(
      [this.COLATERAL_VALUE, uri_remota ?? ' - '],
      [this.COLATERAL_SUPER_VALUE, supervisa_colateral ?? ' - '],
      [this.ANY_RESP_IS_VALID_VALUE, cualquier_respuesta ?? ' - '],
    )

    if (tlf.tipo_interfaz_tel !== 7) {
      body.push(
        [this.COLATERAL_VALUE, uri_remota_add ?? ' - '],
        [this.ADD_COLATERAL_SUPER_VALUE, supervisa_colateral_add ?? ' - '],
        [this.ADD_ANY_RESP_IS_VALID_VALUE, cualquier_respuesta_add ?? ' - '],
      )
    }

    body.push(
      [this.SUPERVISION_TIME_VALUE, tiempo_supervision ?? ' - ']
    )

    return body

  };


  getDataATS(tlf: any) {

    let body = [];

    body.push([this.ATS_TYPE_VALUE, this.ATS_START_VALUE, this.ATS_FINAL_VALUE])

    tlf.ats.forEach((ats: any) => {
      const tipo = ats.tipo === 0 ? this.START_VALUE : this.END_VALUE
      if (ats.rango_ats_inicial !== "" && ats.rango_ats_final !== "") {
        body.push([(tipo), ats.rango_ats_inicial, ats.rango_ats_final])
      }
    })

    if (tlf.ats.length === 0 || body.length === 1) {
      body.push([' - ', ' - ', ' - '])
    }

    return body

  }

  getDataResourceTlf(tlf: any) {

    const tipo_interfaz_telefonico = this.interfaz_telefonico[tlf.tipo_interfaz_tel]
    const permite_llamadas = tlf.iEnableNoED137 === 0 ? this.NOT_VALUE : this.YES_VALUE
    const deteccion_vox = tlf.deteccion_vox === 0 ? this.NOT_VALUE : this.YES_VALUE
    const umbral_vox = tlf.deteccion_vox === 0 ? ' - ' : tlf.umbral_vox + ' dB'
    const cola_vox = tlf.cola_vox === 0 ? ' - ' : tlf.cola_vox + ' sg'
    const duracion_llamada = tlf.iControlTmLlam === 0 ? this.NOT_VALUE : this.YES_VALUE
    const tiempo_maximo = tlf.iControlTmLlam === 0 || !tlf.iTmMaxConversacion ? ' - ' : tlf.iTmMaxConversacion + ' sg'
    const detect_inv = tlf.det_inversion_pol === 0 ? this.NOT_VALUE : this.YES_VALUE
    const detect_fallo = tlf.iDetLineaAB === 0 ? this.NOT_VALUE : this.YES_VALUE
    const respuesta_automatica = tlf.respuesta_automatica === 0 ? this.NOT_VALUE : this.YES_VALUE
    const periodo_tono = tlf.respuesta_automatica === 0 ? ' - ' : tlf.periodo_tonos
    const conv_SIP_R2 = tlf.respuesta_automatica === 0 ? (this.respuestaSIP[tlf.RespuestaSIP_ATSR2] ?? '-') : ' - '
    const duracion_tono = tlf.respuesta_automatica === 0 && tlf.RespuestaSIP_ATSR2 === 1 ? (tlf.TmTonoBloqueo ?? ' - ') : ' - '
    const tiempo_bloqueo = tlf.respuesta_automatica === 0 && tlf.RespuestaSIP_ATSR2 === 1 ? (tlf.TmBloqueoLib ?? ' - ') : ' - '
    const lado = this.ladoOptions[tlf.lado]
    const llamada_automatica = tlf.llamada_automatica ? (tlf.llamada_automatica === 0 ? this.NOT_VALUE : this.YES_VALUE) : ' - '
    const origen = tlf.origen_test === '' ? ' - ' : tlf.origen_test
    const destino = tlf.destino_test === '' ? ' - ' : tlf.destino_test

    let body = []

    switch (tlf.tipo_interfaz_tel) {
      case 0:
        body.push(
          [this.TLF_TYPE_VALUE, tipo_interfaz_telefonico ?? ' - '],
          [this.AVGNUSER_VALUE, tlf.ats_user ?? ' - '],
          [this.ED137_VALUE, permite_llamadas ?? ' - '],
          [this.DETECT_VOX_VALUE, deteccion_vox ?? ' - '],
          [this.UMBRAL_VOX_VALUE, umbral_vox ?? ' - '],
          [this.VOX_TAIL_VALUE, cola_vox ?? ' - '],
          [this.CALL_DUR_PER_TIME_VALUE, duracion_llamada ?? ' - '],
          [this.TIME_MAX_CALL_VALUE, tiempo_maximo]
        )

        break;
      case 1:
        body.push(
          [this.TLF_TYPE_VALUE, tipo_interfaz_telefonico ?? ' - '],
          [this.AVGNUSER_VALUE, tlf.ats_user ?? ' - '],
          [this.ED137_VALUE, permite_llamadas ?? ' - '],

        )

        break;
      case 2:
        body.push(
          [this.TLF_TYPE_VALUE, tipo_interfaz_telefonico ?? ' - '],
          [this.AVGNUSER_VALUE, tlf.ats_user ?? ' - '],
          [this.ED137_VALUE, permite_llamadas ?? ' - '],
          [this.DET_INV_POL_VALUE, detect_inv ?? ' - '],
          [this.DET_LINEA_AB_VALUE, detect_fallo ?? ' - ']
        )

        break;
      case 3:
        body.push(
          [this.TLF_TYPE_VALUE, tipo_interfaz_telefonico ?? ' - '],
          [this.AVGNUSER_VALUE, tlf.ats_user ?? ' - '],
          [this.ED137_VALUE, permite_llamadas ?? ' - '],
          [this.AUTOMATIC_RESP_VALUE, respuesta_automatica ?? ' - '],
          [this.PERIOD_SHADES_VALUE, periodo_tono ?? ' - '],
          [this.SIP_R2_RESP_VALUE, conv_SIP_R2 ?? ' - '],
          [this.TONOBLOQUEO_VALUE, duracion_tono ?? ' - '],
          [this.RMBLOQUEO_VALUE, tiempo_bloqueo ?? ' - '],
          [this.SIDE_VALUE, lado ?? ' - '],
          [this.ORIGEN_TEST_VALUE, origen ?? ' - '],
          [this.DESTINO_TEST_VALUE, destino ?? ' - '],
          [this.DURATION_SHADES_VALUE, tlf.duracion_tono_interrup ?? ' - '],
        )

        break;
      case 4:
        body.push(
          [this.TLF_TYPE_VALUE, tipo_interfaz_telefonico ?? ' - '],
          [this.ED137_VALUE, tlf.ats_user ?? ' - '],
          [this.AUTOMATIC_RESP_VALUE, respuesta_automatica ?? ' - '],
          [this.PERIOD_SHADES_VALUE, periodo_tono ?? ' - '],
          [this.SIDE_VALUE, lado ?? ' - '],
          [this.ORIGEN_TEST_VALUE, origen ?? ' - '],
          [this.DESTINO_TEST_VALUE, destino ?? ' - '],
          [this.DURATION_SHADES_VALUE, tlf.duracion_tono_interrup ?? ' - '],
        )

        break;

      case 5:
        body.push(
          [this.TLF_TYPE_VALUE, tipo_interfaz_telefonico ?? ' - '],
          [this.AVGNUSER_VALUE, tlf.ats_user ?? ' - '],
          [this.AUTOMATIC_RESP_VALUE, respuesta_automatica ?? ' - '],
          [this.PERIOD_SHADES_VALUE, periodo_tono ?? ' - '],
        )

        break;
      case 6:
        body.push(
          [this.TLF_TYPE_VALUE, tipo_interfaz_telefonico ?? ' - '],
        )

        break;
      case 7:
        body.push(
          [this.TLF_TYPE_VALUE, tipo_interfaz_telefonico ?? ' - '],
          [this.AUTOMATIC_CALL_VALUE, llamada_automatica ?? ' - '],
        )

        break;
    }
    return body
  }

  PDFPrintRadioUri(content: any, radio: any) {

    if (radio.tipo_agente >= 4) {

      let body = []

      const tipoRestriccionLista = this.tipoRestriccion[radio.restriccion_entrantes]

      body.push([this.LISTAS_BN_VALUE, tipoRestriccionLista ?? ' - '])

      if (radio.restriccion_entrantes !== 0) {
        radio.uris.forEach((uri: any) => {
          body.push([this.RESOURCE_VALUE, uri.uri])
        })
      }

      content.push(
        {
          style: 'table',
          table: {
            widths: ['*', '*'],
            body: body
          },
          pageBreak: 'after'
        },
      )

    } else {

      let body = []

      body.push([this.TYPE_VALUE, this.URI_VALUE, this.COLATERAL_URI_VALUE])

      radio.uris.forEach((uri: any) => {
        body.push([uri.tipo, uri.uri, uri.nivel_colateral])
      })

      content.push(
        {
          style: 'table',
          table: {
            widths: [100, '*', 100],
            body: body
          },
          pageBreak: 'after'
        }
      )
    }
  }

  getDataResourceRadio(radio: any) {

    const tipo_agente_radio = this.tipoAgenteArray[radio.tipo_agente]
    const indicacion_entrada_audio = this.indicacionArray[radio.indicacion_entrada_audio]
    const indicacion_salida_audio = this.indicacionSalidaAudio[radio.indicacion_salida_audio]
    const eventosPTT = radio.evento_ptt_squelch === 0 ? this.NOT_VALUE : this.YES_VALUE
    const prioridadPtt = this.prioridadPTT[radio.prioridad_ptt]
    const prioridadSesion = this.prioridadSIP[radio.prioridad_sesion_sip]
    const BSSClimax = radio.climax_bss === 0 ? this.NOT_VALUE : this.YES_VALUE
    const metodosBSS = radio.climax_bss === 0 ? ' - ' : this.metodoBSS[radio.metodo_bss]
    const metodosBSSPref = this.metodoBSSPreferido[radio.metodo_bss]
    const ventanaBSS = radio.metodo_bss === 0 || radio.climax_bss === 0 ? ' - ' : radio.ventana_bss + ' ms'
    const modoclimax = radio.climax_bss === 0 ? ' - ' : this.modoClimax[radio.tipo_climax]
    const calculoClimax = radio.climax_bss === 0 || radio.tipo_climax === 0 ? ' - ' : this.modoCalculoClimax[radio.metodo_climax]
    const tiempoClimax = radio.climax_bss === 0 || radio.tipo_climax !== 3 ? ' - ' : radio.retardo_fijo_climax + ' ms'
    const tablaCalificacion = this.tablaCalificacionAudio[radio.tabla_bss_id]
    const retrasoGRS = radio.retraso_interno_grs + ' ms'
    const umbral_vad = radio.indicacion_entrada_audio !== 1 ? ' - ' : radio.umbral_vad
    const habilitaGrabacion = radio.habilita_grabacion === 0 ? this.NOT_VALUE : this.YES_VALUE

    let type = radio.tipo_agente;

    let body = []

    body.push([this.RAD_TYPE_VALUE, tipo_agente_radio ?? ' - '])

    switch (type) {
      case 0:
        body.push(
          [this.AUDIO_INPUT_VALUE, indicacion_entrada_audio ?? ' - '],
          [this.AUDIO_OUTPUT_VALUE, indicacion_salida_audio ?? ' - '],
          [this.UMBRAL_VAD_VALUE, umbral_vad ?? ' - '],
          [this.PTT_EVENT_VALUE, eventosPTT ?? ' - '],
          [this.PTT_PRIORITY_VALUE, prioridadPtt ?? ' - '],
          [this.SIP_PRIORITY_VALUE, prioridadSesion ?? ' - '],
        )
        break;

      case 1:
        body.push(
          [this.AUDIO_INPUT_VALUE, indicacion_entrada_audio ?? ' - '],
          [this.AUDIO_OUTPUT_VALUE, indicacion_salida_audio ?? ' - '],
          [this.UMBRAL_VAD_VALUE, umbral_vad ?? ' - '],
          [this.PTT_EVENT_VALUE, eventosPTT ?? ' - '],
          [this.PTT_PRIORITY_VALUE, prioridadPtt ?? ' - '],
          [this.SIP_PRIORITY_VALUE, prioridadSesion ?? ' - '],
        )
        break;

      case 2:
        body.push(
          [this.AUDIO_INPUT_VALUE, indicacion_entrada_audio ?? ' - '],
          [this.AUDIO_OUTPUT_VALUE, indicacion_salida_audio ?? ' - '],
          [this.UMBRAL_VAD_VALUE, umbral_vad ?? ' - '],
          [this.PTT_EVENT_VALUE, eventosPTT ?? ' - '],
          [this.PTT_PRIORITY_VALUE, prioridadPtt ?? ' - '],
          [this.SIP_PRIORITY_VALUE, prioridadSesion ?? ' - '],
          [this.BSS_CLIMAX_VALUE, BSSClimax ?? ' - '],
          [this.BSS_AVAILABLE_VALUE, metodosBSS ?? ' - '],
          [this.BASS_WINDOWS_VALUE, ventanaBSS ?? ' - '],
          [this.CLIMAX_MODE_VALUE, modoclimax ?? ' - '],
          [this.MODE_CALC_CLIMAX_VALUE, calculoClimax ?? ' - '],
          [this.TIME_VALUE, tiempoClimax ?? ' - '],
        )
        break;

      case 3:
        body.push(
          [this.AUDIO_INPUT_VALUE, indicacion_entrada_audio ?? ' - '],
          [this.AUDIO_OUTPUT_VALUE, indicacion_salida_audio ?? ' - '],
          [this.UMBRAL_VAD_VALUE, umbral_vad ?? ' - '],
          [this.PTT_EVENT_VALUE, eventosPTT ?? ' - '],
          [this.PTT_PRIORITY_VALUE, prioridadPtt ?? ' - '],
          [this.SIP_PRIORITY_VALUE, prioridadSesion ?? ' - '],
          [this.BSS_CLIMAX_VALUE, BSSClimax ?? ' - '],
          [this.BSS_AVAILABLE_VALUE, metodosBSS ?? ' - '],
          [this.BASS_WINDOWS_VALUE, ventanaBSS ?? ' - '],
          [this.CLIMAX_MODE_VALUE, modoclimax ?? ' - '],
          [this.MODE_CALC_CLIMAX_VALUE, calculoClimax ?? ' - '],
          [this.TIME_VALUE, tiempoClimax ?? ' - '],
        )
        break;

      case 4:
        body.push(
          [this.AUDIO_INPUT_VALUE, indicacion_entrada_audio ?? ' - '],
          [this.AUDIO_OUTPUT_VALUE, indicacion_salida_audio ?? ' - '],
          [this.UMBRAL_VAD_VALUE, umbral_vad ?? ' - '],
          [this.PTT_EVENT_VALUE, eventosPTT ?? ' - '],
          [this.BSS_CLIMAX_VALUE, BSSClimax ?? ' - '],
          [this.METODO_BSS_VALUE, metodosBSSPref ?? ' - '],
          [this.TABLE_BSS_VALUE, tablaCalificacion ?? ' - '],
          [this.RADIO_GRS_VALUE, retrasoGRS ?? ' - '],
          [this.ENABLE_RECORD_VALUE, habilitaGrabacion ?? ' - '],
        )
        break;

      case 5:
        body.push(
          [this.AUDIO_OUTPUT_VALUE, indicacion_salida_audio ?? ' - '],
          [this.UMBRAL_VAD_VALUE, umbral_vad ?? ' - '],
          [this.PTT_EVENT_VALUE, eventosPTT ?? ' - '],
          [this.RADIO_GRS_VALUE, retrasoGRS ?? ' - '],
        )
        break;

      case 6:
        body.push(
          [this.AUDIO_INPUT_VALUE, indicacion_entrada_audio ?? ' - '],
          [this.UMBRAL_VAD_VALUE, umbral_vad ?? ' - '],
          [this.PTT_EVENT_VALUE, eventosPTT ?? ' - '],
          [this.BSS_AVAILABLE_VALUE, metodosBSS ?? ' - '],
          [this.TABLE_BSS_VALUE, tablaCalificacion ?? ' - '],
          [this.ENABLE_RECORD_VALUE, habilitaGrabacion ?? ' - '],
        )
        break;
    }

    return body

  }

  getResourcesFromGTW(gtw: any) {

    let body = []

    body.push([this.RESOURCE_VALUE, this.RESOURCE_TYPE_VALUE])

    gtw.radio.forEach((radRs: any) => {
      body.push([radRs.nombre, this.RAD_VALUE ?? ' - '])
    })


    gtw.tlf.forEach((tlfRs: any) => {
      body.push([tlfRs.nombre, this.TLF_VALUE ?? ' - '])
    })

    return body

  }

  getTRAPSFromGTW(gtw: any) {

    let body = []

    body.push([this.TRAP_VERSION_VALUE, this.TRAP_IP_ADRESS_VALUE, this.TRAP_PORT_VALUE]);
    gtw.traps.forEach((trap: any) => {
      const version = (trap.ip.split(","))[0]
      const ip = (((trap.ip.split(","))[1]).split('/'))[0]
      const puerto = (trap.ip.split("/"))[1]
      body.push([version ?? ' - ', ip ?? ' - ', puerto ?? ' - '])
    })

    if (gtw.traps.length === 0) {
      body.push(['-', '-', '-'])
    }

    return body
  }

  getEmplzFromConf(data: any) {

    let body = []

    body.push([this.LOCATION_VALUE, this.GATEWAY_VALUE])

    data.emplz.forEach((emplz: any) => {
      body.push([emplz.nombre, emplz.n_gtw])
    });

    return body
  }

  getGtwFromEmplz(emplz: any) {

    let body = []

    body.push([this.GATEWAY_VALUE, this.IP_VIRTUAL_VALUE, this.IP_CPU0_VALUE, this.IP_CPU0_VALUE])

    emplz.gtws.forEach((gtw: any) => {
      body.push([gtw.nombre ?? ' - ', gtw.ip_virtual ?? ' - ', gtw.ip_cpu0 ?? ' - ', gtw.ip_cpu1 ?? ' - '])
    })

    return body
  }

  downloadFile(filename: string, file: any) {

    var link = document.createElement("a");
    link.setAttribute("href", file);
    link.setAttribute("download", filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    link.remove();
    //document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  }

  assignData(data: any) {
    this.supervisaColateralOptions = data.supervisaColateralOptions;
    this.tipoAgenteArray = data.tipoAgenteArray;
    this.indicacionArray = data.indicacionArray;
    this.indicacionSalidaAudio = data.indicacionSalidaAudio;
    this.prioridadPTT = data.prioridadPTT;
    this.prioridadSIP = data.prioridadSIP;
    this.metodoBSS = data.metodoBSS;
    this.metodoBSSPreferido = data.metodoBSSPreferido;
    this.modoClimax = data.modoClimax;
    this.modoCalculoClimax = data.modoCalculoClimax;
    this.tablaCalificacionAudio = data.tablaCalificacionAudio;
    this.interfaz_telefonico = data.interfaz_telefonico;
    this.respuestaSIP = data.respuestaSIP;
    this.ladoOptions = data.ladoOptions;
    this.tipoRestriccion = data.tipoRestriccion;
    this.main_header = data.first_header;
    this.refreserArray = data.refreserArray;

    this.LOCATION_VALUE = data.pdf_data['LOCATION']
    this.GATEWAY_VALUE = data.pdf_data['GATEWAY']
    this.IP_VIRTUAL_VALUE = data.pdf_data['IP_VIRTUAL']
    this.LAST_LOAD_VALUE = data.pdf_data['LAST_LOAD']
    this.GATEWAY_SUPERVISION_VALUE = data.pdf_data['GATEWAY_SUPERVISION']
    this.ACTIVATION_DELAY_VALUE = data.pdf_data['ACTIVATION_DELAY']
    this.IP_CPU0_VALUE = data.pdf_data['IP_CPU0']
    this.MASK_VALUE = data.pdf_data['MASK']
    this.IP_CPU1_VALUE = data.pdf_data['IP_CPU1']
    this.PORT_VALUE = data.pdf_data['PORT']
    this.TLF_SUPERVISION_VALUE = data.pdf_data['TLF_SUPERVISION']
    this.SUPERVISION_PERIOD_VALUE = data.pdf_data['SUPERVISION_PERIOD']
    this.REFRESHER_VALUE = data.pdf_data['REFRESHER']
    this.NTP_1_VALUE = data.pdf_data['NTP_1']
    this.NTP_2_VALUE = data.pdf_data['NTP_2']
    this.SNMPV2_VALUE = data.pdf_data['SNMPV2']
    this.SERVICE_PORT_VALUE = data.pdf_data['SERVICE_PORT']
    this.SNMP_PORT_VALUE = data.pdf_data['SNMP_PORT']
    this.SNMP_NAME_VALUE = data.pdf_data['SNMP_NAME']
    this.SNMP_COMMUNITY_VALUE = data.pdf_data['SNMP_COMMUNITY']
    this.SNMP_LOCATION_VALUE = data.pdf_data['SNMP_LOCATION']
    this.SNMP_CONTACT_VALUE = data.pdf_data['SNMP_CONTACT']
    this.SESSION_TIME_VALUE = data.pdf_data['SESSION_TIME']
    this.RSTP_PORT_VALUE = data.pdf_data['RSTP_PORT']
    this.RSTPA_VALUE = data.pdf_data['RSTPA']
    this.RSTPB_VALUE = data.pdf_data['RSTPB']
    this.TRAPS_VALUE = data.pdf_data['TRAPS']
    this.RESOURCE_TYPE_VALUE = data.pdf_data['RESOURCE_TYPE']
    this.NAME_VALUE = data.pdf_data['NAME']
    this.CODEC_VALUE = data.pdf_data['CODEC']
    this.KEY_VALUE = data.pdf_data['KEY']
    this.FREC_VALUE = data.pdf_data['FREC']
    this.SETT_AD_VALUE = data.pdf_data['SETT_AD']
    this.SETT_DA_VALUE = data.pdf_data['SETT_DA']
    this.PREC_AUDIO_VALUE = data.pdf_data['PREC_AUDIO']
    this.RAD_TYPE_VALUE = data.pdf_data['RAD_TYPE']
    this.AUDIO_INPUT_VALUE = data.pdf_data['AUDIO_INPUT']
    this.AUDIO_OUTPUT_VALUE = data.pdf_data['AUDIO_OUTPUT']
    this.UMBRAL_VAD_VALUE = data.pdf_data['UMBRAL_VAD']
    this.PTT_EVENT_VALUE = data.pdf_data['PTT_EVENT']
    this.PTT_PRIORITY_VALUE = data.pdf_data['PTT_PRIORITY']
    this.SIP_PRIORITY_VALUE = data.pdf_data['SIP_PRIORITY']
    this.BSS_CLIMAX_VALUE = data.pdf_data['BSS_CLIMAX']
    this.BSS_AVAILABLE_VALUE = data.pdf_data['BSS_AVAILABLE']
    this.BASS_WINDOWS_VALUE = data.pdf_data['BASS_WINDOWS']
    this.CLIMAX_MODE_VALUE = data.pdf_data['CLIMAX_MODE']
    this.MODE_CALC_CLIMAX_VALUE = data.pdf_data['MODE_CALC_CLIMAX']
    this.TIME_VALUE = data.pdf_data['TIME']
    this.METODO_BSS_VALUE = data.pdf_data['METODO_BSS']
    this.TABLE_BSS_VALUE = data.pdf_data['TABLE_BSS']
    this.RADIO_GRS_VALUE = data.pdf_data['RADIO_GRS']
    this.ENABLE_RECORD_VALUE = data.pdf_data['ENABLE_RECORD']
    this.RESTRICTION_TYPE_VALUE = data.pdf_data['RESTRICTION_TYPE']
    this.URI_VALUE = data.pdf_data['URI']
    this.TYPE_VALUE = data.pdf_data['TYPE']
    this.COLATERAL_URI_VALUE = data.pdf_data['COLATERAL_URI']
    this.COLATERAL_VALUE = data.pdf_data['COLATERAL']
    this.TLF_TYPE_VALUE = data.pdf_data['TLF_TYPE']
    this.AVGNUSER_VALUE = data.pdf_data['AVGNUSER']
    this.ED137_VALUE = data.pdf_data['ED137']
    this.DETECT_VOX_VALUE = data.pdf_data['DETECT_VOX']
    this.UMBRAL_VOX_VALUE = data.pdf_data['UMBRAL_VOX']
    this.VOX_TAIL_VALUE = data.pdf_data['VOX_TAIL']
    this.CALL_DUR_PER_TIME_VALUE = data.pdf_data['CALL_DUR_PER_TIME']
    this.TIME_MAX_CALL_VALUE = data.pdf_data['TIME_MAX_CALL']
    this.DET_INV_POL_VALUE = data.pdf_data['DET_INV_POL']
    this.DET_LINEA_AB_VALUE = data.pdf_data['DET_LINEA_AB']
    this.AUTOMATIC_RESP_VALUE = data.pdf_data['AUTOMATIC_RESP']
    this.PERIOD_SHADES_VALUE = data.pdf_data['PERIOD_SHADES']
    this.SIP_R2_RESP_VALUE = data.pdf_data['SIP_R2_RESP']
    this.TONOBLOQUEO_VALUE = data.pdf_data['TONOBLOQUEO']
    this.RMBLOQUEO_VALUE = data.pdf_data['RMBLOQUEO']
    this.SIDE_VALUE = data.pdf_data['SIDE']
    this.ORIGEN_TEST_VALUE = data.pdf_data['ORIGEN_TEST']
    this.DESTINO_TEST_VALUE = data.pdf_data['DESTINO_TEST']
    this.DURATION_SHADES_VALUE = data.pdf_data['DURATION_SHADES']
    this.AUTOMATIC_CALL_VALUE = data.pdf_data['AUTOMATIC_CALL']
    this.REMOTE_URI_VALUE = data.pdf_data['REMOTE_URI']
    this.COLATERAL_SUPER_VALUE = data.pdf_data['COLATERAL_SUPER']
    this.ANY_RESP_IS_VALID_VALUE = data.pdf_data['ANY_RESP_IS_VALID']
    this.ADD_REMOTE_URI_VALUE = data.pdf_data['ADD_REMOTE_URI']
    this.ADD_COLATERAL_SUPER_VALUE = data.pdf_data['ADD_COLATERAL_SUPER']
    this.ADD_ANY_RESP_IS_VALID_VALUE = data.pdf_data['ADD_ANY_RESP_IS_VALID']
    this.SUPERVISION_TIME_VALUE = data.pdf_data['SUPERVISION_TIME']
    this.ATS_TYPE_VALUE = data.pdf_data['ATS_TYPE']
    this.ATS_START_VALUE = data.pdf_data['ATS_START']
    this.ATS_FINAL_VALUE = data.pdf_data['ATS_FINAL']
    this.CONFIGURATION_VALUE = data.pdf_data['CONFIGURATION']
    this.NOT_VALUE = data.pdf_data['NOT']
    this.YES_VALUE = data.pdf_data['YES']
    this.SECONDS_VALUE = data.pdf_data['SECONDS']
    this.NORMAL_VALUE = data.pdf_data['NORMAL']
    this.STRICT_VALUE = data.pdf_data['STRICT']
    this.RAD_VALUE = data.pdf_data['RAD']
    this.TLF_VALUE = data.pdf_data['TLF']
    this.START_VALUE = data.pdf_data['START']
    this.END_VALUE = data.pdf_data['END']
    this.REPORT_VALUE = data.pdf_data['REPORT']
    this.RESOURCE_VALUE = data.pdf_data['RESOURCE']
    this.LISTAS_BN_VALUE = data.pdf_data['LISTAS_BN'];
    this.RESOURCE_VALUE = data.pdf_data['RESOURCE'];
    this.ID_CONF_VALUE = data.pdf_data['ID_CONF'];
    this.LAST_MODIF_VALUE = data.pdf_data['LAST_MODIF'];
    this.SUPERVISED_VALUE = data.pdf_data['SUPERVISED'];
    this.DESCRIPTION_VALUE = data.pdf_data['DESCRIPTION'];
    this.TRAP_VERSION_VALUE = data.pdf_data['TRAP_VERSION'];
    this.TRAP_IP_ADRESS_VALUE = data.pdf_data['TRAP_IP_ADRESS'];
    this.TRAP_PORT_VALUE = data.pdf_data['TRAP_PORT'];
    this.RIGTHS_VALUE = data.pdf_data['RIGTHS'];
    this.CONFIG_REPORT_VALUE = data.pdf_data['CONFIG_REPORT']
  }
}
