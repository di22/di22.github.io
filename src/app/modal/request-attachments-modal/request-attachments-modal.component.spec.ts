import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAttachmentsModalComponent } from './request-attachments-modal.component';

describe('RequestAttachmentsModalComponent', () => {
  let component: RequestAttachmentsModalComponent;
  let fixture: ComponentFixture<RequestAttachmentsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestAttachmentsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAttachmentsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
