import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiVehiclesComponent } from './multi-vehicles.component';

describe('MultiVehiclesComponent', () => {
  let component: MultiVehiclesComponent;
  let fixture: ComponentFixture<MultiVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
