// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// Components
import { UlHeaderComponent } from './ul-header/ul-header.component';
import { UlSideMenuComponent } from './ul-side-menu/ul-side-menu.component';
import { UlFooterComponent } from './ul-footer/ul-footer.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    UlHeaderComponent,
    UlSideMenuComponent,
    UlFooterComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTreeModule,
    MatIconModule
  ],
  exports: [
    UlHeaderComponent,
    UlSideMenuComponent,
    UlFooterComponent
  ]
})

export class CommonsModule { }
