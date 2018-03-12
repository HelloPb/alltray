import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../../../../../shared/models/items';
import { EditItemService } from '../provider/edit-item.service';

@Injectable()
export class NewItemResolver implements Resolve<Item> {
  constructor(private edit: EditItemService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item> {
    return this.edit.newItem().take(1).map(item => {
      if (item) {
        return item;
      } else {
        this.router.navigate(['/content/products/add']);
        return null;
      }
    });
  }
}
