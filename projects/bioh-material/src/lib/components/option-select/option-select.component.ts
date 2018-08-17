import { Component, Input, OnInit, ChangeDetectionStrategy, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { BiohOptionSelect } from '../../models/option-select';

@Component({
  selector: 'bioh-option-select',
  templateUrl: './option-select.component.html',
  styleUrls: ['./option-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BiohOptionSelectComponent implements OnInit, OnChanges {


  @Input()
  public option: BiohOptionSelect;

  @Input()
  public selected: Boolean;


  constructor(private changeDetector: ChangeDetectorRef) {
    this.selected = false;
  }// Constructor


  ngOnInit() {
  }// NgOnInit


  ngOnChanges(changes: SimpleChanges): void {
    if ( changes.option && !changes.option.isFirstChange() ) {
      const option = changes.option.currentValue;
      this.selected = option.selected;
      this.changeDetector.markForCheck();
    }// If
  }// NgOnChanges



}// BiohOptionSelectComponent
