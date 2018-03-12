import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BlankItemResolver implements Resolve<any> {
  constructor(private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const blank = new BehaviorSubject<any>(0);
    return blank.take(1).map(item => {
      this.router.navigate(['/content/products/add/choose']);
      return null;
    });
  }
}
