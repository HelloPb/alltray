import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Item } from '../../../../../shared/models/items';
import { ItemsService } from '../../../../../shared/services/api/items/items.service';

@Component({
  selector: 'at-product-search-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ProductSearchResultComponent implements OnInit {

  public items: Item[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemsService) { }

  public next(id: string): void {
    const paths = id.split('/');
    this.router.navigate([`/content/products/items/${paths[paths.length - 1]}`]);
  }

  public ngOnInit() {
    this.itemService.search('').subscribe(result => {
      this.items = result;
    });
  }
}
