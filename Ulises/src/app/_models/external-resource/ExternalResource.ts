export class ExternalResource {
    idrecursos_externos!: number;
    uri!: string;
    tipo!: number;
    alias!: string;

    constructor() {
        return {
            idrecursos_externos: -1,
            uri: '',
            tipo: 3,
            alias: ''
        } as ExternalResource;
    }
}