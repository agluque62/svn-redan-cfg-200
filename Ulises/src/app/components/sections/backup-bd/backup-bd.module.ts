// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParamsComponent } from './params/params.component';
import { RestoreComponent } from './restore/restore.component';
import { BkpinfoComponent } from './backup-service-info/bkpinfo.component';
import { BackupHistoricComponent } from './backup-historic/backup-historic.component';
import { BackupManualComponent } from './backup-manual/backup-manual.component';
import { CustomMaterialModule } from 'src/app/core/material.module';

//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// Components

@NgModule({
    declarations: [
        BkpinfoComponent,
        ParamsComponent,
        RestoreComponent,
        BackupHistoricComponent,
        BackupManualComponent,
        ParamsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        CustomMaterialModule,
        TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useFactory: (http: HttpClient) => {
                return new TranslateHttpLoader(http);
              },
              deps: [ HttpClient ]
            }
          }),
          HttpClientModule,
    ],
    exports: [
    ]
})

export class BackupBDModule { }
