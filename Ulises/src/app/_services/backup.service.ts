import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { BaseService } from "./base.service";

@Injectable({
    providedIn: 'root'
})
export class BackupService extends BaseService {

    constructor(private readonly http: HttpClient) {
        super();
    }

    makeManualBackup(host: string): Observable<any> {
        const url = `/backup/${host}`;

        return this.http.post<any>(url, {}, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getBackupLog(host: string): Observable<any> {
        const url = `/backup/${host}/log`;

        return this.http.get<any>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    deleteBackupLog(host: string): Observable<any> {
        const url = `/backup/${host}/log`;

        return this.http.post<any>(url, {}, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    changeConfig(host: string, data: any): Observable<any> {
        const url = `/backup/${host}/config`;

        return this.http.post<any>(url, data, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getConfig(host: string): Observable<any> {
        const url = `/backup/${host}/config`;

        return this.http.get<any>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }
}