import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatSelectModule,
        MatDialogModule,
        MatIconModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatTabsModule,
        DragDropModule,
        MatProgressSpinnerModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTooltipModule
    ],
    exports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatSelectModule,
        MatDialogModule,
        MatIconModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatTabsModule,
        DragDropModule,
        MatProgressSpinnerModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTooltipModule
    ],
    providers: [
        { provide: MatPaginatorIntl, useValue: getPaginatorIntl() }
    ]
})
export class CustomMaterialModule { }

export function getPaginatorIntl() {
    const paginatorIntl = new MatPaginatorIntl();

    paginatorIntl.itemsPerPageLabel = 'Items por página:';
    paginatorIntl.nextPageLabel = 'Siguiente página';
    paginatorIntl.previousPageLabel = 'Anterior página';

    return paginatorIntl;
}