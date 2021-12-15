import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { rooms, groups, products } from '../product';

@Component({
  selector: 'app-in-category',
  templateUrl: './in-category.component.html',
  styleUrls: ['./in-category.component.scss'],
})
export class InCategoryComponent implements OnInit {
  product: any | undefined;
  composition: any | undefined;
  sum: any | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    const currentPath = this.route.snapshot.url[0].path;
    console.log(currentPath);
    let currentArr: any = { rooms, groups };

    this.product = currentArr[currentPath].find(
      (product: any) => product.id === productIdFromRoute
    );

    console.log(this.product.name);
    if (currentPath == 'rooms') {
      this.composition = products.filter(
        (item: any) => item.room === this.product.name
      );
    }
    if (currentPath == 'groups') {
      console.log(this.product.name);
      this.composition = products.filter(
        (item: any) => item.category === this.product.name
      );
    }
  }

  calc() {

  }
}
