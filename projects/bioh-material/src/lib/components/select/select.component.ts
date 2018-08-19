import { Component, OnInit, Input, Output, ChangeDetectionStrategy, EventEmitter,
  ChangeDetectorRef, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import * as Tether from 'tether';

import { BiohOptionSelect } from '../../models/option-select';


@Component({
  selector: 'bioh-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BiohSelectComponent implements OnInit, AfterViewInit {

  public static readonly DEFAULT_LABEL: string = 'Select';
  public static readonly DEFAULT_WIDTH_OF_SELECT: number = 100;

  private _showOptions: boolean;
  private _elementWidth: number;
  private _selectedOption: BiohOptionSelect;

  @Input()
  public options: BiohOptionSelect[];

  @Input()
  public defaultLabel: string;

  @Output()
  public selectOption: EventEmitter<BiohOptionSelect>;

  @ViewChild('selectButton')
  public selectButton: ElementRef;


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
    this.managePositioningOptionsContainer();
  }// NgOnInit



  ngAfterViewInit(): void {
    this.manageSelectElementWidth();
  }// NgAfterViewInit



  /**
   * @method
   * @description
   */
  private managePositioningOptionsContainer() {
    setTimeout(() => {
      const tether = new Tether({
        element: '.bioh-options-container',
        target: '.bioh-select-button',
        attachment: 'top left',
        targetAttachment: 'bottom left',
        constraints: [{
          to: 'scrollParent'
        }, {
          to: 'window',
          attachment: 'together'
        }]
      });
    }, 10);
  }// ManagePositioningOptionsContainer



  /**
   * @method
   * @description
   */
  private manageSelectElementWidth() {
    if ( this.selectButton ) {
      const newWidth = this.selectButton.nativeElement.clientWidth || BiohSelectComponent.DEFAULT_WIDTH_OF_SELECT;
      const currentWidth = this._elementWidth || BiohSelectComponent.DEFAULT_WIDTH_OF_SELECT;
      this._elementWidth = (newWidth > currentWidth) ? newWidth : currentWidth;
    }// If
  }// ManageSelectElementWidth



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



  /**
   * @method
   * @description
   */
  public onClickOutside() {
    this._showOptions = false;
    this.changeDetector.markForCheck();
  }// OnClickOutside



  public isSelectedThisOption(option: BiohOptionSelect) {
    return ((this._selectedOption) && (option.label === this._selectedOption.label));
  }// IsSelectedThisOption



  public get showOptions() {
    return this._showOptions;
  }// ShowOptions

  public get selectedOption() {
    return this._selectedOption;
  }// SelectedOption

  public get elementWidth() {
    return this._elementWidth;
  }// ElementWidth

}// BiohSelectComponent

