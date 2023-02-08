var dbutils = require("../dbasync.js");

exports.updateTfnoRes4Gateway = async function updateTfnoRes4Gateway(tr, resId, callback) { 

    var dba = dbutils.makeDbAsync();
    try {
        await dbutils.dbTransaction(dba, async () => {
                var selQuery = 
                    'SELECT c.activa, c.idconfiguracion FROM pasarelas p ' +
                    'LEFT JOIN emplazamientos e ON p.emplazamiento_id=e.idemplazamiento ' +
                    'LEFT JOIN configuraciones c ON e.configuracion_id=c.idconfiguracion ' +
                    'WHERE p.idpasarela=?';       
                var rows = await dba.query(selQuery, [tr.pasarela_id]);
                var activa = rows[0].activa;
                var configId = rows[0].idconfiguracion;

            /** 20200710. NUevos Parámetros para lineas telefonicas */
                var iDetLineaAB = tr.iDetLineaAB ? tr.iDetLineaAB : 0;
                var iEnableNoED137 = tr.iEnableNoED137 ? tr.iEnableNoED137 : 0;
                var itiporespuesta = tr.itiporespuesta ? tr.itiporespuesta : 0;
                var additional_uri_remota = tr.additional_uri_remota ? tr.additional_uri_remota : "";
                var additional_superv_options = tr.additional_superv_options ? tr.additional_superv_options : 0;
                var additional_itiporespuesta = tr.additional_itiporespuesta ? tr.additional_itiporespuesta : 0;
                var queryUpdate = 
                    'UPDATE recursos_telefono SET nombre=?,clave_registro=?,ajuste_ad=?,ajuste_da=?,precision_audio=?,' +
                    'tipo_interfaz_tel=?,uri_telefonica=?,deteccion_vox=?,umbral_vox=?,cola_vox=?,respuesta_automatica=?,' +
                    'periodo_tonos=?,lado=?,origen_test=?,destino_test=?,supervisa_colateral=?,tiempo_supervision=?,' +
                    'duracion_tono_interrup=?, ' +
                    'ats_user=?, ' + 'det_inversion_pol=?, ' +
                    /** 20200710. NUevos Parámetros para lineas telefonicas */
                    'iDetLineaAB=?, iEnableNoED137=?, itiporespuesta=?, ' +
                    'additional_uri_remota=?, additional_superv_options=?, additional_itiporespuesta=?,' +
                    /** 202210. Nuevos recursos */
                    'llamada_automatica=?, iTmMaxConversacion=?, iControlTmLlam=?, RespuestaSIP_ATSR2=?,  TmTonoBloqueo=?, TmBloqueoLib=? ' +
                    'WHERE idrecurso_telefono=?';
                var queryUpdatePar = [
                    tr.nombre, tr.clave_registro, tr.ajuste_ad, tr.ajuste_da, tr.precision_audio, tr.tipo_interfaz_tel, tr.uri_telefonica,
                    tr.deteccion_vox, tr.umbral_vox, tr.cola_vox, tr.respuesta_automatica, tr.periodo_tonos, tr.lado,
                    tr.origen_test, tr.destino_test, tr.supervisa_colateral, tr.tiempo_supervision, tr.duracion_tono_interrup,
                    tr.ats_user, tr.DetInversionPol,
                    /** 20200710. NUevos Parámetros para lineas telefonicas */
                    iDetLineaAB, iEnableNoED137, itiporespuesta,
                    additional_uri_remota, additional_superv_options, additional_itiporespuesta,
                    /** 202210. Nuevos recursos */
                    tr.llamada_automatica, tr.iTmMaxConversacion, tr.iControlTmLlam, tr.RespuestaSIP_ATSR2, tr.TmTonoBloqueo, tr.TmBloqueoLib, 
                    resId];

                await dba.query(queryUpdate, queryUpdatePar);
                
                await dba.query('UPDATE pasarelas p SET p.pendiente_actualizar=1 WHERE p.idpasarela=?', [tr.pasarela_id]);

                /** Actualiza los rangos. Borra todos e Inserta los notificados */
                await dba.query('DELETE FROM rangos_ats WHERE recurso_telefonico_id=?', [resId]);

                if (tr.ranks && tr.ranks.length > 0) {                
                    if (tr.tipo_interfaz_tel != '6') {
                        /** Testea 8 máximo, 4 de cada... tipo */
                        var tipo0Count=0;
                        var tipo1Count=0;
                        for (const item of  tr.ranks) {
                            if ( (item.tipo == 0 && tipo0Count < 4) || (item.tipo == 1 && tipo1Count < 4) ){
                                tipo0Count += (item.tipo==0 ? 1 : 0);
                                tipo1Count += (item.tipo==1 ? 1 : 0);

                                await dba.query('INSERT INTO rangos_ats (recurso_telefonico_id, rango_ats_inicial,rango_ats_final, tipo) VALUES (?,?,?,?)', 
                                [resId, item.inicial, item.final, item.tipo]);
                            }
                            else {
                                console.error("Intento de insertar un número inválido de rangos ATS", tipo0Count, tipo1Count, item);
                            }
                        }
                    }    
                }
                await dba.query('UPDATE configuraciones SET fecha_activacion=UTC_TIMESTAMP() WHERE idconfiguracion=?', [configId]);            
                callback({ result: 'OK', error: null,  activa: activa });
        });
    }
    catch(err)
    {
        callback({error: err});
    }
}