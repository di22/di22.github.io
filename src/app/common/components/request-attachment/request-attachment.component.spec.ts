import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAttachmentComponent } from './request-attachment.component';

describe('RequestAttachmentComponent', () => {
  let component: RequestAttachmentComponent;
  let fixture: ComponentFixture<RequestAttachmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestAttachmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
