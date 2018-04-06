import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CategoryService } from '../../../../../shared/services/api/category/category.service';
import { Category } from '../../../../../shared/models/category';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EditProductCategoryResover implements Resolve<Category> {
  constructor(private edit: CategoryService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Category> {

    const id = route.paramMap.get('id');

    return this.edit.get(id).take(1).map(item => {
      if (item) {
        return item;
      } else {
        this.router.navigate(['/content/products/category']);
        return null;
      }
    });
  }
}
