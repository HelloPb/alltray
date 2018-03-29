import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Item } from '../../../../../../shared/models/items';
import { EditItemService } from '../provider/edit-item.service';

@Injectable()
export class ActiveItemResolver implements Resolve<any> {
  constructor(private edit: EditItemService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item> {

    return this.edit.item().take(1).map(item => {
      if (item) {
        return item;
      } else {
        this.router.navigate(['/content/products/add']);
        return null;
      }
    });
  }
}
