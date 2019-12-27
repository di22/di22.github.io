import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingPledgingGiftComponent } from './selling-pledging-gift.component';

describe('SellingPledgingGiftComponent', () => {
  let component: SellingPledgingGiftComponent;
  let fixture: ComponentFixture<SellingPledgingGiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellingPledgingGiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingPledgingGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
