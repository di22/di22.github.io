import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageLateDebitEndorsementComponent } from './marriage-late-debit-endorsement.component';

describe('MarriageLateDebitEndorsementComponent', () => {
  let component: MarriageLateDebitEndorsementComponent;
  let fixture: ComponentFixture<MarriageLateDebitEndorsementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarriageLateDebitEndorsementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarriageLateDebitEndorsementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
