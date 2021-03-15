import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet, Router, ActivationStart } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    @ViewChild(RouterOutlet, { static: false })
    outlet!: RouterOutlet;

    constructor(private readonly router: Router) { }

    ngOnInit(): void {
        this.router.events.subscribe(e => {
            if (e instanceof ActivationStart && e.snapshot.outlet === "home-router") {
                this.outlet.deactivate();
            }
        });
    }
}