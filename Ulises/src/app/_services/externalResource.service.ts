import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';

import { BaseService } from "./base.service";
import { ExternalResourceResponse } from "../_models/external-resource/ExternalResourceResponse";
import { ExternalResource } from "../_models/external-resource/ExternalResource";

@Injectable({
    providedIn: 'root'
})
export class ExternalResourceService extends BaseService {

    constructor(private readonly http: HttpClient) { 
        super();
    }

    createOrEditExternalResource(data: ExternalResource) {

        const url = `/externalResources/-1`;
        const formatData = {
            'alias': data.alias,
            'id_recurso': data.idrecursos_externos,
            'tipo': data.tipo.toString(),
            "uri": data.uri
        }

        return this.http.post<ExternalResourceResponse>(url, formatData, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getExternalResourcesByType(resourceType: number): Observable<ExternalResourceResponse> {

        const url = `/externalResources/${resourceType}`;
        return this.http.get<ExternalResourceResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getExternalResourcesById(resourceId: number): Observable<ExternalResourceResponse> {

        const url = `/externalResources/getResource/${resourceId}`;

        return this.http.get<ExternalResourceResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    deleteExternalResourcesById(resourceId: number): Observable<any> {

        const url = `/externalResources/getResource/${resourceId}`;
        return this.http.delete(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }
}
