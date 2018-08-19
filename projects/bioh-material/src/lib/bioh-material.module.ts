import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiohLogotypeComponent } from './components/logotype/logotype.component';
import { BiohSocialmediaComponent } from './components/socialmedia/socialmedia.component';
import { BiohSummaryComponent } from './components/summary/summary.component';
import { BiohIconSummaryComponent } from './components/icon-summary/icon-summary.component';
import { BiohWallpaperComponent } from './components/wallpaper/bioh-wallpaper.component';
import { BiohSelectComponent } from './components/select/select.component';
import { BiohOptionSelectComponent } from './components/option-select/option-select.component';

import { BiohClickOutsideDirective } from './directives/clickOutside/clickOutside.directive';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BiohLogotypeComponent,
    BiohSocialmediaComponent,
    BiohSummaryComponent,
    BiohIconSummaryComponent,
    BiohWallpaperComponent,
    BiohSelectComponent,
    BiohOptionSelectComponent,
    BiohClickOutsideDirective
  ],
  exports: [
    BiohLogotypeComponent,
    BiohSocialmediaComponent,
    BiohSummaryComponent,
    BiohIconSummaryComponent,
    BiohWallpaperComponent,
    BiohSelectComponent,
    BiohOptionSelectComponent,
    BiohClickOutsideDirective
  ]
})


export class BiohMaterialModule {
}// BiohMaterialModule
