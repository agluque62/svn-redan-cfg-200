export class User {
    idOPERADORES!: number;
    name!: string;
    clave!: string;
    perfil!: number;

    constructor(user: IUser = {idOPERADORES: -1, name: '', clave: '', perfil: 0}) {
        this.idOPERADORES = user.idOPERADORES;
        this.name = user.name;
        this.clave = user.clave;
        this.perfil = user.perfil;
    };
}

interface IUser {
    idOPERADORES: number;
    name: string;
    clave: string;
    perfil: number;
}