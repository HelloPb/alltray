import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Item } from '../../../../../shared/models/items';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'at-product-add-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class ProductAddDoneComponent implements OnInit {

  private item: Item;
  public formGroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) {
    this.create();
  }

  private create(): void {

    this.formGroup = this.formBuilder.group({
    });

  }

  public done(): void {

    this.router.navigate([`/`]);

  }

  public addAnother(): void {

    this.router.navigate([`/content/products/add`]);

  }

  public ngOnInit() {
  }
}
