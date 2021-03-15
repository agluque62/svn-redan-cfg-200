export class GatewayFieldHardwareSlv {
    tp!: number;
    pos!: GatewayFieldHardwareSlvPos[];
}

interface GatewayFieldHardwareSlvPos {
    tp: number;
    cfg: number;
}