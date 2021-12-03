import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
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

    filters: string[] = ['Tipo', 'Grupo', 'Componente', 'Tipo de registro', 'Descripción'];
    selectedFilter: string[] = [];

    selectedGroup: HistoricsGroup[] = [];
    selectedComponent: HistoricsComponent[] = [];
    selectedRegister: HistoricsCode[] = [];
    selectedLimit: number = 2000;

    groupOptions!: HistoricsGroup[];
    componentOptions!: HistoricsComponent[];
    codeOptions!: HistoricsCode[];
    limitOptions: number[] = [1000, 2000, 3000, 4000, 5000]

    historics!: Historic[];

    dateStart!: Date;
    dateEnd!: Date;
    description!: string;
    dataSource!: MatTableDataSource<Historic>;
    dataUsed: any = [];
    dataRaw: any = [];
    datatemp: any = [];
    typeOptions = [
        { value: 1, viewValue: 'Eventos' },
        { value: 2, viewValue: 'Alarmas' }
    ];

    selectedType: any = [];

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    @ViewChild('pickerStart') pickerStart: any;
    @ViewChild('pickerEnd') pickerEnd: any;

    @ViewChild('pickerStartDate') pickerStartDate: any;
    @ViewChild('pickerEndDate') pickerEndDate: any;

    public dateControl = new FormControl(new Date());

    ready = true;
    controlFlag = true;

    constructor(private readonly historicService: HistoricService, private readonly alertService: AlertService, private readonly app: AppComponent,
        private readonly userService: UserService, private readonly loginService: LoginService, private readonly router: Router, private changeDetectorRefs: ChangeDetectorRef) {
        this.historicService.checkIfExistschangesOnFilters().subscribe((data: any) => {
            this.ready = false;
            if (data !== undefined && this.controlFlag) {
                this.dateEnd = data.dateEnd !== undefined ? new Date(data.dateEnd) : new Date();
                this.dateStart = data.dateStart !== undefined ? new Date(data.dateStart) : new Date(this.dateEnd.getFullYear(), this.dateEnd.getMonth(), this.dateEnd.getDate(), 0, 0, 0);
                this.selectedLimit = data.limit !== undefined ? data.limit : this.limitOptions[1];
                this.selectedFilter = data.localFilters !== undefined ? data.localFilters : [];
                this.selectedType = data.selectedType !== undefined ? data.selectedType : [];

                this.selectedGroup = data.selectedGroup !== undefined ? data.selectedGroup : [];
                this.selectedComponent = data.selectedComponent !== undefined ? data.selectedComponent : [];
                this.selectedRegister = data.selectedRegister !== undefined ? data.selectedRegister : [];

                this.updateData(true);
                this.controlFlag = false;
            } else if (data !== undefined && !this.controlFlag) {
                this.dateEnd = data.dateEnd !== undefined ? new Date(data.dateEnd) : new Date();
                this.dateStart = data.dateStart !== undefined ? new Date(data.dateStart) : new Date(this.dateEnd.getFullYear(), this.dateEnd.getMonth(), this.dateEnd.getDate(), 0, 0, 0);
                this.selectedLimit = data.limit !== undefined ? data.limit : this.limitOptions[1];
                this.selectedFilter = data.localFilters !== undefined ? data.localFilters : [];
                this.selectedType = data.selectedType !== undefined ? data.selectedType : [];

                this.selectedGroup = data.selectedGroup !== undefined ? data.selectedGroup : [];
                this.selectedComponent = data.selectedComponent !== undefined ? data.selectedComponent : [];
                this.selectedRegister = data.selectedRegister !== undefined ? data.selectedRegister : [];
            }
            this.ready = true;
        });
    }

    ngOnInit() {
        this.checkPermissions();
        this.getGroups();
        this.getCodes();
        this.getComponents();
        this.initDefaultDates();

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

    async updateData(needRequest: boolean) {
        this.ready = false;
        if (!this.dateEnd)
            this.initDefaultDates();

        if (needRequest || this.dataRaw.length === 0) {
            await this.retrieveHistoricsByDate();
        }

        let alarmsDataFilters: any = [];
        let result: any = [];

        if (this.selectedFilter.length > 0) {
            result = await this.dataRaw.historics.filter((row: any) => {
                let includesTypeFilter: boolean = true;
                let includesGroupFilter: boolean = true;
                let includesCompFilter: boolean = true;
                let includesRegFilter: boolean = true;

                if (this.selectedFilter.includes('Tipo')) {
                    if (this.selectedType.includes(1) && !alarmsDataFilters.includes(0)) {
                        alarmsDataFilters.push(0);
                    }
                    if (this.selectedType.includes(2) && !alarmsDataFilters.includes(1)) {
                        alarmsDataFilters.push(1);
                    }
                    includesTypeFilter = alarmsDataFilters.includes(row.Alarma);

                }

                if (this.selectedFilter.includes('Grupo')) {
                    includesGroupFilter = this.selectedGroup.includes(row.TipoHw);
                }

                if (this.selectedFilter.includes('Componente')) {
                    includesCompFilter = this.selectedComponent.includes(row.IdHw);
                }

                if (this.selectedFilter.includes('Tipo de registro')) {
                    includesRegFilter = this.selectedRegister.includes(row.IdIncidencia);
                }

                return includesTypeFilter && includesGroupFilter && includesCompFilter && includesRegFilter;
            });
            
            this.dataUsed = result;
        } else {
            this.dataUsed = this.dataRaw.historics;
        }
        this.historicService.setFilters({
            'dateStart': this.dateStart,
            'dateEnd': this.dateEnd,
            'limit': this.selectedLimit,
            'localFilters': this.selectedFilter,
            'selectedType': this.selectedType,
            'selectedGroup': this.selectedGroup,
            'selectedComponent': this.selectedComponent,
            'selectedRegister': this.selectedRegister
        });
        this.assignDataSource(this.dataUsed);
        this.ready = true;
    }

    initDefaultDates() {
        if (this.dateStart === undefined && this.dateEnd === undefined) {
            this.dateEnd = new Date();
            this.dateStart = new Date(this.dateEnd.getFullYear(), this.dateEnd.getMonth(), this.dateEnd.getDate(), 0, 0, 0);
        }
    }

    downloadPDF() {
        const header = [["Fecha-\nHora", 'Grupo', 'Componente', 'Descripción', 'Tipo', 'Reconocida', 'Tipo Alarma', 'Usuario']];
        let body: any = [];
        this.dataSource.data.forEach(hist => {
            body.push([hist.FechaHora, hist.TipoHw, hist.IdHw, hist.Descripcion, hist.Alarma && hist.Alarma === 1 ? 'Alarma' : 'Evento', hist.Reconocida, hist.TipoAlarma, hist.Usuario])
        });

        const doc = new jsPDF('l');
        const histLabel = this.selectedFilter.length == 0 ?
            ': TODOS' : this.selectedFilter.includes('Eventos') || this.selectedFilter.includes('Alarmas') ?
                ': TODOS LOS EVENTOS' + this.selectedFilter.includes('Fecha') || this.selectedFilter.includes('Grupo')
                    || this.selectedFilter.includes('Componente') || this.selectedFilter.includes('Tipo de registro') ?
                    ' Fecha de inicio: ' + this.getISODate(this.dateStart) + ' Fecha de fin: ' + this.getISODate(this.dateEnd) : '' : this.selectedFilter.includes('Fecha') || this.selectedFilter.includes('Grupo')
                        || this.selectedFilter.includes('Componente') || this.selectedFilter.includes('Tipo de registro') ?
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

    async retrieveHistoricsByDate() {
        try {
            this.dataRaw = await this.historicService.getHistoricsByDate(this.getISODate(this.dateStart),
                this.getISODate(this.dateEnd), 0, this.selectedLimit).toPromise();

            if (this.dataUsed.error) {
                await this.alertService.errorMessage(``, `${this.dataUsed.error}`);
                return;
            }

        } catch (error: any) {
            this.ready = false;
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
            }
        } catch (error: any) {
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
            }

        } catch (error: any) {
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
            }
        } catch (error: any) {
            this.ready = true;
            this.app.catchError(error);
        }
    }

    assignDataSource(historics: Historic[]) {

        if (this.selectedFilter.length > 0 && this.dataSource) {
            this.dataSource.data = this.dataUsed;
            this.changeDetectorRefs.detectChanges();
        } else {
            this.dataSource = new MatTableDataSource(this.dataUsed);
        }

        this.dataSource.filterPredicate = this.getFilterPredicate();
        setTimeout(() => this.dataSource.paginator = this.paginator);
        this.ready = true;
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

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue ? filterValue.trim().toLowerCase() : '';
    }

    getFilterPredicate() {
        return (row: any, filters: string) => {

            const description = filters;

            // Fetch data from row
            const columnDescription = row.Descripcion;

            // verify fetching data by our searching values
            const customFilterDescription = columnDescription.toLowerCase().includes(description);

            return customFilterDescription;
        };
    }

    cleanGlobalControls(event: any) {
        this.controlFlag = false;
        this.selectedFilter = [];
        this.historicService.setFilters({
            'dateStart': this.dateStart,
            'dateEnd': this.dateEnd,
            'limit': this.selectedLimit,
            'localFilters': [],
            'selectedType': [],
            'selectedGroup': [],
            'selectedComponent': [],
            'selectedRegister': []

        });
    }

}
