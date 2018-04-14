import { Component, OnInit, OnChanges, SimpleChanges, Input, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'at-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnInit, OnChanges {

  @Input() date: FormControl;

  public model: { year: number, month: number, day: number };

  private subscriptions: Subscription[] = [];

  constructor() {
  }

  public selectedDate(): void {
    this.date.setValue(`${this.model.day}-${this.model.month}-${this.model.year}`);
    this.date.markAsDirty();
    this.date.parent.updateValueAndValidity();
  }

  private applyDate(date: FormControl): void {
    this.subscriptions.push(date.valueChanges.subscribe((v: string) => {
      const split = v.split('-');

      if (split) {
        if (split.length === 3) {
          this.model.day = +split[0];
          this.model.month = +split[1];
          this.model.year = +split[2];
        }
      }
    }));
  }

  public ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {

        const chng = changes[propName];

        switch (propName) {
          case 'date': this.applyDate(chng.currentValue);
            break;
        }
      }
    }
  }

  ngOnInit() {
  }

}
