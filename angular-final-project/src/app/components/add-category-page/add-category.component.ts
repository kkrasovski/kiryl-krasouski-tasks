import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { CategoryService } from '../../services/category.service';
import { Groups, Product } from './../../components/products.model';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})

export class AddCategoryComponent implements OnInit {
  titleMain: string = 'Добавить';
  title: string = 'Добавляемый элемент';
  parent: string = '';

  public addCategory: any = FormGroup;

  constructor(
    private router: Router,
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
  }

  public onSubmit(): void {

    let name: string = this.addCategory.value.name;
    let savedParam: Groups = { name: name };

    this.categoryService
      .addCategory(savedParam, this.parent)
      .then(() => this.addCategory.reset());
    this.location.back();
  }
}
