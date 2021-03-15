import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

// Components
import { ConfigurationHomeComponent } from "../sections/configuration/configuration/configuration-home/configuration-home.component";
import { AudioBssTableHomeComponent } from "../sections/configuration/audio-bss-table/audio-bss-table-home/audio-bss-table-home.component";
import { ExtResourcesHomeComponent } from "../sections/configuration/ext-resources/ext-resources-home/ext-resources-home.component";
import { HistoricComponent } from "../sections/maintenance/historic/historic.component";
import { ServerConfComponent } from "../sections/maintenance/server-conf/server-conf.component";
import { VersionComponent } from "../sections/maintenance/version/version.component";
import { UsersHomeComponent } from "../sections/configuration/users/users-home/users-home.component";
import { BackupHistoricComponent } from "../sections/backup-bd/backup-historic/backup-historic.component";
import { BackupManualComponent } from "../sections/backup-bd/backup-manual/backup-manual.component";
import { ParamsComponent } from "../sections/backup-bd/params/params.component";
import { RestoreComponent } from "../sections/backup-bd/restore/restore.component";
import { ConfigurationViewComponent } from "../sections/configuration/configuration/configuration-view/configuration-view.component";
import { GatewayHomeComponent } from "../sections/configuration/configuration/gateway/gateway-home/gateway-home.component";
import { ResourceHomeComponent } from "../sections/configuration/configuration/resource/resource-home/resource-home.component";

const homeRouter = 'home-router';

const homeRoutes: Routes = [

    {
        path: '', component: HomeComponent,
        children: [
            {
                path: 'config',
                children: [
                    { 
                        path: '', component: ConfigurationHomeComponent, outlet: homeRouter,        
                    },
                ]
            },
            { 
                path: 'config/audio-bss-table', 
                children:  [
                    {   	   
                        path: '', component: AudioBssTableHomeComponent, outlet: homeRouter,
                    },
                ]
            },
            { 
                path: 'config/ext-resources', 
                children:  [
                    {   	   
                        path: '', component: ExtResourcesHomeComponent, outlet: homeRouter,
                    },
                ]
            },            
            { 
                path: 'config/users', 
                children:  [
                    {   	   
                        path: '', component: UsersHomeComponent, outlet: homeRouter,
                    },
                ]
            },
            {
                path: 'config/:id',
                children: [
                    {
                        path: '', component: ConfigurationViewComponent, outlet: homeRouter,
                    }
                ]
            },
            {
                path: 'gateway/new',
                children: [
                    {
                        path: '', component: GatewayHomeComponent, outlet: homeRouter,
                    }
                ]
            },
            {
                path: 'gateway/:id',
                children: [
                    {
                        path: '', component: GatewayHomeComponent, outlet: homeRouter,
                    }
                ]
            },
            {
                path: 'resource/new',
                children: [
                    {
                        path: '', component: ResourceHomeComponent, outlet: homeRouter,
                    }
                ]
            },
            {
                path: 'resource/:id',
                children: [
                    {
                        path: '', component: ResourceHomeComponent, outlet: homeRouter,
                    }
                ]
            },
            { 
                path: 'maintenance/historic', 
                children:  [
                    {   	   
                        path: '', component: HistoricComponent, outlet: homeRouter,
                    },
                ]
            },
            { 
                path: 'maintenance/server-conf', 
                children:  [
                    {   	   
                        path: '', component: ServerConfComponent, outlet: homeRouter,
                    },
                ]
            },
            { 
                path: 'maintenance/version', 
                children:  [
                    {   	   
                        path: '', component: VersionComponent, outlet: homeRouter,
                    },
                ]
            },
            {
                path: 'backupbd/params',
                children: [
                    { path: '', component: ParamsComponent, outlet: homeRouter }
                ]
            },
            {
                path: 'backupbd/historic',
                children: [
                    { path: '', component: BackupHistoricComponent, outlet: homeRouter }
                ]
            },
            {
                path: 'backupbd/manual',
                children: [
                    { path: '', component: BackupManualComponent, outlet: homeRouter }
                ]
            },
            {
                path: 'backupbd/restore',
                children: [
                    { path: '', component: RestoreComponent, outlet: homeRouter }
                ]
            }
        ],
        runGuardsAndResolvers: 'always',
    }
];

export const HomeRouter = RouterModule.forChild(homeRoutes);