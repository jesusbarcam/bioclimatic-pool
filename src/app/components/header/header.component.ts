import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ApplicationSettingsService } from 'services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {



  /**
   * @method
   * @constructor
   */
  constructor() {
  }// Constructor


  /**
   * @method
   * @lifecycle
   */
  ngOnInit() {
  }// NgOnInit


  public get companyLogoUrl() {
    return ApplicationSettingsService.COMPANY_LOGOTYPE_IMAGE_URL;
  }// CompanyLogoUrl

  public get companyName() {
    return ApplicationSettingsService.COMPANY_NAME;
  }// CompanyName


}// HeaderComponent
