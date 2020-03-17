import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarryingResponsabilityCommitmentComponent } from './carrying-responsability-commitment.component';

describe('CarryingResponsabilityCommitmentComponent', () => {
  let component: CarryingResponsabilityCommitmentComponent;
  let fixture: ComponentFixture<CarryingResponsabilityCommitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarryingResponsabilityCommitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarryingResponsabilityCommitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
