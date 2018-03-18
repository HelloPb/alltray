import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemActiveDate } from '../../../../../../shared/models/item-active-date';
import { Item } from '../../../../../../shared/models/items';

@Component({
  selector: 'at-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class ProductAddDateComponent implements OnInit {

  private id: string;
  private date: ItemActiveDate;
  public formGroup: FormGroup;

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

  public back(): void {

    this.router.navigate([`/content/products/add/dates/${this.id}`]);

  }

  public ngOnInit() {

    this.route.data.subscribe((data: { date: ItemActiveDate, item: Item }) => {
      this.date = data.date;
      this.id = data.item.id;
      this.updateForm(this.date);
    });

  }
}
