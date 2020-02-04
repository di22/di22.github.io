import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../store';
import * as fromRequestAttachmentSelectors from '../../../store/general/lookups/requestAttachments/selectors/request-attachments.selectors';
import * as fromTransactionRequestAttachmentSelectors from './store/selectors/transaction-request-attachment.selectors';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EncryptDecryptService} from '../../../services/config/encrypt-decrypt.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, pipe} from 'rxjs';
import {RequestAttachments} from '../../../DTO`s/requestAttachments';
import {loadRequestAttachmentss} from '../../../store/general/lookups/requestAttachments/actions/request-attachments.actions';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {RequestAttachment} from '../../../DTO`s/requestAttachment';
import {addTransactionRequestAttachment, deleteTransactionRequestAttachment} from './store/actions/transaction-request-attachment.actions';

@Component({
  selector: 'app-request-attachment',
  templateUrl: './request-attachment.component.html',
  styleUrls: ['./request-attachment.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 100 })),
      transition('* => void', [
        animate(300, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class RequestAttachmentComponent implements OnInit {

   text = 'Upload';
  param = 'file';
  target = 'https://file.io';
  accept = 'image/*';

   files: Array<any> = [];

  requestAttachmentForm: FormGroup;
  transactionId: number;
  requestId: string;

  appStore$: Observable<fromApp.State>;
  requestAttachments$: Observable<RequestAttachments[]> = this.store.select(stat =>
    fromRequestAttachmentSelectors.requestAttachmentsSelector(stat));
  transactionRequestAttachments$: Observable<any> = this.store.select(stat =>
    fromTransactionRequestAttachmentSelectors.transactionRequestAttachmentsSelector(stat));
  displayedColumns: string[] = ['position', 'attachmentType', 'show', 'edit-delete'];

  constructor(private store: Store<fromApp.State>,
              private formBuilder: FormBuilder,
              private encryptDecryptService: EncryptDecryptService,
              private activatedRout: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.initForms();
    this.appStore$ = this.store.select(stat => stat);
    this.activatedRout.data.subscribe(params => {
      this.transactionId = params.transactionId;
      this.store.dispatch(loadRequestAttachmentss({transactionTypeCode: {data: {transactionTypeId: this.transactionId}}}));
    });
    this.activatedRout.params.subscribe(params => {
      if (params.requestId) {
          this.requestId = params.requestId;
          this.requestAttachmentForm.controls.requestId.setValue(this.requestId);
      }
    });
  }

  initForms = () => {
    this.requestAttachmentForm = this.formBuilder.group({
      attachmentTypeId: [],
      requestId: [],
      file: []
    });
  }


  onClick() {
    const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
    fileUpload.onchange = () => {
      // tslint:disable-next-line:prefer-for-of
      for (let index = 0; index < fileUpload.files.length; index++) {
        const file = fileUpload.files[index];
        this.files.push({ data: file, state: 'in',
          inProgress: false, progress: 0, canRetry: false, canCancel: true });
      }
    };
    fileUpload.click();
  }

  cancelFile(file: RequestAttachment) {
    file.sub.unsubscribe();
  }

  retryFile(file: RequestAttachment) {
    this.uploadFile(file);
    file.canRetry = false;
  }

   uploadFile(file) {
     this.store.dispatch(addTransactionRequestAttachment({transactionRequestAttachment: file}));
  }

   uploadFiles() {
    this.files.forEach(file => {
      this.requestAttachmentForm.controls.file.setValue(file.data);
      this.uploadFile(this.requestAttachmentForm.value);
    });
  }


  deleteRequestAttachment = (id) => {
    this.store.dispatch(deleteTransactionRequestAttachment({id: {data: { reqCustAttachId: id }}}));
  }
}
