import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'at-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit, OnChanges {

  @Input() date: FormControl;

  public formGroup: FormGroup;
  public model: { year: number, month: number, day: number };

  private subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder) {
    this.createForm();
  }

  private createForm(): void {
    this.formGroup = this.formBuilder.group({
      date: ''
    });
  }

  public selectedDate(): void {
    this.formGroup.patchValue({ date: `${this.model.day}-${this.model.month}-${this.model.year}` });
    this.formGroup.controls['date'].markAsDirty();
  }

  private applyDate(date: FormControl): void {
    this.formGroup.setControl('date', date);
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
