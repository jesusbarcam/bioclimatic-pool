import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ApplicationSettingsService } from 'services';
import { BiohOptionSelect } from 'bioh-material';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  private _languageList: BiohOptionSelect[];

  constructor(private translateService: TranslateService) {
  }// Constructor


  ngOnInit() {
    this.createLanguagesList();
  }// NgOnInit



  private createLanguagesList() {
    this._languageList = [
      new BiohOptionSelect('English', 'en'),
      new BiohOptionSelect('Spanish', 'es' , true)
      // new BiohOptionSelect('Romanian', 'ru')
    ];
  }// CreateLanguageList



  /**
   * @method
   * @param option
   * @description
   */
  public changeLanguage(option: BiohOptionSelect) {
    this.translateService.use(option.payload);
  }// ChangeLanguage



  public get currentYear() {
    return new Date().getFullYear();
  }// CurrentYear

  public get currentVersion() {
    return ApplicationSettingsService.APPLICATION_VERSION;
  }// CurrentVersion

  public get options() {
    return this._languageList;
  }

}// FooterComponent
