export class GatewayFieldResourceRadio {
    tipo!: number;
    sq!: number;
    ptt!: number;
    bss!: number;
    modoConfPtt!: number;
    repSqBss!: number;
    desactivacionSq!: number;
    timeoutPtt!: number;
    metodoBss!: number;
    umbralVad!: number;
    numFlujosAudio!: number;
    tiempoPtt!: number;
    tmVentanaRx!: number;
    climaxDelay!: number;
    tmRetardoFijo!: number;
    bssRtp!: number;
    retrasoSqOff!: number;
    evtPTT!: number;
    tjbd!: number;
    tGRSid!: number;
    iEnableGI!: number;
    tabla_indices_calidad!: any[];
    iSesionPrio!: number;
    iPttPrio!: number;
    colateral!: Colateral;
    iPrecisionAudio!: number;
    iModoCalculoClimax!: number;
    FrqTonoSQ!: number;
    UmbralTonoSQ!: number;
    FrqTonoPTT!: number;
    UmbralTonoPTT!: number;
    SupervPortadoraTx!: number;
    SupervModuladoraTx!: number;
}

interface Colateral {
    name: string;
    tipoComunicacion: number;
    emplazamientos: Site[];
}

interface Site {
    activoTx: number;
    activoRx: number;
    uriTxA: string;
    uriTxB: string;
    uriRxA: string;
    uriRxB: string;
}