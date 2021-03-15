import { HttpHeaders } from "@angular/common/http";
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BaseService {

    constructor() { }

    protected buildOptions() {
        return {
            headers: new HttpHeaders({
                'Accept': '*/*',
                'Access-Control-Allow-Origin': '*'
            })
        };
    }

    protected buildGatewayOptions() {
        return {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'RedanClient': 'SERVER',
            })
        };
    }
    
    handleError(error: { error: { message: string; }; status: any; message: any; }) {
 
        const UNAUTH_STATUS_CODE: number = 401;
        let errorMessage = '';
        let errorCode;

        if(error.error instanceof ErrorEvent) {
          errorMessage = error.error.message;
        } else {
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          errorCode = error.status;
        }

        if (errorCode != UNAUTH_STATUS_CODE) {
            window.alert(errorMessage);
        }
        return throwError(error);
     }
}