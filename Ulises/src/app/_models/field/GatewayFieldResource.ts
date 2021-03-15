import { GatewayFieldResourcePhone } from "./GatewayFieldResourcePhone";
import { GatewayFieldResourceRadio } from "./GatewayFieldResourceRadio";

export class GatewayFieldResource {
    IdRecurso!: string;
    Radio_o_Telefonia!: number;
    SlotPasarela!: number;
    NumDispositivos!: number;
    TamRTP!: number;
    Codec!: number;
    Uri_Local!: string;
    enableRegistro!: number;
    szClave!: string;
    Buffer_jitter!: BufferJitter;
    hardware!: Hardware;
    radio!: GatewayFieldResourceRadio; 
    telefonia!: GatewayFieldResourcePhone;
    LlamadaAutomatica!: number;
    restriccion!: number;
    blanca!: string[]; 
    negra!: string[];
    iFlgUsarDiffServ!: number;
    szDestino!: number|string;
    idDBRadio!: number|string;
    idDBTfno!: number|string;
}

interface BufferJitter {
    min: number;
    max: number;
}

interface Hardware {
    AD_AGC: number|string;
    AD_Gain: number|string;
    DA_AGC: number|string;
    DA_Gain: number|string;
}