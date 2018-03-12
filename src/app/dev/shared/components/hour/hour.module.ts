import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HourComponent } from './hour.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [HourComponent],
  exports: [HourComponent]
})
export class HourModule { }
