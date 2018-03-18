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
  styleUrls: ['./dates.component.scss']
})
export class ProductAddDatesComponent implements OnInit {

  private item: Item;

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
  }

  public deleteDate(index: number): void {

    this.item.dates.splice(index, 1);

  }

  public addDate(): void {

    this.item.dates.unshift(new ItemActiveDate());

  }

  public editDate(index: string): void {

    this.router.navigate([`/content/products/add/dates/${this.item.id}/date/${index}`]);

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

    });
  }

}
