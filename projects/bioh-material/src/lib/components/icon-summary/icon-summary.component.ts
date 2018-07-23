import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'bioh-icon-summary',
  templateUrl: './icon-summary.component.html',
  styleUrls: ['./icon-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BiohIconSummaryComponent implements OnInit {

  @Input()
  public iconRef: string;



  constructor() {
  }// Constructor



  ngOnInit() {
  }// NgOnInit


}// BiohIconSummaryComponent
