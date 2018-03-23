import { Component, OnInit, Input, AfterViewInit, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ExclusiveDate } from '../../../../../../../shared/models/exclusive-date';

@Component({
  selector: 'at-exclusive-dates',
  templateUrl: './exclusive-dates.component.html',
  styleUrls: ['./exclusive-dates.component.scss']
})
export class ExclusiveDatesComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() exclusiveDates: ExclusiveDate[];
  @Input() edit = false;
  @Output() formGroupEvent = new EventEmitter<FormGroup>();

  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder) {
    this.createForm();
  }

  private createForm(): void {
    this.formGroup = this.formBuilder.group({
      exds: this.formBuilder.array([])
    });
  }

  private updateForm(): void {
  }

  private updateExds(bhs: ExclusiveDate[]): void {

    for (let i = 0; i < this.exds.length; i++) {
      this.exds.removeAt(i);
    }

    if (bhs) {
      bhs.forEach(exd => this.updateExd(exd));
    }
  }

  public updateExd(exd: ExclusiveDate): void {
    const formGroup = this.createExdForm();
    this.updateExdForm(formGroup, exd);
    this.exds.push(formGroup);
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

  get exds(): FormArray {
    return this.formGroup.get('exds') as FormArray;
  }

  public addExd(): void {
    const exd = new ExclusiveDate();
    this.exclusiveDates.push(exd);
    this.updateExd(exd);
  }

  public deleteExd(index: number): void {
    this.exclusiveDates.splice(index, 1);
    this.exds.removeAt(index);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const chng = changes[propName];
        switch (propName) {
          case 'exclusiveDates': this.updateExds(chng.currentValue);
            break;
        }
      }
    }
  }

  public ngOnInit(): void {
    this.formGroupEvent.emit(this.formGroup);
  }

  public ngAfterViewInit(): void {
  }
}
