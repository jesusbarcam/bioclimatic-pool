import { Component, OnInit, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';


@Component({
  selector: 'bioh-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
// tslint:disable:max-line-length
export class BiohSocialmediaComponent implements OnInit {

  private readonly DEFAULT_PHONE: string = '34677700597';
  private readonly DEFAULT_MESSAGE: string = 'Estoy interesado en una piscina, y me gustaría que me realizaras un presupuesto sin compromiso!';
  private readonly DEFAULT_PUBLISH: string = 'Las mejores piscinas de hormigón gunitado totalmente personalizadas';

  @Input()
  private publish: string;

  @Input()
  private phone: string;

  @Input()
  private text: string;

  @Input()
  private imageOfBioh: string;


  @Output()
  private onWhatsappPublish = new EventEmitter<void>();

  @Output()
  private onTwitterPublish = new EventEmitter<void>();

  @Output()
  private onFacebookPublish = new EventEmitter<void>();

  @Output()
  private onInstagramPublish = new EventEmitter<void>();

  @Output()
  private onGooglePlusPublish = new EventEmitter<void>();



  constructor() {
    this.build();
  }// Constructor



  ngOnInit() {
  }// NgOnInit



  private build() {
    this.phone = this.DEFAULT_PHONE;
    this.text = this.DEFAULT_MESSAGE;
    this.publish = this.DEFAULT_PUBLISH;
  }// Build



  public facebookPublish() {
    this.onFacebookPublish.emit();
  }// FacebookPublish



  public twitterPublish() {
    this.onTwitterPublish.emit();
    window.open(`https://twitter.com/intent/tweet?url=${window.location.href}&text=${this.publish}`, '_blank');
  }// TwitterPublish



  public instagramPublish() {
    this.onInstagramPublish.emit();
  }// InstagramPublish



  public googlePlusPublish() {
    this.onGooglePlusPublish.emit();
  }// GooglePlusPublish


  /**
   * @method
   * @description
   * This method call to whatsapp api for
   * send message to number phone that we pass to parameters
   */
  public whatsappPublish() {
    this.onWhatsappPublish.emit();
    window.open( `https://api.whatsapp.com/send?phone=${this.phone}&text=${this.text}`, '_blank' );
  }// WhatsappPublish


}// BiohSocialMedia
