import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'at-product-search-manage',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class ProductSearchManageComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder) {
    this.create();
  }

  private create(): void {

    this.formGroup = this.formBuilder.group({
      search: ''
    });
  }

  ngOnInit() {
  }

}
