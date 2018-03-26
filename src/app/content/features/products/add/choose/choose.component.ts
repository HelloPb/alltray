import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../../../../../shared/models/items';

@Component({
  selector: 'at-product-add-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ProductAddChooseComponent implements OnInit {

  private item: Item;
  public formGroup: FormGroup;
  private categories = [
    { name: 'Fresh Vegitables', value: '1' },
    { name: 'Groceries', value: '2' },
    { name: 'Home Food', value: '3' },
    { name: 'Milk', value: '4' },
    { name: 'Ayurvadic', value: '5' },
    { name: 'Plumber', value: '6' },
    { name: 'Electrician', value: '7' },
    { name: 'Kumbara', value: '8' },
    { name: 'Home Cook', value: '9' },
    { name: 'Achari', value: '10' },
    { name: 'Ganiga', value: '11' },
    { name: 'Sherigara', value: '12' }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) {
    this.create();
  }

  private create(): void {

    this.formGroup = this.formBuilder.group({
      name: '',
      description: '',
      category: ''
    });

  }

  private update(item: Item): void {

    this.formGroup.patchValue({
      name: item.name,
      description: item.description
    });

  }

  public next(): void {

    this.item = Object.assign(this.item, this.formGroup.value);

    this.router.navigate([`/content/products/add/stock/${this.item.id}`]);

  }

  public cancel(): void {

    this.router.navigate([`/`]);

  }

  public ngOnInit() {
    this.route.data.subscribe((data: { item: Item }) => {
      this.item = data.item;
      this.update(this.item);
    });
  }
}
