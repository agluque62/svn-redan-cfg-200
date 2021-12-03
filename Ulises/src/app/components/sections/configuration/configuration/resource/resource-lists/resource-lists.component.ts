import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppSettings } from 'src/app/core/app.settings';
import { AlertService } from 'src/app/_services/alert.service';
import { UserService } from 'src/app/_services/user.service';

interface customValues {
    value: number;
    viewValue: string;
}

@Component({
    selector: 'resource-lists',
    templateUrl: './resource-lists.component.html',
    styleUrls: ['./resource-lists.component.scss']
})
export class ResourceListsComponent implements OnInit {

    typeLists: customValues[] = [
        { value: 0, viewValue: 'Ninguna' },
        { value: 1, viewValue: 'Lista Negra' },
        { value: 2, viewValue: 'Lista Blanca' }
    ];

    selectedTypeList!: number;

    displayBLlabel: boolean = true;
    displayWLlabel: boolean = true;

    resourceForm!: FormGroup;
    uriListToDisplay!: any;

    visualizationMode: boolean = false;

    constructor(private readonly alertService: AlertService, private readonly userService: UserService) { }

    ngOnInit(): void {
        this.visualizationMode = (this.visualizationPermission()) ? true : false;
        this.uriListToDisplay = this.getUriElements();
        this.checkSelectedTypeList();
    }

    visualizationPermission() {
        return !this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && this.userService.isRole('VISUALIZATION');
    }

    getUriElements() {
        const total = 8;
        let rest = 0;
        let urisArray: any = { LSN: [], LSB: [] };
        let blListLabel = "LSN";
        let wListLabel = "LSB";

        let blList = this.resourceForm.value.listaUris.filter((x: any) => x.tipo == blListLabel);
        let wList = this.resourceForm.value.listaUris.filter((x: any) => x.tipo == wListLabel);

        if (blList !== undefined) {
            blList.forEach((row: any, index: number) => {
                blList[index].uri = row.uri.replace("sip:", "");
            });
        }
        if (wList !== undefined) {
            wList.forEach((row: any, index: number) => {
                wList[index].uri = row.uri.replace("sip:", "");
            });
        }

        urisArray[blListLabel] = blList;
        urisArray[wListLabel] = wList;

        rest = total - blList.length;
        for (let i = 0; i < rest; i++) {
            urisArray[blListLabel].push({ 'uri': '', 'tipo': blListLabel, 'nivel_colateral': 0 });
        }

        rest = total - wList.length;
        for (let i = 0; i < rest; i++) {
            urisArray[wListLabel].push({ 'uri': '', 'tipo': wListLabel, 'nivel_colateral': 0 });
        }

        return urisArray;
    }

    async saveUri(event: any, pos: number, tipo: string) {
        if (event.target.value.match(AppSettings.URI_PATTERN) != undefined || event.target.value === '') {
            this.uriListToDisplay[tipo][pos]['previous'] = this.uriListToDisplay[tipo][pos].uri;
            this.uriListToDisplay[tipo][pos].uri = event.target.value;
            this.uriListToDisplay[tipo][pos]['modified'] = true;
            this.resourceForm.get('listaUris')?.markAsDirty();
        } else if (event.target.value.match(AppSettings.URI_PATTERN) == undefined && event.target.value != '') {
            await this.alertService.errorMessage(``, AppSettings.INVALID_URI);
            event.target.value = '';
        }
    }

    checkSelectedTypeList() {
        if (this.resourceForm.value.restriccion_entrantes == 1) {
            this.displayBLlabel = true;
            this.displayWLlabel = false;
        } else if (this.resourceForm.value.restriccion_entrantes == 2) {
            this.displayBLlabel = false;
            this.displayWLlabel = true;
        } else {
            this.displayBLlabel = false;
            this.displayWLlabel = false;
        }
    }
}
