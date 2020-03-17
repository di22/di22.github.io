import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCommitmentsComponent } from './personal-commitments.component';

describe('PersonalCommitmentsComponent', () => {
  let component: PersonalCommitmentsComponent;
  let fixture: ComponentFixture<PersonalCommitmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalCommitmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalCommitmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
