import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mo7rrModalComponent } from './mo7rr-modal.component';

describe('Mo7rrModalComponent', () => {
  let component: Mo7rrModalComponent;
  let fixture: ComponentFixture<Mo7rrModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mo7rrModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mo7rrModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
