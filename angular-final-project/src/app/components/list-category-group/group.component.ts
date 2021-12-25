import { Component, OnInit } from '@angular/core';
import { Groups } from './../../components/products.model';
import { CategoryService } from '../../services/category.service';
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {
  groups: Groups[] = [];
  title:string = 'название группы';
  name:string = 'groups';

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategory(this.name).subscribe((res: Groups[]) => {
      this.groups = res;
    });
  }
}
