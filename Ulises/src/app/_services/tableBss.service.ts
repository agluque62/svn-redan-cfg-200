import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppSettings } from "../core/app.settings";

import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';

import { BaseService } from "./base.service";
import { TableBssResponse } from "../_models/table-bss/TableBssResponse";
import { TableBss } from "../_models/table-bss/TableBss";
import { LoginUser } from "../_models/login/LoginUser";
import { TableBssEditRequest } from "../_models/table-bss/TableBssEditRequest";

@Injectable({
    providedIn: 'root'
})
export class TableBSSService extends BaseService {

    constructor(private readonly http: HttpClient) { 
        super();
    }

    getTableAudioBss(): Observable<TableBssResponse> {

        const url = `/tableBss`;

        return this.http.get<TableBssResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    editTableAudioBss(tableBss: TableBss): Observable<TableBssResponse> {

        const url = `/tableBss`;
        const user: LoginUser = JSON.parse(localStorage.getItem('user') || '{}');

        const data: TableBssEditRequest = {
            TableValues: [tableBss.valor0.toString(), tableBss.valor1.toString(), tableBss.valor2.toString(), tableBss.valor3.toString(),
            tableBss.valor4.toString(), tableBss.valor5.toString()],
            UsuarioModificacion: +user.name,
            description: tableBss.description,
            idtabla_bss: tableBss.idtabla_bss,
            name: tableBss.name
        }

        return this.http.put<TableBssResponse>(url, data, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    createTableAudioBss(tableBss: TableBss): Observable<any> {

        const url = `/tableBss`;
        const user: LoginUser = JSON.parse(localStorage.getItem('user') || '{}');

        const data: TableBssEditRequest = {
            TableValues: [tableBss.valor0.toString(), tableBss.valor1.toString(), tableBss.valor2.toString(), tableBss.valor3.toString(),
            tableBss.valor4.toString(), tableBss.valor5.toString()],
            UsuarioModificacion: +user.name,
            description: tableBss.description,
            idtabla_bss: tableBss.idtabla_bss,
            name: tableBss.name
        }

        return this.http.post<TableBssEditRequest>(url, data, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    deleteTableAudioBss(tableBss: TableBss): Observable<TableBssResponse> {

        const url = `/tableBss/${tableBss.idtabla_bss}`;

        return this.http.delete<TableBssResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }
}