import { Component, OnInit } from '@angular/core';
import { products } from '../product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
products = products;


  constructor() {}

  ngOnInit(): void {}
}
