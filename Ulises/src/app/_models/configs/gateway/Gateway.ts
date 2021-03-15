export class Gateway {

    EMPLAZAMIENTO_idEMPLAZAMIENTO!: number;
    comunidad_snmp!: string;
    contacto_snmp!: string;
    dvrrp!: number;
    emplazamiento!: string;
    idCGW!: number;
    ip_cpu0!: string;
    ip_cpu1!: string;
    ip_gtw0!: string;
    ip_gtw1!: string;
    ipv!: string;
    localizacion_snmp!: string;
    mask_cpu0!: string;
    mask_cpu1!: string;
    name!: string;
    nombre_snmp!: string;
    periodo_supervision!: number;
    puerto_rtsp!: number;
    puerto_servicio_snmp!: number;
    puerto_servicio_web!: number;
    puerto_sip!: number;
    puerto_snmp!: number;
    servidor_rtsp!: string;
    servidor_rtspb!: string;
    snmpv2!: number;
    sppe!: number;
    tiempo_sesion!: number;
    ultima_actualizacion!: string;
    pendiente_actualizar!: number;

    constructor(siteId?: number) {
        this.puerto_sip = 5060;
        this.periodo_supervision = 90;
        this.dvrrp = 2;
        this.puerto_servicio_snmp = 65000;
        this.puerto_snmp = 161;
        this.nombre_snmp = 'ULISESG5000i';
        this.localizacion_snmp = 'NUCLEO-DF LABS';
        this.contacto_snmp = 'NUCLEO-DF DT. MADRID. SPAIN';
        this.comunidad_snmp = 'public';
        this.puerto_servicio_web = 8080;
        this.tiempo_sesion = 0;
        this.puerto_rtsp = 554;
        this.pendiente_actualizar = 0;
        if (siteId) this.EMPLAZAMIENTO_idEMPLAZAMIENTO = siteId;
    }
}