import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAddDateComponent } from './date.component';
import { SharedModule } from '../../../../../../shared/modules/shared/shared.module';
import { ProductAddDateRoutingModule } from './date-routing.module';
import { ExclusiveDatesModule } from '../exd/exclusive-dates.module';
import { WeekDaysModule } from '../wds/week-days.module';

@NgModule({
  imports: [
    SharedModule,
    WeekDaysModule,
    ExclusiveDatesModule
  ],
  declarations: [ProductAddDateComponent],
  exports: [ProductAddDateComponent]
})
export class ProductAddDateModule { }

@NgModule({
  exports: [
    ProductAddDateModule,
    ProductAddDateRoutingModule
  ]
})
export class ProductAddDateExModule { }