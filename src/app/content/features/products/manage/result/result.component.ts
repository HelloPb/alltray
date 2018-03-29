import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ItemsService } from '../../../../../shared/services/api/items/items.service';
import { Item } from '../../../../../shared/models/items';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'at-product-manage-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ProductManageResultComponent implements OnInit {

  public items: Item[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemsService) { }

  private getItems(params: ParamMap): void {
    const id = params.get('id');
    this.itemService.search('').subscribe( x => {
      this.items = x;
    });
  }

  public delete(id: string, index: number): void {

    console.log('ddd');
    this.itemService.delete(id).subscribe( (x) => {
      this.items.splice(index, 1);
    });
  }

  public edit(id: string, index: number): void {
    this.router.navigate([`/content/products/add/${id}`]);
  }

  public ngOnInit(): void {
    this.route.paramMap.subscribe(x => this.getItems(x));
  }

}
