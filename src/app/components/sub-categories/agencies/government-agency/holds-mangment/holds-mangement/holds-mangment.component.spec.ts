import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldsMangmentComponent } from './holds-mangment.component';

describe('HoldsMangmentComponent', () => {
  let component: HoldsMangmentComponent;
  let fixture: ComponentFixture<HoldsMangmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoldsMangmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldsMangmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
