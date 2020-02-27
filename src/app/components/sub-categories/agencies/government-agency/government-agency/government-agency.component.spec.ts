import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentAgencyComponent } from './government-agency.component';

describe('GovernmentAgencyComponent', () => {
  let component: GovernmentAgencyComponent;
  let fixture: ComponentFixture<GovernmentAgencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovernmentAgencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernmentAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
