import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemsService } from '../../../../../shared/services/api/items/items.service';
import { Item } from '../../../../../shared/models/items';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'at-product-home-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ProductHomeResultComponent implements OnInit {

  public items$: Observable<Item[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemsService) { }

  public next(id: string): void {
    this.router.navigate([`/content/products/items/${id}`]);
  }

  public ngOnInit() {
    this.items$ = this.itemService.search('');
  }
}
