import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemsService } from '../../../../../shared/services/api/items/items.service';
import { Item } from '../../../../../shared/models/items';

@Component({
  selector: 'at-product-home-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ProductHomeResultComponent implements OnInit {

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
      this.items = (result.recipes as Item[]).map(x => { x.expand = false; return x; });
    });
  }
}
