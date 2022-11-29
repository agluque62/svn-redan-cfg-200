import { Component, Injectable } from '@angular/core';
import { LoginService } from './_services/login.service';
import { interval, Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { AppSettings } from './core/app.settings';
import { Router } from '@angular/router';
import { DataService } from './_services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class AppComponent {
  title = 'Ulises';

  interval: any;
  subscription!: Subscription;

  constructor(private readonly loginService: LoginService, private readonly router: Router, private readonly dataService: DataService) { }

  public async startAlive() {

    this.interval = interval(1000);
    this.subscription = this.interval.subscribe(async () => {
      try {
        await this.loginService.alive().toPromise();
      } catch (error: any) {
        this.catchError(error);
      }
    });
  }

  public async destroyAlive() {

    this.subscription.unsubscribe();
  }

  catchError(error: HttpErrorResponse) {
    console.log("Exception Error => ", error);
    if (error.status == AppSettings.UNAUTHORIZED_ERROR_CODE) {
      this.dataService.updateDataError(error.error.error);
      this.router.navigate(['/access']);
    }  
  }
}
