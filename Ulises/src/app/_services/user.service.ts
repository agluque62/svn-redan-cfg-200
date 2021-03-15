import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';

import { AppSettings } from "../core/app.settings";
import { UsersResponse } from "../_models/users/UsersResponse";
import { GenericResponse } from "../_models/commons/GenericResponse";
import { BaseService } from "./base.service";
import { User } from "../_models/users/User";

@Injectable({
    providedIn: 'root'
})
export class UserService extends BaseService {

    constructor(private readonly http: HttpClient) {
        super();
    }

    getUsers(): Observable<UsersResponse> {
        const url = `/users`;

        return this.http.get<UsersResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    createUser(name: string, clave: string, perfil: number): Observable<GenericResponse> {
        const url = `/users/user`;

        const data: any = {
            'gateways': [],
            'user': {
                'name': name,
                'clave': clave,
                'perfil': perfil
            }
        };

        return this.http.post<GenericResponse>(url, data, this.buildOptions())
            .pipe(catchError(this.handleError));;
    }

    editUser(name: string, clave: string, perfil: number, idOperadores: number): Observable<any> {
        const url = `/users/user`;

        const data: any = {
            'gateways': [],
            'user': {
                'name': name,
                'clave': clave,
                'perfil': perfil,
                'idOperadores': idOperadores
            }
        };

        return this.http.put(url, data, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    deleteUser(id: number): Observable<any> {
        const url = `/users/${id}`;

        return this.http.delete(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    isRole(role: string): boolean {

        const profiles: {[key:string]: number} = {
            'VISUALIZATION': 1,
            'MANDO': 2,
            'ALARM_INHIBITION': 4,
            'ALARM_RECOGNITION': 8,
            'USER_MANAGEMENT': 16,
            'SUPERVISED_CONFIGURATION': 32,
            'ADMIN': 64,
            'GATEWAYS_VISUALIZATION': 128,
            'GATEWAYS_ADMIN': 256,
            'HISTORICS': 512,
            'BACKUP': 1024,
            'ACUSTIC_WARNING': 2048,
            'GATEWAYS': 4096,
            'SOFTWARE_UPDATE': 8192,
            'CONFIGURATION': 32768
        };

        const user: User = JSON.parse(localStorage.getItem('user') || '{}');

        if (role === 'ADMIN') {
            return (user.perfil & profiles['ADMIN']) ? true : false;
        }

        if (role === 'USER_MANAGEMENT') {
            return (user.perfil & profiles['USER_MANAGEMENT']) ? true : false;
        }

        if (role === 'SUPERVISED_CONFIGURATION') {
            return (user.perfil & profiles['SUPERVISED_CONFIGURATION']) ? true : false;
        }

        if (role === 'CONFIGURATION') {
            return (user.perfil & profiles['CONFIGURATION']) ? true : false;
        }

        if (role === 'BACKUP') {
            return (user.perfil & profiles['BACKUP']) ? true : false;
        }

        if (role === 'SOFTWARE_UPDATE') {
            return (user.perfil & profiles['SOFTWARE_UPDATE']) ? true : false;
        }

        if (role === 'VISUALIZATION') {
            return (user.perfil & profiles['VISUALIZATION']) ? true : false;
        }

        if (role === 'GATEWAYS_VISUALIZATION') {
            return (user.perfil & profiles['GATEWAYS_VISUALIZATION']) ? true : false;
        }

        if (role === 'MANDO') {
            return (user.perfil & profiles['MANDO']) ? true : false;
        }

        if (role === 'HISTORICS') {
            return (user.perfil & profiles['HISTORICS']) ? true : false;
        }

        if (role === 'ALARM_INHIBITION') {
            return (user.perfil & profiles['HISTORICS']) ? true : false;
        }

        if (role === 'ALARM_RECOGNITION') {
            return (user.perfil & profiles['HISTORICS']) ? true : false;
        }

        if (role === 'GATEWAYS') {
            return (user.perfil & profiles['GATEWAYS']) ? true : false;
        }

        if (role === 'GATEWAYS_ADMIN') {
            return (user.perfil & profiles['GATEWAYS_ADMIN']) ? true : false;
        }

        return false;
    }
}