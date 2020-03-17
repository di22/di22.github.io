import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageConfirmationEndorsementComponent } from './marriage-confirmation-endorsement.component';

describe('MarriageConfirmationEndorsementComponent', () => {
  let component: MarriageConfirmationEndorsementComponent;
  let fixture: ComponentFixture<MarriageConfirmationEndorsementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarriageConfirmationEndorsementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarriageConfirmationEndorsementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
