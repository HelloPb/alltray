import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Item } from '../../../../../../shared/models/items';
import { Observable } from 'rxjs/Observable';
import { ItemsService } from '../../../../../../shared/services/api/items/items.service';
import { EditItemService } from '../provider/edit-item.service';

@Injectable()
export class EditItemResolver implements Resolve<Item> {
  constructor(private edit: EditItemService, private item: ItemsService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item> {

    const id = route.paramMap.get('id');

    return this.edit.editItem(id).take(1).map(item => {
      if (item) {
        return item;
      } else {
        this.router.navigate(['/content/products/add']);
        return null;
      }
    });
  }
}
