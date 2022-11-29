import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/_services/config.service';
import { LocalConfig } from 'src/app/_models/local-config/LocalConfig';

@Component({
    selector: 'ul-header',
    templateUrl: './ul-header.component.html',
    styleUrls: ['./ul-header.component.scss']
})
export class UlHeaderComponent implements OnInit {

    public localConfig!: LocalConfig;
    public date: Date = new Date();
    public weekDay: string = '';
    public weekDays: string[] = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    ready: boolean = false;

    constructor(private readonly configService: ConfigService) {
        setInterval(() => {
            this.date = new Date();
            this.weekDay = this.weekDays[this.date.getDay()];
        }, 1);
    }

    async ngOnInit() {
        this.localConfig = await this.configService.getLocalConfig().toPromise();
        this.ready = true;
    }
}