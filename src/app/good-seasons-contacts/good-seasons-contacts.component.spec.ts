import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GoodSeasonsContactsComponent } from './good-seasons-contacts.component';

describe('GoodSeasonsContactsComponent', () => {
  let component: GoodSeasonsContactsComponent;
  let fixture: ComponentFixture<GoodSeasonsContactsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodSeasonsContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodSeasonsContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
