import { Component, OnInit } from '@angular/core';
import { Item } from '../../../../../shared/models/items';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'at-product-add-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class ProductAddSaveComponent implements OnInit {

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

  public back(): void {

    this.item = Object.assign(this.item, { name: '', description: '' });

    this.router.navigate([`/content/products/add/bh/${this.item.id}`]);

  }

  public save(): void {

    this.item = Object.assign(this.item, { name: '', description: '' });

    this.router.navigate([`/content/products/add/done/${this.item.id}`]);

  }

  public ngOnInit() {
    this.route.data.subscribe((data: { item: Item }) => {
      this.item = data.item;
    });
  }
}
