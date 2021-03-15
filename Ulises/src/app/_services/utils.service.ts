import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";

@Injectable({
    providedIn: 'root'
})
export class UtilsService extends BaseService {

    constructor() {
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
}