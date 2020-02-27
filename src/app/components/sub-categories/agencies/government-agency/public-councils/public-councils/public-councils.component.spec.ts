import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicCouncilsComponent } from './public-councils.component';

describe('PublicCouncilsComponent', () => {
  let component: PublicCouncilsComponent;
  let fixture: ComponentFixture<PublicCouncilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicCouncilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicCouncilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
