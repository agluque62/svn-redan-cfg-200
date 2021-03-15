import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Version } from 'src/app/_models/login/Version';
import { LoginService } from 'src/app/_services/login.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent implements OnInit {

  version!: Version;
  ready: boolean = false;

  constructor(private readonly loginService: LoginService, private readonly app: AppComponent, 
    private readonly userService: UserService, private readonly router: Router) { }

  async ngOnInit() {
    try {
      this.checkPermissions();
      this.version = await this.loginService.version().toPromise();
      this.ready = true;
    } catch (error) {
      this.app.catchError(error);
    }
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
}
