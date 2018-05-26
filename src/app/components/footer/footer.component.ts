import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ApplicationSettingsService } from 'services';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {


  constructor() {
  }// Constructor


  ngOnInit() {
  }// NgOnInit


  public get currentYear() {
    return new Date().getFullYear();
  }// CurrentYear

  public get currentVersion() {
    return ApplicationSettingsService.APPLICATION_VERSION;
  }// CurrentVersion

}// FooterComponent
