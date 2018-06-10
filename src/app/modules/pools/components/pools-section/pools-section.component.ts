import { Component, OnInit, HostListener } from '@angular/core';

import { ApplicationSettingsService } from 'services';

@Component({
  selector: 'pools-section',
  templateUrl: './pools-section.component.html',
  styleUrls: ['./pools-section.component.scss']
})
export class PoolsSectionComponent implements OnInit {


  private readonly STOP_SCROLL_IMAGE_LIMIT_TOP_POSITION: number = 638;
  private _stopTopImage: boolean;




  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log(window.pageYOffset);
    this._stopTopImage = ( window.pageYOffset > this.STOP_SCROLL_IMAGE_LIMIT_TOP_POSITION);
  }// OnWindowScroll



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


  public get splashImageUrl() {
    return ApplicationSettingsService.SPLASH_IMAGE_URL;
  }// SplashImageUrl

  public get stopTopImage() {
    return this._stopTopImage;
  }// StopTopImage

  public get stepsToPoolBuild() {
    return '../../../../../assets/images/stepsBuildPool.jpg';
  }// StepsToPoolBuild

}// PoolsSectionComponent
