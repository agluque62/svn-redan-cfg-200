import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';

import { AppSettings } from "../core/app.settings";
import { SiteGatewayResponse } from "../_models/configs/site/SiteGatewayResponse";
import { GenericResponse } from "../_models/commons/GenericResponse";
import { BaseService } from "./base.service";
import { DataResponse } from "../_models/commons/DataResponse";
import { ConfigurationUpdateResponse } from "../_models/configs/configuration/response/ConfigurationUpdateResponse";

@Injectable({
    providedIn: 'root'
})
export class SiteService extends BaseService {

    constructor(private readonly http: HttpClient) { 
        super();
    }

    getSiteGateways(id: number): Observable<SiteGatewayResponse> {
        const url = `/sites/${id}/gateways`;

        return this.http.get<SiteGatewayResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getSites(id: number): Observable<GenericResponse> {
        const url = `/sites/${id}`;

        return this.http.get<GenericResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    createSite(idConfig: number, name: string): Observable<GenericResponse> {
        const url = `/sites/${name}`;

        const data = {
            'cfg_idCFG': idConfig,
            'name': name
        };

        return this.http.post<GenericResponse>(url, data, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    updateSite(idSite: number, idConfig: number, name: string): Observable<ConfigurationUpdateResponse> {
        const url = `/sites/${idSite}/${idConfig}`;

        const data = {
            'name': name
        };

        return this.http.put<ConfigurationUpdateResponse>(url, data, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    deleteSite(idSite: number): Observable<DataResponse> {
        const url = `/sites/${idSite}`;

        return this.http.delete<DataResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }
    
    changeSite(idGtw: number, siteIdOrigin: number, siteIdDest: number): Observable<GenericResponse> {
        const url = `/gateways/changesite/${idGtw}/${siteIdOrigin}/${siteIdDest}`;

        return this.http.post<GenericResponse>(url, {}, this.buildOptions())
            .pipe(catchError(this.handleError));
    }
}