import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  // encapsulation: ViewEncapsulation.ShadowDom, // внешние стили не будут влиять на компонент

})
export class UserComponent implements OnInit {

  public name: string = 'Vasya';
  public disabled: boolean = true;
  constructor() {
    this.name = this.name + ' Qwe'
  }

  ngOnInit(): void {
  }

  public addUser(event: Event): void {
    console.log(this.name)
    console.log(event)
  }
}
