import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarryingExpensesComponent } from './carrying-expenses.component';

describe('CarryingExpensesComponent', () => {
  let component: CarryingExpensesComponent;
  let fixture: ComponentFixture<CarryingExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarryingExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarryingExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
