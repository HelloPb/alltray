import { NgModule } from '@angular/core';
import { WeekDaysComponent } from './week-days.component';
import { SharedModule } from '../../../../../../shared/modules/shared/shared.module';
import { BhModule } from '../bhs/bh.module';

@NgModule({
  imports: [
    SharedModule,
    BhModule
  ],
  declarations: [WeekDaysComponent],
  exports: [WeekDaysComponent]
})
export class WeekDaysModule { }
