import { Component, OnInit } from '@angular/core';
import { Version } from 'src/app/_models/login/Version';
import { LoginService } from 'src/app/_services/login.service';

@Component({
  selector: 'ul-footer',
  templateUrl: './ul-footer.component.html',
  styleUrls: ['./ul-footer.component.scss']
})
export class UlFooterComponent implements OnInit {

  version!: Version;

  constructor(private readonly loginService: LoginService) { }

  async ngOnInit() {
    this.version = await this.loginService.version().toPromise();
  }
}
