// Modules
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { GatewayModule } from './configuration/gateway/gateway.module';

// Components
import { ConfigurationHomeComponent } from './configuration/configuration-home/configuration-home.component';
import { ConfigurationFormComponent } from './configuration/configuration-form/configuration-form.component';
import { AudioBssTableHomeComponent } from './audio-bss-table/audio-bss-table-home/audio-bss-table-home.component';
import { AudioBssTableFormComponent } from './audio-bss-table/audio-bss-table-form/audio-bss-table-form.component';
import { UsersHomeComponent } from './users/users-home/users-home.component';
import { UsersFormComponent } from './users/users-form/users-form.component';
import { ExtResourcesHomeComponent } from './ext-resources/ext-resources-home/ext-resources-home.component';
import { ExtResourcesFormComponent } from './ext-resources/ext-resources-form/ext-resources-form.component';
import { ConfigurationViewComponent } from './configuration/configuration-view/configuration-view.component';
import { SiteFormComponent } from './configuration/site-form/site-form.component';
import { ConfigurationCopyFormComponent } from './configuration/configuration-copy-form/configuration-copy-form.component';
import { ResourceHomeComponent } from './configuration/resource/resource-home/resource-home.component';
import { LocalFormComponent } from './configuration/resource/radio-forms/local/local-form.component';
import { RemoteFormComponent } from './configuration/resource/radio-forms/remote/remote-form.component';
import { ResourceComnsComponent } from './configuration/resource/resource-comns/resource-comns.component';
import { ResourceListsComponent } from './configuration/resource/resource-lists/resource-lists.component';
import { PPBLFormComponent } from './configuration/resource/telephonic-forms/pp_bl/pp_bl-form.component';
import { PPBCFormComponent } from './configuration/resource/telephonic-forms/pp_bc/pp_bc-form.component';
import { PPABFormComponent } from './configuration/resource/telephonic-forms/pp_ab/pp_ab-form.component';
import { LCENFormComponent } from './configuration/resource/telephonic-forms/lcen/lcen-form.component';
import { ATSFormComponent } from './configuration/resource/telephonic-forms/ats/ats-form.component';
import { ResourceNRangeComponent } from './configuration/resource/resource-nrange/resource-nrange.component';
import { ResourceCollateralsComponent } from './configuration/resource/resource-collaterals/resource-collaterals.component';
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';

registerLocaleData(localeES, 'es');

@NgModule({
  declarations: [
    ConfigurationHomeComponent,
    ConfigurationFormComponent,
    AudioBssTableHomeComponent,
    AudioBssTableFormComponent,
    UsersHomeComponent,
    UsersFormComponent,
    ExtResourcesHomeComponent,
    ExtResourcesFormComponent,
    ConfigurationViewComponent,
    SiteFormComponent,
    ConfigurationCopyFormComponent,
    ResourceHomeComponent,
    LocalFormComponent,
    RemoteFormComponent,
    ResourceComnsComponent,
    ResourceListsComponent,
    PPBLFormComponent,
    PPBCFormComponent,
    PPABFormComponent,
    ATSFormComponent,
    LCENFormComponent,
    ResourceNRangeComponent,
    ResourceCollateralsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    GatewayModule,
  ],
  exports: [
    ConfigurationHomeComponent,
    AudioBssTableHomeComponent,
    UsersHomeComponent,
    ExtResourcesHomeComponent
  ],
  providers: [
    DatePipe,
    { provide: LOCALE_ID, useValue: 'es-ES' },
  ]
})

export class ConfigurationModule {
}