export class SiteGatewayResponse {

    error!: any;
    data!: SiteGatewayResponseItem[];
}

interface SiteGatewayResponseItem {
    idCGW: string;
    name: string;
}