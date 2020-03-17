import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageCondEdorsementComponent } from './marriage-cond-edorsement.component';

describe('MarriageCondEdorsementComponent', () => {
  let component: MarriageCondEdorsementComponent;
  let fixture: ComponentFixture<MarriageCondEdorsementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarriageCondEdorsementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarriageCondEdorsementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
