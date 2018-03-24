import { NgModule } from '@angular/core';
import { BhComponent } from './bh.component';
import { SharedModule } from '../../../../../../../shared/modules/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [BhComponent],
  exports: [BhComponent]
})
export class BhModule { }
