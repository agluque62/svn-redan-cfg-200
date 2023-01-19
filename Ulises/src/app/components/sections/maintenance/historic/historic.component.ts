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
import { TranslateService } from '@ngx-translate/core';

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

    filters: string[] = ['historics.type', 'historics.group', 'historics.component', 'historics.type_register', 'historics.description'];
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
        { value: 1, viewValue: 'historics.events' },
        { value: 2, viewValue: 'historics.alarms' }
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
    filterValue!: string;

    constructor(private readonly historicService: HistoricService, private readonly alertService: AlertService, private readonly app: AppComponent,
        private readonly userService: UserService, private readonly loginService: LoginService, private readonly router: Router,
        private changeDetectorRefs: ChangeDetectorRef, private readonly translate: TranslateService) {
        this.historicService.checkIfExistschangesOnFilters().subscribe(async (data: any) => {
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
                this.filterValue = data.filterValue !== undefined ? data.filterValue : '';

                await this.updateData(true);
                if (this.filterValue && this.filterValue !== '') { // issue 2892
                    this.dataSource.filter = this.filterValue ? this.filterValue.trim().toLowerCase() : '';
                }
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
                this.filterValue = data.filterValue !== undefined ? data.filterValue : '';
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

                if (this.selectedFilter.includes('historics.type')) {
                    if (this.selectedType.includes(1) && !alarmsDataFilters.includes(0)) {
                        alarmsDataFilters.push(0);
                    }
                    if (this.selectedType.includes(2) && !alarmsDataFilters.includes(1)) {
                        alarmsDataFilters.push(1);
                    }
                    includesTypeFilter = alarmsDataFilters.includes(row.Alarma);

                }

                if (this.selectedFilter.includes('historics.group')) {
                    includesGroupFilter = this.selectedGroup.includes(row.TipoHw);
                }

                if (this.selectedFilter.includes('historics.component')) {
                    includesCompFilter = this.selectedComponent.includes(row.IdHw);
                }

                if (this.selectedFilter.includes('historics.type_register')) {
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
            'selectedRegister': this.selectedRegister,
            'filterValue': this.filterValue
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
        const header = [[
            this.translate.instant('historics.date') + "\n" + this.translate.instant('historics.hour'),
            this.translate.instant('historics.group'),
            this.translate.instant('historics.component'),
            this.translate.instant('historics.description'),
            this.translate.instant('historics.type'),
            this.translate.instant('historics.recognized'),
            this.translate.instant('historics.type_alarm'),
            this.translate.instant('historics.user')
        ]];
        let body: any = [];
        this.dataSource.data.forEach(hist => {
            body.push([hist.FechaHora, this.translate.instant(hist.TipoHw), hist.IdHw, this.translateDescription(hist.Descripcion), hist.Alarma && hist.Alarma === 1 ? this.translate.instant('historics.alarm') : this.translate.instant('historics.event'), hist.Reconocida, hist.TipoAlarma, hist.Usuario])
        });

        const doc = new jsPDF('l');
        const histLabel = this.selectedFilter.length == 0 ?
            `: ${this.translate.instant('historics.all')}` : this.selectedFilter.includes('historics.events') || this.selectedFilter.includes('historics.alarms') ?
                ` : ${this.translate.instant('historics.allEvents')}` + this.selectedFilter.includes('historics.date') || this.selectedFilter.includes('historics.group')
                    || this.selectedFilter.includes('historics.component') || this.selectedFilter.includes('historics.type_register') ?
                    ` ${this.translate.instant('historics.start_date')}: ` + this.getISODate(this.dateStart) + ` ${this.translate.instant('historics.end_date')}: ` + this.getISODate(this.dateEnd) : '' : this.selectedFilter.includes('historics.date') || this.selectedFilter.includes('historics.group')
                        || this.selectedFilter.includes('historics.component') || this.selectedFilter.includes('historics.type_register') ?
                    ` ${this.translate.instant('historics.start_date')} ` + this.getISODate(this.dateStart) + ` ${this.translate.instant('historics.end_date')}: ` + this.getISODate(this.dateEnd) : '';
        doc.text(`${this.translate.instant('historics.historics')}` + histLabel, 7, 15);
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
        doc.save(`${this.translate.instant('historics.historic')}.pdf`);
    }

    downloadExcel() {
        let data = "";
        const header = [
            this.translate.instant('historics.date_hour'),
            this.translate.instant('historics.group'),
            this.translate.instant('historics.component'),
            this.translate.instant('historics.description'),
            this.translate.instant('historics.type'),
            this.translate.instant('historics.recognized'),
            this.translate.instant('historics.type_alarm'),
            this.translate.instant('historics.user')
        ];
        data += header.join(';');
        data += "\n";
        this.dataSource.data.forEach(hist => {
            data += [hist.FechaHora, this.translate.instant(hist.TipoHw), hist.IdHw, this.translateDescription(hist.Descripcion), hist.Alarma && hist.Alarma === 1 ? this.translate.instant('historics.alarm') : this.translate.instant('historics.event'), hist.Reconocida, hist.TipoAlarma, hist.Usuario].join(';');
            data += "\n";
        });

        var myLink = document.createElement('a');
        myLink.download = `${this.translate.instant('historics.historic')}.csv`;
        myLink.href = "data:application/csv," + escape(data);
        myLink.click();
    }

    async retrieveHistoricsByDate() {
        try {
            this.dataRaw = await this.historicService.getHistoricsByDate(this.getISODate(this.dateStart),
                this.getISODate(this.dateEnd), 0, this.selectedLimit).toPromise();
            if (this.dataUsed.error) {
                await this.alertService.errorMessage(``, `${this.dataUsed.error}`,this.translate.instant('button.accept'));
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
                this.alertService.errorMessage(``, result.error,this.translate.instant('button.accept'));
            } else {
                this.groupOptions = result.groups;
                console.log(this.groupOptions)
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
                this.alertService.errorMessage(``, result.error,this.translate.instant('button.accept'));
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
                this.alertService.errorMessage(``, result.error,this.translate.instant('button.accept'));
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
        this.filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = this.filterValue ? this.filterValue.trim().toLowerCase() : '';
        this.historicService.setFilters({
            'dateStart': this.dateStart,
            'dateEnd': this.dateEnd,
            'limit': this.selectedLimit,
            'localFilters': this.selectedFilter,
            'selectedType': this.selectedType,
            'selectedGroup': this.selectedGroup,
            'selectedComponent': this.selectedComponent,
            'selectedRegister': this.selectedRegister,
            'filterValue': this.filterValue
        });
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
            'selectedRegister': [],
            'filterValue': ''
        });
    }

    translateDescription(text: any) {
        /** AGL 20230119. Quita algunos elementos que hacía que no se tradujeran algunos items. */
        let formatedtext = text.replace(",", " ,").replace(")", " )");
        let translateArr = formatedtext.split(' ');
        let stringTranslate: string = "";
        translateArr.forEach((word: any) => {

            if (word != "" && word != " " && word != undefined) {
                console.log()
                stringTranslate += this.translate.instant(word) + " "
            }
        })
        return stringTranslate
    }
    /** AGL 20230119. Traduce los elementos a presentar en los desplegables de los filtros */
    normalizeElement (element: any) {
        return this.translate.instant(element);
    }

}
