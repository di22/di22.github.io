import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcknowledgmentsUndertakingsComponent } from './acknowledgments-undertakings.component';

describe('AcknowledgmentsUndertakingsComponent', () => {
  let component: AcknowledgmentsUndertakingsComponent;
  let fixture: ComponentFixture<AcknowledgmentsUndertakingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcknowledgmentsUndertakingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcknowledgmentsUndertakingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
