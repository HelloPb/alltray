import { Component, OnInit } from '@angular/core';
import { Category } from '../../../../../shared/models/category';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CategoryService } from '../../../../../shared/services/api/category/category.service';

@Component({
  selector: 'at-product-category-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class ProductCategoryAddEditComponent implements OnInit {

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
      id: '',
      name: '',
      description: '',
      culture: '',
      hint: ''
    });

  }

  private update(category: Category): void {

    this.formGroup.patchValue({
      id: category.id,
      name: category.name,
      description: category.description,
      culture: category.culture,
      hint: category.hint
    });

  }

  public cancel(): void {

    this.gotoList();

  }

  public save(): void {

    const category: Category = this.formGroup.value;

    if (category.id) {
      this.categoryService.put(category.id, category).subscribe(x => {
        this.gotoList();
      });
    } else {
      this.categoryService.post(category).subscribe(x => {
        this.gotoList();
      });
    }

  }

  private gotoList(): void {

    this.router.navigate([`/content/products/category`]);

  }

  public ngOnInit() {

    this.route.data.subscribe((data: { item: Category }) => {
      this.update(data.item);
    });

  }
}
