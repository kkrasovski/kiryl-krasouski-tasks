import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Groups, Product } from './../../components/products.model';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  link: string;
  @Input() public item: any;
  currentPath: string;
  rooms: Groups[] = [];
  groups: Groups[] = [];
  products: Product[] = [];
  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService
  ) {
    this.link = '/'
    this.currentPath =  '/';
  }

  ngOnInit(): void {

    this.productService.getProduct('products').subscribe((res: Product[]) => {
      this.products = res;
      if (
        this.route.snapshot.url[0].path === 'rooms' &&
        this.route.snapshot.url.length != 2
      ) {
        this.item.price = 0;
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].room == this.item.name) {
            this.item.price += +this.products[i].price;
          }
        }
      }

      if (
        this.route.snapshot.url[0].path === 'groups' &&
        this.route.snapshot.url.length != 2
      ) {
        this.item.price = 0;

        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].category == this.item.name) {
            this.item.price += +this.products[i].price;
          }
        }
      }
    });

    this.currentPath = this.route.snapshot.url[0].path;
    this.link = '/' + this.currentPath;

    if (Object.keys(this.route.snapshot.params).length != 0) {
      this.link = '/products';
    }
  }

  deleteProduct(item: Product) {

    if (confirm('Удалить безвозвратно ?') === true) {
      if (this.currentPath === 'groups' || this.currentPath === 'rooms') {
        this.categoryService
          .deleteCategory(item, this.currentPath)
          .then(() => console.log('удалено'));
      }

      if (this.currentPath === 'products') {
        this.productService
          .deleteProduct(item)
          .then(() => console.log('удалено'));
      }
    }
  }
}
