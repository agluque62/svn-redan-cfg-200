var dbutils = require('../../srv/lib/dbasync');

exports.CfgReport = async (cfgid) => {
    var res = {};
    var db = dbutils.makeDbAsync();
    await dbutils.dbTransaction(db, async () =>{
        let confQuery = 'SELECT c.idconfiguracion, c.nombre, c.descripcion, c.activa, c.fecha_activacion ' +
            'FROM configuraciones c ' +
            'WHERE idconfiguracion =  \'' + cfgid + '\' ;';
        conf = await db.query(confQuery);
        res.conf = conf;

        let confEmplz = 'SELECT e.idemplazamiento, e.nombre, COUNT(p.idpasarela) as n_gtw ' +
            'FROM emplazamientos e ' +
            'INNER JOIN configuraciones c ON c.idconfiguracion = e.configuracion_id ' +
            'INNER JOIN pasarelas p ON p.emplazamiento_id = e.idemplazamiento ' +
            'WHERE e.configuracion_id = \'' + cfgid + '\' ' +
            ' GROUP BY e.idemplazamiento;';
        let emplz = await db.query(confEmplz)
        res.conf.emplz = emplz;

        for (i = 0; i < emplz.length; i++) {
            let gtwQuery = 'SELECT p.idpasarela, p.nombre, p.ip_virtual, p.ultima_actualizacion, p.sppe as supervision_puerta, ' +
                'p.dvrrp as retardo, p.ip_cpu0, p.ip_gtw0, p.mask_cpu0, p.ip_cpu1, p.ip_gtw1, p.mask_cpu1, ' +
                'p.puerto_sip, p.supervisionTlf, p.periodo_supervision, p.refresher, p.puerto_servicio_snmp, p.puerto_snmp, p.snmpv2, ' +
                'p.nombre_snmp, p.comunidad_snmp, p.localizacion_snmp, p.contacto_snmp, p.puerto_servicio_web, p.tiempo_sesion, ' +
                'p.puerto_rtsp, p.servidor_rtsp, p.servidor_rtspb ' +
                'FROM pasarelas p ' +
                'WHERE p.emplazamiento_id = \'' + emplz[i].idemplazamiento + '\' '
            'GROUP BY idpasarela;';
            let gtw = await db.query(gtwQuery);
            res.conf.emplz[i].gtws = gtw;

            for (j = 0; j < gtw.length; j++) {
                let NTPQuery = 'SELECT li.ip ' +
                    'FROM lista_ips li ' +
                    'WHERE li.tipo = \'NTP\' ' +
                    'AND li.pasarela_id = \'' + gtw[j].idpasarela + '\' ;';
                let NTP = await db.query(NTPQuery);
                res.conf.emplz[i].gtws[j].ntp = NTP;

                let TRAPSQuery = 'SELECT li.ip ' +
                    'FROM lista_ips li ' +
                    'WHERE li.tipo LIKE \'TRPV%\' ' +
                    'AND li.pasarela_id = \'' + gtw[j].idpasarela + '\' ;';
                let TRAPS = await db.query(TRAPSQuery);
                res.conf.emplz[i].gtws[j].traps = TRAPS;

                let rdRsQuery = 'SELECT r.nombre, r.idrecurso_radio, r.codec, r.frecuencia, r.ajuste_ad, r.ajuste_da, r.precision_audio, r.tipo_agente, r.indicacion_entrada_audio, ' +
                    'r.indicacion_salida_audio, r.evento_ptt_squelch, r.prioridad_ptt, r.prioridad_sesion_sip, r.climax_bss, r.metodo_bss, r.ventana_bss,  ' +
                    'r.tipo_climax, r.metodo_climax, r.retardo_fijo_climax, r.prioridad_sesion_sip, r.tabla_bss_id, r.retraso_interno_grs, r.habilita_grabacion, r.umbral_vad, ' +
                    'r.restriccion_entrantes ' +
                    'FROM recursos_radio r ' +
                    'WHERE r.pasarela_id = \'' + gtw[j].idpasarela + '\' ;';
                let radioRs = await db.query(rdRsQuery);
                res.conf.emplz[i].gtws[j].radio = radioRs;

                for (z = 0; z < radioRs.length; z++) {
                    let urisQuery = 'SELECT lu.uri, lu.tipo, lu.nivel_colateral ' +
                        'FROM lista_uris lu ' +
                        'WHERE lu.recurso_radio_id = \'' + radioRs[z].idrecurso_radio + '\' ;';
                    let uri = await db.query(urisQuery, null)
                    res.conf.emplz[i].gtws[j].radio[z].uris = uri;
                }

                let tlRsQuery = 'SELECT t.nombre, t.idrecurso_telefono, t.codec, t.clave_registro, t.ajuste_ad, t.ajuste_da, t.precision_audio, t.tipo_interfaz_tel, ' +
                    't.ats_user, t.iEnableNoED137, t.deteccion_vox, t.umbral_vox, t.cola_vox, t.iControlTmLlam,  t.iTmMaxConversacion, t.det_inversion_pol, ' +
                    't.iDetLineaAB, t.respuesta_automatica, t.periodo_tonos, t.RespuestaSIP_ATSR2, t.TmTonoBloqueo, t.TmBloqueoLib, t.lado, ' +
                    't.origen_test, t.destino_test, t.duracion_tono_interrup, t.llamada_automatica, t.uri_telefonica, t.supervisa_colateral, t.itiporespuesta, ' +
                    't.additional_uri_remota, t.additional_superv_options, t.additional_itiporespuesta, t.tiempo_supervision ' +
                    'FROM recursos_telefono t ' +
                    'WHERE t.pasarela_id = \'' + gtw[j].idpasarela + '\' ;';
                let tlfRs = await db.query(tlRsQuery);
                res.conf.emplz[i].gtws[j].tlf = tlfRs;

                for (z = 0; z < tlfRs.length; z++) {
                    let atsQuery = 'SELECT ra.tipo, ra.rango_ats_inicial, ra.rango_ats_final ' +
                        'FROM rangos_ats ra ' +
                        'WHERE ra.recurso_telefonico_id = \'' + tlfRs[z].idrecurso_telefono + '\' ;'
                    let ats = await db.query(atsQuery, null);
                    res.conf.emplz[i].gtws[j].tlf[z].ats = ats;
                }
            }
        }
    res.conf[0].emplz = res.conf.emplz
    });

    return res.conf[0];
}
