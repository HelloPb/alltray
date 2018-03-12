import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'at-product-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ProductItemsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() { }
}
