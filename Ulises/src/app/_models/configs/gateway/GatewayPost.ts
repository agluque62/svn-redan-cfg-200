import { Gateway } from "./Gateway";
import { GatewayIp } from "./GatewayIpResponse";

export class GatewayPost {

    PuertoLocalSIP!: string | any;
    comunidad_snmp!: string;
    dvrrp!: number;
    ipb1!: string;
    ipb2!: string;
    ipg1!: string;
    ipg2!: string;
    ipv!: string;
    listServers!: Server[];
    msb1!: string;
    msb2!: string;
    nombre!: string;
    periodo_supervision!: string | any;
    proxys!: Server[];
    puerto_rtsp!: string;
    puerto_servicio_snmp!: string | any;
    puerto_servicio_web!: string |any;
    puerto_snmp!: string | any;
    registrars!: Server[];
    servidor_rtsp!: string;
    servidor_rtspb!: string;
    snmpv2!: number;
    sppe!: number;
    tiempo_sesion!: string | any;
    traps!: string[];
    ultima_actualizacion!: string;
    pendiente_actualizar!: number;
    refresher!: number;
    supervisionTlf!: number;

    constructor(gateway: Gateway, gatewayIps: GatewayIp[]) {
        this.PuertoLocalSIP = gateway.puerto_sip && gateway.puerto_sip.toString();
        this.comunidad_snmp = gateway.comunidad_snmp;
        this.dvrrp = gateway.dvrrp;
        this.ultima_actualizacion = gateway.ultima_actualizacion;
        this.pendiente_actualizar = gateway.pendiente_actualizar;
        this.ipb1 = gateway.ip_cpu0;
        this.ipb2 = gateway.ip_cpu1;
        this.ipg1 = gateway.ip_gtw0;
        this.ipg2 = gateway.ip_gtw1;
        this.ipv = gateway.ipv;
        this.msb1 = gateway.mask_cpu0;
        this.msb2 = gateway.mask_cpu1;
        this.nombre = gateway.name;
        this.periodo_supervision = gateway.periodo_supervision && gateway.periodo_supervision.toString();
        this.puerto_rtsp = gateway.puerto_rtsp.toString();
        this.puerto_servicio_snmp = gateway.puerto_servicio_snmp && gateway.puerto_servicio_snmp.toString();
        this.puerto_servicio_web = gateway.puerto_servicio_web && gateway.puerto_servicio_web.toString();
        this.puerto_snmp = gateway.puerto_snmp && gateway.puerto_snmp.toString();
        this.servidor_rtsp = gateway.servidor_rtsp;
        this.servidor_rtspb = gateway.servidor_rtspb;
        this.snmpv2 = gateway.snmpv2;
        this.sppe = gateway.sppe;
        this.tiempo_sesion = gateway.tiempo_sesion && gateway.tiempo_sesion.toString();
        this.listServers = [...this.getServerItems(gatewayIps, "NTP")];
        this.proxys = [...this.getServerItems(gatewayIps, "PRX")];
        this.registrars = [...this.getServerItems(gatewayIps, "REG")];
        this.traps = [...this.getTraps(gatewayIps)];
        this.supervisionTlf = gateway.supervisionTlf;
        this.refresher = gateway.refresher;
    }

    getServerItems(gatewayIps: GatewayIp[], type: string) {
        if (gatewayIps.length === 0) {
            return [];
        }

        return gatewayIps.filter(ips => ips.tipo === type).map((gatewayIp: GatewayIp) => {
            return {'ip': gatewayIp.ip, 'selected': gatewayIp.selected === 1}
        });
    }

    getTraps(gatewayIps: GatewayIp[]) {
        if (gatewayIps.length === 0) {
            return [];
        }

        return gatewayIps.filter(ips => ips.tipo === "TRPV1" || ips.tipo === "TRPV2").map((gatewayIp: GatewayIp) => {
            return gatewayIp.ip;
        })
    }
}

export interface Server {
    ip: string;
    selected: boolean;
}