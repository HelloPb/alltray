import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Item } from '../../../models/items';
import { ItemsService } from '../../api/items/items.service';

@Injectable()
export class ItemResolver implements Resolve<Item> {
  constructor(private items: ItemsService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item> {
    const id = route.paramMap.get('id');

    return this.items.get(id).take(1).map(item => {
      if (item) {
        return item;
      } else {
        this.router.navigate(['/']);
        return null;
      }
    });
  }
}
