export class Site {    
    idEMPLAZAMIENTO!: number;
    nameSite!: string;
    gateways: any | null;

    constructor(site: ISite = {idEMPLAZAMIENTO: -1, nameSite: ''}) {
        this.idEMPLAZAMIENTO = site.idEMPLAZAMIENTO;
        this.nameSite = site.nameSite;
        this.gateways = null;
    };
}

interface ISite {
    idEMPLAZAMIENTO: number;
    nameSite: string;
}