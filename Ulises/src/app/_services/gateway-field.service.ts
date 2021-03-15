import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { GatewayField } from "../_models/field/GatewayField";
import { User } from "../_models/users/User";
import { BaseService } from "./base.service";

@Injectable({
    providedIn: 'root'
})
export class GatewayFieldService extends BaseService {

    constructor(private readonly http: HttpClient) { 
        super();
    }

    getGatewayField(gatewayId: number, gatewayIp: string): Observable<any> {

        const url = `/gateways/${gatewayId}/field/${gatewayIp}`;

        return this.http.get<GatewayField>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    updateGatewayField(gatewayId: number, gatewayIp: string, gateway: GatewayField): Observable<any> {

        const user: User = JSON.parse(localStorage.getItem('user') || '{}');
                
        const url = `/gateways/${gatewayId}/field/${gatewayIp}`;

        const data = {
            username: user.name,
            data: gateway
        };

        return this.http.post<any>(url, data, this.buildOptions())
            .pipe(catchError(this.handleError));
    }
}