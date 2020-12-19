import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDividerComponent } from './header-divider.component';

describe('HeaderDividerComponent', () => {
  let component: HeaderDividerComponent;
  let fixture: ComponentFixture<HeaderDividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderDividerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
