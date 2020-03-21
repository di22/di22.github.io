import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageDischargeComponent } from './marriage-discharge.component';

describe('MarriageDischargeComponent', () => {
  let component: MarriageDischargeComponent;
  let fixture: ComponentFixture<MarriageDischargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarriageDischargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarriageDischargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
