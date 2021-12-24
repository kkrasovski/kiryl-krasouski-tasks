import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public getRouterOutletState(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  title = 'calc';
  isMainPage: boolean = false;
  constructor(private route: Router, private location: Location) {}

  ngOnInit(): void {

    if (this.route.url.length === 1) {
      this.isMainPage = true;
    } else {
      this.isMainPage = false;
    }
  }

  back(): void {
    if (this.route.url.length > 1) {
      console.log('внут');

      this.location.back();
    } else {
    }
  }
}

