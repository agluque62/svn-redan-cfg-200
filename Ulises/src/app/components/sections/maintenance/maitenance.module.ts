// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';

// Components
import { HistoricComponent } from './historic/historic.component';
import { ServerConfComponent } from './server-conf/server-conf.component';
import { VersionComponent } from './version/version.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HistoricComponent,
    ServerConfComponent,
    VersionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    HttpClientModule,
  ],
  exports: [
    VersionComponent
  ]
})

export class MaintenanceModule { }
