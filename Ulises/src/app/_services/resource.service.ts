import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';

import { AppSettings } from "../core/app.settings";
import { DataActiveResponse } from "../_models/commons/DataActiveResponse";
import { GenericResponse } from "../_models/commons/GenericResponse";
import { RadioResource } from "../_models/resource/RadioResource";
import { RangeResponse } from "../_models/resource/rangeResponse";
import { ResourceUpdateResponse } from "../_models/resource/ResourecUpdateResponse";
import { TelephoneResource } from "../_models/resource/TelephoneResource";
import { UriListResponse } from "../_models/resource/UriListResponse";
import { BaseService } from "./base.service";

@Injectable({
    providedIn: 'root'
})
export class ResourceService extends BaseService {

    constructor(private readonly http: HttpClient) {
        super();
    }

    getResource(idResource: number, type: number): Observable<RadioResource | TelephoneResource> {
        const url = `/gateways/getResource/${type}/${idResource}`;

        return this.http.get<RadioResource | TelephoneResource>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getTelResource(idResource: number, type: number): Observable<TelephoneResource> {
        const url = `/gateways/getResource/${type}/${idResource}`;

        return this.http.get<TelephoneResource>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getUriList(idResource: number): Observable<UriListResponse> {
        const url = `/resources/${idResource}/loadUriList`;

        return this.http.get<UriListResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    createResource(type: number, resource: any): Observable<ResourceUpdateResponse> {
        const url = `/gateways/insertNewResource/:resource2Insert/:resourceType`;

        const RADIO_TYPE = 1;
        const TELEPHONE_TYPE = 2;
        let data = {};

        if (type === RADIO_TYPE) {
            data = {
                'resourceType': type,
                'resource2Insert': {
                    'radio': resource,
                    'telephone': {}
                }
            };
        }

        if (type === TELEPHONE_TYPE) {
            data = {
                'resourceType': type,
                'resource2Insert': {
                    'radio': {},
                    'telephone': resource
                }
            };
        }

        return this.http.post<ResourceUpdateResponse>(url, data, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    updateResource(type: number, resource: any): Observable<ResourceUpdateResponse> {
        const url = `/gateways/updateResource/:resource2Insert/:resourceType/:resourceId`;

        const RADIO_TYPE = 1;
        const TELEPHONE_TYPE = 2;
        let data = {};

        if (type === RADIO_TYPE) {
            data = {
                'resource2Insert': {
                    'radio': resource,
                    'telephone': {}
                },
                'resourceId': resource.idrecurso_radio.toString(),
                'resourceType': type
            };
        }

        if (type === TELEPHONE_TYPE) {
            data = {
                'resource2Insert': {
                    'radio': {},
                    'telephone': resource
                },
                'resourceId': resource.idrecurso_telefono,
                'resourceType': type
            };
        }

        return this.http.put<ResourceUpdateResponse>(url, data, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    deleteRadioResource(idResource: number): Observable<DataActiveResponse> {
        const url = `/resources/deleteRadioResource/${idResource}`;

        return this.http.delete<DataActiveResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    deleteTelResource(idResource: number): Observable<DataActiveResponse> {
        const url = `/resources/deletePhoneResource/${idResource}`;

        return this.http.delete<DataActiveResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getCommunicationsSites(idConfig: number): Observable<GenericResponse> {
        const url = `/resources/remote/${idConfig}/null/null/null`;

        return this.http.get<GenericResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getCommunicationsGateways(idSite: number): Observable<GenericResponse> {
        const url = `/resources/remote/null/${idSite}/null/null`;

        return this.http.get<GenericResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getCommunicationsResources(idGtw: number, idResource: any): Observable<GenericResponse> {
        const url = `/resources/remote/null/null/${idGtw}/${idResource}`;

        return this.http.get<GenericResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getCommunicationsExtRadioResources(opt: number): Observable<GenericResponse> {
        const url = `/externalResources/radio/${opt}`;

        return this.http.get<GenericResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getCommunicationsExtTelResources(opt: number): Observable<GenericResponse> {
        const url = `/externalResources/${opt}`;

        return this.http.get<GenericResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }
    getCommunicationsFilteredRadioResources(opt: number, strOpt: string): Observable<GenericResponse> {
        const url = `/externalResources/filterResources/${opt}/${strOpt}`;

        return this.http.get<GenericResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }
    getCommunicationsFilteredTelResources(opt: number, strOpt: string): Observable<GenericResponse> {
        const url = `/externalResources/filterPhoneResources/${opt}/${strOpt}`;

        return this.http.get<GenericResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }
    getRanges(idResource: any): Observable<RangeResponse> {
        const url = `/resources/${idResource}/phoneParameters/range`;

        return this.http.get<RangeResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getCollateralGateways(configName: string, idSite: number): Observable<GenericResponse> {
        // http://localhost:5051/resources/tel/Prueba/4/null/null
        const url = `/resources/tel/${configName}/${idSite}/null/null`;

        return this.http.get<GenericResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }
    getTelResources(configName: string, idSite: number, gatewayId: number, opt: number): Observable<GenericResponse> {
        //http://localhost:5051/resources/tel/Prueba/4/19/2
        const url = `/resources/tel/${configName}/${idSite}/${gatewayId}/${opt}`;
        return this.http.get<GenericResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    checkIfNameIsValid(name: string, gatewayId: number, opt: number) {
        // /hardware/checkresname/test1/20/0 => NO_ERROR || NAME_DUP
        const url = `/hardware/checkresname/${name}/${gatewayId}/${opt}`;
        return this.http.get<GenericResponse>(url, this.buildOptions())
            .pipe(catchError(this.handleError));
    }

    getTlfResourceById(id: number) {
        const url = `/resources/${id}/getTlfResource`
        return this.http.get<any>(url, this.buildOptions())
            .pipe(catchError(this.handleError))
    }

    getRadioResourceById(id: number) {
        const url = `/resources/${id}/getRadioResource`
        return this.http.get<any>(url, this.buildOptions())
            .pipe(catchError(this.handleError))
    }

    importTlfResource(file: any, gtwId: number, column: number, row: number) {
        const url = `/resources/import/Tlf`        

        const data: any = {
            'resource': file,
            'gtwId':gtwId,
            'column':column,
            'row':row
        }

        return this.http.post<any>(url, data, this.buildOptions())
            .pipe(catchError(this.handleError))
    }

    importRadioResource(file: any, gtwId: number, column: number, row: number) {
        const url = `/resources/import/Radio`        

        const data: any = {
            'resource': file,
            'gtwId':gtwId,
            'column':column,
            'row':row
        }

        return this.http.post<any>(url, data, this.buildOptions())
            .pipe(catchError(this.handleError))
    }
}