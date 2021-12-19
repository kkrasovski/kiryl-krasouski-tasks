import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.scss']
})
export class FilterProductsComponent implements OnInit {
  @Output() inputValue = new EventEmitter<any>();
  @Input() listSize: number;
  @Input() isFiltered: boolean;

  constructor() {
    this.listSize = 0;
    this.isFiltered = false;
   }

  ngOnInit(): void {
  }

  filter(e: KeyboardEvent) {
    this.inputValue.emit((e.target as HTMLInputElement).value.toLowerCase());
}


}
