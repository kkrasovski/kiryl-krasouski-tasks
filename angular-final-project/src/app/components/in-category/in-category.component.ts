import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { rooms, groups, products } from '../product';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';
import { Groups, Product } from './../../components/products.model';
@Component({
  selector: 'app-in-category',
  templateUrl: './in-category.component.html',
  styleUrls: ['./in-category.component.scss'],
})
export class InCategoryComponent implements OnInit {
  product: any | undefined;
  composition: any | undefined;
  sum: any | undefined;
  rooms: Groups[] = [];
  groups: Groups[] = [];
  products: Product[] = [];

  constructor(private route: ActivatedRoute,  private categoryService: CategoryService, private productService: ProductService) {}

 calcucalte() {
   // let currentI = this.rooms[this.route.snapshot.params['productId'] - 1];
    //console.log(currentI)
    let summary: number = 0;
    for (let i: number = 0; i < this.composition.length; i++) {
      summary += +this.composition[i].price;
    }
    return { summary: summary };
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = routeParams.get('productId');
    const currentPath = this.route.snapshot.url[0].path;



    this.categoryService.getCategory(currentPath).subscribe((res: Groups[]) => {
      let group = res;
console.log(group)


  this.product = group.find(
       (item: any) => item.id === productIdFromRoute
    );
    console.log(this.product)
    })


    this.productService.getProduct('products').subscribe((res: Product[]) => {
let products = res;
console.log(products)


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

    })






     this.calcucalte();
  }
}
