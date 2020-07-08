import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentsModalComponent } from './attachments-modal.component';

describe('AttachmentsModalComponent', () => {
  let component: AttachmentsModalComponent;
  let fixture: ComponentFixture<AttachmentsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachmentsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachmentsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
