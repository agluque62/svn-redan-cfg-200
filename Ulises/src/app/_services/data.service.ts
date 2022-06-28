import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    error!: string;
    gatewayPreviousUrl!: string;

    getDataConfigId(): number {        
        return Number(JSON.parse(localStorage.getItem('configId') || '-1'));
    }

    getDataSiteId(): number {
        return Number(JSON.parse(localStorage.getItem('siteId') || '-1'));
    }

    getDataGatewayTitle(): string {
        return localStorage.getItem('gatewayTitle') || 'Not Found';
    }

    getDataError(): string {
        return this.error;
    }

    getDataSlot() {
        return JSON.parse(localStorage.getItem('slot') || '-1');
    }

    getDataGatewayPreviousUrl(): string {
        return this.gatewayPreviousUrl;
    }

    updateDataConfigId(data: number) {
        localStorage.setItem('configId', JSON.stringify(data));
    }

    updateDataSiteId(data: number) {
        localStorage.setItem('siteId', JSON.stringify(data));
    }

    updateDataGatewayTitle(data: string) {
        localStorage.setItem('gatewayTitle', data);
    }

    updateDataError(error: string) {
        this.error = error;
    }

    updateDataSlot(slot: any) {
        localStorage.setItem('slot', JSON.stringify(slot));
    }

    updateDataGatewayPreviousUrl(url: string) {
        this.gatewayPreviousUrl = url;
    }
}