import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { ConfigurationIpResponse } from 'src/app/_models/configs/configuration/response/ConfigurationIpResponse';
import { ConfigurationIp } from 'src/app/_models/configs/configuration/ConfigurationIp';
import { AlertService } from 'src/app/_services/alert.service';
import { ConfigService } from 'src/app/_services/config.service';
import { GatewayService } from 'src/app/_services/gateway.service';


@Injectable({
    providedIn: 'root'
})
export class UtilsService extends BaseService {
    configurationIpResponse!: ConfigurationIpResponse;
    configurationIp!: ConfigurationIp[];

    constructor(private readonly alertService: AlertService, private readonly configService: ConfigService, private readonly gatewayService: GatewayService) {
        super();
    }

    getProfileLabel(profile: number) {
        const VISUALIZATION_MASC = 1;
        const USER_MGMT = 16;
        const ADMIN = 64;
        const HISTORIC = 512;
        const BACKUP = 1024;
        const CONFIG = 32768;
        const SUPERVISED = 32;
        let profileText = '';
        profileText += ((profile & VISUALIZATION_MASC) ? "v" : "");
        profileText += ((profile & USER_MGMT) ? "u" : "");
        profileText += ((profile & ADMIN) ? "a" : "");
        profileText += ((profile & HISTORIC) ? "h" : "");
        profileText += ((profile & BACKUP) ? "b" : "");
        profileText += ((profile & CONFIG) ? "c" : "");
        profileText += ((profile & SUPERVISED) ? "s" : "");
        return profileText;
    }

    async checkIps(ip: any, configId: any) {
        this.configurationIpResponse = await this.configService.checkConfigIp(ip, configId).toPromise();
        return this.configurationIp = [...this.configurationIpResponse.result];
    }


    loadIndexOfResource(RadioResAgent: any, PhoneResType: any, AudioMode: any, BssType: any) {
        if (RadioResAgent != undefined) {            // Radio Resource
            switch(RadioResAgent){
                case 0:  // Local Simple
                case 1:  // Local 1+1
                case 5:  // TX
                    return AudioMode == 1 ? 1 : 2;
                case 2:  // Local ME simple
                case 3:  // Local ME 1+1
                    return 8;
                case 4:  // Transceptor
                case 6:  // Rx.
                    return AudioMode == 1 ? ( BssType == 2 ? 1 : 2) : 2;
                default:
                    return 0;
            }

        } else if (PhoneResType != undefined) {     // Phone Resource
            switch(PhoneResType){
                case 0:     // 2H BL
                case 1:     // 2H BC
                case 2:     // 2H AB
                case 7:     // 2H TUNNEL
                    return 1;
                case 3:     // 4H R2
                case 4:     // 4H N5
                case 5:     // 4H LC
                    return 2;
                default:
                    return 0;
           }
        } else {
            return 0;
        }
    }

    loadIndexOfGatewayt(RadioResList: any, PhoneResList: any){
        let index = 0;
        RadioResList.forEach((res: any) => {
            index += this.loadIndexOfResource(res.tipo_agente, undefined, res.precision_audio, res.metodo_bss);
        });
        PhoneResList.forEach((res: any) => {
            index += this.loadIndexOfResource(undefined, res.tipo_interfaz_tel, res.precision_audio, undefined );
        });
        return index;
    }

    resIdTable = [
        {index: 0, id: "SCV-SIM"},
        {index: 1, id: "SCV-1+1"},
        {index: 2, id: "SCV-M-SIM"},
        {index: 3, id: "SCV-M-1+1"},
        {index: 4, id: "GRS-RxTx"},
        {index: 5, id: "GRS-Tx"},
        {index: 6, id: "GRS-Rx"},
        {index: 10, id: "TEL-BL"},
        {index: 11, id: "TEL-BC"},
        {index: 12, id: "TEL-AB"},
        {index: 13, id: "TEL-R2"},
        {index: 14, id: "TEL-N5"},
        {index: 15, id: "TEL-LC"},
        {index: 17, id: "TEL-TUNNEL"}
    ];
    toolTipID(RadioResAgent: any, PhoneResType: any, AudioMode: any, BssType: any){
        var loadIndex = this.loadIndexOfResource(RadioResAgent, PhoneResType, AudioMode, BssType);
        var strIndex = RadioResAgent == undefined ? 10 + PhoneResType : RadioResAgent;
        var idEntry = this.resIdTable.find((i: any) => i.index == strIndex);        
        return `${idEntry == undefined ? "???" : idEntry.id} (${loadIndex})`;
    }
}