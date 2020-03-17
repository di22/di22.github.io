import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralEndorsementComponent } from './general-endorsement.component';

describe('GeneralEndorsementComponent', () => {
  let component: GeneralEndorsementComponent;
  let fixture: ComponentFixture<GeneralEndorsementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralEndorsementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralEndorsementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
