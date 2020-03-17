import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingReceiptEndorsementComponent } from './building-receipt-endorsement.component';

describe('BuildingReceiptEndorsementComponent', () => {
  let component: BuildingReceiptEndorsementComponent;
  let fixture: ComponentFixture<BuildingReceiptEndorsementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingReceiptEndorsementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingReceiptEndorsementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
