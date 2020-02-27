import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivorceComponent } from './divorce.component';

describe('DivorceComponent', () => {
  let component: DivorceComponent;
  let fixture: ComponentFixture<DivorceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivorceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivorceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
