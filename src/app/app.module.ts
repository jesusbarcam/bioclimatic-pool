import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { PoolsModule } from './modules/pools/pools.module';
import { PoolsSectionComponent } from './modules/pools/components/pools-section/pools-section.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}// CreateTranslateLoader


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    SharedModule,
    PoolsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
    })
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}// AppModule
