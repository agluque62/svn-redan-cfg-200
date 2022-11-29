import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { LoginService } from 'src/app/_services/login.service';
import { LoginUser } from 'src/app/_models/login/LoginUser';
import { AppComponent } from 'src/app/app.component';
import { UtilsService } from 'src/app/_services/utils.service';
import { UserService } from 'src/app/_services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { AboutComponent } from '../about/about.component';
import { TranslateService } from '@ngx-translate/core';

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
export class UlSideMenuComponent implements OnInit, OnChanges {

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

    disableMenu: boolean = false;

    constructor(private readonly router: Router, private readonly route: ActivatedRoute, 
        private readonly loginService: LoginService,
        private readonly app: AppComponent, 
        private readonly utilsService: UtilsService, 
        private readonly userService: UserService,
        private readonly translate: TranslateService,
        public dialog: MatDialog) {
        this.initTreeData();
        this.dataSource.data = this.TREE_DATA;
    }
    ngOnChanges(changes: SimpleChanges): void {
        this.initTreeData()
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
                if (item.name === `${this.translate.instant('ul-side.configuration')}`) {

                    if (item.children) {
                        item.children.forEach((child, idx) => {
                            if (child.name === 'ul-side.users' && item.children) {
                                item.children.splice(idx, 1);
                            }
                        });    
                    }
                }
            });
        }
    }

    checkConfigurationPermission() {

        if (this.userService.isRole('ADMIN')) {
            this.TREE_DATA.push(
                {
                    name: `ul-side.configuration`,
                    children: [
                        { name: 'ul-side.configuration', route: 'config' },
                        { name: 'ul-side.table_audio', route: 'config/audio-bss-table' },
                        { name: 'ul-side.users', route: 'config/users' },
                        { name: 'ul-side.ext_resources', route: 'config/ext-resources' }
                    ]
                }
            );
        }

        if (!this.userService.isRole('ADMIN') && this.userService.isRole('CONFIGURATION')) {
            this.TREE_DATA.push(
                {
                    name: 'ul-side.configuration',
                    children: [
                        { name: 'ul-side.configuration', route: 'config' },
                        { name: 'ul-side.table_audio', route: 'config/audio-bss-table' },
                        { name: 'ul-side.ext_resources', route: 'config/ext-resources' }
                    ]
                }
            );
        }

        if (!this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && !this.userService.isRole('VISUALIZATION')
            && this.userService.isRole('USER_MANAGEMENT')) {
            this.TREE_DATA.push(
                {
                    name: 'ul-side.configuration',
                    children: [
                        { name: 'ul-side.users', route: 'config/users' }
                    ]
                }
            );
        }

        if (!this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && !this.userService.isRole('USER_MANAGEMENT')
            && this.userService.isRole('VISUALIZATION')) {
            this.TREE_DATA.push(
                {
                    name: 'ul-side.configuration',
                    children: [
                        { name: 'ul-side.configuration', route: 'config' },
                        { name: 'ul-side.table_audio', route: 'config/audio-bss-table' }
                    ]
                }
            );
        }

        if (!this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && !this.userService.isRole('USER_MANAGEMENT')
            && !this.userService.isRole('VISUALIZATION') && this.userService.isRole('SUPERVISED_CONFIGURATION')) {
            this.TREE_DATA.push(
                {
                    name: 'ul-side.configuration',
                    children: [
                        { name: 'ul-side.configuration', route: 'config' },
                        { name: 'ul-side.table_audio', route: 'config/audio-bss-table' }
                    ]
                }
            );
        }
    }

    checkMaintenancePermission() {

        if (this.userService.isRole('ADMIN')) {
            this.TREE_DATA.push(
                {
                    name: 'ul-side.maintance',
                    children: [
                        { name: 'ul-side.historic', route: 'maintenance/historic' },
                        { name: 'ul-side.server_conf', route: 'maintenance/server-conf' },
                        { name: 'ul-side.version', route: 'maintenance/version' }
                    ]
                }
            );
        }

        if (!this.userService.isRole('ADMIN') && this.userService.isRole('HISTORICS')) {
            this.TREE_DATA.push(
                {
                    name: 'ul-side.maintance',
                    children: [
                        { name: 'ul-side.historic', route: 'maintenance/historic' },
                        { name: 'ul-side.version', route: 'maintenance/version' }
                    ]
                }
            );
        }
    }

    checkBackupPermission() {
        if (this.userService.isRole('ADMIN') || this.userService.isRole('BACKUP')) {
            this.TREE_DATA.push(
                {
                    name: 'ul-side.back_up',
                    children: [
                        { name: 'ul-side.parameters', route: 'backupbd/params' },
                        { name: 'ul-side.historic_backup', route: 'backupbd/historic' },
                        { name: 'ul-side.manual_backup', route: 'backupbd/manual' },
                        { name: 'ul-side.restore', route: 'backupbd/restore' }
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

        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                const url: string[] = event.url.split("/");
                this.disableMenu = (url.length == 4 && (url[2] === 'config' || url[2] === 'gateway' || url[2] === 'resource') &&
                 parseInt(url[3]).toString() !== 'NaN' || url[3] === 'new');
            }
        });

    }

    getSectionGroupByUrl(url: string): string {

        if (url === '/home/config' || /^\/home\/config\/.*?\d+$/.test(url) || url === '/home/gateway/new' || /^\/home\/gateway\/.*?\d+$/.test(url)
            || url === '/home/resource/new' || /^\/home\/resource\/.*?\d+$/.test(url) || url === '/home/config/audio-bss-table'
            || url === '/home/config/users' || url === '/home/config/ext-resources') {
            return 'ul-side.configuration';
        }

        if (url === '/home/maintenance/historic' || url === '/home/maintenance/server-conf' || url === '/home/maintenance/version') {
            return 'ul-side.maintance';
        }

        if (url === '/home/backupbd/params' || url === '/home/backupbd/historic' || url === '/home/backupbd/manual' || url === '/home/backupbd/restore') {
            return 'ul-side.back_up';
        }

        return '';
    }

    getSectionByUrl(url: string) {

        if (url === '/home/config' || /^\/home\/config\/.*?\d+$/.test(url) || url === '/home/gateway/new'
            || /^\/home\/gateway\/.*?\d+$/.test(url) || url === '/home/resource/new' || /^\/home\/resource\/.*?\d+$/.test(url)) {
            return this.translate.instant('ul-side.configuration');
        }

        if (url === '/home/config/audio-bss-table') {
            return 'ul-side.table_audio';
        }

        if (url === '/home/config/users') {
            return 'ul-side.users';
        }

        if (url === '/home/config/ext-resources') {
            return 'ul-side.ext_resources';
        }

        if (url === '/home/maintenance/historic') {
            return 'ul-side.historic';
        }

        if (url === '/home/maintenance/server-conf') {
            return 'ul-side.server_conf';
        }

        if (url === '/home/maintenance/version') {
            return 'ul-side.version';
        }

        if (url === '/home/backupbd/params') {
            return 'ul-side.parameters'
        }

        if (url === '/home/backupbd/historic') {
            return 'ul-side.historic_backup';
        }

        if (url === '/home/backupbd/manual') {
            return 'ul-side.manual_backup';
        }

        if (url === '/home/backupbd/restore') {
            return 'ul-side.restore';
        }

        return '';
    }

    navigateTo(node: NavigationNode) {

        this.selected = node;

        let route: string = '';
        let path: string = '';

        this.TREE_DATA.forEach(root => {

            if (root.children) {
                root.children.forEach(leaf => {
                    if (leaf.name == node.name) {
                        route = leaf.route || '';
                    }
                })
            }
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