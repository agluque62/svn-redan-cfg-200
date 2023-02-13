const assert = require('assert');
const lib = require('../../srv/lib/externalResources');
const logger = require("../../srv/lib/logger.js").createLogger();

const testBench1 = [
    {in: undefined, out: 30},
    {in: 0, out: 6},
    {in: 1, out: 6},
    {in: 2, out: 6},
    {in: 3, out: 12},
    {in: 4, out: null}
];

const testBench2 = [
    {in: undefined, out: 18},
    {in: 0, out: 6},
    {in: 1, out: 6},
    {in: 2, out: 6},
    {in: 3, out: 12},
    {in: 4, out: null}
];

const testBench3 = [
    {in: undefined, in2: "", out: 18},
    {in: 4, in2: "04", out: 3},
    {in: 5, in2: "10.10", out: 3}
];

const testBench4 = [
    {in: undefined, in2: "", out: 12},
    {in: 4, in2: "bl", out: 2},
    {in: 5, in2: ".1.", out: 7}
];

const testBench5 = [
    {in1: 13, out1: "TX01", 
     in2: {id_recurso: -1, alias: "test1", uri: "test1@127.0.0.1", tipo: 3}, 
     in3: {id_recurso: -1, alias: "test2", uri: "test2@127.0.0.1", tipo: 0} },
     {in1: 42, out1: "R202", 
     in2: {id_recurso: -1, alias: "test3", uri: "test3@127.0.0.1", tipo: 2}, 
     in3: {id_recurso: -1, alias: "test4", uri: "test4@127.0.0.1", tipo: 3} }
];

exports.test = async ()=>{
    var res = null;

    try {
        for (const item of testBench1){
            res = await lib.getExternalResources(item.in);
            assert(res.error===null, "getExternalResources, Error in " + JSON.stringify(item));    
            assert(item.out === null ? res.lista_recursos===null : Array.isArray(res.lista_recursos), "getExternalResources, Error in " + JSON.stringify(item));
            assert(item.out === null ? true : res.lista_recursos.length === item.out);
        }

        logger.Info("TestBech1 OK");
    }
    catch(error){
        logger.Error(error, error.message);
    }

    try {
        for (const item of testBench2){
            res = await lib.getRadioExternalResources(item.in);
            assert(res.error===null, "getRadioExternalResources, Error in " + JSON.stringify(item));    
            assert(item.out === null ? res.lista_recursos===null : Array.isArray(res.lista_recursos), "getExternalResources, Error in " + JSON.stringify(item));
            assert(item.out === null ? true : res.lista_recursos.length === item.out);
        }
        logger.Info("TestBech2 OK");
    }
    catch(error){
        logger.Error(error, error.message);
    }

    try {
        for (const item of testBench3){
            res = await lib.filterExternalResources(item.in, item.in2);
            assert(Array.isArray(res.lista_recursos) && res.lista_recursos.length===item.out, "filterExternalResources, Error in " + JSON.stringify(item));    
        }
        logger.Info("TestBech3 OK");
    }
    catch(error){
        logger.Error(error, error.message);
    }

    try {
        for (const item of testBench4){
            res = await lib.filterExternalPhoneResources(item.in, item.in2);
            assert(res.error===null, "filterExternalPhoneResources, Error in " + JSON.stringify(item));    
        }
        logger.Info("TestBech4 OK");
    }
    catch(error){
        logger.Error(error, error.message);
    }

    try {
        for (const item of testBench5){
            res = await lib.getExternalResource(item.in1);
            assert(Array.isArray(res.lista_recursos) && res.lista_recursos.length===1 && res.lista_recursos[0].alias===item.out1, "getExternalResource, Error in " + JSON.stringify(item));
            res = await lib.postExternalResource(item.in2);
            assert(res.lista_recursos.affectedRows===1,"postExternalResource Error 1 in "+ JSON.stringify(item))
            item.in3.id_recurso = res.lista_recursos.insertId;
            res = await lib.postExternalResource(item.in3);
            assert(res.lista_recursos.affectedRows===1,"postExternalResource Error 2 in "+ JSON.stringify(item))
            res = await lib.deleteExternalResource(item.in3.id_recurso);
            assert(res.lista_recursos.affectedRows===1,"deleteExternalResource Error in "+ JSON.stringify(item))
        }
        logger.Info("TestBech5 OK");
    }
    catch(error){
        logger.Error(error, error.message);
    }


};
