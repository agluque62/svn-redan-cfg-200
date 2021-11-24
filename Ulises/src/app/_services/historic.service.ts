import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
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

    private readonly filtersData: BehaviorSubject<any>;

    constructor(private readonly http: HttpClient, private readonly utilsService: UtilsService) {
        super();
        this.filtersData = new BehaviorSubject<any>(undefined);
    }

    checkIfExistschangesOnFilters() {
        return this.filtersData.asObservable();
    }

    setFilters(filters: any) {
        this.filtersData.next(filters);
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

    getHistoricsByDescription(description: string): Observable<HistoricsResponse> {
        const url = `/historics/description/${description}`;

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

    // IdIncidencia = 52;  // CREATE USER
    // IdIncidencia = 53;  // DELETE USER
    // IdIncidencia = 54;  // EDIT USER
    // IdIncidencia = 101; // CREATE CONFIG
    // IdIncidencia = 102; // DELETE CONFIG
    // IdIncidencia = 103; // UPDATE CONFIG
    // IdIncidencia = 107; // CREATE GATEWAY
    // IdIncidencia = 108; // DELETE GATEWAY
    // IdIncidencia = 109; // UPDATE GATEWAY
    // IdIncidencia = 110; // UPDATE GATEWAY PARAM
    // IdIncidencia = 113; // CREATE RESOURCE
    // IdIncidencia = 114; // DELETE RESOURCE
    // IdIncidencia = 115; // UPDATE RESOURCE
    // IdIncidencia = 119; // SUCCESS CONFIG FIELD ACTIVATION
    // IdIncidencia = 120; // ERROR CONFIG FIELD ACTIVATION
    // IdIncidencia = 121; // SUCCESS GATEWAY FIELD ACTIVATION
    // IdIncidencia = 122; // ERROR GATEWAY FIELD ACTIVATION


    updateCfg(IdIncidencia: number, username: string, title?: string) {

        title = title ? ' (' + title + ')' : ' '
        const url = `/historics`;
        const data = {
            IdHw: "CFG",
            IdIncidencia: IdIncidencia,
            Param: `${username}` + title,
            Usuario: `${this.getLoggedUsername()} (${this.getLoggedUserProfile()})`
        };

        return this.http.post(url, data, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

}