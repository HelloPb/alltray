import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeekDays } from '../../../../../../shared/models/week-days';

@Component({
  selector: 'at-week-days',
  templateUrl: './week-days.component.html',
  styleUrls: ['./week-days.component.scss']
})
export class WeekDaysComponent implements OnInit, AfterViewInit {

  @Input() weekDays: WeekDays;
  @Input() edit = false;

  constructor() {
  }

  public ngOnInit(): void {

  }

  public ngAfterViewInit(): void {

  }
}
