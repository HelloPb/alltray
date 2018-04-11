import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Item } from '../../../../../../shared/models/items';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ItemsService } from '../../../../../../shared/services/api/items/items.service';
import { ItemActiveDate } from '../../../../../../shared/models/item-active-date';

@Injectable()
export class EditItemService {

  private item$: BehaviorSubject<Item>;
  private activeItemDateForEdit: ItemActiveDate;

  constructor(private itemService: ItemsService) {
  }

  public newItem() {

    try {
      if (this.item$) {
        this.item$.complete();
        delete this.item$;
        delete this.activeItemDateForEdit;
      }
    } catch (e) {
    }

    const item = new Item();
    item.id = '0';

    this.item$ = new BehaviorSubject<Item>(item);

    return this.item$;
  }

  public editItem(id: string) {

    let bExist = false;

    if (this.item$) {

      const item = this.item$.value;

      if (item) {
        if (item.id === id) {
          bExist = true;
        }
      }
    }

    if (bExist) {

      return this.item$;

    } else {

      return this.getItem(id);

    }
  }

  public item() {

    let bExist = false;

    if (this.item$) {

      const item = this.item$.value;

      if (item) {
        bExist = true;
      }
    }

    if (bExist) {

      return this.item$;

    } else {

      return Observable.create(observer => { observer.next(); observer.complete(); });

    }
  }

  public itemDate(id: string) {

    const self = this;

    return Observable.create(observer => {

      let bExist = false;

      if (self.item$) {

        const item = self.item$.value;

        if (item) {
          if (item.dates) {
            if (item.dates.length >= +id + 1) {
              bExist = true;
            }
          }
        }
      }

      if (bExist) {

        const item = self.item$.value;

        self.activeItemDateForEdit = item.dates[+id];

        observer.next({ date: item.dates[+id], id: item.id });

      } else {

        observer.next();

      }

    });
  }

  public itemDateExd(id: string) {

    const self = this;

    return Observable.create(observer => {

      let bExist = false;

      if (self.activeItemDateForEdit) {

        if (self.activeItemDateForEdit.eds) {
          if (self.activeItemDateForEdit.eds.length >= +id + 1) {
            bExist = true;
          }
        }
      }

      if (bExist) {

        observer.next(self.activeItemDateForEdit.eds[+id]);

      } else {

        observer.next();

      }

    });
  }

  public itemDateWds(id: string) {

    const self = this;

    return Observable.create(observer => {

      let bExist = false;

      if (self.activeItemDateForEdit) {

        if (self.activeItemDateForEdit.weekDays) {
          if (self.activeItemDateForEdit.eds[id]) {
            bExist = true;
          }
        }
      }

      if (bExist) {

        observer.next(self.activeItemDateForEdit.weekDays[id]);

      } else {

        observer.next();

      }

    });
  }

  public publish(data: Item): void {
    return this.item$.next(data);
  }

  private getItem(id: string) {

    const self = this;
    return Observable.create(observer => {
      self.itemService.get(id).subscribe(
        item => {

          delete this.activeItemDateForEdit;
          this.item$ = new BehaviorSubject<Item>(item);

          observer.next(item);

        }, error => {
          observer.next();
        }
      );
    });
  }

}
