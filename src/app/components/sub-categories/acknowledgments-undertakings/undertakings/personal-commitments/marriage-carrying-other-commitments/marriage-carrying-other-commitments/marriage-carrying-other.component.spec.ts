import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageCarryingOtherComponent } from './marriage-carrying-other.component';

describe('MarriageCarryingOtherComponent', () => {
  let component: MarriageCarryingOtherComponent;
  let fixture: ComponentFixture<MarriageCarryingOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarriageCarryingOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarriageCarryingOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
