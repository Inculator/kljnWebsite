import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodSeasonsProductListComponent } from './good-seasons-product-list.component';

describe('GoodSeasonsProductListComponent', () => {
  let component: GoodSeasonsProductListComponent;
  let fixture: ComponentFixture<GoodSeasonsProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodSeasonsProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodSeasonsProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
