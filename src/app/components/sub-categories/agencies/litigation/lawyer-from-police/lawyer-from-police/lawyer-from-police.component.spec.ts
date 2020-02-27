import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerFromPoliceComponent } from './lawyer-from-police.component';

describe('LawyerFromPoliceComponent', () => {
  let component: LawyerFromPoliceComponent;
  let fixture: ComponentFixture<LawyerFromPoliceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawyerFromPoliceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerFromPoliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
