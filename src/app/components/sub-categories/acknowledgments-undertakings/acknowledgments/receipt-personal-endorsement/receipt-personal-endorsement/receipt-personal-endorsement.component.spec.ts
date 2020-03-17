import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptPersonalEndorsementComponent } from './receipt-personal-endorsement.component';

describe('ReceiptPersonalEndorsementComponent', () => {
  let component: ReceiptPersonalEndorsementComponent;
  let fixture: ComponentFixture<ReceiptPersonalEndorsementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptPersonalEndorsementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptPersonalEndorsementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
