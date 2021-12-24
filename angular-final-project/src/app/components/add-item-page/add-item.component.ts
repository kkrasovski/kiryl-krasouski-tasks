import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../products.model';
import { Groups } from './../../components/products.model';
///import { rooms, groups, products } from '../product';
import { Input } from '@angular/core';
import { Location } from '@angular/common';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  titleMain: string = 'Default';

  rooms: Groups[] = [];
  groups: Groups[] = [];
  products: Product[] = [];
  selectedValue = null;
  room = '';
  category = '';

  @Input() title: any;
  public addItem: any = FormGroup;

  constructor(
    private router: Router,
    private location: Location,
    private categoryService: CategoryService,
    private productService: ProductService
  ) {
    const navigation: any = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {
      titleMain: string;
      title: string;
    };

    if (state.titleMain != undefined) {
      this.titleMain = state.titleMain;
    } else {
      this.titleMain = 'Заголовок страницы';
    }
    this.title = state.title;
  }

  ngOnInit() {
    this.categoryService.getCategory('rooms').subscribe((res: Groups[]) => {
      this.rooms = res;
      console.log(this.rooms);
    });

    this.categoryService.getCategory('groups').subscribe((res: Groups[]) => {
      this.groups = res;
      console.log(this.groups);
    });

    this.addItem = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', [
        Validators.required,
        Validators.maxLength(5),
        Validators.pattern(/^\d+$/),
      ]),
      group: new FormControl('', Validators.required),
      room: new FormControl(''),
      comment: new FormControl(''),
    });

    //console.log(category);

  }

  public onSubmit() {
    let name = this.addItem.value.name;
    let price = this.addItem.value.price;
    let category = this.addItem.value.group;
    let room = this.addItem.value.room;
    let date;
    date = new Date();
    let comment = this.addItem.value.comment;

    let savedParam = {
      name: name,
      price: price,
      category: category,
      room: room,
      date: date,
      comment: comment,
    };

    this.checkGroups(this.rooms, room, 'rooms');
    this.checkGroups(this.groups, category, 'groups');

    this.productService.addProduct(savedParam).then(() => this.addItem.reset());
    this.location.back();
  }

  checkGroups(db: Groups[], categoryNameFromInput: string, categoryName: string, ) {

 const found = db.findIndex(entry => entry.name === categoryNameFromInput);

 if (found === -1) {
     this.categoryService.addCategory({  name: categoryNameFromInput }, categoryName).
    then(() => this.addItem.reset());
 }
  }
}
