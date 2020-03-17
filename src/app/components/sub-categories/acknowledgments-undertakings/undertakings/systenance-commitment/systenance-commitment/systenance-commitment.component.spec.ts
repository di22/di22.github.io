import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystenanceCommitmentComponent } from './systenance-commitment.component';

describe('SystenanceCommitmentComponent', () => {
  let component: SystenanceCommitmentComponent;
  let fixture: ComponentFixture<SystenanceCommitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystenanceCommitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystenanceCommitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
