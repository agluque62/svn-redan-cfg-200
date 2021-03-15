import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';

import { AppSettings } from "../core/app.settings";
import { DataResponse } from "../_models/commons/DataResponse";
import { GatewayExport } from "../_models/configs/gateway/GatewayExport";
import { GatewayIp } from "../_models/configs/gateway/GatewayIpResponse";
import { GatewayPost } from "../_models/configs/gateway/GatewayPost";
import { GatewayPostResponse } from "../_models/configs/gateway/GatewayPostResponse";
import { GatewayResponse } from "../_models/configs/gateway/GatewayResponse";
import { GatewayHardwareResponse } from "../_models/configs/gateway/hardware/GatewayHardwareResponse";
import { GatewayAvailableServicesResponse } from "../_models/configs/gateway/services/GatewayAvailableServicesResponse";
import { GatewayCopyResponse } from "../_models/configs/gateway/services/GatewayCopyResponse";
import { GatewayField } from "../_models/field/GatewayField";
import { BaseService } from "./base.service";

@Injectable({
    providedIn: 'root'
})
export class GatewayService extends BaseService {

    constructor(private readonly http: HttpClient) { 
        super();
    }

    updateTableBss(tableBssId: number): Observable<any> {
        const url = `/gateways/updateTable/${tableBssId}`;

        return this.http.get(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getGatewayById(gatewayId: number): Observable<GatewayResponse> {
        const url = `/gateways/${gatewayId}`;

        return this.http.get<GatewayResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getGatewayIpList(gatewayId: number): Observable<GatewayIp[]> {
        const url = `/gateways/iplist/${gatewayId}`;

        return this.http.get<GatewayIp[]>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getGatewayHardware(gatewayId: number): Observable<GatewayHardwareResponse> {
        const url = `/gateways/${gatewayId}/hardwareResume`;

        return this.http.get<GatewayHardwareResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getGatewayCopy(gatewayId: number): Observable<GatewayCopyResponse> {
        const url = `/gateways/getServiceData/${gatewayId}`;

        return this.http.get<GatewayCopyResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getGatewayAll(gatewayId: number): Observable<GatewayField> {
        const url = `/gateways/getAll/${gatewayId}`;

        return this.http.get<GatewayField>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getAvailableServices(): Observable<GatewayAvailableServicesResponse> {
        const url = `/gateways/availableservices`;

        return this.http.get<GatewayAvailableServicesResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    checkIpAddress(ip: string, idConfig: any, idGtw?: any): Observable<string> {
        const idGtwOpt = (idGtw) ? idGtw.toString() : 'noData';
        const url = `/gateways/checkipaddr/${ip}/${idConfig}/${idGtwOpt}`;

        return this.http.get<string>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    checkName(name: string, idConfig: any, idGtw?: any): Observable<string> {
        const idGtwOpt = (idGtw) ? idGtw.toString() : 'noData';
        const url = `/gateways/checkgtwname/${name}/${idConfig}/${idGtwOpt}`;

        return this.http.get<string>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    createGtw(idSite: number, gateway: GatewayPost): Observable<GatewayPostResponse> {
        const url = `/gateways/createNewGateway/:newGateway/:idSite`;
        const data = {
            'idSite': idSite,
            'newGateway': gateway
        };
        
        return this.http.post<GatewayPostResponse>(url, data, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    updateGtw(idGtw: number, gateway: GatewayPost): Observable<GatewayPostResponse> {
        const url = `/gateways/updateGateway/:newGateway/:idGtw`;
        const data = {
            'idGtw': idGtw,
            'newGateway': gateway
        };
        
        return this.http.post<GatewayPostResponse>(url, data, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    copyGtw(idGtw: number, newGtwName: string, ipv: string, ipCpu0: string, ipCpu1: string): Observable<any> {
        const url = `/gateways/${idGtw}/${newGtwName}/${ipCpu0}/${ipCpu1}/${ipv}`;

        return this.http.request<any>('COPY', url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    deleteGtw(id: number): Observable<any> {
        const url = `/gateways/${id}`;

        return this.http.delete(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    importGtw(file: File, configId: number, siteId: number): Observable<any> {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        const url = `/`;

        const formData = new FormData();
        formData.append('user', user.name);
        formData.append('perfil', user.perfil);
        formData.append('config', configId.toString());
        formData.append('site', siteId.toString());
        formData.append('upl', file);

        return this.http.post(url, formData, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    exportGtw(idGtw: number): Observable<GatewayExport> {
        const url = `/configurations/export/${idGtw}`;

        return this.http.get<GatewayExport>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }
}