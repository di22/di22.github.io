import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageContinuityComponent } from './marriage-continuity.component';

describe('MarriageContinuityComponent', () => {
  let component: MarriageContinuityComponent;
  let fixture: ComponentFixture<MarriageContinuityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarriageContinuityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarriageContinuityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
