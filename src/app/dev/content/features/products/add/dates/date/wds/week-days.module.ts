import { NgModule } from '@angular/core';
import { WeekDaysComponent } from './week-days.component';
import { BhModule } from '../bhs/bh.module';
import { SharedModule } from '../../../../../../../shared/modules/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    BhModule
  ],
  declarations: [WeekDaysComponent],
  exports: [WeekDaysComponent]
})
export class WeekDaysModule { }
