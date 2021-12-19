import { Component, OnInit } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Groups } from '../products.model';
import { rooms, groups } from '../product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  titleMain: string = 'Добавить';
  title: string = 'Добавляемый элемент';
  parent: string = 'default';

  public addCategory: any = FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    const navigation: any = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {
      titleMain: string;
      title: string;
      parent: string;
    };
    this.titleMain = state.titleMain;
    this.title = state.title;
    this.parent = state.parent;
  }

  ngOnInit(): void {
    this.addCategory = new FormGroup({
      name: new FormControl('', Validators.required),
    });
    console.log(rooms);
    console.log(groups);
  }
  public onSubmit() {
    let name = this.addCategory.value.name;

    let id = 0;

    if (this.parent === 'rooms') {
      if (rooms.length != 0) {
        id =
          +rooms.sort((prevId, nextId) => {
            if (prevId.id < nextId.id) {
              return 1;
            } else {
              return -1;
            }
          })[0].id + 1;
      } else {
        id = 0;
      }
    }

    if (this.parent === 'groups') {
      if (groups.length != 0) {
        id =
          +groups.sort((prevId, nextId) => {
            if (prevId.id < nextId.id) {
              return 1;
            } else {
              return -1;
            }
          })[0].id + 1;
      } else {
        id = 0;
      }
    }

    let savedParam = { name: name, id: id };
    const currentPath = this.route.snapshot.url[0].path;

    switch (this.parent) {
      case 'rooms':
        rooms.push(savedParam);

        break;
      case 'groups':
        groups.push(savedParam);

        break;
    }
    this.location.back();
  }
}
