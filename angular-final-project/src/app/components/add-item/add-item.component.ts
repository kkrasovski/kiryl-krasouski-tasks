import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../products.model';
import { rooms, groups, products } from '../product';
import { Input } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  titleMain: string = 'Default';
  rooms = rooms;
  groups = groups;
  selectedValue = null;
  @Input() title: any;
  public addItem: any = FormGroup;

  constructor(private router: Router, private location: Location) {
    const navigation: any = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {
      titleMain: string;
      title: string;
    };
    this.titleMain = state.titleMain;
    this.title = state.title;
  }

  ngOnInit() {
    this.addItem = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', [Validators.required,  Validators.maxLength(4),  Validators.pattern(/^\d+$/),]),
      group: new FormControl('', Validators.required),
      room: new FormControl('', Validators.required),
    });
  }

  public onSubmit() {
    let name = this.addItem.value.name;
    let price = this.addItem.value.price;
    let category = this.addItem.value.group;
    let room = this.addItem.value.room;
    let id;
    let date;
    if (products.length != 0) {
      id =
        products.sort((prevId, nextId) => {
          if (prevId.id < nextId.id) {
            return 1;
          } else {
            return -1;
          }
        })[0].id + 1;
    } else {
      id = 0;
    }
date = new Date();
console.log(date)


    let savedParam =  {name: name, price: price, category: category, room: room, id: id, date: date}
    console.log(savedParam);
    products.push(savedParam);



      this.location.back();



  }
}
