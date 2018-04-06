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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService) {
  }

  public add(): void {
    this.router.navigate([`/content/products/category/add`]);
  }

  public edit(id: string): void {
    this.router.navigate([`/content/products/category/edit/${id}`]);
  }

  public delete(id: string): void {
    this.categoryService.delete(id).subscribe(x => {
      this.getCategories();
    });
  }

  private getCategories(): void {
    this.categories$ = this.categoryService.search('');
  }

  public ngOnInit() {
    this.getCategories();
  }
}
