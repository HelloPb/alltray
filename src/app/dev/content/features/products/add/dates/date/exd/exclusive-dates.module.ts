import { NgModule } from '@angular/core';
import { ExclusiveDatesComponent } from './exclusive-dates.component';
import { BhModule } from '../bhs/bh.module';
import { SharedModule } from '../../../../../../../shared/modules/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    BhModule
  ],
  declarations: [ExclusiveDatesComponent],
  exports: [ExclusiveDatesComponent]
})
export class ExclusiveDatesModule { }
