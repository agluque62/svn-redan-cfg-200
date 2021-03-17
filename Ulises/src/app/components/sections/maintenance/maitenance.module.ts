// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerModule } from '../../common/spinner/spinner.module';

// Components
import { HistoricComponent } from './historic/historic.component';
import { ServerConfComponent } from './server-conf/server-conf.component';
import { VersionComponent } from './version/version.component';

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
    SpinnerModule
  ],
  exports: [
    VersionComponent
  ]
})

export class MaintenanceModule { }
