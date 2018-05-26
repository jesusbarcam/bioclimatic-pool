import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { PoolsSectionComponent } from './components/pools-section/pools-section.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [PoolsSectionComponent],
  exports: [PoolsSectionComponent]
})
export class PoolsModule {}// PoolsModule
