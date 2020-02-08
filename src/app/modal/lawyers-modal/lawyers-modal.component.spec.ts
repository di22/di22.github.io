import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyersModalComponent } from './lawyers-modal.component';

describe('LawyersModalComponent', () => {
  let component: LawyersModalComponent;
  let fixture: ComponentFixture<LawyersModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawyersModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
