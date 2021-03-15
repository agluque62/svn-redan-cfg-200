export class RadioResource {
    ajuste_ad!: number | undefined;
    ajuste_da!: number | undefined;
    clave_registro!: string;
    climax_bss!: number;
    codec!: number;
    cola_bss_sqh!: number;
    evento_ptt_squelch!: number;
    frecuencia!: string;
    habilita_grabacion!: number;
    idrecurso_radio!: number;
    indicacion_entrada_audio!: number;
    indicacion_salida_audio!: number;
    metodo_bss!: number;
    metodo_climax!: number;
    nombre!: string;
    precision_audio!: number;
    prioridad_ptt!: number;
    prioridad_sesion_sip!: number;
    restriccion_entrantes!: number;
    retardo_fijo_climax!: number;
    retraso_interno_grs!: number;
    tabla_bss_id!: number;
    tipo_agente!: number;
    tipo_climax!: number;
    umbral_vad!: number;
    ventana_bss!: number;
    fila!: string;
    columna!: string;
    pasarela_id!: number;
    listaUris!: any;

    constructor() {
        this.ajuste_ad = 0;
        this.ajuste_da = 0;
        this.climax_bss = 0;
        this.codec = 0;
        this.cola_bss_sqh = 500;
        this.evento_ptt_squelch = 0;
        this.habilita_grabacion = 1;
        this.indicacion_entrada_audio = 0;
        this.indicacion_salida_audio = 0;
        this.metodo_bss = 0;
        this.metodo_climax = 0;
        this.precision_audio = 0;
        this.prioridad_ptt = 0;
        this.prioridad_sesion_sip = 0;
        this.restriccion_entrantes = 0;
        this.retardo_fijo_climax = 100;
        this.retraso_interno_grs = 10;
        this.tabla_bss_id = 0;
        this.tipo_agente = 0;
        this.tipo_climax = 0;
        this.umbral_vad = -35;
        this.ventana_bss = 0;
        this.listaUris = [];
    }
}