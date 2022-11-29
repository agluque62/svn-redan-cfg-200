var gcfg = require('../configUlises.json');
var ug5kdb = require('./ug5kdb.js');
var logging = require('./nu-log.js');

//
async function CfgReport(cfgid, cb) {

    var res = {};

    let confQuery = 'SELECT c.idconfiguracion, c.nombre, c.descripcion, c.activa, c.fecha_activacion ' +
        'FROM configuraciones c ' +
        'WHERE idconfiguracion =  \'' + cfgid + '\' ;';

    let conf = await ug5kdb.QuerySync(confQuery, null)
    res.conf = conf.data;

    let confEmplz = 'SELECT e.idemplazamiento, e.nombre, COUNT(p.idpasarela) as n_gtw ' +
        'FROM emplazamientos e ' +
        'INNER JOIN configuraciones c ON c.idconfiguracion = e.configuracion_id ' +
        'INNER JOIN pasarelas p ON p.emplazamiento_id = e.idemplazamiento ' +
        'WHERE e.configuracion_id = \'' + cfgid + '\' ' +
        ' GROUP BY e.idemplazamiento;';

    let emplz = await ug5kdb.QuerySync(confEmplz, null)
    res.conf.emplz = emplz.data;
    for (i = 0; i < emplz.data.length; i++) {

        let gtwQuery = 'SELECT p.idpasarela, p.nombre, p.ip_virtual, p.ultima_actualizacion, p.sppe as supervision_puerta, ' +
            'p.dvrrp as retardo, p.ip_cpu0, p.ip_gtw0, p.mask_cpu0, p.ip_cpu1, p.ip_gtw1, p.mask_cpu1, ' +
            'p.puerto_sip, p.supervisionTlf, p.periodo_supervision, p.refresher, p.puerto_servicio_snmp, p.puerto_snmp, p.snmpv2, ' +
            'p.nombre_snmp, p.comunidad_snmp, p.localizacion_snmp, p.contacto_snmp, p.puerto_servicio_web, p.tiempo_sesion, ' +
            'p.puerto_rtsp, p.servidor_rtsp, p.servidor_rtspb ' +
            'FROM pasarelas p ' +
            'WHERE p.emplazamiento_id = \'' + emplz.data[i].idemplazamiento + '\' '
        'GROUP BY idpasarela;';
        let gtw = await ug5kdb.QuerySync(gtwQuery, null)
        res.conf.emplz[i].gtws = gtw.data

        for (j = 0; j < gtw.data.length; j++) {

            let NTPQuery = 'SELECT li.ip ' +
                'FROM lista_ips li ' +
                'WHERE li.tipo = \'NTP\' ' +
                'AND li.pasarela_id = \'' + gtw.data[j].idpasarela + '\' ;';
            let NTP = await ug5kdb.QuerySync(NTPQuery, null)
            res.conf.emplz[i].gtws[j].ntp = NTP.data;

            let TRAPSQuery = 'SELECT li.ip ' +
                'FROM lista_ips li ' +
                'WHERE li.tipo LIKE \'TRPV%\' ' +
                'AND li.pasarela_id = \'' + gtw.data[j].idpasarela + '\' ;';
            let TRAPS = await ug5kdb.QuerySync(TRAPSQuery, null)
            res.conf.emplz[i].gtws[j].traps = TRAPS.data

            let rdRsQuery = 'SELECT r.nombre, r.idrecurso_radio, r.codec, r.frecuencia, r.ajuste_ad, r.ajuste_da, r.precision_audio, r.tipo_agente, r.indicacion_entrada_audio, ' +
                'r.indicacion_salida_audio, r.evento_ptt_squelch, r.prioridad_ptt, r.prioridad_sesion_sip, r.climax_bss, r.metodo_bss, r.ventana_bss,  ' +
                'r.tipo_climax, r.metodo_climax, r.retardo_fijo_climax, r.prioridad_sesion_sip, r.tabla_bss_id, r.retraso_interno_grs, r.habilita_grabacion, r.umbral_vad, ' +
                'r.restriccion_entrantes ' +
                'FROM recursos_radio r ' +
                'WHERE r.pasarela_id = \'' + gtw.data[j].idpasarela + '\' ;';
            let radioRs = await ug5kdb.QuerySync(rdRsQuery, null)
            res.conf.emplz[i].gtws[j].radio = radioRs.data

            for (z = 0; z < radioRs.data.length; z++) {

                let urisQuery = 'SELECT lu.uri, lu.tipo, lu.nivel_colateral ' +
                    'FROM lista_uris lu ' +
                    'WHERE lu.recurso_radio_id = \'' + radioRs.data[z].idrecurso_radio + '\' ;';
                let uri = await ug5kdb.QuerySync(urisQuery, null)
                res.conf.emplz[i].gtws[j].radio[z].uris = uri.data

            }

            let tlRsQuery = 'SELECT t.nombre, t.idrecurso_telefono, t.codec, t.clave_registro, t.ajuste_ad, t.ajuste_da, t.precision_audio, t.tipo_interfaz_tel, ' +
                't.ats_user, t.iEnableNoED137, t.deteccion_vox, t.umbral_vox, t.cola_vox, t.iControlTmLlam,  t.iTmMaxConversacion, t.det_inversion_pol, ' +
                't.iDetLineaAB, t.respuesta_automatica, t.periodo_tonos, t.RespuestaSIP_ATSR2, t.TmTonoBloqueo, t.TmBloqueoLib, t.lado, ' +
                't.origen_test, t.destino_test, t.duracion_tono_interrup, t.llamada_automatica, t.uri_telefonica, t.supervisa_colateral, t.itiporespuesta, ' +
                't.additional_uri_remota, t.additional_superv_options, t.additional_itiporespuesta, t.tiempo_supervision ' +
                'FROM recursos_telefono t ' +
                'WHERE t.pasarela_id = \'' + gtw.data[j].idpasarela + '\' ;';
            let tlfRs = await ug5kdb.QuerySync(tlRsQuery, null)
            res.conf.emplz[i].gtws[j].tlf = tlfRs.data
            for (z = 0; z < tlfRs.data.length; z++) {
                let atsQuery = 'SELECT ra.tipo, ra.rango_ats_inicial, ra.rango_ats_final ' +
                    'FROM rangos_ats ra ' +
                    'WHERE ra.recurso_telefonico_id = \'' + tlfRs.data[z].idrecurso_telefono + '\' ;'
                let ats = await ug5kdb.QuerySync(atsQuery, null)
                res.conf.emplz[i].gtws[j].tlf[z].ats = ats.data
            }
        }

    }
    res.conf[0].emplz = res.conf.emplz
    cb(res.conf[0]);
}

//
function PrepareCfgReport(gws) {
    var res = {};
    res.result = [];
    for (igw = 0; igw < gws.length; igw++) {
        var gw = gws[igw];
        for (ir = 0; ir < gw.radios.length; ir++) {
            var rd = gw.radios[ir];
            res.result.push(
                {
                    cfg_name: gw.cfg,
                    cgw_name: gw.gw,
                    slave: rd.columna,
                    posicion: rd.fila,
                    resource_name: rd.nombre,
                    resource_tipo: 1,
                    destination_name: rd.frecuencia,
                    tipo_rad: rd.tipo_agente.toString(),
                    colaterales: ""
                });
        }

        for (it = 0; it < gw.telef.length; it++) {
            var tl = gw.telef[it];
            res.result.push(
                {
                    cfg_name: gw.cfg,
                    cgw_name: gw.gw,
                    slave: rd.columna,
                    posicion: tl.fila,
                    resource_name: tl.nombre,
                    resource_tipo: 2,
                    destination_name: "",
                    tipo_tel: tl.tipo_interfaz_tel.toString(),
                    uri_remota: tl.uri_telefonica
                });
        }
    }
    return res;
}

exports.CfgReport = CfgReport;