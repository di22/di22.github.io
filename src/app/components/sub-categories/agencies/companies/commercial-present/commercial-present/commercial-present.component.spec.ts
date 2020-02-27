import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialPresentComponent } from './commercial-present.component';

describe('CommercialPresentComponent', () => {
  let component: CommercialPresentComponent;
  let fixture: ComponentFixture<CommercialPresentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercialPresentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialPresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
