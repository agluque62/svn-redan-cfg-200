// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
// Components
import { UlHeaderComponent } from './ul-header/ul-header.component';
import { UlSideMenuComponent } from './ul-side-menu/ul-side-menu.component';
import { UlFooterComponent } from './ul-footer/ul-footer.component';
import { AboutComponent } from './about/about.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateComponent } from './translate/translate.component';

@NgModule({
  declarations: [
    UlHeaderComponent,
    UlSideMenuComponent,
    UlFooterComponent,
    AboutComponent,
    TranslateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTreeModule,
    MatIconModule,
    MatProgressSpinnerModule,
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
    UlHeaderComponent,
    UlSideMenuComponent,
    UlFooterComponent,
    TranslateComponent
  ]
})

export class CommonsModule { }
