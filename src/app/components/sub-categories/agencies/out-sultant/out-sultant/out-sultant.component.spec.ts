import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutSultantComponent } from './out-sultant.component';

describe('OutSultantComponent', () => {
  let component: OutSultantComponent;
  let fixture: ComponentFixture<OutSultantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutSultantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutSultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
