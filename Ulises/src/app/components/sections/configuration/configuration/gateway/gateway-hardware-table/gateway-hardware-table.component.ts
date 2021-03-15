import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayGrid, GridsterConfig, GridsterItem, GridsterItemComponentInterface, GridType } from 'angular-gridster2';
import { Subject } from 'rxjs';
import { Gateway } from 'src/app/_models/configs/gateway/Gateway';
import { DataService } from 'src/app/_services/data.service';
import { HardwareService } from 'src/app/_services/hardware.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
    selector: 'gateway-hardware-table',
    templateUrl: './gateway-hardware-table.component.html',
    styleUrls: ['./gateway-hardware-table.component.scss']
})
export class GatewayHardwareTableComponent implements OnInit {

    options!: GridsterConfig;
    dashboard!: Array<GridsterItem>;

    headerOptions!: GridsterConfig;
    dashboardHeader!: Array<GridsterItem>;

    private itemsSwapped: GridsterItem[] = [];
    private itemsSwapped$ = new Subject<GridsterItem[]>();

    ready: boolean = false;
    @Input('gateway') gateway!: Gateway;
    @Input('items') items: any[] = [];

    AGENT_TYPE_RADIO_IN_OUT: number = 4;
    AGENT_TYPE_RADIO_IN: number = 5;
    AGENT_TYPE_RADIO_OUT: number = 6;
    AGENT_TYPE_TELEPHONE: number = -1;

    dragging: boolean = false;
    gridsterSelected: boolean = false;

    isDragging: boolean = false;
    coordX!: number;
    coordY!: number;

    visualizationMode: boolean = false;

    constructor(private readonly router: Router, private readonly hardwareService: HardwareService, private readonly dataService: DataService,
        private readonly userService: UserService) { }

    ngOnInit(): void {

        this.visualizationMode = (this.visualizationPermission()) ? true : false;

        window.addEventListener('mouseup', e => {
            this.isDragging = (e.offsetX-this.coordX !== 0 && e.offsetY-this.coordY !== 0);
        });

        window.addEventListener('mousedown', e => {
            this.coordX = e.offsetX;
            this.coordY = e.offsetY;
        });

        this.initOptions();
        this.initDashboard();

        this.initHeaderOptions();
        this.initHeaderDashboard();

        this.initObservable();
        this.ready = true;
    }

    visualizationPermission() {
        return (!this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && this.userService.isRole('VISUALIZATION'))
            || (!this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && this.userService.isRole('SUPERVISED_CONFIGURATION'));
    }

    initObservable() {

        this.itemsSwapped$.subscribe(itemsSwapped => {

            if (itemsSwapped.length === 2) {
                const sourceCol = itemsSwapped[0].x;
                const targetCol = itemsSwapped[1].x;

                this.items.forEach(async item => {
                    let changed: boolean = false;
                    let sourceItem: any;
                    let targetItem: any;

                    if (item && item.columna === sourceCol) {
                        sourceItem = { ...item };
                        item.columna = targetCol;
                        changed = true;
                        targetItem = { ...item };
                    } else if (item && item.columna === targetCol) {
                        sourceItem = { ...item };
                        item.columna = sourceCol;
                        changed = true;
                        targetItem = { ...item };
                    }

                    if (changed) {
                        const idResource = (item.idrecurso_radio) ? item.idrecurso_radio : item.idrecurso_telefono;
                        const type = (item.idrecurso_radio) ? 1 : 2;
                        await this.hardwareService.updatePositions(this.gateway.idCGW, idResource, type, targetItem, sourceItem).toPromise();
                    }
                });

                this.initOptions();
                this.initDashboard();
                this.itemsSwapped = [];
            }
        });
    }

    initHeaderDashboard(): void {
        this.dashboardHeader = [];
        this.dashboardHeader.push({ cols: 1, rows: 1, y: 0, x: 0, label: 'IA4' });
        this.dashboardHeader.push({ cols: 1, rows: 1, y: 0, x: 1, label: 'IA4' });
        this.dashboardHeader.push({ cols: 1, rows: 1, y: 0, x: 2, label: 'IA4' });
        this.dashboardHeader.push({ cols: 1, rows: 1, y: 0, x: 3, label: 'IA4' });
    }

    initDashboard(): void {

        this.dashboard = [];
        let cont: number = 0;

        this.items.forEach((item, index) => {
            this.parseFrecuencyField(item, index); // Issue 2747
            if (item !== undefined && item.nombre !== undefined) {
                if (item.tipo_agente !== undefined && item.tipo_agente !== null) {
                    this.dashboard.push(this.getItem(item.fila, item.columna, item.nombre, item.tipo_agente, item));
                }

                if (item.tipo_interfaz_tel !== undefined && item.tipo_interfaz_tel !== null) {
                    this.dashboard.push(this.getItem(item.fila, item.columna, item.nombre, this.AGENT_TYPE_TELEPHONE, item));
                }
            }
            cont++;
        });
    }

    parseFrecuencyField(item: any, pos: number) {
        if (item !== undefined && item.frecuencia !== undefined && item.frecuencia != 0 && item.frecuencia.toString().length < 7) {
            for (let i = item.frecuencia.toString().length; i < 7; i++) {
                if (i === 3) {
                    this.items[pos].frecuencia += ".";
                } else {
                    this.items[pos].frecuencia += "0";
                }

            }
        }
    }

    getItem(fila: number, columna: number, label: string, tipo: number, item: any) {
        return { cols: 1, rows: 1, y: fila, x: columna, label: label, type: tipo, item: item }
    }

    itemSelected(item: GridsterItem) {

        if (this.dragging) {
            this.dragging = false;
            return;
        }

        const selectedItem = this.items.find(element => { return element && element.nombre && element.nombre === item.label });
        if (selectedItem) {
            const id = selectedItem.idrecurso_radio ? selectedItem.idrecurso_radio : selectedItem.idrecurso_telefono;
            const type = selectedItem.idrecurso_radio ? 1 : 2;
            this.dataService.updateDataSlot(
                {
                    'gatewayId': this.gateway.idCGW,
                    'columna': item.x,
                    'fila': item.y,
                    'tipo': type
                }
            );
            this.router.navigate([`/home/resource/${id}`]);
        }
    }

    emptyCellClick(item: any, itemComponent: any) {

        if (this.isDragging) return;

        this.dataService.updateDataSlot(
            {
                'gatewayId': this.gateway.idCGW,
                'columna': itemComponent.x,
                'fila': itemComponent.y
            }
        );
        this.router.navigate(['/home/resource/new']);
    }

    changedOptions(): void {
        if (this.options.api && this.options.api.optionsChanged) {
            this.options.api.optionsChanged();
        }
    }

    itemChange(item: GridsterItem, itemComponent: GridsterItemComponentInterface) {
        this.items.forEach(async element => {
            if (element && element.nombre === item.label) {

                const sourceItem = Object.assign({}, element);
                element.columna = item.x;
                element.fila = item.y;
                const targetItem = Object.assign({}, element);

                const idResource = (targetItem.idrecurso_radio) ? targetItem.idrecurso_radio : targetItem.idrecurso_telefono;
                const type = (targetItem.idrecurso_radio) ? 1 : 2;

                await this.hardwareService.updatePositions(this.gateway.idCGW, idResource, type, targetItem, sourceItem).toPromise();
            }
        });
    }

    itemHeaderChange(item: GridsterItem, itemComponent: GridsterItemComponentInterface): void {
        this.itemsSwapped.push(item);
        this.itemsSwapped$.next(this.itemsSwapped);
    }

    initOptions(): void {
        this.options = {
            gridType: GridType.Fit,
            displayGrid: DisplayGrid.Always,
            draggable: {
                delayStart: 125,
                enabled: !this.visualizationMode,
                ignoreContent: true,
                dragHandleClass: 'drag-handler',
                ignoreContentClass: 'my-gridster-item'
            },
            clickable: {
                enabled: true
            },
            minCols: 4,
            maxCols: 4,
            minRows: 4,
            maxRows: 4,
            fixedColWidth: 105,
            fixedRowHeight: 105,
            margin: 1,
            swap: true,
            enableEmptyCellClick: !this.visualizationMode,
            emptyCellClickCallback: this.emptyCellClick.bind(this),
            itemChangeCallback: this.itemChange.bind(this),
        };
    }

    initHeaderOptions() {
        this.headerOptions = {
            gridType: GridType.Fit,
            displayGrid: DisplayGrid.Always,
            draggable: {
                enabled: !this.visualizationMode
            },
            minCols: 4,
            maxCols: 4,
            minRows: 1,
            maxRows: 1,
            margin: 0,
            swap: !this.visualizationMode,
            itemChangeCallback: this.itemHeaderChange.bind(this),
        };
    }
}
