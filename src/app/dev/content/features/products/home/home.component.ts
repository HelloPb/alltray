import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'at-product-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class ProductHomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() { }
}
