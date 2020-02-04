import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDebagaComponent } from './admin-debaga.component';

describe('AdminDebagaComponent', () => {
  let component: AdminDebagaComponent;
  let fixture: ComponentFixture<AdminDebagaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDebagaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDebagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
