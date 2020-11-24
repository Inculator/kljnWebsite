import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GoodSeasonsComponent } from './good-seasons.component';

describe('GoodSeasonsComponent', () => {
  let component: GoodSeasonsComponent;
  let fixture: ComponentFixture<GoodSeasonsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodSeasonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodSeasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
