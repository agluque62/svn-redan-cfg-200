export class GatewayFieldGeneral {
    name!: string;
    emplazamiento!: string;
    dualidad!: number;
    ipv!: string;
    ips!: string;
    nivelconsola!: number;
    puertoconsola!: number;
    nivelIncidencias!: number;
    cpus!: CPU[];
    dvrrp!: number;
    SupervisionLanGW!: number;
    TmMaxSupervLanGW!: number;
}

class CPU {
    tlan!: string;
    ip0!: string;
    ms0!: string;
    ip1!: string;
    ms1!: string;
    ipb!: string;
    msb!: string;
    ipg!: string;
}