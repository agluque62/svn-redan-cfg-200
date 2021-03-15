import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
    { path: 'access', component: LoginComponent, pathMatch: 'full' },
    { path: 'home', canActivate: [AuthGuard], loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
    { path: '', redirectTo: '/access', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
