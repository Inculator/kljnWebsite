import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GoodSeasonsHomePageComponent } from './good-seasons-home-page.component';

describe('GoodSeasonsHomePageComponent', () => {
  let component: GoodSeasonsHomePageComponent;
  let fixture: ComponentFixture<GoodSeasonsHomePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodSeasonsHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodSeasonsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
