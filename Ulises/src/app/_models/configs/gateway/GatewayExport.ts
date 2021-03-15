export class GatewayExport {
    fechaHora!: string;
    general!: General;
    hardware!: Hardware;
    idConf!: string;
    recursos!: Resource[];
    servicios!: Services;
    tipo!: number;
    users!: User[];
}

interface General {
    SupervisionLanGW: number;
    TmMaxSupervLanGW: number;
    cpus: CPU[];
    dualidad: number;
    dvrrp: number;
    emplazamiento: string;
    ips: string;
    ipv: string;
    name: string;
    nivelIncidencias: number;
    nivelconsola: number;
    puertoconsola: number;
}

interface Services {
    name: string;
    idSERVICIOS: number;
    grab: Recording;
    sincr: Sincronized;
    sip: Sip;
    snmp: Snmp;
    web: Web;
}

interface Hardware {
    slv: HardwareItem[];
}

interface HardwareItem {
    tp: number;
    pos: HardwarePos[];
}

interface HardwarePos {
    tp: number;
    cfg: number;
}

interface Sincronized {
    ntp: number;
    servidores: Server[];
}

interface Sip {
    KeepAliveMultiplier: number;
    KeepAlivePeriod: number;
    PeriodoSupervisionSIP: number;
    PuertoLocalSIP: number;
    SupresionSilencio: number;
    proxys: Server[];
    registrars: Server[];
}

interface Web {
    wport: number;
    stime: number;   
}

interface Snmp {
    agcomm: string;
    agcont: string;
    agloc: string;
    agname: string;
    agv2: number;
    snmpp: number;
    sport: number;
    traps: string[];
}

interface Server {
    ip: string;
    selected: number;
}

interface Recording {
    rtp_pl: number;
    rtp_sr: number;
    rtsp_ip: string;
    rtsp_port: number;
    rtsp_rtp: number;
    rtsp_uri: string;
    rtspb_ip: string;
    sport: number;
}

interface Resource {
    Buffer_jitter: BufferJitter;
    Codec: number;
    IdRecurso: string;
    LlamadaAutomatica: number;
    NumDispositivoSlot: number;
    Radio_o_Telefinia: number;
    SlotPasarela: number;
    TamRTP: number;
    Uri_Local: string;
    blanca: string[];
    enableRegistro: number;
    hardware: ResourceHardware;
    iFlgUsarDiffServ: number;
    idDBRadio: string | number;
    idDBTfno: string | number; 
    negra: string[];
    radio: RadioHardware;
    restriccion: number;
    szClave: string;
    szDestino: string;
    telefonia: TelephoneHardware
}

interface BufferJitter {
    min: number;
    max: number;
}

interface ResourceHardware {
    AD_AGC: number;
    AD_Gain: number;
    DA_AGC: number;
    DA_Gain: number;
}

interface RadioHardware {
    FrqTonoPTT: number;
    FrqTonoSQ: number;
    SupervModuladoraTx: number;
    SupervPortadoraTx: number;
    UmbralTonoPTT: number;
    UmbralTonoSQL: number;
    bss: number;
    bssRtp: number;
    climaxDelay: number;
    colateral: Colateral;
    desactivacionSq: number;
    evtPTT: number;
    iEnableGI: number;
    iModoCalculoClimax: number;
    iPrecisionAudio: number;
    iPttPrio: number;
    iSesionPrio: number;
    metodoBss: number;
    modoConfPtt: number;
    numFlujosAudio: number;
    ptt: number;
    repSqBss: number;
    retrasoSqOff: number;
    sq: number;
    tGRSid: number;
    tabla_indices_calidad: any[];
    tiempoPtt: number;
    timeoutPtt: number;
    tipo: number;
    tjdb: number;
    tmRetardoFijo: number;
    tmVentanaRx: number;
    umbralVad: number;
}

interface TelephoneHardware {
    TReleaseBL: number;
    additional_itiporespuesta: number;
    additional_superv_options: number;
    additional_uri_remota: string;
    ats_rangos_directos_ope: any[];
    ats_rangos_directos_pri: any[];
    ats_rangos_dst: any[];
    ats_rangos_operador: any[];
    ats_rangos_org: any[];
    ats_rangos_privilegiados: any[];
    ats_user: string;
    colateral_scv: number;
    detect_vox: number;
    h2h4: number;
    iDetCallerId: number;
    iDetDtmf: number;
    iDetInversionPol: number;
    iDetLineaAB: number;
    iEnableNoED137: number;
    iFiltroSpvRing: number;
    iPeriodoSpvRing: number;
    iT_Int_Warning: number;
    iTmCallerId: number;
    iTmDetFinLlamada: number;
    iTmLlamEntrante: number;
    idRed: string;
    idTroncal: string;
    it_release: number;
    itiporespuesta: number;
    lado: number;
    ladoeym: number;
    listaEnlacesInternos: any[];
    modo: number;
    no_test_local: string;
    no_test_remoto: string;
    r_automatica: number;
    superv_options: number;
    t_eym: number;
    tipo: number;
    tm_inactividad: number;
    tm_superv_options: number;
    umbral_vox: number;
    uri_remota: string;
}

interface Colateral {
    emplazamientos: Site[];
    name: string;
    tipoConmutacion: number;   
}

interface Site {
    activoRx: number;
    activoTx: number;
    uriRxA: string;
    uriRxB: string;
    uriTxA: string;
    uriTxB: string;
}

interface CPU {
    tlan: number;
    ip0: string;
    ip1: string;
    ipb: string;
    ipg: string;
    ms0: string;
    ms1: string;
    msb: string;
}

interface User {
    name: string;
    perfile: number;
    clave: string;
}