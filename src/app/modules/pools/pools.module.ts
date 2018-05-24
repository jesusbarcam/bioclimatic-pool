import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoolsSectionComponent } from './components/pools-section/pools-section.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PoolsSectionComponent],
  exports: [PoolsSectionComponent]
})
export class PoolsModule {}// PoolsModule
