import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppSettings } from "../core/app.settings";

import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { LoginUser } from '../_models/login/LoginUser';
import { Version } from '../_models/login/Version';

@Injectable({
    providedIn: 'root'
})
export class LoginService extends BaseService {

    constructor(private readonly http: HttpClient) { 
        super();
    }

    login(username: string, password: string): Observable<LoginUser> {

        const url = `/login?username=${username}&password=${password}`;

        return this.http.post<LoginUser>(url, {}, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    logout(): Observable<any> {
        const url = `/logout`;

        return this.http.get(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    version(): Observable<Version> {

        const url = `/version`;
        return this.http.get<Version>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    alive(): Observable<any> {
        const url = `/alive`;
        return this.http.get(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    isAuthenticated(): Observable<any> {
        const url = '/auth';

        return this.http.get(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }
}