var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var parseUrlEncoded = bodyParser.urlencoded({ extended: false });

var myLibConfigurations = require('../../lib/configurations.js');
var myLibGateways = require('../../lib/gateways.js');
var myLibServicesGateways = require('../../lib/services.js');
var myLibHardwareGateways = require('../../lib/hardware.js');
var myLibUsuarios = require('../../lib/users.js');

//var logging = require('../../lib/loggingDate.js');
var logging = require('../../lib/nu-log.js');

// Nesting routers by attaching them as middleware:
var gatewaysRouter = express.Router({ mergeParams: true });

var PdfPrinter = require('pdfmake');
const { response } = require('../../app.js');
var fonts = {
    Roboto: {
        normal: 'fonts/Roboto-Regular.ttf',
        bold: 'fonts/Roboto-Medium.ttf',
        italics: 'fonts/Roboto-Italic.ttf',
        bolditalics: 'fonts/Roboto-MediumItalic.ttf'
    }
};

function getPdfDocDefinition(data, cfgName) {
    return {
        pageSize: 'A4',
        pageOrientation: 'landscape',
        //pageMargins: [10,10,10,10],
        styles: {
            header: {
                fontSize: 16,
                bold: true,
                color: 'red', alignment: 'center',
                margin: [0, 20, 0, 10]
            },
            footer: {
                fontSize: 9, color: 'red',
                margin: [10, 10, 10, 20]
            },
            level0: {
                fontSize: 14,
                bold: true,
                alignment: 'center',
                margin: [0, 20, 0, 10]
            },
            level1: {
                fontSize: 12,
                bold: true, color: 'blue',
                alignment: 'left',
                margin: [20, 20, 0, 0]
            },
            level2: {
                fontSize: 12,
                bold: true,
                alignment: 'left',
                margin: [40, 10, 0, 0]
            },
            level3_header: {
                fontSize: 10,
                bold: true,
                alignment: 'left',
                color: 'blue',
                margin: [50, 2, 0, 0]
            },
            level3: {
                fontSize: 9,
                alignment: 'left',
                margin: [50, 2, 0, 0]
            },
            level4: {
                fontSize: 10,
                bold: true,
                alignment: 'left',
                margin: [60, 0, 0, 0]
            },
            level5: {
                fontSize: 9,
                bold: true,
                alignment: 'left',
                margin: [90, 0, 0, 0]
            },
            defaultStyle: {
                fontSize: 12,
                color: 'green',
                alignment: 'justify'
            }
        },
        header: {
            margin: [10, 10, 10, 10],
            text: "Ulises G 5000. Informe de Configuracion de Recursos: " + cfgName, style: 'header'
        },
        footer: function (currentPage, pageCount) {
            return {
                margin: [10, 10, 10, 10],
                columns: [
                    { text: (new Date()).toLocaleString(), style: 'footer', alignment: 'left' },
                    { text: "Nucleo. 2017-2019. All rights reserved.", style: 'footer', alignment: 'center' },
                    { text: 'Pg ' + currentPage.toString() + ' de ' + pageCount, style: 'footer', alignment: 'right' }
                ]
            };
        },
        content: PdfPrintGws(data)
    };
}

function generatesRandomName(name) {
    var myDate = new Date();
    var hashArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z', '0'];

    var monthNumber = myDate.getMonth() + 1;
    var dayNumber = myDate.getDay() + 1;
    var hourNumber = myDate.getHours() + 1;
    var minNumber = myDate.getMinutes() + 1;
    var secNumber = myDate.getSeconds() + 1;

    return (name + '#' + hashArray[monthNumber] + hashArray[dayNumber] + hashArray[hourNumber] +
        hashArray[minNumber] + hashArray[secNumber]);
}

function PdfPrintGws(gws) {

    var content = [];
    content.push({ text: gws.length.toString() + ' Pasarelas en la configuracion', style: 'level0' });
    for (igw = 0; igw < gws.length; igw++) {
        var gw = gws[igw];
        PdfPrintGw(content, gw);
        if (igw < (gws.length - 1))
            content.push({ text: "", pageBreak: 'after' });
    }
    return content;
}

function PdfPrintGw(content, gw) {

    content.push({ text: 'Pasarela ' + gw.gw + ', en ' + gw.site, style: 'level1' });
    content.push({ text: 'Configuracion Radio. ' + gw.radios.length + ' Recursos.', style: 'level2' });
    if (gw.radios.length > 0) {
        content.push({
            columns: [
                { text: 'Recurso', width: 250 },
                { text: 'Frecuencia', width: 80 },
                { text: 'Tipo', width: 80 },
                { text: 'Colaterales', width: 120 }
            ], style: 'level3_header'
        });
        for (ir = 0; ir < gw.radios.length; ir++) {
            var rr = gw.radios[ir];
            PdfPrintRadioRs(content, rr);
        }
    }

    content.push({ text: 'Configuracion Telefonia. ' + gw.telef.length + ' Recursos.', style: 'level2' });
    if (gw.telef.length > 0) {
        content.push({
            columns: [
                { text: 'Recurso', width: 330 },
                { text: 'Tipo', width: 80 },
                { text: 'Colateral', width: 120 }
            ], style: 'level3_header'
        });
        for (it = 0; it < gw.telef.length; it++) {
            var rt = gw.telef[it];
            PdfPrintPhoneRs(content, rt);
        }
    }
}

function PdfPrintRadioRs(content, rd) {
    var RdTypes = [
        "Local Simple", "Local P/R", "Local FD Simple", "Local FD P/R",
        "Remoto TxRx", "Remoto Tx", "Remoto Rx"
    ];

    var rdInfo1 = ('(' + (rd.columna.toString() + '/' + rd.fila) + ')');
    rdInfo1 += (': ' + rd.nombre);
    var rdInfo2 = (rd.frecuencia.toFixed(3) + ' MHz.');
    var rdInfo3 = (RdTypes[rd.tipo_agente]);
    var colInfo = "";
    if (rd.tipo_agente < 4) {
        colInfo += (rd.col.length.toString() + ' Colaterales');
        for (ic = 0; ic < rd.col.length; ic++) {
            var col = rd.col[ic];
            colInfo += ('\r\n.    EMPL ' + Math.round(col.nivel_colateral / 2) + ', ' + col.tipo + ': ' + col.uri);
        }
    }
    content.push({
        columns: [
            { text: rdInfo1, width: 250 },
            { text: rdInfo2, width: 80 },
            { text: rdInfo3, width: 80 },
            { text: colInfo, width: 250 }
        ], style: 'level3'
    });
}

function PdfPrintPhoneRs(content, ph) {

    var PhTypes = [
        "BL", "BC", "AB", "ATS-R2", "ATS-N5", "LCEN", "ATS-QSIG"
    ];

    var phInfo1 = ('(' + (ph.columna.toString() + '/' + ph.fila) + ')');
    phInfo1 += (': ' + ph.nombre);
    var phInfo2 = (PhTypes[ph.tipo_interfaz_tel]);
    var phInfo3 = (ph.uri_telefonica);
    content.push({
        columns: [
            { text: phInfo1, width: 330 },
            { text: phInfo2, width: 80 },
            { text: phInfo3, width: 250 }
        ], style: 'level3'
    });
}

function generatePDF(data, callback) {

    const cfgName = data.length == 0 ? "NO-GW" : data[0].cfg;
    const printer = new PdfPrinter(fonts);
    var pdfDoc = printer.createPdfKitDocument(getPdfDocDefinition(data, cfgName));

    let chunks = [];

    pdfDoc.on('data', (chunk) => {
        chunks.push(chunk);
    });

    pdfDoc.on('end', () => {
        const result = Buffer.concat(chunks);
        const date = new Date();
        callback({
            'file_name': 'Cfg_' + getDate() + '_InformeCfg.pdf',
            'file_data': result.toString('base64')
        });
    });

    pdfDoc.end();
}

function getDate() {
    
    const weekday = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'][new Date().getDay()]  
    var date = new Date();

    return `${date.getDay()}_${date.getMonth()+1}_${date.getFullYear()} (${weekday})`; 
}


function generateExcel(gws) {
    var RdTypes = [
        "Local Simple", "Local P/R", "Local FD Simple", "Local FD P/R",
        "Remoto TxRx", "Remoto Tx", "Remoto Rx"
    ];
    var PhTypes = [
        "BL", "BC", "AB", "ATS-R2", "ATS-N5", "LCEN", "ATS-QSIG"
    ];

    var cfgName = gws.length == 0 ? "NO-GW" : gws[0].cfg;

    var strData = 'Config' +
        ';Emplazamiento' +
        ';Pasarela' +
        ';P-R-T-C' +
        ';Recurso' +
        ';Frecuencia (MHz)' +
        ';Tipo' +
        ';Colateral' + '\r\n';
    for (igw = 0; igw < gws.length; igw++) {
        var gw = gws[igw];
        // Registro de la Pasarela.
        strData += (gw.cfg + ';' +
            gw.site + ';' +
            gw.gw + ';' +
            '0' + ';' +
            '---' + ';' +
            '---' + ';' +
            '---' + ';' +
            '---' + '\r\n');
        // Registro Recursos RD
        for (ir = 0; ir < gw.radios.length; ir++) {
            var rr = gw.radios[ir];
            // Registro del Recurso
            strData += (gw.cfg + ';' +
                gw.site + ';' +
                gw.gw + ';' +
                '1' + ';' +
                rr.nombre + ';' +
                rr.frecuencia.toFixed(3) + ';' +
                RdTypes[rr.tipo_agente] + ';' +
                '---' + '\r\n');
            if (rr.tipo_agente <= 4) {
                for (ic = 0; ic < rr.col.length; ic++) {
                    var col = rr.col[ic];
                    var clInfo = 'EMPL ' + Math.round(col.nivel_colateral / 2);
                    clInfo += (', ' + col.tipo);
                    clInfo += (': ' + col.uri);          // Registro del Colateral
                    strData += (gw.cfg + ';' +
                        gw.site + ';' +
                        gw.gw + ';' +
                        '3' + ';' +
                        rr.nombre + ';' +
                        rr.frecuencia.toFixed(3) + ';' +
                        RdTypes[rr.tipo_agente] + ';' +
                        clInfo + '\r\n');
                }
            }
        }
        // Registro Recursos TF
        for (it = 0; it < gw.telef.length; it++) {
            var rt = gw.telef[it];
            // Registro del Recurso
            strData += (gw.cfg + ';' +
                gw.site + ';' +
                gw.gw + ';' +
                '2' + ';' +
                rt.nombre + ';' +
                '---' + ';' +
                PhTypes[rt.tipo_interfaz_tel] + ';' +
                rt.uri_telefonica + '\r\n');
        }
    }

    var document = {
        'file_name': 'Cfg_' + cfgName + '-' + getDate() + '_InformeCfg.csv',
        'file_data': strData
    };

    return document;
}

router.use('/:configuration/gateways', gatewaysRouter);

router.route('/')	// The root path is relative the path where it's mounted in app.js (app.use('/configurations',configurations'))
    .get(function (req, res) {
        logging.Info(req.method, req.originalUrl);
        myLibConfigurations.getConfigurations(req, res);
    });

router.route('/export/:idGtw')
    .get(function (req, res) {
        logging.Info(req.method, req.originalUrl);
        myLibGateways.getAll(null, req.params.idGtw, function (result) {
            res.json(result);
        });
    });

router.route('/checkConfigName/:name/:idCfg')
    .get(function (req, res) {
        logging.Info(req.method, req.originalUrl);
        myLibConfigurations.checkConfigName(req.params.name, req.params.idCfg, function (result) {
            res.json(result);
        });
    });

router.route('/checkConfigIp/:ip/:idCFG')
    .get(function (req, res) {
        logging.Info(req.method, req.originalUrl);
        myLibConfigurations.checkIps(req.params.ip, req.params.idCFG, res);

});

router.route('/checkConf/:idGTW')
.get(function (req, res) {
    logging.Info(req.method, req.originalUrl);
    myLibConfigurations.getConfigurationsByGtW(req.params.idGTW, res);
});


router.route('/active')
    .get(function (req, res) {
        logging.Info(req.method, req.originalUrl);
        myLibConfigurations.getActiveConfiguration(req, res, function (name) {
            res.json(name);
        });
    });

router.route('/pendingActive')
    .get(function (req, res) {
        logging.Info(req.method, req.originalUrl);
        myLibConfigurations.getPendingActiveConfiguration(req, res, function (name) {
            res.json(name);
        });
    });
router.route('/pendingActive')
    .get(function (req, res) {
        logging.Info(req.method, req.originalUrl);
        myLibConfigurations.getPendingActiveConfiguration(req, res, function (name) {
            res.json(name);
        });
    });
router.route('/:configuration/gatewaysHasResources')
    .get(function (req, res) {
        logging.Info(req.method, req.originalUrl);
        myLibConfigurations.gatewaysHasResources(req, res, function (name) {
            res.json(name);
        });
    });

    //////////////////
//Otra nueva para obtener el id de la Configuración a partir de la Gtw
router.route('/checkConf/:idGTW')
.put(function (req, res) {
    logging.Info(req.method, req.originalUrl);
    myLibGateways.getConfigurationByGtw(req.params.idGTW, function (result) {
        res.json(result);
    });
});
router.route('/:configuration/gatewaysOut')
    .get(function (req, res) {
        logging.Info(req.method, req.originalUrl);
        myLibConfigurations.gatewaysOut(req, res, req.params.configuration, function (name) {
            var aliveGtws = req.app.get('aliveGtws');
            res.json({ gtwsInConfig: name, aliveGateways: aliveGtws });
        });
    });

router.route('/SP_cfg/:cfg')
    .get(function (req, res) {
        logging.Info(req.method, req.originalUrl);
        myLibConfigurations.SP_cfg(req.params.cfg, function (data) {
            res.json(data);
        });
    });

router.route('/SP_cfg/:cfg/pdf')
    .get(function (req, res) {
        logging.Info(req.method, req.originalUrl);
        myLibConfigurations.SP_cfg(req.params.cfg, function (data) {
            if (data != null) {
                generatePDF(data, (response) => {
                    res.status(200).json({'data': response.file_data, 'file_name': response.file_name})
                });
            }
        });
    });

router.route('/SP_cfg/:cfg/excel')
    .get(function (req, res) {
        logging.Info(req.method, req.originalUrl);
        myLibConfigurations.SP_cfg(req.params.cfg, function (data) {
            if (data != null) {
                const excelData = generateExcel(data);
                res.status(200).json({'data': excelData.file_data, 'file_name': excelData.file_name});
            }
        });
    });

router.route('/listOfGateways')
    .get(function (req, res) {
        logging.Info(req.method, req.originalUrl);
        myLibConfigurations.getListOfGateways(function (name) {
            res.json(name);
        });
    })
    .put(function (req, res) {
        logging.Info(req.method, req.originalUrl);
        var gtw = req.body;
        myLibConfigurations.putListOfGateways(gtw, function (name) {
            res.json(name);
        });
    });

router.route('/setUpdateGateway')
    .put(function (req, res) {
        logging.Info(req.method, req.originalUrl);
        var gtw = req.body;
        myLibConfigurations.setUpdateGateway(gtw, function (name) {
            res.json(name);
        });
    });

router.route('/:configuration')
    .post(function (req, res) {
        logging.Info(req.method, req.originalUrl);
        var newConfiguration = req.body;
        myLibConfigurations.postConfiguration(req, res, newConfiguration, function (result) {
            res.json(result);
        });
    })
    .get(function (req, res) {
        logging.Info(req.method, req.originalUrl);
        if (req.params.configuration != null)
            myLibConfigurations.getConfiguration(req, res, req.params.configuration);
    })
    .delete(function (req, res) {
        var cfg = req.params.configuration;
        logging.Info(req.method, req.originalUrl);
        myLibConfigurations.delConfiguration(req, res, cfg, function (result) {
            res.json(result);
        });
    })
    .put(function (req, res) {
        var cfg = req.body;
        var oldIdCfg = req.params.configuration;
        logging.Info(req.method, req.originalUrl);
        myLibConfigurations.putConfiguration(oldIdCfg, cfg, function (result) {
            res.json(result);
        });
    });

router.route('/:configuration/copy')
    .post(function (req, res) {
        logging.Info(req.method, req.originalUrl);
        if (req.params.configuration != null && req.body.name != null) {
            myLibConfigurations.copyConfiguration(req.params.configuration, req.body, function (result) {
                res.json(result);
            });
        }
    });

router.route('/:configuration/activate/:listOfGateways')
    .get(function (req, res) {
        logging.Info(req.method, req.originalUrl);
        if (req.params.configuration != null && req.params.listOfGateways.length > 0)
            myLibConfigurations.activateGateways(req.params.configuration, req.params.listOfGateways.split(','), function (result) {
                res.json(result);
            });
    });

router.route('/:configuration/loadChangestoGtws')
    .get(function (req, res) {
        logging.Info(req.method, req.originalUrl);
        myLibConfigurations.loadChangestoGtws(req.params.configuration, function (result) {
            res.json(result);
        });
    });


router.route('/:configuration/activate')
    .get(function (req, res) {
        logging.Info(req.method, req.originalUrl);
        if (req.params.configuration != null)
            myLibConfigurations.activateConfiguration(req.params.configuration, function (result) {
                var aliveGtws = req.app.get('aliveGtws');
                for (var i = 0; i < aliveGtws.length; i++) {
                    if (aliveGtws[i].idCfg == parseInt(req.params.configuration))
                        aliveGtws[i].isNotActiveCfg = false;
                    else
                        aliveGtws[i].isNotActiveCfg = true;
                }
                res.json(result);
            });
    });

router.route('/:configuration/free')
    .get(function (req, res) {
        logging.Info(req.method, req.originalUrl);
        myLibConfigurations.getFreeGateways(req.params.configuration, function (result) {
            res.json(result);
        });
    });

router.route('/:configuration/siteName/:siteName')
    .get(function (req, res) {
        logging.Info(req.method, req.originalUrl);
        myLibConfigurations.getSiteName(req.params.configuration, req.params.siteName, function (result) {
            res.json(result);
        });
    });

gatewaysRouter.route('/')	// The root path is relative the path where it's mounted in router.use('/:configuration/gateways',gatewaysRouter')
    .get(function (req, res) {
        logging.Info(req.method, req.originalUrl);
        if (req.params.configuration != null)
            myLibGateways.getGateways(req, res, req.params.configuration);
    });

gatewaysRouter.route('/:gateway')
    .get(function (req, res) {
        logging.Info(req.method, req.originalUrl);
        if (req.params.gateway != null)
            myLibGateways.getGateway(req, res, req.params.configuration, req.params.gateway, function (result) {
                res.json(result);
            });
    })
    .delete(function (req, res) {
        logging.Info(req.method, req.originalUrl);
        if (req.params.gateway != null) {
            myLibGateways.freeGatewayFromConfiguration({ "CFG_idCFG": req.params.configuration, "CGW_idCGW": req.params.gateway }, function (result) {
                res.json(result);
            });
        }
    })
    .post(function (req, res) {
        logging.Info(req.method, req.originalUrl);
        if (req.params.gateway != null) {
            myLibGateways.assignGatewayToConfiguration({ "CFG_idCFG": req.params.configuration, "CGW_idCGW": req.params.gateway }, function (result) {
                res.json(result);
            });
        }
    });

//TEST: GET localhost:3000/configurations/CONFIGURACION1/gateways/1.1.1.2/all
// Proporciona la configuración completa de :gateway (general, servicios, hardware, recursos)
///*  REV 1.0.2 VMG
gatewaysRouter.route('/:gateway/all')
    .get(function (req, res) {
        logging.Info(req.method, req.originalUrl);
        //TODO pasar la ip
        myLibGateways.getAll(req.params.configuration, req.params.gateway, function (result, idGtw) {
            var aliveGtws = req.app.get('aliveGtws');
            var isGtwFound = false;
            for (var i = 0; i < aliveGtws.length && !isGtwFound; i++) {
                if (aliveGtws[i].idGtw == idGtw) {
                    isGtwFound = true;
                    aliveGtws[i].isSinch = true;
                    aliveGtws[i].online = true;
                }
            }
            res.status(200).json(result);
        });
    }).
    post(function (req, res) {
        logging.Error(req.method, req.originalUrl, 'No implementado');
        res.status(501).json({ res: 'No implementado' });
    });

gatewaysRouter.route('/:gateway/general')
    .get(function (req, res) {
        logging.Info(req.method, req.originalUrl);
        myLibGateways.getGateway(req, res, null, req.params.gateway, function (gtw) {
            res.json({ general: gtw });
        });
    });

gatewaysRouter.route('/:gateway/servicios')
    .get(function (req, res) {
        logging.Info(req.method, req.originalUrl);
        myLibServicesGateways.getServices(req.params.gateway, null, function (data) {
            res.json({ servicios: data.services });
        });
    });

gatewaysRouter.route('/:gateway/hardware')
    .get(function (req, res) {
        logging.Info(req.method, req.originalUrl);
        myLibHardwareGateways.getSlaves(req.params.gateway, null, function (data) {
            res.json({ hardware: data.hardware });
        });
    });

gatewaysRouter.route('/:gateway/recursos')
    .get(function (req, res) {
        logging.Info(req.method, req.originalUrl);
        res.redirect('/gateways/' + req.params.gateway + '/resources');
        //logging.Trace('Not implemented yet.')
        //res.status(501).json('Not implemented yet.');
    });

module.exports = router;
