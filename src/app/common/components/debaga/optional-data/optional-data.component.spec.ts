import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalDataComponent } from './optional-data.component';

describe('OptionalDataComponent', () => {
  let component: OptionalDataComponent;
  let fixture: ComponentFixture<OptionalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionalDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
