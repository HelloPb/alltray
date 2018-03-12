import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'at-product-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class ProductSearchComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

}
