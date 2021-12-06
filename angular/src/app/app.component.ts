import { Component } from '@angular/core';
import { User } from './models/user';

const user: User = new User()
@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my new project 1';

  constructor() {
    // setInterval(() => {
    //   this.title = this.title + '1'
    // },1000)
  }
}
