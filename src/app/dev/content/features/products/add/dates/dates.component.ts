import { Component, OnInit } from '@angular/core';
import { Item } from '../../../../../shared/models/items';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ExclusiveDate } from '../../../../../shared/models/exclusive-date';
import { WeekDays } from '../../../../../shared/models/week-days';
import { ItemActiveDate } from '../../../../../shared/models/item-active-date';

@Component({
  selector: 'at-product-add-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class ProductAddDatesComponent implements OnInit {

  private item: Item;
  public formGroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) {
    this.createForm();
  }

  private createForm(): void {
    this.formGroup = this.formBuilder.group({
      dates: this.formBuilder.array([])
    });
  }

  private updateForm(item: Item): void {
    this.updateDatesForm(item.dates);
  }

  private updateDatesForm(dates: ItemActiveDate[]): void {

    for (let i = 0; i < this.dates.length; i++) {
      this.dates.removeAt(i);
    }

    dates.forEach(date => {
      const formGroup = this.createDateForm();
      this.updateDateForm(formGroup, date);
      this.dates.push(formGroup);
    });
  }

  private createDateForm(): FormGroup {

    return this.formBuilder.group({
      from: '',
      to: '',
      byWeekDays: true,
      byDates: false
    });
  }

  private updateDateForm(formGroup: FormGroup, date: ItemActiveDate): void {

    formGroup.patchValue({
      from: date.from,
      to: date.to,
      byWeekDays: date.byWeekDays,
      byDates: date.byDates
    });
  }

  get dates(): FormArray {
    return this.formGroup.get('dates') as FormArray;
  }

  public editDate(dateIndex: string, exdDateIndex): void {

    this.router.navigate([`/content/products/add/dates/${this.item.id}/date/${dateIndex}/exd/${exdDateIndex}`]);

  }

  public back(): void {

    this.item = Object.assign(this.item, { name: '', description: '' });

    this.router.navigate([`/content/products/add/stock/${this.item.id}`]);

  }

  public next(): void {

    this.item = Object.assign(this.item, { name: '', description: '' });

    this.router.navigate([`/content/products/add/save/${this.item.id}`]);

  }

  public ngOnInit() {
    this.route.data.subscribe((data: { item: Item }) => {
      this.item = data.item;
      this.updateForm(this.item);
    });
  }
}
