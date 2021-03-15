export class GatewayIp {

    idlista_ips!: number;
    ip!: string;
    pasarela_id!: number;
    selected!: number;
    tipo!: string;

    constructor(type?: string) {
        if (type) this.tipo = type;
    } 
}