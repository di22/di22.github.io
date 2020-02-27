import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiRealEstatesComponent } from './multi-real-estates.component';

describe('MultiRealEstatesComponent', () => {
  let component: MultiRealEstatesComponent;
  let fixture: ComponentFixture<MultiRealEstatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiRealEstatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiRealEstatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
