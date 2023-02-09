var test = require("./UpdateRec.js");
var logutils = require("../srv/lib/logger.js")
var dbutils = require("../srv/lib/dbasync.js");

const logger = logutils.createLogger();

var dataIn = {
	"nombre": "BL_TEST_7497",
	"codec": 0,
	"clave_registro": null,
	"ajuste_ad": 0,
	"ajuste_da": 0,
	"precision_audio": 0,
	"fila": 0,
	"columna": 0,
	"pasarela_id": 143,
	"DetInversionPol": 0,
	"additional_itiporespuesta": 0,
	"additional_superv_options": 0,
	"additional_uri_remota": "",
	"ats_user": "",
	"cola_vox": 0,
	"destino_test": "399999",
	"deteccion_vox": 1,
	"duracion_tono_interrup": 5,
	"iDetLineaAB": 0,
	"iEnableNoED137": 0,
	"itiporespuesta": 0,
	"lado": 0,
	"origen_test": "309999",
	"periodo_tonos": 5,
	"ranks": [
		{
			"inicial": "340100",
			"final": "340199",
			"tipo": 0
		},
		{
			"inicial": "340200",
			"final": "340299",
			"tipo": 0
		},
		{
			"inicial": "",
			"final": "",
			"tipo": 0
		},
		{
			"inicial": "",
			"final": "",
			"tipo": 0
		},
		{
			"inicial": "",
			"final": "",
			"tipo": 1
		},
		{
			"inicial": "",
			"final": "",
			"tipo": 1
		},
		{
			"inicial": "",
			"final": "",
			"tipo": 1
		},
		{
			"inicial": "",
			"final": "",
			"tipo": 1
		}
	],
	"respuesta_automatica": 0,
	"supervisa_colateral": 0,
	"tiempo_supervision": 10,
	"tipo_interfaz_tel": 0,
	"umbral_vox": -35,
	"uri_telefonica": "",
	"idrecurso_telefono": 359,
	"llamada_automatica": 0,
	"iControlTmLlam": 0,
	"iTmMaxConversacion": 0,
	"RespuestaSIP_ATSR2": 0,
	"TmTonoBloqueo": 0,
	"TmBloqueoLib": 0,
	"duracion_llamada": 0
};
var resId = 359;

dbutils.dbconfig = {
    host: "127.0.0.1",
    user: "root",
    password: "cd40",
    database: "ug5kv2",
    port: 3306,
    multipleStatements: true
  }

logger.Info("Hello World");

test.updateTfnoRes4Gateway(dataIn, resId, (res)=>{
    logger.Trace("Operacion ejecutada: ", res);
});

logger.Error("Goodbye World");
