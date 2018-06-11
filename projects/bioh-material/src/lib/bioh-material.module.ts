import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacebookModule } from 'ngx-facebook';

import { BiohLogotypeComponent } from './components/logotype/logotype.component';
import { BiohSocialmediaComponent } from './components/socialmedia/socialmedia.component';
import { BiohSummaryComponent } from './components/summary/summary.component';
import { BiohIconSummaryComponent } from './components/icon-summary/icon-summary.component';



@NgModule({
  imports: [
    CommonModule,
    FacebookModule.forRoot()
  ],
  declarations: [
    BiohLogotypeComponent,
    BiohSocialmediaComponent,
    BiohSummaryComponent,
    BiohIconSummaryComponent
  ],
  exports: [
    BiohLogotypeComponent,
    BiohSocialmediaComponent,
    BiohSummaryComponent,
    BiohIconSummaryComponent
  ]
})


export class BiohMaterialModule {
}// BiohMaterialModule
