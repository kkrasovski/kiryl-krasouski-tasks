import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Groups } from './../../components/products.model';
import { CategoryService } from '../../services/category.service';
@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
})
export class RoomsListComponent implements OnInit {
  rooms: Groups[] = [];
  title:string = 'название комнаты';
  name:string = 'rooms';

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategory(this.name).subscribe((res: Groups[]) => {
      this.rooms = res;
    });
  }
}
