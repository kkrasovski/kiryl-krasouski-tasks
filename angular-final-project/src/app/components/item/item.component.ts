import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { rooms, groups, products } from '../product';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  link: any;
  @Input() public item: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (
      this.route.snapshot.url[0].path === 'rooms' &&
      this.route.snapshot.url.length != 2
    ) {
      this.item.price = 0;

      for (let i = 0; i < products.length; i++) {
        if (products[i].room == this.item.name) {
          this.item.price += products[i].price;
        }
      }
    }

    if (
      this.route.snapshot.url[0].path === 'groups' &&
      this.route.snapshot.url.length != 2
    ) {
      this.item.price = 0;

      for (let i = 0; i < products.length; i++) {
        if (products[i].category == this.item.name) {
          this.item.price += products[i].price;
        }
      }
    }

    const currentPath = this.route.snapshot.url[0].path;
    this.link = '/' + currentPath;

    if (Object.keys(this.route.snapshot.params).length != 0) {
      this.link = '/products';
    }
  }
  deleteElement(): void {
    const index = products.findIndex((n) => n.id === this.item.id);
    if (index !== -1) {
      products.splice(index, 1);
    }

    if (
      this.route.snapshot.url[0].path === 'rooms' &&
      this.route.snapshot.url.length != 2
    ) {
      const index = rooms.findIndex((n) => n.id === this.item.id);
      if (index !== -1) {
        rooms.splice(index, 1);
      }
    }

    if (
      this.route.snapshot.url[0].path === 'groups' &&
      this.route.snapshot.url.length != 2
    ) {
      const index = groups.findIndex((n) => n.id === this.item.id);
      if (index !== -1) {
        groups.splice(index, 1);
      }
    }
  }
}
