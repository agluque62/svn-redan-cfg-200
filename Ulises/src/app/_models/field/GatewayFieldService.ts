export class GatewayFieldService {
    name!: string;
    idSERVICIOS!: number;
    sip!: Sip;
    web!: Web;
    snmp!: Snmp;
    grab!: Grab;
    sincr!: Sincr;
}

interface Sip {
    PuertoLocalSIP: number;
    KeepAlivePeriod: number;
    KeepAliveMultiplier: number;
    SupresionSilencio: number;
    PeriodoSupervisionSIP: number;
    proxys: Server;
    registrars: Server; 
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
    sport: number;
    snmpp: number;
    traps:[]
}

interface Grab {
    rtsp_ip: string;
    rtspb_ip: string;
    rtsp_port: number;
    rtsp_uri: string;
    sport: number;
    rtsp_rtp: number;
    rtp_pl: number;
    rtp_sr: number;
}

interface Sincr {
    ntp: number;
    servidores: Server[];
}

interface Server {
    ip: string;
    selected: number;
}