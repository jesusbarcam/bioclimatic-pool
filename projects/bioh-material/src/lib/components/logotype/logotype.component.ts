import { Component, OnInit, Input } from '@angular/core';
import { BiohMaterialService } from '../../bioh-material.service';



@Component({
  selector: 'bioh-logotype',
  templateUrl: './logotype.component.html',
  styleUrls: ['./logotype.component.scss']
})
export class BiohLogotypeComponent implements OnInit {

  @Input('companyLogoUrl')
  public companyLogoUrl: String;

  @Input('full')
  public full: boolean;

  @Input('height')
  public height: number;


  constructor() {
    this.full = true;
  }// constructor



  /**
   * @method
   * @description
   */
  ngOnInit() {
    this.inicialize();
  }// ngOnInit



  /**
   * @method
   * @description
   */
  private inicialize() {
    this.companyLogoUrl = BiohMaterialService.BIOH_LOGOTYPE_IMAGE_URL;
  }// inicialize


}// CompanyLogotypeComponent
