import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentHoodByRopEndorsementComponent } from './parent-hood-by-rop-endorsement.component';

describe('ParentHoodByRopEndorsementComponent', () => {
  let component: ParentHoodByRopEndorsementComponent;
  let fixture: ComponentFixture<ParentHoodByRopEndorsementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentHoodByRopEndorsementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentHoodByRopEndorsementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
