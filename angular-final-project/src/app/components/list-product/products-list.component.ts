import { Component, OnInit } from '@angular/core';
import { Product } from './../../components/products.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  filtered: Product[] = this.products;
  title:string = 'название товара';
  listSize: number = 0;
  isFiltered: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProduct('products').subscribe((res: Product[]) => {
      this.filtered = res;
      this.listSize = this.filtered.length;
    });
  }

  public filter(value: string) {
    this.productService.getProduct('products').subscribe((res: Product[]) => {
      this.products = res;
      if (value) {
        this.filtered = this.products.filter((product) =>
          product.name.toLowerCase().includes(value)
        );
        this.listSize = this.products.length;
        this.isFiltered = true;
      } else {
        this.filtered = this.products;
        this.listSize = this.filtered.length;
        this.isFiltered = false;
      }
    });
  }
}
