import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {

  public activeLang !: any;

  private readonly translate: TranslateService;

  constructor(translate: TranslateService) {
    this.translate = translate;
    this.activeLang = localStorage.getItem('langSelected') ?? this.translate.getBrowserLang();
    if (!localStorage.getItem('langSelected')) {
      this.translate.setDefaultLang(this.activeLang);
      localStorage.setItem('langSelected', this.activeLang);
    } else {
      this.translate.setDefaultLang(this.activeLang)
    }
  }

  ngOnInit() {
  }

  /**
   * This function changes the language and saves the language selected on local storage.
   * @param lang 
   */
  public changeLanguage(lang: string) {
    localStorage.setItem('langSelected', lang);
    this.translate.use(lang);
  }

}