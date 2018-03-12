import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'at-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
