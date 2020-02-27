import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneVehicleComponent } from './one-vehicle.component';

describe('OneVehicleComponent', () => {
  let component: OneVehicleComponent;
  let fixture: ComponentFixture<OneVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
