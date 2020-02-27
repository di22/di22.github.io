import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoaSpecificComponent } from './poa-specific.component';

describe('PoaSpecificComponent', () => {
  let component: PoaSpecificComponent;
  let fixture: ComponentFixture<PoaSpecificComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoaSpecificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoaSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
