import { Component, OnInit } from '@angular/core';
import { Item } from '../../../../../shared/models/items';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from '../../../../../shared/services/api/items/items.service';

@Component({
  selector: 'at-product-add-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class ProductAddSaveComponent implements OnInit {

  private item: Item;
  public formGroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private itemService: ItemsService) {
    this.create();
  }

  private create(): void {

    this.formGroup = this.formBuilder.group({});

  }

  public back(): void {

    this.router.navigate([`/content/products/add/${this.item.id}/dates`]);

  }

  public save(): void {

    if (this.item.id === '0') {

      this.item.id = undefined;

      this.itemService.post(this.item).subscribe(s => {

        this.router.navigate([`/content/products/add/${s.id}/done`]);

      });

    } else {

      this.itemService.put(this.item.id, this.item).subscribe(s => {

        this.router.navigate([`/content/products/add/${s.id}/done`]);

      });
    }
  }

  public ngOnInit() {
    this.route.data.subscribe((data: { item: Item }) => {
      this.item = data.item;
    });
  }
}
