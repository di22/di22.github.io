import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageCarryingDutiesComponent } from './marriage-carrying-duties.component';

describe('MarriageCarryingDutiesCommitmentsComponent', () => {
  let component: MarriageCarryingDutiesComponent;
  let fixture: ComponentFixture<MarriageCarryingDutiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarriageCarryingDutiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarriageCarryingDutiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
