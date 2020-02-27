import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleShareComponent } from './sale-share.component';

describe('SaleShareComponent', () => {
  let component: SaleShareComponent;
  let fixture: ComponentFixture<SaleShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
