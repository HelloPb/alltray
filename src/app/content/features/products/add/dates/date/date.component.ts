import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemActiveDate } from '../../../../../../shared/models/item-active-date';
import { Item } from '../../../../../../shared/models/items';
import * as _ from 'lodash';

@Component({
  selector: 'at-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class ProductAddDateComponent implements OnInit {

  private id: string;
  private date: ItemActiveDate;
  public formGroup: FormGroup;
  public weekDays;
  public eds;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) {
    this.createForm();
  }

  private createForm(): void {

    this.formGroup = this.formBuilder.group({
      from: '',
      to: '',
      byWeekDays: true,
      byDates: false
    });

  }

  private updateForm(date: ItemActiveDate): void {

    this.formGroup.patchValue({
      from: date.from,
      to: date.to,
      byWeekDays: date.byWeekDays,
      byDates: date.byDates
    });

  }

  public update(): void {

    this.date = Object.assign(this.date, this.formGroup.value);
    this.date.weekDays = this.weekDays;
    this.date.eds = this.eds;
    this.router.navigate([`/content/products/add/dates/${this.id}`]);

  }

  public discard(): void {

    this.router.navigate([`/content/products/add/dates/${this.id}`]);

  }

  public ngOnInit() {

    this.route.data.subscribe((data: { date: { date: ItemActiveDate, id: string } }) => {

      this.date = data.date.date;

      this.id = data.date.id;

      this.weekDays = _.cloneDeep(this.date.weekDays);
      this.eds = _.cloneDeep(this.date.eds);

      this.updateForm(this.date);

    });

  }
}
