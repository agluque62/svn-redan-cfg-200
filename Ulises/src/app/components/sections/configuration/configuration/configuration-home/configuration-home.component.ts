import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { AppComponent } from "src/app/app.component";
import { Configuration } from "src/app/_models/configs/configuration/Configuration";
import { ConfigurationsResponse } from "src/app/_models/configs/configuration/response/ConfigurationsResponse";
import { ConfigService } from "src/app/_services/config.service";
import { DataService } from "src/app/_services/data.service";
import { LoginService } from "src/app/_services/login.service";
import { UserService } from "src/app/_services/user.service";
import { ConfigurationFormComponent } from "../configuration-form/configuration-form.component";

@Component({
    selector: 'configuration-home',
    templateUrl: './configuration-home.component.html',
    styleUrls: ['./configuration-home.component.scss']
})

export class ConfigurationHomeComponent implements OnInit {

    configurationsResponse!: ConfigurationsResponse;
    configurations!: Configuration[];

    dataSource!: MatTableDataSource<Configuration>;
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    visualizationMode: boolean = false;

    constructor(private readonly configService: ConfigService, private readonly app: AppComponent, public dialog: MatDialog,
        private readonly router: Router, private readonly dataService: DataService, private readonly userService: UserService,
        private readonly loginService: LoginService) { }

    async ngOnInit() {
        this.checkPermissions();
        this.retrieveConfigurations();
    }

    async checkPermissions() {
        if (this.notPermission()) {
            await this.loginService.logout().toPromise();
            this.app.destroyAlive();
            this.router.navigate(['/access']);
        }

        this.visualizationMode = (this.visualizationPermission()) ? true : false;
    }

    notPermission() {
        return !this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && !this.userService.isRole('VISUALIZATION')
            && !this.userService.isRole('SUPERVISED_CONFIGURATION');
    }

    visualizationPermission() {
        return (!this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && this.userService.isRole('VISUALIZATION'))
            || (!this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && this.userService.isRole('SUPERVISED_CONFIGURATION'));
    }

    createConfiguration() {
        const dialogRef = this.dialog.open(ConfigurationFormComponent, {
            data: new Configuration(),
            autoFocus: false
        });

        this.refreshAfterClosedDialog(dialogRef);
    }

    async refreshAfterClosedDialog(dialogRef: any) {
        dialogRef.afterClosed().subscribe(async () => {
            this.retrieveConfigurations();
            this.assignDataSource(this.configurations);
        });
    }

    async retrieveConfigurations() {
        try {
            this.configurationsResponse = await this.configService.getConfigurations().toPromise();
            if (this.configurationsResponse && this.configurationsResponse.result && this.configurationsResponse.result.length > 0) {
                this.configurations = [...this.configurationsResponse.result];
                this.assignDataSource(this.configurations);
            }
        } catch (error: any) {
            this.app.catchError(error);
        }
    }

    assignDataSource(configs: Configuration[]) {
        this.dataSource = new MatTableDataSource(configs);
        setTimeout(() => this.dataSource.paginator = this.paginator);
    }

    configSelected(config: Configuration) {
        this.dataService.updateDataConfigId(config.idCFG);
        this.router.navigate(['/home/config/' + config.idCFG]);
    }
}