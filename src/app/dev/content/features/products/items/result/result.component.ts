import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ItemsService } from '../../../../../shared/services/api/items/items.service';
import { Item } from '../../../../../shared/models/items';

@Component({
  selector: 'at-product-items-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ProductItemsResultComponent implements OnInit {

  public items: Item[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemsService) { }

  private getItems(params: ParamMap): void {
    const id = params.get('id');
    this.itemService.search('').subscribe(result => {
      this.items = (result.recipes as Item[]).map(x => { x.expand = false; return x; });
    });
  }

  public next(id: string): void {
    const paths = id.split('\\');
    this.router.navigate([`/content/products/item/${paths[paths.length - 1]}`]);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(x => this.getItems(x));
  }
}
