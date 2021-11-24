import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AppComponent } from 'src/app/app.component';
import * as data from '../../../../../../assets/profileslegend.json';

@Component({
    selector: 'users-profile-legend',
    templateUrl: './users-profile-legend.component.html',
    styleUrls: ['./users-profile-legend.component.scss']
})
export class UsersProfileLegendComponent implements OnInit {

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    dataSource: any;
    showSpinner = false;

    constructor() {
        this.retrieveData();
    }

    async ngOnInit() {

    }

    assignDataSource(data: any) {
        this.dataSource = new MatTableDataSource(data);
        setTimeout(() => this.dataSource.paginator = this.paginator);
    }

    retrieveData() {
        this.dataSource = data.roles;
        this.assignDataSource(this.dataSource);
    }
}
