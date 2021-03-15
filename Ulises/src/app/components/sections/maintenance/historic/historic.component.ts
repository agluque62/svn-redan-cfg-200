import { Component, OnInit, ViewChild } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AppComponent } from 'src/app/app.component';
import { Historic } from 'src/app/_models/historics/Historic';
import { HistoricsCode } from 'src/app/_models/historics/HistoricsCode';
import { HistoricsComponent } from 'src/app/_models/historics/HistoricsComponent';
import { HistoricsGroup } from 'src/app/_models/historics/HistoricsGroup';
import { AlertService } from 'src/app/_services/alert.service';
import { HistoricService } from 'src/app/_services/historic.service';
import { NgxMatDateAdapter, NgxMatDateFormats, NGX_MAT_DATE_FORMATS } from '@angular-material-components/datetime-picker';
import { NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular-material-components/moment-adapter';
import { CustomDateAdapter } from 'src/app/core/customDateAdapter';
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { UserService } from 'src/app/_services/user.service';
import { LoginService } from 'src/app/_services/login.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

const CUSTOM_DATE_FORMATS: NgxMatDateFormats = {
    parse: {
        dateInput: "l, LTS"
    },
    display: {
        dateInput: "l, LTS",
        monthYearLabel: "MMM YYYY",
        dateA11yLabel: "LL",
        monthYearA11yLabel: "MMMM YYYY"
    }
};

@Component({
    selector: 'app-historic',
    templateUrl: './historic.component.html',
    styleUrls: ['./historic.component.scss'],
    providers: [
        { provide: NgxMatDateAdapter, useClass: CustomDateAdapter, deps: [MAT_DATE_LOCALE, NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
        { provide: NGX_MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS }
    ]
})
export class HistoricComponent implements OnInit {

    filters: string[] = ['Eventos', 'Alarmas', 'Fecha', 'Grupo', 'Componente', 'Tipo de registro'];
    selectedFilter: string | null = null;

    selectedGroup!: HistoricsGroup;
    selectedComponent!: HistoricsComponent;
    selectedRegister!: HistoricsCode;

    groupOptions!: HistoricsGroup[];
    componentOptions!: HistoricsComponent[];
    codeOptions!: HistoricsCode[];

    historics!: Historic[];

    dateStart!: Date;
    dateEnd!: Date;

    dataSource!: MatTableDataSource<Historic>;
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    @ViewChild('pickerStart') pickerStart: any;
    @ViewChild('pickerEnd') pickerEnd: any;

    @ViewChild('pickerStartDate') pickerStartDate: any;
    @ViewChild('pickerEndDate') pickerEndDate: any;

    public dateControl = new FormControl(new Date());

    ready: boolean = false;

    constructor(private readonly historicService: HistoricService, private readonly alertService: AlertService, private readonly app: AppComponent,
        private readonly userService: UserService, private readonly loginService: LoginService, private readonly router: Router) { }

    ngOnInit() {
        this.checkPermissions();
        this.retrieveHistorics();
        this.getGroups();
        this.getCodes();
        this.getComponents();
    }

    async checkPermissions() {
        if (this.notPermission()) {
            await this.loginService.logout().toPromise();
            this.app.destroyAlive();
            this.router.navigate(['/access']);
        }
    }

    notPermission() {
        return !this.userService.isRole('ADMIN') && !this.userService.isRole('HISTORICS');
    }

    changeFilter() {

        if (this.selectedFilter === 'Eventos') {
            this.retrieveHistoricsByEvents();
        }

        if (this.selectedFilter === 'Alarmas') {
            this.retrieveHistoricsByAlarms();
        }

        if (this.selectedFilter === 'Fecha') {
            this.initDefaultDates();
            this.retrieveHistoricsByDate();
        }

        if (this.selectedFilter === 'Grupo') {
            this.initDefaultDates();
            this.retrieveHistoricsByGroup();
        }

        if (this.selectedFilter === 'Componente') {
            this.initDefaultDates();
            this.retrieveHistoricsByComponent();
        }

        if (this.selectedFilter === 'Tipo de registro') {
            this.initDefaultDates();
            this.retrieveHistoricsByRegister();
        }
    }

    initDefaultDates() {
        this.dateEnd = new Date();
        this.dateStart = new Date(this.dateEnd.getFullYear(), this.dateEnd.getMonth(), this.dateEnd.getDate(), 0, 0, 0);
    }

    downloadPDF() {
        const header = [["Fecha-\nHora", 'Grupo', 'Componente', 'Descripción', 'Tipo', 'Reconocida', 'Tipo Alarma', 'Usuario']];
        let body: any = [];
        this.dataSource.data.forEach(hist => {
            body.push([hist.FechaHora, hist.TipoHw, hist.IdHw, hist.Descripcion, hist.Alarma && hist.Alarma === 1 ? 'Alarma' : 'Evento', hist.Reconocida, hist.TipoAlarma, hist.Usuario])
        });

        const doc = new jsPDF('l');
        const histLabel = this.selectedFilter === null ?
            ': TODOS' : this.selectedFilter === 'Eventos' || this.selectedFilter === 'Alarmas' ?
                ': TODOS LOS EVENTOS' : this.selectedFilter === 'Fecha' || this.selectedFilter === 'Grupo'
                    || this.selectedFilter === 'Componente' || this.selectedFilter === 'Tipo de registro' ?
                    ' Fecha de inicio: ' + this.getISODate(this.dateStart) + ' Fecha de fin: ' + this.getISODate(this.dateEnd) : '';
        doc.text("HISTÓRICOS" + histLabel, 7, 15);
        doc.setFontSize(11);
        autoTable(doc, {
            head: header,
            body: body,
            startY: 20,
            margin: { horizontal: 7 },
            bodyStyles: { valign: 'top' },
            headStyles: { fillColor: [255, 50, 40] },
            columnStyles: {
                0: { cellWidth: 30, overflow: 'linebreak' },
                1: { cellWidth: 30, overflow: 'linebreak' },
                2: { cellWidth: 30, overflow: 'linebreak' },
                3: { cellWidth: 90, overflow: 'linebreak' },
                4: { cellWidth: 20, overflow: 'linebreak' },
                5: { cellWidth: 25, overflow: 'linebreak' },
                6: { cellWidth: 25, overflow: 'linebreak' },
                7: { cellWidth: 30, overflow: 'linebreak' }
            }
        });
        doc.save("Históricos.pdf");
    }

    downloadExcel() {
        let data = "";
        const header = ["Fecha-Hora", 'Grupo', 'Componente', 'Descripción', 'Tipo', 'Reconocida', 'Tipo Alarma', 'Usuario'];
        data += header.join(';');
        data += "\n";
        this.dataSource.data.forEach(hist => {
            data += [hist.FechaHora, hist.TipoHw, hist.IdHw, hist.Descripcion, hist.Alarma && hist.Alarma === 1 ? 'Alarma' : 'Evento', hist.Reconocida, hist.TipoAlarma, hist.Usuario].join(';');
            data += "\n";
        });

        var myLink = document.createElement('a');
        myLink.download = 'HistoricosRedan.csv';
        myLink.href = "data:application/csv," + escape(data);
        myLink.click();
    }

    async retrieveHistoricsByRegister() {
        try {
            this.ready = false;
            const result = await this.historicService.getHistoricsByRegister(this.selectedRegister.IdIncidencia.toString(), this.getISODate(this.dateStart),
                this.getISODate(this.dateEnd)).toPromise();
            if (result.error) {
                await this.alertService.errorMessage(``, `${result.error}`);
                return;
            }

            this.assignDataSource(result.historics);
            this.ready = true;
        } catch (error) {
            this.ready = true;
            this.app.catchError(error);
        }
    }

    async retrieveHistoricsByComponent() {
        try {
            this.ready = false;
            const result = await this.historicService.getHistoricsByComponent(this.selectedComponent.IdHw, this.getISODate(this.dateStart),
                this.getISODate(this.dateEnd)).toPromise();

            if (result.error) {
                await this.alertService.errorMessage(``, `${result.error}`);
                return;
            }

            this.assignDataSource(result.historics);
            this.ready = true;
        } catch (error) {
            this.ready = true;
            this.app.catchError(error);
        }
    }

    async retrieveHistoricsByGroup() {
        try {
            this.ready = false;
            const result = await this.historicService.getHistoricsByGroup(this.selectedGroup.TipoHw, this.getISODate(this.dateStart),
                this.getISODate(this.dateEnd)).toPromise();

            if (result.error) {
                await this.alertService.errorMessage(``, `${result.error}`);
                return;
            }

            this.assignDataSource(result.historics);
            this.ready = true;
        } catch (error) {
            this.ready = true;
            this.app.catchError(error);
        }
    }

    async retrieveHistoricsByDate() {
        try {
            this.ready = false;

            const result = await this.historicService.getHistoricsByDate(this.getISODate(this.dateStart),
                this.getISODate(this.dateEnd)).toPromise();

            if (result.error) {
                await this.alertService.errorMessage(``, `${result.error}`);
                return;
            }

            this.assignDataSource(result.historics);
            this.ready = true;
        } catch (error) {
            this.app.catchError(error);
        }
    }

    async retrieveHistoricsByEvents() {
        try {
            this.ready = false;
            const result = await this.historicService.getHistoricsByEvents().toPromise();

            if (result.error) {
                await this.alertService.errorMessage(``, `${result.error}`);
                return;
            }

            this.assignDataSource(result.historics);
            this.ready = true;
        } catch (error) {
            this.ready = true;
            this.app.catchError(error);
        }
    }

    async retrieveHistoricsByAlarms() {
        try {
            this.ready = false;
            const result = await this.historicService.getHistoricsByAlarms().toPromise();

            if (result.error) {
                await this.alertService.errorMessage(``, `${result.error}`);
                return;
            }

            this.assignDataSource(result.historics);
            this.ready = true;
        } catch (error) {
            this.ready = true;
            this.app.catchError(error);
        }
    }

    async getGroups() {
        try {
            const result = await this.historicService.getGroups().toPromise();
            if (result.error) {
                this.alertService.errorMessage(``, result.error);
            } else {
                this.groupOptions = result.groups;
                if (this.groupOptions.length > 0) {
                    this.selectedGroup = this.groupOptions[0];
                }
            }
        } catch (error) {
            this.ready = true;
            this.app.catchError(error);
        }
    }

    async getComponents() {
        try {
            const result = await this.historicService.getComponents().toPromise();
            if (result.error) {
                this.alertService.errorMessage(``, result.error);
            } else {
                this.componentOptions = result.components;
                if (this.componentOptions.length > 0) {
                    this.selectedComponent = this.componentOptions[0];
                }
            }

        } catch (error) {
            this.ready = true;
            this.app.catchError(error);
        }
    }

    async getCodes() {
        try {
            const result = await this.historicService.getCodes().toPromise();
            if (result.error) {
                this.alertService.errorMessage(``, result.error);
            } else {
                this.codeOptions = result.codes;
                if (this.codeOptions.length > 0) {
                    this.selectedRegister = this.codeOptions[0];
                }
            }
        } catch (error) {
            this.ready = true;
            this.app.catchError(error);
        }
    }

    async retrieveHistorics() {
        try {
            this.ready = false;
            const result = await this.historicService.getHistorics().toPromise();

            if (result.error) {
                await this.alertService.errorMessage(``, `${result.error}`);
                return;
            }

            this.assignDataSource(result.historics);
            this.ready = true;
        } catch (error) {
            this.ready = true;
            this.app.catchError(error);
        }
    }

    assignDataSource(historics: Historic[]) {
        this.dataSource = new MatTableDataSource(historics);
        setTimeout(() => this.dataSource.paginator = this.paginator);
    }

    getISODate(date: Date) {
        return `${date.getFullYear()}-${this._to2digit(date.getMonth() + 1)}-${this._to2digit(date.getDate())}T${this._to2digit(date.getHours())}:${this._to2digit(date.getMinutes())}:${this._to2digit(date.getSeconds())}.${this._to3digit(date.getMilliseconds())}`;
    }

    private _to2digit(n: number) {
        return (n < 10 ? '0' : '') + n;
    }

    private _to3digit(n: number) {
        return (n < 10 ? '00' : n < 100 ? '0' : '') + n;
    }

    updateData() {
        if (this.selectedFilter === 'Eventos') {
            this.retrieveHistoricsByEvents();
        }

        if (this.selectedFilter === 'Alarmas') {
            this.retrieveHistoricsByAlarms();
        }

        if (this.selectedFilter === 'Fecha') {
            this.retrieveHistoricsByDate();
        }

        if (this.selectedFilter === 'Grupo') {
            this.retrieveHistoricsByGroup();
        }

        if (this.selectedFilter === 'Componente') {
            this.retrieveHistoricsByComponent();
        }

        if (this.selectedFilter === 'Tipo de registro') {
            this.retrieveHistoricsByRegister();
        }
    }
}
