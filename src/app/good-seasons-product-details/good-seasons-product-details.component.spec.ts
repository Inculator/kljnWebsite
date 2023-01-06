import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodSeasonsProductDetailsComponent } from './good-seasons-product-details.component';

describe('GoodSeasonsProductDetailsComponent', () => {
  let component: GoodSeasonsProductDetailsComponent;
  let fixture: ComponentFixture<GoodSeasonsProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodSeasonsProductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodSeasonsProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
