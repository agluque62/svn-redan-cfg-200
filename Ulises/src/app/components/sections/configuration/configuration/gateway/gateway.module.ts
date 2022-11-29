// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { GridsterModule } from 'angular-gridster2';

// Components
import { GatewayHomeComponent } from './gateway-home/gateway-home.component';
import { GatewayGeneralComponent } from './gateway-general/gateway-general.component';
import { GatewayServicesComponent } from './gateway-services/gateway-services.component';
import { GatewayHardwareComponent } from './gateway-hardware/gateway-hardware.component';
import { GatewayHardwareTableComponent } from './gateway-hardware-table/gateway-hardware-table.component';
import { GatewayCopyFormComponent } from './gateway-copy-form/gateway-copy-form.component';
import { SpinnerModule } from 'src/app/components/common/spinner/spinner.module';

//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    GatewayHomeComponent,
    GatewayGeneralComponent,
    GatewayServicesComponent,
    GatewayHardwareComponent,
    GatewayHardwareTableComponent,
    GatewayCopyFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    GridsterModule,
    SpinnerModule,
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
    GatewayHomeComponent
  ],
  providers: []
})

export class GatewayModule {
}