import { Component, OnInit } from '@angular/core';
import { rooms } from '../product';
@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {
  rooms = rooms;
  constructor() { }

  ngOnInit(): void {
  }

}
