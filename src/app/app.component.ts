import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    this.build();
  }// Constructor


  /**
   * @method
   * @private
   */
  private build() {
    this.setupTranslateService();
  }// Build


  /**
   * @method
   * @private
   */
  private setupTranslateService() {
    // Setup all languages that use this application
    this.translate.addLangs(['es', 'en', 'ru']);
    // Setup language by default
    this.translate.setDefaultLang( 'es' );
    // Setup current language to use
    this.translate.use( 'es' );
  }// SetupTranslateService


}// AppComponent
