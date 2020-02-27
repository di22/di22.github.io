import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearingWorkersTransactionsComponent } from './clearing-workers-transactions.component';

describe('ClearingWorkersTransactionsComponent', () => {
  let component: ClearingWorkersTransactionsComponent;
  let fixture: ComponentFixture<ClearingWorkersTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearingWorkersTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearingWorkersTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
