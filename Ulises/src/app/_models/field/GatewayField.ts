import { GatewayFieldGeneral } from "./GatewayFieldGeneral";
import { GatewayFieldHardware } from "./GatewayFieldHardware";
import { GatewayFieldResource } from "./GatewayFieldResource";
import { GatewayFieldService } from "./GatewayFieldService";
import { GatewayFieldUser } from "./GatewayFieldUser";

export class GatewayField {
    tipo?: number;
    idConf!: string;
    fechaHora?: string;
    general!: GatewayFieldGeneral;
    hardware!: GatewayFieldHardware;
    recursos!: GatewayFieldResource;
    users!: GatewayFieldUser;
    servicios!: GatewayFieldService;
    ulises?: any;
}