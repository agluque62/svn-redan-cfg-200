// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParamsComponent } from './params/params.component';
import { RestoreComponent } from './restore/restore.component';
import { BackupHistoricComponent } from './backup-historic/backup-historic.component';
import { BackupManualComponent } from './backup-manual/backup-manual.component';
import { CustomMaterialModule } from 'src/app/core/material.module';

// Components

@NgModule({
    declarations: [
        ParamsComponent,
        RestoreComponent,
        BackupHistoricComponent,
        BackupManualComponent,
        ParamsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        CustomMaterialModule
    ],
    exports: [
    ]
})

export class BackupBDModule { }
