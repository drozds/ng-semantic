import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeElementsComponent } from './home-elements.component';

describe('HomeElementsComponent', () => {
  let component: HomeElementsComponent;
  let fixture: ComponentFixture<HomeElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
