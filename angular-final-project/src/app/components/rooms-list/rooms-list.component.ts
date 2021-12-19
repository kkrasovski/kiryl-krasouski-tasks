import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { rooms } from '../product';
@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {
  rooms = rooms;
  title = 'название комнаты';
  name = 'rooms';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

}
