import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'at-product-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class ProductSearchCriteriaComponent implements OnInit {

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
