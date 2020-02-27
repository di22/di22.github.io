import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommericalComponent } from './commerical.component';

describe('CommericalComponent', () => {
  let component: CommericalComponent;
  let fixture: ComponentFixture<CommericalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommericalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommericalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
