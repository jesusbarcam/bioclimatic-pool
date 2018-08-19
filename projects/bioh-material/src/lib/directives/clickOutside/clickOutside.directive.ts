import { Directive, EventEmitter, ElementRef, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[biohClickOutside]'
})
export class BiohClickOutsideDirective {

  @Output()
  public biohClickOutside: EventEmitter<void>;


  /**
   * @method
   */
  constructor(private elementRef: ElementRef) {
    this.biohClickOutside = new EventEmitter<void>();
  }// Constructor



  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const clickedInside = this.elementRef.nativeElement.contains( targetElement );
    if ( !clickedInside ) {
      this.biohClickOutside.emit();
    }// If
  }// OnClick


}// BiohClickOutsideDirective
