// Routers
import { HomeRouter } from './home.routing';

// Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonsModule } from '../common/common.module';
import { ConfigurationModule } from '../sections/configuration/configuration.module';
import { MaintenanceModule } from '../sections/maintenance/maitenance.module';

// Components 
import { HomeComponent } from './home/home.component';
import { BackupBDModule } from '../sections/backup-bd/backup-bd.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        CommonsModule,
        HomeRouter,
        ConfigurationModule,
        MaintenanceModule,
        BackupBDModule
    ],
    providers: []
})

export class HomeModule {}