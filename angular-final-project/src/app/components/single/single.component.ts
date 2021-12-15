import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products, rooms, groups } from '../product';
@Component({
  selector: 'item-info',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],
})
export class SingleComponent implements OnInit {
  product: any | undefined;
  group: any | undefined;
  room: any | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    const currentPath = this.route.snapshot.url[0].path;
    let currentArr: any = { products, rooms, groups };


    this.product = currentArr[currentPath].find(
      (product: any) => product.id === productIdFromRoute
    );

  }
}
