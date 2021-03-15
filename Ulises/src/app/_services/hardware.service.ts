import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';

import { GridsterItem } from "angular-gridster2";
import { DataResponse } from "../_models/commons/DataResponse";
import { BaseService } from "./base.service";

@Injectable({
    providedIn: 'root'
})
export class HardwareService extends BaseService {

    constructor(private readonly http: HttpClient) { 
        super();
    }

    updatePositions(idGateway: number, idResource: number, type: number, itemTarget: GridsterItem, itemSource: GridsterItem): Observable<DataResponse> {
        const url = `/hardware/positions/${idGateway}`;
        const data = {
            'SLAVES_idSLAVES': itemTarget.columna,
            'idPos': itemSource.columna,
            'rank': itemTarget.fila,
            'resId': idResource,
            'type': type,
            'dataFrom': {
                'SLAVES_idSLAVES': itemSource.columna,
                'idPos': itemSource.columna,
                'rank': itemSource.fila,
                'resId': idResource,
                'type': type
            }
        };
        
        return this.http.put<DataResponse>(url, data, this.buildOptions())
            .pipe(catchError(this.handleError));
    }
}