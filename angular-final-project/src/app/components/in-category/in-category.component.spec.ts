import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InCategoryComponent } from './in-category.component';

describe('InCategoryComponent', () => {
  let component: InCategoryComponent;
  let fixture: ComponentFixture<InCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
