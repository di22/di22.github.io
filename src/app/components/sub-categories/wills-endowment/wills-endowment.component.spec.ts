import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WillsEndowmentComponent } from './wills-endowment.component';

describe('WillsEndowmentComponent', () => {
  let component: WillsEndowmentComponent;
  let fixture: ComponentFixture<WillsEndowmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WillsEndowmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WillsEndowmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
