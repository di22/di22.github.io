import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishingMarriageComponent } from './finishing-marriage.component';

describe('FinishingMarriageComponent', () => {
  let component: FinishingMarriageComponent;
  let fixture: ComponentFixture<FinishingMarriageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishingMarriageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishingMarriageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
