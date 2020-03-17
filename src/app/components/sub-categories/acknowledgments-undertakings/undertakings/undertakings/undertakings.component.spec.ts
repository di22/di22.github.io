import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndertakingsComponent } from './undertakings.component';

describe('UndertakingsComponent', () => {
  let component: UndertakingsComponent;
  let fixture: ComponentFixture<UndertakingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndertakingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndertakingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
