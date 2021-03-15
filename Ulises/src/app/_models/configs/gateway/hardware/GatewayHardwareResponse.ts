import { GatewayHardwareRadio } from "./GatewayHardwareRadio";
import { GatewayHardwareTelephone } from "./GatewayHardwareTelephone";

export class GatewayHardwareResponse {

    radio!: GatewayHardwareRadio[];
    tfno!: GatewayHardwareTelephone[];
}