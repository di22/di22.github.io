import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesSettingComponent } from './fees-setting.component';

describe('FeesSettingComponent', () => {
  let component: FeesSettingComponent;
  let fixture: ComponentFixture<FeesSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
