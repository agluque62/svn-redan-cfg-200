import { Component, OnInit } from "@angular/core";
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { ActivatedRoute, Router } from "@angular/router";
import { LoginService } from "src/app/_services/login.service";
import { LoginUser } from "src/app/_models/login/LoginUser";
import { AppComponent } from "src/app/app.component";
import { UtilsService } from "src/app/_services/utils.service";
import { UserService } from "src/app/_services/user.service";
import { MatDialog } from "@angular/material/dialog";
import { AboutComponent } from "../about/about.component";

interface Node {
    name: string;
    route?: string;
    children?: Node[];
}

interface NavigationNode {
    expandable: boolean;
    name: string;
    level: number;
}

@Component({
    selector: 'ul-side-menu',
    templateUrl: './ul-side-menu.component.html',
    styleUrls: ['./ul-side-menu.component.scss']
})
export class UlSideMenuComponent implements OnInit {

    user!: LoginUser;
    selected!: NavigationNode;
    ready: boolean = false;
    userProfile!: string;
    TREE_DATA: Node[] = [];

    private _transformer = (node: Node, level: number) => {
        return {
            expandable: !!node.children && node.children.length > 0,
            name: node.name,
            level: level
        };
    }

    treeControl = new FlatTreeControl<NavigationNode>(node => node.level, node => node.expandable);

    treeFlattener = new MatTreeFlattener(this._transformer, node => node.level, node => node.expandable, node => node.children);

    dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    constructor(private readonly router: Router, private readonly route: ActivatedRoute, private readonly loginService: LoginService,
        private readonly app: AppComponent, private readonly utilsService: UtilsService, private readonly userService: UserService,
        public dialog: MatDialog) {
        this.initTreeData();
        this.dataSource.data = this.TREE_DATA;
    }

    hasChild = (_: number, node: NavigationNode) => node.expandable;

    ngOnInit(): void {

        this.ready = false;
        this.user = JSON.parse(localStorage.getItem('user') || '{}');
        this.userProfile = this.utilsService.getProfileLabel(this.user.perfil);
    }

    checkUserPermission() {
        if (!this.userService.isRole('ADMIN') && !this.userService.isRole('USER_MANAGEMENT')) {
            this.TREE_DATA.forEach(item => {
                if (item.name === 'Configuraciones') {
                    item.children?.forEach((child, idx) => {
                        if (child.name === 'Usuarios') {
                            item.children?.splice(idx, 1);
                        }
                    });
                }
            });
        }
    }

    checkConfigurationPermission() {

        if (this.userService.isRole('ADMIN')) {
            this.TREE_DATA.push(
                {
                    name: 'Configuraciones',
                    children: [
                        { name: 'Configuraciones', route: 'config' },
                        { name: 'Tabla de calificación audio - BSS', route: 'config/audio-bss-table' },
                        { name: 'Usuarios', route: 'config/users' },
                        { name: 'Recursos Externos', route: 'config/ext-resources' }
                    ]
                }
            );
        }

        if (!this.userService.isRole('ADMIN') && this.userService.isRole('CONFIGURATION')) {
            this.TREE_DATA.push(
                {
                    name: 'Configuraciones',
                    children: [
                        { name: 'Configuraciones', route: 'config' },
                        { name: 'Tabla de calificación audio - BSS', route: 'config/audio-bss-table' },
                        { name: 'Recursos Externos', route: 'config/ext-resources' }
                    ]
                }
            );
        }

        if (!this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && !this.userService.isRole('VISUALIZATION')
            && this.userService.isRole('USER_MANAGEMENT')) {
            this.TREE_DATA.push(
                {
                    name: 'Configuraciones',
                    children: [
                        { name: 'Usuarios', route: 'config/users' }
                    ]
                }
            );
        }

        if (!this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && !this.userService.isRole('USER_MANAGEMENT')
            && this.userService.isRole('VISUALIZATION')) {
            this.TREE_DATA.push(
                {
                    name: 'Configuraciones',
                    children: [
                        { name: 'Configuraciones', route: 'config' },
                        { name: 'Tabla de calificación audio - BSS', route: 'config/audio-bss-table' }
                    ]
                }
            );
        }

        if (!this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && !this.userService.isRole('USER_MANAGEMENT') 
            && !this.userService.isRole('VISUALIZATION') && this.userService.isRole('SUPERVISED_CONFIGURATION')) {
            this.TREE_DATA.push(
                {
                    name: 'Configuraciones',
                    children: [
                        { name: 'Configuraciones', route: 'config' },
                        { name: 'Tabla de calificación audio - BSS', route: 'config/audio-bss-table' }
                    ]
                }
            );
        }
    }

    checkMaintenancePermission() {

        if (this.userService.isRole('ADMIN')) {
            this.TREE_DATA.push(
                {
                    name: 'Mantenimiento',
                    children: [
                        { name: 'Histórico', route: 'maintenance/historic' },
                        { name: 'Conf. Servidor', route: 'maintenance/server-conf' },
                        { name: 'Versión', route: 'maintenance/version' }
                    ]
                }
            );
        }

        if (!this.userService.isRole('ADMIN') && this.userService.isRole('HISTORICS')) {
            this.TREE_DATA.push(
                {
                    name: 'Mantenimiento',
                    children: [
                        { name: 'Histórico', route: 'maintenance/historic' },
                        { name: 'Versión', route: 'maintenance/version' }
                    ]
                }
            );
        }
    }

    checkBackupPermission() {
        if (this.userService.isRole('ADMIN') || this.userService.isRole('BACKUP')) {
            this.TREE_DATA.push(
                {
                    name: 'Back up',
                    children: [
                        { name: 'Parámetros', route: 'backupbd/params' },
                        { name: 'Hist. de Backup', route: 'backupbd/historic' },
                        { name: 'Backup manual', route: 'backupbd/manual' },
                        { name: 'Restaurar', route: 'backupbd/restore' }
                    ]
                }
            );
        }
    }

    validatePermissions() {
        this.checkConfigurationPermission();
        this.checkMaintenancePermission();
        this.checkBackupPermission();
        this.dataSource.data = this.TREE_DATA;
    }

    ngAfterViewInit() {
        setTimeout(() => {
            
            this.initTreeData();

            const sectionGroup = this.getSectionGroupByUrl(this.router.url);
            const section = this.getSectionByUrl(this.router.url);

            for (let i = 0; i < this.treeControl.dataNodes.length; i++) {

                if (this.treeControl.dataNodes[i].name === sectionGroup && this.treeControl.dataNodes[i].expandable) {
                    this.treeControl.expand(this.treeControl.dataNodes[i]);
                } else if (this.treeControl.dataNodes[i].name !== sectionGroup && this.treeControl.dataNodes[i].expandable) {
                    this.treeControl.collapse(this.treeControl.dataNodes[i]);
                }

                if (this.treeControl.dataNodes[i].name === section && !this.treeControl.dataNodes[i].expandable) {
                    this.selected = this.treeControl.dataNodes[i];
                }
            }
            this.ready = true;
        }, 0);
    }

    getSectionGroupByUrl(url: string): string {

        if (url === '/home/config' || /^\/home\/config\/.*?\d+$/.test(url) || url === '/home/gateway/new' || /^\/home\/gateway\/.*?\d+$/.test(url)
            || url === '/home/resource/new' || /^\/home\/resource\/.*?\d+$/.test(url) || url === '/home/config/audio-bss-table'
            || url === '/home/config/users' || url === '/home/config/ext-resources') {
            return 'Configuraciones';
        }

        if (url === '/home/maintenance/historic' || url === '/home/maintenance/server-conf' || url === '/home/maintenance/version') {
            return 'Mantenimiento';
        }

        if (url === '/home/backupbd/params' || url === '/home/backupbd/historic' || url === '/home/backupbd/manual' || url === '/home/backupbd/restore') {
            return 'Back up';
        }

        return '';
    }

    getSectionByUrl(url: string) {

        if (url === '/home/config' || /^\/home\/config\/.*?\d+$/.test(url)  || url === '/home/gateway/new'
            || /^\/home\/gateway\/.*?\d+$/.test(url) || url === '/home/resource/new' || /^\/home\/resource\/.*?\d+$/.test(url)) {
            return 'Configuraciones';
        }

        if (url === '/home/config/audio-bss-table') {
            return 'Tabla de calificación audio - BSS';
        }

        if (url === '/home/config/users') {
            return 'Usuarios';
        }

        if (url === '/home/config/ext-resources') {
            return 'Recursos Externos';
        }

        if (url === '/home/maintenance/historic') {
            return 'Histórico';
        }

        if (url === '/home/maintenance/server-conf') {
            return 'Conf. Servidor';
        }

        if (url === '/home/maintenance/version') {
            return 'Versión';
        }

        if (url === '/home/backupbd/params') {
            return 'Parámetros'
        }

        if (url === '/home/backupbd/historic') {
            return 'Hist. de Backup';
        }

        if (url === '/home/backupbd/manual') {
            return 'Backup manual';
        }

        if (url === '/home/backupbd/restore') {
            return 'Restaurar';
        }

        return '';
    }

    navigateTo(node: NavigationNode) {

        this.selected = node;

        let route: string = '';
        let path: string = '';

        this.TREE_DATA.forEach(root => {
            root.children?.forEach(leaf => {
                if (leaf.name == node.name) {
                    route = leaf.route || '';
                }
            })
        });

        path = 'home/' + route;
        this.router.navigate([path]);
    }

    async logout(): Promise<void> {
        await this.loginService.logout().toPromise();
        this.app.destroyAlive();
        this.router.navigate(['/access']);
    }

    initTreeData() {
        this.TREE_DATA = [];
        this.validatePermissions();
    }

    aboutDialog() {
        this.dialog.open(AboutComponent, {
            autoFocus: false
        });
    }
}