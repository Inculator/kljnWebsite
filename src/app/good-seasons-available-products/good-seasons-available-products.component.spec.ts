import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodSeasonsAvailableProductsComponent } from './good-seasons-available-products.component';

describe('GoodSeasonsAvailableProductsComponent', () => {
  let component: GoodSeasonsAvailableProductsComponent;
  let fixture: ComponentFixture<GoodSeasonsAvailableProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodSeasonsAvailableProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodSeasonsAvailableProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
