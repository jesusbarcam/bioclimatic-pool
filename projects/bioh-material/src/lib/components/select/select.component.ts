import { Component, OnInit, Input, Output, ChangeDetectionStrategy, EventEmitter, ChangeDetectorRef } from '@angular/core';

import { BiohOptionSelect } from '../../models/option-select';


@Component({
  selector: 'bioh-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BiohSelectComponent implements OnInit {

  public static readonly DEFAULT_LABEL: string = 'Select';

  private _showOptions: boolean;
  private _selectedOption: BiohOptionSelect;

  @Input()
  public options: BiohOptionSelect[];

  @Input()
  public defaultLabel: string;

  @Output()
  public selectOption: EventEmitter<BiohOptionSelect>;



  constructor(private changeDetector: ChangeDetectorRef) {
    this.build();
  }// Constructor



  private build() {
    this._showOptions = false;
    this._selectedOption = null;
    this.defaultLabel = BiohSelectComponent.DEFAULT_LABEL;
    this.selectOption = new EventEmitter<BiohOptionSelect>();
  }// Build



  ngOnInit() {
  }// NgOnInit



  /**
   * @method
   * @description
   */
  public openOptionsContainer() {
    this._showOptions = !this._showOptions;
  }// OpenOptionsContainer



  /**
   * @method
   * @description
   */
  private resetOptions() {
    if ( this.options ) {
      this.options.forEach((option) => {
        option.selected = false;
      }); // ForEach
    }// If
  }// ResetOptions



  /**
   * @method
   * @param option
   * @description
   */
  public select(option: BiohOptionSelect) {
    this.resetOptions();
    this._selectedOption = option;
    this.changeDetector.markForCheck();
    this.selectOption.emit( this._selectedOption );
  }// Select



  public isSelectedThisOption(option: BiohOptionSelect) {
    return ((this._selectedOption) && (option.label === this._selectedOption.label));
  }// IsSelectedThisOption


  public get showOptions() {
    return this._showOptions;
  }// ShowOptions

  public get selectedOption() {
    return this._selectedOption;
  }// SelectedOption


}// BiohSelectComponent

