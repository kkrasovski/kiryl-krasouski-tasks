import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  composition: Product[];
  sum: number | undefined;
  rooms: Groups[] = [];
  groups: Groups[] = [];
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService
  ) {
    this.composition = [];
  }

  calcucalte() {
    let summary: number = 0;

    for (let i: number = 0; i < this.composition.length; i++) {
      summary += +this.composition[i].price;
    }
    return { summary: summary };
  }

  ngOnInit(): void {

    const productIdFromRoute:string | null = this.route.snapshot.paramMap.get('productId');
    const currentPath:string = this.route.snapshot.url[0].path;
    this.categoryService.getCategory(currentPath).subscribe((res: Groups[]) => {
      let group: Groups[] = res;
      this.product = group.find((item: any) => item.id === productIdFromRoute);
    });

    this.productService.getProduct('products').subscribe((res: Product[]) => {
      let products: Product[] = res;

      if (currentPath === 'rooms') {
        this.composition = products.filter(
          (item: Product) => item.room === this.product.name
        );
      }

      if (currentPath === 'groups') {
        this.composition = products.filter(
          (item: Product) => item.category === this.product.name
        );
      }
    });

    this.calcucalte();
  }
}
