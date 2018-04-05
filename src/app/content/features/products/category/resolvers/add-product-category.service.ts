import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Category } from '../../../../../shared/models/category';
import { CategoryService } from '../../../../../shared/services/api/category/category.service';

@Injectable()
export class AddProductCategoryResover implements Resolve<Category> {
  constructor(private edit: CategoryService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Category> {
    return Observable.create(observer => {
      observer.next(new Category());
      observer.complete();
    });
  }
}

