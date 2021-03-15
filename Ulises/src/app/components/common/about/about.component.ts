import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppSettings } from 'src/app/core/app.settings';
import { LocalConfig } from 'src/app/_models/local-config/LocalConfig';
import { ConfigService } from 'src/app/_services/config.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  localConfig!: LocalConfig;
  licenseEndpoint!: string;
  ready: boolean = false;

  constructor(public dialogRef: MatDialogRef<AboutComponent>, private readonly configService: ConfigService) { }

  async ngOnInit() {
    this.ready = false;
    this.localConfig = await this.configService.getLocalConfig().toPromise();
    this.licenseEndpoint = `/about`;
    this.ready = true;
  }
}
