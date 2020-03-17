import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitEndorsementComponent } from './debit-endorsement.component';

describe('DebitEndorsementComponent', () => {
  let component: DebitEndorsementComponent;
  let fixture: ComponentFixture<DebitEndorsementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitEndorsementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitEndorsementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
