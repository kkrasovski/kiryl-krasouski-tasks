import { Component, OnInit } from '@angular/core';
import { groups } from '../product';
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {
  groups = groups;
  title = 'название группы';
  name = 'groups';
  constructor() {}

  ngOnInit(): void {}
}
