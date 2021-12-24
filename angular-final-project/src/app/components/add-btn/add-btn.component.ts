import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-add-btn',
  templateUrl: './add-btn.component.html',
  styleUrls: ['./add-btn.component.scss'],
})
export class AddBtnComponent implements OnInit {
  @Input() title: string = '';
  @Input() parentName: string = '';
  @Input() zik: string = '';
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  openForm(): void {

    if (this.route.snapshot.url[0].path === 'groups') {
      this.router.navigate(['/add-category'], {
        state: {
          titleMain: 'Добавить группу',
          title: this.title,
          parent: this.parentName,
        },
      });
    }
    if (this.route.snapshot.url[0].path === 'rooms') {
      this.router.navigate(['/add-category'], {
        state: {
          titleMain: 'Добавить комнату',
          title: this.title,
          parent: this.parentName,
        },
      });
    }
    if (this.route.snapshot.url[0].path === 'products') {
      this.router.navigate(['/add-item'], {
        state: { titleMain: 'Добавить товар', title: this.title },
      });
    }
  }
}
