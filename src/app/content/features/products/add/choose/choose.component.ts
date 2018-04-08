import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../../../../../shared/models/items';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/empty';
import { Observable } from 'rxjs/Observable';


import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { CategoryService } from '../../../../../shared/services/api/category/category.service';
import { Category } from '../../../../../shared/models/category';

@Component({
  selector: 'at-product-add-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ProductAddChooseComponent implements OnInit {

  private item: Item;
  public formGroup: FormGroup;

  public categories = [];
  private skipSearch = false;
  private searchText$ = new Subject<string>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService) {
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
      description: item.description,
      category: item.category
    });

  }

  public next(): void {

    this.item = Object.assign(this.item, this.formGroup.value);

    this.router.navigate([`/content/products/add/${this.item.id}/stock`]);

  }

  public cancel(): void {

    this.router.navigate([`/`]);

  }

  public selectedCategory(category: Category): void {

    this.categories = [];

    this.skipSearch = true;

    this.formGroup.patchValue({
      description: category.description,
      category: category.name
    });
  }

  public ngOnInit() {

    this.route.data.subscribe((data: { item: Item }) => {
      this.item = data.item;
      this.update(this.item);
    });

    this.searchText$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(text =>
        this.categoryService.search(text))).subscribe(x => {
          this.categories = x;
        });

    this.formGroup.controls['category'].valueChanges.subscribe(x => {

      this.categories = [];

      if (!this.skipSearch) {
        this.searchText$.next(`name=${x}`);
      } else {
        this.skipSearch = false;
      }
    });
  }
}
