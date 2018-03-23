import { Component, OnInit, Input, AfterViewInit, OnChanges, SimpleChanges, EventEmitter, Output, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ExclusiveDate } from '../../../../../../../shared/models/exclusive-date';
import { Subscription } from 'rxjs/Subscription';
import { AtUtil } from '../../../../../../../shared/utils/at-util';

@Component({
  selector: 'at-exclusive-dates',
  templateUrl: './exclusive-dates.component.html',
  styleUrls: ['./exclusive-dates.component.scss']
})
export class ExclusiveDatesComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() exds: ExclusiveDate[];
  @Input() edit = false;

  public formGroup: FormGroup;

  private subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder) {
    this.createForm();
  }

  private createForm(): void {
    this.formGroup = this.formBuilder.group({
      exdsArray: this.formBuilder.array([])
    });
  }

  private updateForm(): void {
  }

  private updateExds(exds: ExclusiveDate[]): void {

    for (let i = 0; i < this.exdsArray.length; i++) {
      this.exdsArray.removeAt(i);
    }

    if (exds) {
      exds.forEach(exd => this.updateExd(exd));
    }
  }

  public updateExd(exd: ExclusiveDate): void {
    const formGroup = this.createExdForm();
    this.updateExdForm(formGroup, exd);
    this.exdsArray.push(formGroup);
    this.copyDataToModelOnFormValueChange(formGroup, exd);
  }


  private createExdForm(): FormGroup {
    return this.formBuilder.group({
      from: '',
      to: ''
    });
  }

  private updateExdForm(formGroup: FormGroup, exd: ExclusiveDate): void {
    formGroup.patchValue({
      from: exd.from,
      to: exd.to
    });
  }

  private copyDataToModelOnFormValueChange(formGroup: FormGroup, exd: ExclusiveDate): void {
    this.subscriptions.push(formGroup.valueChanges.subscribe(value => {
      exd.from = value.from;
      exd.to = value.to;
    }));
  }

  get exdsArray(): FormArray {
    return this.formGroup.get('exdsArray') as FormArray;
  }

  public addExd(): void {
    const exd = new ExclusiveDate();
    this.exds.push(exd);
    this.updateExd(exd);
  }

  public deleteExd(index: number): void {
    this.exds.splice(index, 1);
    this.exdsArray.removeAt(index);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const chng = changes[propName];
        switch (propName) {
          case 'exds': this.updateExds(chng.currentValue);
            break;
        }
      }
    }
  }

  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
  }

  public ngOnDestroy(): void {
    AtUtil.unsubscribe(this.subscriptions);
  }

}
