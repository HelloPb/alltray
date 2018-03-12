import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { HHMM } from '../../models/bhs';

@Component({
  selector: 'at-hour',
  templateUrl: './hour.component.html',
  styleUrls: ['./hour.component.css']
})
export class HourComponent implements OnInit, OnChanges {

  @Input() hhmm: HHMM;

  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder) {
    this.createForm();
  }

  private createForm(): void {
    this.formGroup = this.formBuilder.group({
      h: '',
      m: ''
    });
  }

  public addHour(h: number): void {
    if (+h < 24) {
      this.formGroup.patchValue({ h: ++h });
      this.hhmm.h = +h;
    }
  }

  public reduceHour(h: number): void {
    if (+h > 0) {
      this.formGroup.patchValue({ h: --h });
      this.hhmm.h = +h;
    }
  }

  public addMinute(m: number): void {
    if (+m < 59) {
      this.formGroup.patchValue({ m: ++m });
      this.hhmm.m = +m;
    }
  }

  public reduceMinute(m: number): void {
    if (+m > 0) {
      this.formGroup.patchValue({ m: --m });
      this.hhmm.m = +m;
    }
  }

  private applyHHMM(hhmm: HHMM): void {
    this.formGroup.patchValue({ h: hhmm.h, m: hhmm.m });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {

        const chng = changes[propName];

        switch (propName) {
          case 'hhmm': this.applyHHMM(chng.currentValue);
            break;
        }
      }
    }
  }

  ngOnInit() {
  }

}
