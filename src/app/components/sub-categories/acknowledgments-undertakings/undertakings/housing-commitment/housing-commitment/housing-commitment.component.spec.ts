import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingCommitmentComponent } from './housing-commitment.component';

describe('HousingCommitmentComponent', () => {
  let component: HousingCommitmentComponent;
  let fixture: ComponentFixture<HousingCommitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousingCommitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousingCommitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
