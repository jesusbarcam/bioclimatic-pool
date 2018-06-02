import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacebookModule } from 'ngx-facebook';

import { BiohLogotypeComponent } from './components/logotype/logotype.component';
import { BiohSocialmediaComponent } from './components/socialmedia/socialmedia.component';



@NgModule({
  imports: [
    CommonModule,
    FacebookModule.forRoot()
  ],
  declarations: [
    BiohLogotypeComponent,
    BiohSocialmediaComponent
  ],
  exports: [
    BiohLogotypeComponent,
    BiohSocialmediaComponent
  ]
})
export class BiohMaterialModule {
}// BiohMaterialModule
