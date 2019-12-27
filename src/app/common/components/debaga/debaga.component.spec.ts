import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebagaComponent } from './debaga.component';

describe('DebagaComponent', () => {
  let component: DebagaComponent;
  let fixture: ComponentFixture<DebagaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebagaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
