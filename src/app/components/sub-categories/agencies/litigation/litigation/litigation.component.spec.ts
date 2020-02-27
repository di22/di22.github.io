import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LitigationComponent } from './litigation.component';

describe('LitigationComponent', () => {
  let component: LitigationComponent;
  let fixture: ComponentFixture<LitigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LitigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LitigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
