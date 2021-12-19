import { Component, OnInit, Output } from '@angular/core';
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

 calcucalte() {
    let currentI = rooms[this.route.snapshot.params['productId'] - 1];
    let summary: number = 0;
    for (let i: number = 0; i < this.composition.length; i++) {
      summary += this.composition[i].price;
    }
    return { summary: summary, currentI: currentI };
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    const currentPath = this.route.snapshot.url[0].path;

    let currentArr: any = { rooms, groups };

    this.product = currentArr[currentPath].find(
      (product: any) => product.id === productIdFromRoute
    );

    if (currentPath == 'rooms') {
      this.composition = products.filter(
        (item: any) => item.room === this.product.name
      );
    }
    if (currentPath == 'groups') {
      this.composition = products.filter(
        (item: any) => item.category === this.product.name
      );
    }
    this.calcucalte();
  }
}
