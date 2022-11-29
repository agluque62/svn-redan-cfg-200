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
}