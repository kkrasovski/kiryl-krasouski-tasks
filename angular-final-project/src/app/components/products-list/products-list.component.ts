import { Component, OnInit } from '@angular/core';
import { products } from '../product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products = products;
  title = 'название товара';
  listSize = products.length;
  isFiltered: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  public filter(value: any) {
    if (value) {
      this.products = products.filter((product) =>
        product.name.toLowerCase().includes(value)
      );
      this.listSize = this.products.length;
      this.isFiltered = true;
    } else {
      this.products = products;
      this.listSize = this.products.length;
      this.isFiltered = false;
    }
  }
}
