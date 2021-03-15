export class Configuration {

    activa!: number;
    description!: string;
    idCFG!: number;
    name!: string;
    region!: string | null;
    ts_activa!: string | null;
    fecha_activacion!: string | null;

    constructor(config: IConfiguration = {activa: 0, description: '', idCFG: -1, name: '', region: null, fecha_activacion: null}) {
        this.activa = config.activa;
        this.description = config.description;
        this.idCFG = config.idCFG;
        this.name = config.name;
        this.region = config.region;
        this.fecha_activacion = config.fecha_activacion;
    }
}

interface IConfiguration {
    activa: number;
    description: string;
    idCFG: number;
    name: string;
    region: string | null;
    fecha_activacion: string | null;
}