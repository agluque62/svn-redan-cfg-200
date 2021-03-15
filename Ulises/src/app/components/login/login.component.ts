import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AppSettings } from 'src/app/core/app.settings';
import { DataService } from 'src/app/_services/data.service';
import { LoginService } from 'src/app/_services/login.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    credentials = {
        username: "",
        password: ""
    }

    errorMessage!: string;
    dangerAlert = false;

    constructor(private readonly router: Router, private readonly loginService: LoginService, private readonly app: AppComponent,
        private readonly route: ActivatedRoute, private readonly dataService: DataService, private readonly userService: UserService) { }

    ngOnInit(): void {

        const error = this.dataService.getDataError();
        if (error != null) {
            this.app.destroyAlive();
            this.errorMessage = error;
            this.dangerAlert = true;
        }
    }

    async login() {

        try {
            const loginUser = await this.loginService.login(this.credentials.username, this.credentials.password).toPromise();
            localStorage.setItem('user', JSON.stringify(loginUser));
            this.app.startAlive();
            this.navigate();
        } catch (error) {
            if (error.error) {
                this.errorMessage = error.error.message;
            } else {
                this.errorMessage = 'Ha ocurrido un error';
            }

            this.dangerAlert = true;
        }
    }

    navigate() {

        if (this.userService.isRole('ADMIN') || this.userService.isRole('CONFIGURATION') || this.userService.isRole('VISUALIZATION') 
            || this.userService.isRole('SUPERVISED_CONFIGURATION')) {
            this.router.navigate(['home/config']);
            return;
        }

        if (this.userService.isRole('USER_MANAGEMENT')) {
            this.router.navigate(['home/config/users']);
            return;
        }

        if (this.userService.isRole('HISTORICS')) {
            this.router.navigate(['/home/maintenance/historic']);
            return;
        }

        if (this.userService.isRole('BACKUP')) {
            this.router.navigate(['/home/backupbd/params']);
            return;
        }
    }

    public showErrorLogin() {

        return this.dangerAlert ? 'show-alert' : 'hide-alert';
    }
}