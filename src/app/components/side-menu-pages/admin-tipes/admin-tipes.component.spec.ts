import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTipesComponent } from './admin-tipes.component';

describe('AdminTipesComponent', () => {
  let component: AdminTipesComponent;
  let fixture: ComponentFixture<AdminTipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
