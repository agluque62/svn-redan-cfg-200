import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { AppSettings } from "../core/app.settings";
import { HistoricsCodeResponse } from "../_models/historics/HistoricsCodeResponse";
import { HistoricsComponentResponse } from "../_models/historics/HistoricsComponentResponse";
import { HistoricsGroupResponse } from "../_models/historics/HistoricsGroupResponse";
import { HistoricsResponse } from "../_models/historics/HistoricsResponse";
import { BaseService } from "./base.service";
import { UtilsService } from "./utils.service";

@Injectable({
    providedIn: 'root'
})
export class HistoricService extends BaseService {

    constructor(private readonly http: HttpClient, private readonly utilsService: UtilsService) {
        super();
    }

    private getLoggedUsername() {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        return user && user.name;
    }

    private getLoggedUserProfile() {        
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        return user && this.utilsService.getProfileLabel(user.perfil);
    }

    getHistorics(): Observable<HistoricsResponse> {
        const url = `/historics`;

        return this.http.get<HistoricsResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getHistoricsByEvents(): Observable<HistoricsResponse> {
        const url = `/historics/events/`;
    
        return this.http.get<HistoricsResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getHistoricsByAlarms(): Observable<HistoricsResponse> {
        const url = `/historics/alarms/`;
    
        return this.http.get<HistoricsResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getHistoricsByDate(startDate: string, endDate: string, start: number = 0, howMany: number = 0): Observable<HistoricsResponse> {
        const url = `/historics/date/${startDate}/${endDate}/${start}/${howMany}`;
    
        return this.http.get<HistoricsResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getHistoricsByGroup(group: string, startDate: string, endDate: string, start: number = 0, howMany: number = 0): Observable<HistoricsResponse> {
        const url = `/historics/group/${group}/${startDate}/${endDate}/${start}/${howMany}`;
    
        return this.http.get<HistoricsResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getHistoricsByComponent(component: string, startDate: string, endDate: string, start: number = 0, howMany: number = 0): Observable<HistoricsResponse> {
        const url = `/historics/component/${component}/${startDate}/${endDate}/${start}/${howMany}`;
    
        return this.http.get<HistoricsResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getHistoricsByRegister(register: string, startDate: string, endDate: string, start: number = 0, howMany: number = 0): Observable<HistoricsResponse> {
        const url = `/historics/code/${register}/${startDate}/${endDate}/${start}/${howMany}`;
    
        return this.http.get<HistoricsResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getGroups(): Observable<HistoricsGroupResponse> {
        const url = `/historics/groups`;

        return this.http.get<HistoricsGroupResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getComponents(): Observable<HistoricsComponentResponse> {
        const url = `/historics/components`;

        return this.http.get<HistoricsComponentResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getCodes(): Observable<HistoricsCodeResponse> {
        const url = `/historics/codes`;

        return this.http.get<HistoricsCodeResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    createUser(username: string): Observable<any> {
        const url = `/historics`;

        const data = {
            IdHw: "CFG",
            IdIncidencia: 52,
            Param: username, 
            Usuario: `${this.getLoggedUsername()} (${this.getLoggedUserProfile()})`
        };
        
        return this.http.post(url, data, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    editUser(username: string): Observable<any> {
        const url = `/historics`;

        const data = {
            IdHw: "CFG",
            IdIncidencia: 54,
            Param: username, 
            Usuario: `${this.getLoggedUsername()} (${this.getLoggedUserProfile()})`
        };
        
        return this.http.post(url, data, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    createGateway(gatewayname: string): Observable<any> {
        const url = `/historics`;

        const data = {
            IdHw: "CFG",
            IdIncidencia: 107,
            Param: gatewayname, 
            Usuario: `${this.getLoggedUsername()} (${this.getLoggedUserProfile()})`
        };
        
        return this.http.post(url, data, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    updateGateway(gatewayname: string): Observable<any> {
        const url = `/historics`;

        const data = {
            IdHw: "CFG",
            IdIncidencia: 109,
            Param: gatewayname, 
            Usuario: `${this.getLoggedUsername()} (${this.getLoggedUserProfile()})`
        };
        
        return this.http.post(url, data, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    deleteGateway(gatewayname: string): Observable<any> {
        const url = `/historics`;
        
        const data = {
            IdHw: "CFG",
            IdIncidencia: 108,
            Param: gatewayname, 
            Usuario: `${this.getLoggedUsername()} (${this.getLoggedUserProfile()})`
        };
        
        return this.http.post(url, data, this.buildOptions())
            .pipe(catchError(this.handleError));
    }
    
    createResource(resourcename: string): Observable<any> {
        const url = `/historics`;
        
        const data = {
            IdHw: "CFG",
            IdIncidencia: 113,
            Param: resourcename, 
            Usuario: `${this.getLoggedUsername()} (${this.getLoggedUserProfile()})`
        };
        
        return this.http.post(url, data, this.buildOptions())
            .pipe(catchError(this.handleError));
    }
    
    updateResource(resourcename: string): Observable<any> {
        const url = `/historics`;
        
        const data = {
            IdHw: "CFG",
            IdIncidencia: 116,
            Param: resourcename, 
            Usuario: `${this.getLoggedUsername()} (${this.getLoggedUserProfile()})`
        };
        
        return this.http.post(url, data, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    deleteResource(resourcename: string): Observable<any> {
        const url = `/historics`;
        
        const data = {
            IdHw: "CFG",
            IdIncidencia: 114,
            Param: resourcename, 
            Usuario: `${this.getLoggedUsername()} (${this.getLoggedUserProfile()})`
        };
        
        return this.http.post(url, data, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    successConfigFieldActivation(resourcename: string): Observable<any> {
        const url = `/historics`;
        
        const data = {
            IdHw: "CFG",
            IdIncidencia: 119,
            Param: resourcename, 
            Usuario: `${this.getLoggedUsername()}`
        };
        
        return this.http.post(url, data, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    errorConfigFieldActivation(resourcename: string): Observable<any> {
        const url = `/historics`;
        
        const data = {
            IdHw: "CFG",
            IdIncidencia: 120,
            Param: resourcename, 
            Usuario: `${this.getLoggedUsername()}`
        };
        
        return this.http.post(url, data, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    succesGatewayFieldActivation(resourcename: string): Observable<any> {
        const url = `/historics`;
        
        const data = {
            IdHw: "CFG",
            IdIncidencia: 121,
            Param: resourcename, 
            Usuario: `${this.getLoggedUsername()}`
        };
        
        return this.http.post(url, data, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    errorGatewayFieldActivation(resourcename: string): Observable<any> {
        const url = `/historics`;
        
        const data = {
            IdHw: "CFG",
            IdIncidencia: 122,
            Param: resourcename, 
            Usuario: `${this.getLoggedUsername()}`
        };
        
        return this.http.post(url, data, this.buildOptions())
            .pipe(catchError(this.handleError));
    }
}