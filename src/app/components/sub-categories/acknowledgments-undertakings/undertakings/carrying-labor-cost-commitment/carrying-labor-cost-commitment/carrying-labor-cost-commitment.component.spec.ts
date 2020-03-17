import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarryingLaborCostCommitmentComponent } from './carrying-labor-cost-commitment.component';

describe('CarryingLaborCostCommitmentComponent', () => {
  let component: CarryingLaborCostCommitmentComponent;
  let fixture: ComponentFixture<CarryingLaborCostCommitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarryingLaborCostCommitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarryingLaborCostCommitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
