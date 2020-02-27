import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthDegreeRelativeComponent } from './fourth-degree-relative.component';

describe('FourthDegreeRelativeComponent', () => {
  let component: FourthDegreeRelativeComponent;
  let fixture: ComponentFixture<FourthDegreeRelativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthDegreeRelativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthDegreeRelativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
