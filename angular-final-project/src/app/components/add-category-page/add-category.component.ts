import { Component, OnInit } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Groups } from '../products.model';
import { rooms, groups } from '../product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { CategoryService } from '../../services/category.service';

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
    private location: Location,
    private categoryService: CategoryService
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

    let savedParam = { name: name};
    const currentPath = this.route.snapshot.url[0].path;


    this.categoryService.addCategory(savedParam, this.parent).
    then(() => this.addCategory.reset());
    this.location.back();
  }
}
