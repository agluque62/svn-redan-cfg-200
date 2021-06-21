import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet, Router, ActivationStart } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    @ViewChild(RouterOutlet, { static: false })
    outlet!: RouterOutlet;
    hasChanges: boolean = false;

    constructor(private readonly router: Router, private readonly app: AppComponent) { }

    ngOnInit(): void {
        this.router.events.subscribe(e => {
            if (e instanceof ActivationStart && e.snapshot.outlet === "home-router") {
                this.outlet.deactivate();
            }
        });
        this.app.startAlive();
    }

}