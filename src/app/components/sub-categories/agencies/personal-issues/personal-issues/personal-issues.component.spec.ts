import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalIssuesComponent } from './personal-issues.component';

describe('PersonalIssuesComponent', () => {
  let component: PersonalIssuesComponent;
  let fixture: ComponentFixture<PersonalIssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalIssuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
