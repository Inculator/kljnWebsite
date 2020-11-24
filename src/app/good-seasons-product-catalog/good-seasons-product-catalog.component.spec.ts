import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GoodSeasonsProductCatalogComponent } from './good-seasons-product-catalog.component';

describe('GoodSeasonsProductCatalogComponent', () => {
  let component: GoodSeasonsProductCatalogComponent;
  let fixture: ComponentFixture<GoodSeasonsProductCatalogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodSeasonsProductCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodSeasonsProductCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
