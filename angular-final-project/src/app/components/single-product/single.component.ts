import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { products, rooms, groups } from '../product';
import { Groups, Product } from './../../components/products.model';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'item-info',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],
})
export class SingleComponent implements OnInit {
  product: any | undefined;
  group: any | undefined;
  room: any | undefined;
  rooms: Groups[] = [];
  groups: Groups[] = [];
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private productService: ProductService
    ) {}

  ngOnInit() {
    const date = this.product
    console.log(date)

    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;

    const productIdFromRoute = routeParams.get('productId');
    console.log(productIdFromRoute )
    const currentPath = this.route.snapshot.url[0].path;
    let currentArr: any = { products, rooms, groups };
    console.log(currentArr)

    this.productService.getProduct('products').subscribe((res: Product[]) => {
      this.products = res;
      console.log(this.products);
this.product = this.products.find(
      (product: any) => product.id === productIdFromRoute
    );

//this.product.date =this.product.date.toDate().toDateString()
  })
    // this.product = currentArr[currentPath].find(
    //   (product: any) => product.id === productIdFromRoute
    // );



  }
  delete() {
    console.log(this.product);
    this.productService.deleteProduct(this.product).then(() =>
    console.log('delete successful'));
    this.location.back();

  }



}
