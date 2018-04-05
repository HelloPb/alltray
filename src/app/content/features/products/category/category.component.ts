import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../../../shared/models/category';
import { CategoryService } from '../../../../shared/services/api/category/category.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'at-product-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  private categories$: Observable<Category[]>;

  public formGroup: FormGroup;

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
      description: ''
    });

  }

  public back(): void {

    this.router.navigate([`/content/products/categories`]);

  }

  public save(): void {

  }

  public ngOnInit() {

    this.categories$ = this.categoryService.search('');
  }

}
