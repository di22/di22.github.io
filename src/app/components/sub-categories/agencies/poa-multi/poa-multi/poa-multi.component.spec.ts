import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoaMultiComponent } from './poa-multi.component';

describe('PoaMultiComponent', () => {
  let component: PoaMultiComponent;
  let fixture: ComponentFixture<PoaMultiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoaMultiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoaMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
