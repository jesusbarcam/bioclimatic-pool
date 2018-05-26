import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { BiohMaterialModule } from 'bioh-material';

@NgModule({
  imports: [
    CommonModule,
    BiohMaterialModule
  ],
  declarations: [],
  exports: [
    BiohMaterialModule
  ]
})
export class SharedModule {
}// SharedModule
