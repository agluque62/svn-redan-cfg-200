export class GatewayFieldResourcePhone {
    tipo!: number;
    lado!: number;
    t_eym!: number;
    h2h4!: number;
    ladoeym!: number;
    modo!: number;
    r_automatica!: number;
    no_test_local!: string;
    no_test_remoto!: string;
    it_release!: number;
    uri_remota!: string;
    detect_vox!: number;
    umbral_vox!: number;
    tm_inactividad!: number;
    superv_options!: number;
    tm_superv_options!: number;
    colateral_scv!: number;
    ats_rangos_dst!: Range[];
    ats_rangos_org!: Range[];
    iT_Int_Warning!: number;
    iTmLlamEntrante!: number;
    iTmDetFinLlamada!: number;
    TReleaseBL!: number;
    iDetCallerId!: number;
    iTmCallerId!: number;
    iDetInversionPol!: number;
    iPeriodoSpvRing!: number;
    iFiltroSpvRing!: number;
    iDetDtmf!: number;
    iDetLineaAB!: number;
    iEnableNoED137!: number;
    itiporespuesta!: number;
    additional_uri_remota!: string;
    additional_superv_options!: number;
    additional_itiporespuesta!: number;
    idRed!: string;
    idTroncal!: string;
    listaEnlacesInternos!: any[];
    ats_rangos_operador!: any[];
    ats_rangos_privilegiados!: any[];
    ats_rangos_directos_ope!: any[];
    ats_rangos_directos_pri!: any[];
    ats_user!: string;
}

interface Range {
    inicial: string;
    final: string;
}