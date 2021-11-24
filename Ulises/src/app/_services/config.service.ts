import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppSettings } from "../core/app.settings";

import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';

import { BaseService } from "./base.service";
import { LocalConfig } from "../_models/local-config/LocalConfig";
import { ConfigurationsResponse } from "../_models/configs/configuration/response/ConfigurationsResponse";
import { ConfigurationByIdResponse } from "../_models/configs/configuration/response/ConfigurationByIdRespose";
import { ConfigurationGatewaysResponse } from "../_models/configs/configuration/response/ConfigurationGatewaysResponse";
import { DataResponse } from "../_models/commons/DataResponse";
import { Configuration } from "../_models/configs/configuration/Configuration";
import { ConfigurationIp } from "../_models/configs/configuration/ConfigurationIp"
import { ConfigurationIpResponse } from "../_models/configs/configuration/response/ConfigurationIpResponse";
@Injectable({
    providedIn: 'root'
})
export class ConfigService extends BaseService {

    constructor(private readonly http: HttpClient) {
        super();
    }

    getAbout(): Observable<any> {
        const url = `/about`;

        return this.http.get<Blob>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getConfigurations(): Observable<ConfigurationsResponse> {
        const url = `/configurations`;

        return this.http.get<ConfigurationsResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getConfigurationById(id: number): Observable<ConfigurationByIdResponse> {
        const url = `/configurations/${id}`;

        return this.http.get<ConfigurationByIdResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    createConfiguration(name: string, description: string, activa: number): Observable<any> {
        const url = `/configurations/cfg`;

        const data = {
            'name': name,
            'description': description,
            'activa': activa ? 1 : 0
        };

        return this.http.post<any>(url, data, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    checkConfigurationName(id: number, name: string): Observable<DataResponse> {
        const url = `/configurations/checkConfigName/${name}/${id}`;

        return this.http.get<DataResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    checkConfigIp(ip: string, idCFG: number): Observable<ConfigurationIpResponse> {
        const url = `/configurations/checkConfigIp/${ip}/${idCFG}`;

        return this.http.get<ConfigurationIpResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    updateConfiguration(configuration: Configuration): Observable<any> {
        const url = `/configurations/${configuration.idCFG}`;

        const data = {
            'activa': configuration.activa ? 1 : 0,
            'description': configuration.description,
            'idCFG': configuration.idCFG,
            'name': configuration.name
        };

        return this.http.put<any>(url, data, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    deleteConfiguration(id: number): Observable<DataResponse> {
        const url = `/configurations/${id}`;

        return this.http.delete<DataResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    copyConfiguration(id: number, name: string, description: string): Observable<DataResponse> {
        const url = `/configurations/${id}/copy`;

        const data = {
            name: name,
            description: description
        }

        return this.http.post<DataResponse>(url, data, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getConfigGateways(id: number): Observable<ConfigurationGatewaysResponse> {
        const url = `/configurations/${id}/gateways`;

        return this.http.get<ConfigurationGatewaysResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getLocalConfig(): Observable<LocalConfig> {
        const url = `/localconfig`;

        return this.http.get<LocalConfig>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    updateLocalConfig(localConfig: LocalConfig): Observable<any> {
        const url = `/localconfig`;

        return this.http.post<LocalConfig>(url, localConfig, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getConfigPDF(id: number): Observable<any> {
        const url = `/configurations/SP_cfg/${id}/pdf`;

        return this.http.get<Blob>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getConfigExcel(id: number): Observable<any> {
        const url = `/configurations/SP_cfg/${id}/excel`;

        return this.http.get<Blob>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }
}