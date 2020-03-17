import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalEndorsementComponent } from './personal-endorsement.component';

describe('PersonalEndorsementComponent', () => {
  let component: PersonalEndorsementComponent;
  let fixture: ComponentFixture<PersonalEndorsementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalEndorsementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalEndorsementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
