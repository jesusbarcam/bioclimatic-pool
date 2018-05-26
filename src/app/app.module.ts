import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PoolsModule } from './modules/pools/pools.module';
import { PoolsSectionComponent } from './modules/pools/components/pools-section/pools-section.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    PoolsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
