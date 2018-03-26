import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AtVarDirectivesModule } from '../../directives/at-directives.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    AtVarDirectivesModule
  ],
  declarations: [CalendarComponent],
  exports: [CalendarComponent]
})
export class CalendarModule { }
