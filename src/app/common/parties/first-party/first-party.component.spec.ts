import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPartyComponent } from './first-party.component';

describe('FirstPartyComponent', () => {
  let component: FirstPartyComponent;
  let fixture: ComponentFixture<FirstPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
