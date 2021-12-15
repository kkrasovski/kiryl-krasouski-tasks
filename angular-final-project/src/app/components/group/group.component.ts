import { Component, OnInit } from '@angular/core';
import { groups } from '../product';
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {
  groups = groups;
  constructor() {}

  ngOnInit(): void {}
}
