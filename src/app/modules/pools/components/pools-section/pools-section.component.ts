import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pools-section',
  templateUrl: './pools-section.component.html',
  styleUrls: ['./pools-section.component.scss']
})
export class PoolsSectionComponent implements OnInit {

  private splashImageUrl: String = '../../../../../assets/images/splash.jpg';

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

}// PoolsSectionComponent
