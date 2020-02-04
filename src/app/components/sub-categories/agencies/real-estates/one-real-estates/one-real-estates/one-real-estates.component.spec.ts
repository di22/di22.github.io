import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneRealEstatesComponent } from './one-real-estates.component';

describe('OneRealEstatesComponent', () => {
  let component: OneRealEstatesComponent;
  let fixture: ComponentFixture<OneRealEstatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneRealEstatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneRealEstatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
