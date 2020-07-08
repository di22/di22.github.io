import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRActionsModalComponent } from './cr-actions-modal.component';

describe('CRActionsModalComponent', () => {
  let component: CRActionsModalComponent;
  let fixture: ComponentFixture<CRActionsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRActionsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRActionsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
