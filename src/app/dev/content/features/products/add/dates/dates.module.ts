import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../../shared/modules/shared/shared.module';
import { ProductAddDatesRoutingModule } from './dates-routing.module';
import { WeekDaysModule } from './wds/week-days.module';
import { ExclusiveDatesModule } from './exd/exclusive-dates.module';
import { ProductAddDatesComponent } from './dates.component';

@NgModule({
  imports: [
    SharedModule,
    WeekDaysModule,
    ExclusiveDatesModule
  ],
  declarations: [ProductAddDatesComponent]
})
export class ProductAddDatesModule { }

@NgModule({
  exports: [
    ProductAddDatesRoutingModule,
    ProductAddDatesModule
  ]
})
export class ProductAddDatesExModule { }
