import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAffairsComponent } from './personal-affairs.component';

describe('PersonalAffairsComponent', () => {
  let component: PersonalAffairsComponent;
  let fixture: ComponentFixture<PersonalAffairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalAffairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAffairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
