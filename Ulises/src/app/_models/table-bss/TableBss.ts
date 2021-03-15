export class TableBss {

    idtabla_bss!: number;
    name!: string;
    description!: string;
    FechaCreacion!: string;
    valor0!: number;
    valor1!: number;
    valor2!: number;
    valor3!: number;
    valor4!: number;
    valor5!: number;

    constructor() {
        return {
            idtabla_bss: -1,
            name: '',
            description: '',
            FechaCreacion: '',
            valor0: 0,
            valor1: 0,
            valor2: 0,
            valor3: 0,
            valor4: 0,
            valor5: 0
        } as TableBss;
    }
}