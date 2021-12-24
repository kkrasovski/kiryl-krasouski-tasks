import { Component, OnInit } from '@angular/core';
import { Groups, Product } from './../../components/products.model';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProduct('products').subscribe((res: Product[]) => {
this.products = res;
    })
  }

  calcucalte() {

     let summary: number = 0;
     for (let i: number = 0; i < this.products.length; i++) {
       summary += +this.products[i].price;
     }
     return { summary: summary };
   }

}
