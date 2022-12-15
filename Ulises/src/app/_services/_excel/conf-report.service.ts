import { Injectable } from '@angular/core';
import * as moment from 'moment';
import * as XLSX from 'xlsx'

@Injectable({
  providedIn: 'root'
})

export class ConfReportExcelService {

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
  res_header !: any;
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

  createReportCFG(conf: any, title_excel: any, data_array: any) {
    let content;
    const workbook = XLSX.utils.book_new();
    this.assignData(data_array);
    content = this.getConfInfo(conf)
    const confInfo = XLSX.utils.json_to_sheet(content);
    XLSX.utils.book_append_sheet(workbook, confInfo, this.CONFIGURATION_VALUE);
    XLSX.utils.sheet_add_aoa(confInfo, [this.main_header], { origin: "A1" })

    confInfo['!cols'] = [
      { wch: 20 },
      { wch: 25 },
      { wch: 10 },
      { wch: 25 },
      { wch: 20 },
      { wch: 10 },
    ];

    conf.emplz.forEach((emplz: any) => {
      emplz.gtws.forEach((gtw: any) => {
        content = this.getAllInfoGtw(emplz, gtw)
        const GTWInfo = XLSX.utils.json_to_sheet(content);
        XLSX.utils.book_append_sheet(workbook, GTWInfo, gtw.nombre);
        XLSX.utils.sheet_add_aoa(GTWInfo, [this.emptyArray(40)], { origin: "A1" })
        let cols = this.getSameCols(91, 35)
        GTWInfo['!cols'] = cols
      })
    });
    // content = getEmplzInfo(conf)
    // const emplzInfo = XLSX.utils.json_to_sheet([content]);
    // XLSX.utils.book_append_sheet(workbook, emplzInfo, 'Emplazamientos')
    // XLSX.utils.sheet_add_aoa(confInfo)

    let title = moment().format('YYYYMMDD-HHmm ') + 'Cfg_(' + title_excel + ')_' + this.REPORT_VALUE + 'Cfg.xlsx';
    XLSX.writeFile(workbook, title, { compression: true });
  }

  getSameCols(repeat: any, value: any) {
    let body = []
    for (let index = 0; index < repeat; index++) {
      body.push({ wch: value })
    }

    return body
  }
  getAllInfoGtw(emplz: any, gtw: any) {

    let body = [];

    const supervision = gtw.supervision_puerta === 0 || !gtw.supervision_puerta ? this.NOT_VALUE : `${gtw.supervision_puerta} ${this.SECONDS_VALUE}`
    const ultima_carga = gtw.ultima_actualizacion.toLocaleString()
    const retardo = `${gtw.retardo / 1000} ${this.SECONDS_VALUE}`
    const supervisionTlf = gtw.supervisionTlf === 0 ? this.NOT_VALUE : this.YES_VALUE
    const per_supervision = gtw.supervisionTlf === 0 ? ' - ' : gtw.periodo_supervision
    const refreser = gtw.supervisionTlf === 0 ? ' - ' : (this.refreserArray[gtw.refresher])
    const snmpv2 = gtw.snmpv2 === 0 ? this.NOT_VALUE : this.YES_VALUE
    const NTP1 = gtw.ntp[0] ?  gtw.ntp[0].ip : ' - '
    const NTP2 = gtw.ntp[1] ?  gtw.ntp[1].ip : ' - '

    body.push({
      POS_1: this.LOCATION_VALUE,
      POS_2: this.GATEWAY_VALUE
    })

    body.push({
      POS_1: emplz.nombre,
      POS_2: gtw.nombre
    })

    this.emptyRow(body)

    body.push({
      POS_1: this.IP_VIRTUAL_VALUE,
      POS_2: this.LAST_LOAD_VALUE,
      POS_3: this.SUPERVISED_VALUE,
      POS_4: this.ACTIVATION_DELAY_VALUE,
      POS_5: this.IP_CPU0_VALUE,
      POS_6: this.GATEWAY_VALUE,
      POS_7: this.MASK_VALUE,
      POS_8: this.IP_CPU1_VALUE,
      POS_9: this.GATEWAY_VALUE,
      POS_10: this.MASK_VALUE,
      POS_11: this.PORT_VALUE,
      POS_12: this.TLF_SUPERVISION_VALUE,
      POS_13: this.SUPERVISION_PERIOD_VALUE,
      POS_14: this.REFRESHER_VALUE,
      POS_15: this.NTP_1_VALUE,
      POS_16: this.NTP_2_VALUE,
      POS_17: this.SNMPV2_VALUE,
      POS_18: this.SERVICE_PORT_VALUE,
      POS_19: this.SNMP_PORT_VALUE,
      POS_20: this.SNMP_NAME_VALUE,
      POS_21: this.SNMP_COMMUNITY_VALUE,
      POS_22: this.SNMP_LOCATION_VALUE,
      POS_23: this.SNMP_CONTACT_VALUE,
      POS_24: this.SERVICE_PORT_VALUE,
      POS_25: this.SESSION_TIME_VALUE,
      POS_26: this.RSTP_PORT_VALUE,
      POS_27: this.RSTPA_VALUE,
      POS_28: this.RSTPB_VALUE,
    })

    body.push({
      POS_1: gtw.ip_virtual,
      POS_2: ultima_carga,
      POS_3: supervision,
      POS_4: retardo,
      POS_5: gtw.ip_cpu0,
      POS_6: gtw.ip_gtw0,
      POS_7: gtw.mask_cpu0,
      POS_8: gtw.ip_cpu1,
      POS_9: gtw.ip_gtw1,
      POS_10: gtw.mask_cpu1,
      POS_11: gtw.puerto_sip,
      POS_12: supervisionTlf,
      POS_13: per_supervision,
      POS_14: refreser,
      POS_15: NTP1,
      POS_16: NTP2,
      POS_17: snmpv2,
      POS_18: gtw.puerto_servicio_snmp,
      POS_19: gtw.puerto_snmp,
      POS_20: gtw.nombre_snmp,
      POS_21: gtw.comunidad_snmp,
      POS_22: gtw.localizacion_snmp,
      POS_23: gtw.contacto_snmp,
      POS_24: gtw.puerto_servicio_web,
      POS_25: gtw.tiempo_sesion,
      POS_26: gtw.puerto_rtsp,
      POS_27: gtw.servidor_rtsp,
      POS_28: gtw.servidor_rtspb,
    })

    this.emptyRow(body)

    body.push({
      POS_1: this.TRAPS_VALUE
    })

    if (gtw.traps.length !== 0) {
      gtw.traps.forEach((trap: any) => {
        body.push({ POS_1: trap.ip })
      });
    } else {
      body.push({ POS_1: ' - ' })
    }

    this.emptyRow(body)

    body.push({
      POS_1: this.RESOURCE_TYPE_VALUE,
      POS_2: this.NAME_VALUE,
      POS_3: this.CODEC_VALUE,
      POS_4: this.KEY_VALUE,
      POS_5: this.FREC_VALUE,
      POS_6: this.SETT_AD_VALUE,
      POS_7: this.SETT_DA_VALUE,
      POS_8: this.PREC_AUDIO_VALUE,
      POS_9: this.RAD_TYPE_VALUE,
      POS_10: this.AUDIO_INPUT_VALUE,
      POS_11: this.AUDIO_OUTPUT_VALUE,
      POS_12: this.UMBRAL_VAD_VALUE,
      POS_13: this.PTT_EVENT_VALUE,
      POS_14: this.PTT_PRIORITY_VALUE,
      POS_15: this.SIP_PRIORITY_VALUE,
      POS_16: this.BSS_CLIMAX_VALUE,
      POS_17: this.BSS_AVAILABLE_VALUE,
      POS_18: this.BASS_WINDOWS_VALUE,
      POS_19: this.CLIMAX_MODE_VALUE,
      POS_20: this.MODE_CALC_CLIMAX_VALUE,
      POS_21: this.TIME_VALUE,
      POS_22: this.METODO_BSS_VALUE,
      POS_23: this.TABLE_BSS_VALUE,
      POS_24: this.RADIO_GRS_VALUE,
      POS_25: this.ENABLE_RECORD_VALUE,
      POS_26: this.RESTRICTION_TYPE_VALUE,
      POS_27: this.URI_VALUE,
      POS_28: this.TYPE_VALUE,
      POS_29: this.COLATERAL_URI_VALUE,
      POS_30: this.COLATERAL_VALUE,
    })


    gtw.radio.forEach((radio: any) => {

      const codec = radio.codec === 0 ? 'GT11-A' : ' - '
      const clave = !radio.clave_registro ? ' - ' : radio.clave_registro
      const ajusteAD = radio.ajuste_ad === null ? ' - ' : radio.ajuste_ad
      const ajusteDA = radio.ajuste_da === null ? ' - ' : radio.ajuste_da
      const precision_audio = radio.precision_audio === 0 ? this.STRICT_VALUE : this.NORMAL_VALUE 
      const tipo_agente_radio = (this.tipoAgenteArray[radio.tipo_agente])
      const indicacion_entrada_audio = [0, 1, 2, 3, 4, 6].includes(radio.tipo_agente) ? (this.indicacionArray[radio.indicacion_entrada_audio]) : ' - '
      const indicacion_salida_audio = [0, 1, 2, 3, 4, 5].includes(radio.tipo_agente) ? (this.indicacionSalidaAudio[radio.indicacion_salida_audio]) : ' - '
      const eventosPTT = [0, 1, 2, 3, 4, 5, 6].includes(radio.tipo_agente) ? (radio.evento_ptt_squelch === 0 ? this.NOT_VALUE : this.YES_VALUE) : ' - '
      const prioridadPtt = [0, 1, 2, 3, 6].includes(radio.tipo_agente) ? (this.prioridadPTT[radio.prioridad_ptt]) : ' - '
      const prioridadSesion = [0, 1, 2, 3, 6].includes(radio.tipo_agente) ? (this.prioridadSIP[radio.prioridad_sesion_sip]) : ' - '
      const BSSClimax = [2, 3, 6].includes(radio.tipo_agente) ? (radio.climax_bss === 0 ? this.NOT_VALUE : this.YES_VALUE) : ' - '
      const metodosBSS = [2, 3, 6].includes(radio.tipo_agente) ? (radio.climax_bss === 0 ? ' - ' : (this.metodoBSS[radio.metodo_bss])) : ' - '
      const metodosBSSPref = [4, 6].includes(radio.tipo_agente) ? (this.metodoBSSPreferido[radio.metodo_bss]) : ' - '
      const ventanaBSS = [2, 3, 6].includes(radio.tipo_agente) ? (radio.metodo_bss === 0 || radio.climax_bss === 0 ? ' - ' : radio.ventana_bss + ' ms') : ' - '
      const modoclimax = [2, 3, 6].includes(radio.tipo_agente) ? (radio.climax_bss === 0 ? ' - ' : (this.modoClimax[radio.tipo_climax])) : ' - '
      const calculoClimax = [2, 3, 6].includes(radio.tipo_agente) ? (radio.climax_bss === 0 || radio.tipo_climax === 0 ? ' - ' : (this.modoCalculoClimax[radio.metodo_climax])) : ' - '
      const tiempoClimax = [2, 3, 6].includes(radio.tipo_agente) ? (radio.climax_bss === 0 || radio.tipo_climax !== 3 ? ' - ' : radio.retardo_fijo_climax + ' ms') : ' - '
      const tablaCalificacion = [4, 6].includes(radio.tipo_agente) ? (this.tablaCalificacionAudio[radio.tabla_bss_id]) : ' - '
      const retrasoGRS = [4, 5, 6].includes(radio.tipo_agente) ? radio.retraso_interno_grs + ' ms' : ' - '
      const habilitaGrabacion = [4, 6].includes(radio.tipo_agente) ? (radio.habilita_grabacion === 0 ? this.NOT_VALUE : this.YES_VALUE) : ' - '
      const umbral_vad = radio.indicacion_entrada_audio === 1 ? radio.umbral_vad : ' - '

      body.push({
        POS_1: this.RAD_VALUE,
        POS_2: radio.nombre,
        POS_3: codec,
        POS_4: clave,
        POS_5: radio.frecuencia,
        POS_6: ajusteAD,
        POS_7: ajusteDA,
        POS_8: precision_audio,
        POS_9: tipo_agente_radio,
        POS_10: indicacion_entrada_audio,
        POS_11: indicacion_salida_audio,
        POS_12: umbral_vad,
        POS_13: eventosPTT,
        POS_14: prioridadPtt,
        POS_15: prioridadSesion,
        POS_16: BSSClimax,
        POS_17: metodosBSS,
        POS_18: ventanaBSS,
        POS_19: modoclimax,
        POS_20: calculoClimax,
        POS_21: tiempoClimax,
        POS_22: metodosBSSPref,
        POS_23: tablaCalificacion,
        POS_24: retrasoGRS,
        POS_25: habilitaGrabacion,
        POS_26: ' - ',
        POS_27: ' - ',
        POS_28: ' - ',
        POS_29: ' - ',
        POS_30: ' - '
      })

      if (radio.tipo_agente >= 4) {

        if (radio.restriccion_entrantes !== 0) {
          radio.uris.forEach((uri: any) => {
            body.push({
              POS_26: (this.tipoRestriccion[radio.restriccion_entrantes]),
              POS_27: uri.uri
            })
          })
        } else {
          body.push({ POS_26: this.tipoRestriccion[radio.restriccion_entrantes] })
        }

      } else {
        radio.uris.forEach((uri: any) => {
          body.push({
            POS_28: uri.tipo,
            POS_29: uri.uri,
            POS_30: uri.nivel_colateral
          })
        })
      }
    })

    if(gtw.radio.length === 0){
      body.push({
        POS_1: ' - ',
        POS_2: ' - ',
        POS_3: ' - ',
        POS_4: ' - ',
        POS_5: ' - ',
        POS_6: ' - ',
        POS_7: ' - ',
        POS_8: ' - ',
        POS_9: ' - ',
        POS_10: ' - ',
        POS_11: ' - ',
        POS_12: ' - ',
        POS_13: ' - ',
        POS_14: ' - ',
        POS_15: ' - ',
        POS_16: ' - ',
        POS_17: ' - ',
        POS_18: ' - ',
        POS_19: ' - ',
        POS_20: ' - ',
        POS_21: ' - ',
        POS_22: ' - ',
        POS_23: ' - ',
        POS_24: ' - ',
        POS_25: ' - ',
        POS_26: ' - ',
        POS_27: ' - ',
        POS_28: ' - ',
        POS_29: ' - ',
      })
    }

    this.emptyRow(body)

    body.push({
      POS_1: this.RESOURCE_TYPE_VALUE,
      POS_2: this.NAME_VALUE,
      POS_3: this.CODEC_VALUE,
      POS_4: this.KEY_VALUE,
      POS_5: this.SETT_AD_VALUE,
      POS_6: this.SETT_DA_VALUE,
      POS_7: this.TLF_TYPE_VALUE,
      POS_8: this.AVGNUSER_VALUE,
      POS_9: this.ED137_VALUE,
      POS_10: this.DETECT_VOX_VALUE,
      POS_11: this.UMBRAL_VOX_VALUE,
      POS_12: this.VOX_TAIL_VALUE,
      POS_13: this.CALL_DUR_PER_TIME_VALUE,
      POS_14: this.TIME_MAX_CALL_VALUE,
      POS_15: this.DET_INV_POL_VALUE,
      POS_16: this.DET_LINEA_AB_VALUE,
      POS_17: this.AUTOMATIC_RESP_VALUE,
      POS_18: this.PERIOD_SHADES_VALUE,
      POS_19: this.SIP_R2_RESP_VALUE,
      POS_20: this.TONOBLOQUEO_VALUE,
      POS_21: this.RMBLOQUEO_VALUE,
      POS_22: this.SIDE_VALUE,
      POS_23: this.ORIGEN_TEST_VALUE,
      POS_24: this.DESTINO_TEST_VALUE,
      POS_25: this.DURATION_SHADES_VALUE,
      POS_26: this.AUTOMATIC_CALL_VALUE,
      POS_27: this.REMOTE_URI_VALUE,
      POS_28: this.COLATERAL_SUPER_VALUE,
      POS_29: this.ANY_RESP_IS_VALID_VALUE,
      POS_30: this.ADD_REMOTE_URI_VALUE,
      POS_31: this.ADD_COLATERAL_SUPER_VALUE,
      POS_32: this.ADD_ANY_RESP_IS_VALID_VALUE,
      POS_33: this.SUPERVISION_TIME_VALUE,
      POS_34: this.ATS_TYPE_VALUE,
      POS_35: this.ATS_START_VALUE,
      POS_36: this.ATS_FINAL_VALUE,
    })
    gtw.tlf.forEach((tlf: any) => {

      const codec = tlf.codec === 0 ? 'GT11-A' : ' - '
      const clave = !tlf.clave_registro ? ' - ' : tlf.clave_registro
      const ajusteAD = tlf.ajuste_ad === null ? ' - ' : tlf.ajuste_ad
      const ajusteDA = tlf.ajuste_da === null ? ' - ' : tlf.ajuste_da
      const tipo_interfaz_telefonico = (this.interfaz_telefonico[tlf.tipo_interfaz_tel])
      const user = [0, 1, 2, 3, 5].includes(tlf.tipo_interfaz_tel) ? tlf.ats_user : ' - '
      const permite_llamadas = [0, 1, 2, 3, 4].includes(tlf.tipo_interfaz_tel) ? (tlf.iEnableNoED137 === 0 ? this.NOT_VALUE : this.YES_VALUE) : ' - '
      const deteccion_vox = [0].includes(tlf.tipo_interfaz_tel) ? (tlf.deteccion_vox === 0 ? this.NOT_VALUE : this.YES_VALUE) : ' - '
      const umbral_vox = [0].includes(tlf.tipo_interfaz_tel) ? (tlf.deteccion_vox === 0 ? ' - ' : tlf.umbral_vox + ' dB') : ' - '
      const cola_vox = [0].includes(tlf.tipo_interfaz_tel) ? (tlf.cola_vox === 0 ? ' - ' : tlf.cola_vox + ' sg') : ' - '
      const duracion_llamada = [0].includes(tlf.tipo_interfaz_tel) ? (tlf.iControlTmLlam === 0 ? this.NOT_VALUE : this.YES_VALUE) : ' - '
      const tiempo_maximo = [0].includes(tlf.tipo_interfaz_tel) ? (tlf.iControlTmLlam === 0 || !tlf.iTmMaxConversacion ? ' - ' : tlf.iTmMaxConversacion + ' sg') : ' - '
      const detect_inv = [2].includes(tlf.tipo_interfaz_tel) ? (tlf.det_inversion_pol === 0 ? this.NOT_VALUE : this.YES_VALUE) : ' - '
      const detect_fallo = [2].includes(tlf.tipo_interfaz_tel) ? (tlf.iDetLineaAB === 0 ? this.NOT_VALUE : this.YES_VALUE) : ' - '
      const respuesta_automatica = [3, 4, 5].includes(tlf.tipo_interfaz_tel) ? (tlf.respuesta_automatica === 0 ? this.NOT_VALUE : this.YES_VALUE) : ' - '
      const periodo_tono = [3, 4, 5].includes(tlf.tipo_interfaz_tel) ? (tlf.respuesta_automatica === 0 ? ' - ' : tlf.periodo_tonos) : ' - '
      const conv_SIP_R2 = [3].includes(tlf.tipo_interfaz_tel) ? (tlf.respuesta_automatica === 0 ? (this.respuestaSIP[tlf.RespuestaSIP_ATSR2]) : ' - ') : ' - '
      const duracion_tono = [3].includes(tlf.tipo_interfaz_tel) ? (tlf.respuesta_automatica === 0 && tlf.RespuestaSIP_ATSR2 === 1 ? tlf.TmTonoBloqueo : ' - ') : ' - '
      const tiempo_bloqueo = [3].includes(tlf.tipo_interfaz_tel) ? (tlf.respuesta_automatica === 0 && tlf.RespuestaSIP_ATSR2 === 1 ? tlf.TmBloqueoLib : ' - ') : ' - '
      const lado = [3, 4].includes(tlf.tipo_interfaz_tel) ? (this.ladoOptions[tlf.lado]) : ''
      const llamada_automatica = [1].includes(tlf.tipo_interfaz_tel) ? (tlf.llamada_automatica === 0 ? this.NOT_VALUE : this.YES_VALUE) : ' - '
      const origen = [3, 4].includes(tlf.tipo_interfaz_tel) ? (tlf.origen_test === '' ? ' - ' : tlf.origen_test) : ' - '
      const destino = [3, 4].includes(tlf.tipo_interfaz_tel) ? (tlf.destino_test === '' ? ' - ' : tlf.destino_test) : ' - '
      const duracion_tono_interrup = [3, 4].includes(tlf.tipo_interfaz_tel) ? tlf.duracion_tono_interrup : ' - '
      const uri_remota = [0, 1, 2, 3, 4, 5, 6, 7].includes(tlf.tipo_interfaz_tel) ? (tlf.uri_telefonica === "" ? ' - ' : tlf.uri_telefonica) : ' - '
      const supervisa_colateral = [0, 1, 2, 3, 4, 5, 6, 7].includes(tlf.tipo_interfaz_tel) ? (this.supervisaColateralOptions[tlf.supervisa_colateral]) : ' - '
      const cualquier_respuesta = [0, 1, 2, 3, 4, 5, 6, 7].includes(tlf.tipo_interfaz_tel) ? (tlf.itiporespuesta === 0 ? this.NOT_VALUE : this.YES_VALUE) : ' - '
      const uri_remota_add = [0, 1, 2, 3, 4, 5, 6].includes(tlf.tipo_interfaz_tel) ? (tlf.additional_uri_remota === "" ? ' - ' : tlf.additional_uri_remota) : ' - '
      const supervisa_colateral_add = [0, 1, 2, 3, 4, 5, 6].includes(tlf.tipo_interfaz_tel) ? (this.supervisaColateralOptions[tlf.additional_superv_options]) : ' - '
      const cualquier_respuesta_add = [0, 1, 2, 3, 4, 5, 6].includes(tlf.tipo_interfaz_tel) ? (tlf.additional_itiporespuesta === 0 ? this.NOT_VALUE : this.YES_VALUE) : ' - '
      const tiempo_supervision = [0, 1, 2, 3, 4, 5, 6, 7].includes(tlf.tipo_interfaz_tel) ? (tlf.supervisa_colateral !== 0 || tlf.additional_superv_options !== 0 ? tlf.tiempo_supervision : ' - ') : ' - '

      body.push({
        POS_1: this.TLF_VALUE,
        POS_2: tlf.nombre,
        POS_3: codec,
        POS_4: clave,
        POS_5: ajusteAD,
        POS_6: ajusteDA,
        POS_7: tipo_interfaz_telefonico,
        POS_8: user,
        POS_9: permite_llamadas,
        POS_10: deteccion_vox,
        POS_11: umbral_vox,
        POS_12: cola_vox,
        POS_13: duracion_llamada,
        POS_14: tiempo_maximo,
        POS_15: detect_inv,
        POS_16: detect_fallo,
        POS_17: respuesta_automatica,
        POS_18: periodo_tono,
        POS_19: conv_SIP_R2,
        POS_20: duracion_tono,
        POS_21: tiempo_bloqueo,
        POS_22: lado,
        POS_23: origen,
        POS_24: destino,
        POS_25: duracion_tono_interrup,
        POS_26: llamada_automatica,
        POS_27: uri_remota,
        POS_28: supervisa_colateral,
        POS_29: cualquier_respuesta,
        POS_30: uri_remota_add,
        POS_31: supervisa_colateral_add,
        POS_32: cualquier_respuesta_add,
        POS_33: tiempo_supervision,
        POS_34: ' - ',
        POS_35: ' - ',
        POS_36: ' - ',
      })


      tlf.ats.forEach((ats: any) => {
        const tipo = ats.tipo === 0 ? this.START_VALUE : this.END_VALUE
        if (ats.rango_ats_inicial !== "" && ats.rango_ats_final !== "") {
          body.push({
            POS_34: tipo,
            POS_35: ats.rango_ats_inicial,
            POS_36: ats.rango_ats_final
          })

        }
      })

      if (tlf.ats.length === 0) {
        body.push({
          POS_34: ' - ',
          POS_35: ' - ',
          POS_36: ' - ',
        })
      }
    })

    if (gtw.tlf.length === 0) {
      body.push({
        POS_1: ' - ',
        POS_2: ' - ',
        POS_3: ' - ',
        POS_4: ' - ',
        POS_5: ' - ',
        POS_6: ' - ',
        POS_7: ' - ',
        POS_8: ' - ',
        POS_9: ' - ',
        POS_10: ' - ',
        POS_11: ' - ',
        POS_12: ' - ',
        POS_13: ' - ',
        POS_14: ' - ',
        POS_15: ' - ',
        POS_16: ' - ',
        POS_17: ' - ',
        POS_18: ' - ',
        POS_19: ' - ',
        POS_20: ' - ',
        POS_21: ' - ',
        POS_22: ' - ',
        POS_23: ' - ',
        POS_24: ' - ',
        POS_25: ' - ',
        POS_26: ' - ',
        POS_27: ' - ',
        POS_28: ' - ',
        POS_29: ' - ',
        POS_30: ' - ',
        POS_31: ' - ',
        POS_32: ' - ',
        POS_33: ' - ',
        POS_34: ' - ',
        POS_35: ' - ',
        POS_36: ' - ',
      })
    }

    return body

  }

  getConfInfo(conf: any) {

    let body = []

    body.push({
      pos_1: conf.nombre,
      pos_2: conf.descripcion,
      pos_3: conf.activa === 0 ? this.NOT_VALUE : this.YES_VALUE,
      pos_4: conf.fecha_activacion
    })

    body.push({
      pos_1: '',
      pos_2: '',
      pos_3: '',
      pos_4: ''
    })

    body.push({
      pos_1: this.LOCATION_VALUE,
      pos_2: this.GATEWAY_VALUE
    })

    conf.emplz.forEach((emplz: any) => {
      body.push({ pos_1: emplz.nombre, pos_2: emplz.n_gtw })
    })

    return body
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
    this.res_header = data.res_header;
    this.refreserArray = data.refreserArray;
    this.LOCATION_VALUE = data.data_excel['LOCATION']
    this.GATEWAY_VALUE = data.data_excel['GATEWAY']
    this.IP_VIRTUAL_VALUE = data.data_excel['IP_VIRTUAL']
    this.LAST_LOAD_VALUE = data.data_excel['LAST_LOAD']
    this.GATEWAY_SUPERVISION_VALUE = data.data_excel['GATEWAY_SUPERVISION']
    this.ACTIVATION_DELAY_VALUE = data.data_excel['ACTIVATION_DELAY']
    this.IP_CPU0_VALUE = data.data_excel['IP_CPU0']
    this.MASK_VALUE = data.data_excel['MASK']
    this.IP_CPU1_VALUE = data.data_excel['IP_CPU1']
    this.PORT_VALUE = data.data_excel['PORT']
    this.TLF_SUPERVISION_VALUE = data.data_excel['TLF_SUPERVISION']
    this.SUPERVISION_PERIOD_VALUE = data.data_excel['SUPERVISION_PERIOD']
    this.REFRESHER_VALUE = data.data_excel['REFRESHER']
    this.NTP_1_VALUE = data.data_excel['NTP_1']
    this.NTP_2_VALUE = data.data_excel['NTP_2']
    this.SNMPV2_VALUE = data.data_excel['SNMPV2']
    this.SERVICE_PORT_VALUE = data.data_excel['SERVICE_PORT']
    this.SNMP_PORT_VALUE = data.data_excel['SNMP_PORT']
    this.SNMP_NAME_VALUE = data.data_excel['SNMP_NAME']
    this.SNMP_COMMUNITY_VALUE = data.data_excel['SNMP_COMMUNITY']
    this.SNMP_LOCATION_VALUE = data.data_excel['SNMP_LOCATION']
    this.SNMP_CONTACT_VALUE = data.data_excel['SNMP_CONTACT']
    this.SESSION_TIME_VALUE = data.data_excel['SESSION_TIME']
    this.RSTP_PORT_VALUE = data.data_excel['RSTP_PORT']
    this.RSTPA_VALUE = data.data_excel['RSTPA']
    this.RSTPB_VALUE = data.data_excel['RSTPB']
    this.TRAPS_VALUE = data.data_excel['TRAPS']
    this.RESOURCE_TYPE_VALUE = data.data_excel['RESOURCE_TYPE']
    this.NAME_VALUE = data.data_excel['NAME']
    this.CODEC_VALUE = data.data_excel['CODEC']
    this.KEY_VALUE = data.data_excel['KEY']
    this.FREC_VALUE = data.data_excel['FREC']
    this.SETT_AD_VALUE = data.data_excel['SETT_AD']
    this.SETT_DA_VALUE = data.data_excel['SETT_DA']
    this.PREC_AUDIO_VALUE = data.data_excel['PREC_AUDIO']
    this.RAD_TYPE_VALUE = data.data_excel['RAD_TYPE']
    this.AUDIO_INPUT_VALUE = data.data_excel['AUDIO_INPUT']
    this.AUDIO_OUTPUT_VALUE = data.data_excel['AUDIO_OUTPUT']
    this.UMBRAL_VAD_VALUE = data.data_excel['UMBRAL_VAD']
    this.PTT_EVENT_VALUE = data.data_excel['PTT_EVENT']
    this.PTT_PRIORITY_VALUE = data.data_excel['PTT_PRIORITY']
    this.SIP_PRIORITY_VALUE = data.data_excel['SIP_PRIORITY']
    this.BSS_CLIMAX_VALUE = data.data_excel['BSS_CLIMAX']
    this.BSS_AVAILABLE_VALUE = data.data_excel['BSS_AVAILABLE']
    this.BASS_WINDOWS_VALUE = data.data_excel['BASS_WINDOWS']
    this.CLIMAX_MODE_VALUE = data.data_excel['CLIMAX_MODE']
    this.MODE_CALC_CLIMAX_VALUE = data.data_excel['MODE_CALC_CLIMAX']
    this.TIME_VALUE = data.data_excel['TIME']
    this.METODO_BSS_VALUE = data.data_excel['METODO_BSS']
    this.TABLE_BSS_VALUE = data.data_excel['TABLE_BSS']
    this.RADIO_GRS_VALUE = data.data_excel['RADIO_GRS']
    this.ENABLE_RECORD_VALUE = data.data_excel['ENABLE_RECORD']
    this.RESTRICTION_TYPE_VALUE = data.data_excel['RESTRICTION_TYPE']
    this.URI_VALUE = data.data_excel['URI']
    this.TYPE_VALUE = data.data_excel['TYPE']
    this.COLATERAL_URI_VALUE = data.data_excel['COLATERAL_URI']
    this.COLATERAL_VALUE = data.data_excel['COLATERAL']
    this.TLF_TYPE_VALUE = data.data_excel['TLF_TYPE']
    this.AVGNUSER_VALUE = data.data_excel['AVGNUSER']
    this.ED137_VALUE = data.data_excel['ED137']
    this.DETECT_VOX_VALUE = data.data_excel['DETECT_VOX']
    this.UMBRAL_VOX_VALUE = data.data_excel['UMBRAL_VOX']
    this.VOX_TAIL_VALUE = data.data_excel['VOX_TAIL']
    this.CALL_DUR_PER_TIME_VALUE = data.data_excel['CALL_DUR_PER_TIME']
    this.TIME_MAX_CALL_VALUE = data.data_excel['TIME_MAX_CALL']
    this.DET_INV_POL_VALUE = data.data_excel['DET_INV_POL']
    this.DET_LINEA_AB_VALUE = data.data_excel['DET_LINEA_AB']
    this.AUTOMATIC_RESP_VALUE = data.data_excel['AUTOMATIC_RESP']
    this.PERIOD_SHADES_VALUE = data.data_excel['PERIOD_SHADES']
    this.SIP_R2_RESP_VALUE = data.data_excel['SIP_R2_RESP']
    this.TONOBLOQUEO_VALUE = data.data_excel['TONOBLOQUEO']
    this.RMBLOQUEO_VALUE = data.data_excel['RMBLOQUEO']
    this.SIDE_VALUE = data.data_excel['SIDE']
    this.ORIGEN_TEST_VALUE = data.data_excel['ORIGEN_TEST']
    this.DESTINO_TEST_VALUE = data.data_excel['DESTINO_TEST']
    this.DURATION_SHADES_VALUE = data.data_excel['DURATION_SHADES']
    this.AUTOMATIC_CALL_VALUE = data.data_excel['AUTOMATIC_CALL']
    this.REMOTE_URI_VALUE = data.data_excel['REMOTE_URI']
    this.COLATERAL_SUPER_VALUE = data.data_excel['COLATERAL_SUPER']
    this.ANY_RESP_IS_VALID_VALUE = data.data_excel['ANY_RESP_IS_VALID']
    this.ADD_REMOTE_URI_VALUE = data.data_excel['ADD_REMOTE_URI']
    this.ADD_COLATERAL_SUPER_VALUE = data.data_excel['ADD_COLATERAL_SUPER']
    this.ADD_ANY_RESP_IS_VALID_VALUE = data.data_excel['ADD_ANY_RESP_IS_VALID']
    this.SUPERVISION_TIME_VALUE = data.data_excel['SUPERVISION_TIME']
    this.ATS_TYPE_VALUE = data.data_excel['ATS_TYPE']
    this.ATS_START_VALUE = data.data_excel['ATS_START']
    this.ATS_FINAL_VALUE = data.data_excel['ATS_FINAL']
    this.CONFIGURATION_VALUE = data.data_excel['CONFIGURATION']
    this.NOT_VALUE = data.data_excel['NOT']
    this.YES_VALUE = data.data_excel['YES']
    this.SECONDS_VALUE = data.data_excel['SECONDS']
    this.NORMAL_VALUE = data.data_excel['NORMAL']
    this.STRICT_VALUE = data.data_excel['STRICT']
    this.RAD_VALUE = data.data_excel['RAD']
    this.TLF_VALUE = data.data_excel['TLF']
    this.START_VALUE = data.data_excel['START']
    this.END_VALUE = data.data_excel['END']
    this.REPORT_VALUE = data.data_excel['REPORT']
    this.RESOURCE_VALUE = data.data_excel['RESOURCE']
    this.LISTAS_BN_VALUE = data.data_excel['LISTAS_BN'];
    this.RESOURCE_VALUE = data.data_excel['RESOURCE'];
    this.ID_CONF_VALUE = data.data_excel['ID_CONF'];
    this.LAST_MODIF_VALUE = data.data_excel['LAST_MODIF'];
    this.SUPERVISED_VALUE = data.data_excel['SUPERVISED'];
    this.DESCRIPTION_VALUE = data.data_excel['DESCRIPTION'];
    this.TRAP_VERSION_VALUE = data.data_excel['TRAP_VERSION'];
    this.TRAP_IP_ADRESS_VALUE = data.data_excel['TRAP_IP_ADRESS'];
    this.TRAP_PORT_VALUE = data.data_excel['TRAP_PORT'];
    this.RIGTHS_VALUE = data.data_excel['RIGTHS'];
    this.CONFIG_REPORT_VALUE = data.data_excel['CONFIG_REPORT']
  }

  emptyRow(body: any) {

    body.push({
      POS_1: '',
      POS_2: '',
      POS_3: '',
      POS_4: '',
      POS_5: '',
      POS_6: '',
      POS_7: '',
      POS_8: '',
      POS_9: '',
      POS_10: '',
      POS_11: '',
      POS_12: '',
      POS_13: '',
      POS_14: '',
      POS_15: '',
      POS_16: '',
      POS_17: '',
      POS_18: '',
      POS_19: '',
      POS_20: '',
      POS_21: '',
      POS_22: '',
      POS_23: '',
      POS_24: '',
      POS_25: '',
      POS_26: '',
      POS_27: '',
      POS_28: '',
      POS_29: '',
      POS_30: '',
      POS_31: '',
      POS_32: '',
      POS_33: '',
      POS_34: '',
      POS_35: '',
      POS_36: ''
    })

  }

  emptyArray(number: number) {
    let emptyArray = []
    for (let index = 0; index < number; index++) {
      emptyArray.push("")
    }

    return emptyArray
  }
}
