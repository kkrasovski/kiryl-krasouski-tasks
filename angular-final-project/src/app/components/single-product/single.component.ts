import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Groups, Product } from './../../components/products.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'item-info',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],
})
export class SingleComponent implements OnInit {
  product:any;
  group: any;
  room: any;
  rooms: Groups[] = [];
  groups: Groups[] = [];
  products: Product[] = [];
  date: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private productService: ProductService
  ) {
    this.product = {}

  }

  ngOnInit() {
    const routeParams:any = this.route.snapshot.paramMap;
    const productIdFromRoute:string = routeParams.get('productId');
    this.productService.getProduct('products').subscribe((res: Product[]) => {
      this.products = res;
      this.product = this.products.find(
        (item: Product) => item.id === productIdFromRoute
      );
      this.date = this.product.date.toDate().toDateString()

    });
  }

  delete(): void {
    this.productService
      .deleteProduct(this.product)
      .then(() => this.location.back());
  }
}
