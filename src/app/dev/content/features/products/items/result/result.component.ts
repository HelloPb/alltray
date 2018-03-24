import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ItemsService } from '../../../../../shared/services/api/items/items.service';
import { Item } from '../../../../../shared/models/items';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'at-product-items-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ProductItemsResultComponent implements OnInit {

  public items$: Observable<Item[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemsService) { }

  private getItems(params: ParamMap): void {
    const id = params.get('id');
    this.items$ = this.itemService.search('');
  }

  public next(id: string): void {
    this.router.navigate([`/content/products/item/${id}`]);
  }

  public ngOnInit(): void {
    this.route.paramMap.subscribe(x => this.getItems(x));
  }
}
