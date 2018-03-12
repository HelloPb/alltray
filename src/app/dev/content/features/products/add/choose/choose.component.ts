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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) {
    this.create();
  }

  private create(): void {

    this.formGroup = this.formBuilder.group({
      name: '',
      description: ''
    });

  }

  public next(): void {

    this.item = Object.assign(this.item, { name: '', description: '' });

    this.router.navigate([`/content/products/add/stock/${this.item.id}`]);

  }

  public cancel(): void {

    this.router.navigate([`/`]);

  }

  public ngOnInit() {
    this.route.data.subscribe((data: { item: Item }) => {
      this.item = data.item;
    });
  }
}
