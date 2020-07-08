import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../store';
import * as fromRequestAttachmentSelectors from '../../../store/general/lookups/requestAttachments/selectors/request-attachments.selectors';
import * as fromTransactionRequestAttachmentSelectors from './store/selectors/transaction-request-attachment.selectors';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EncryptDecryptService} from '../../../services/config/encrypt-decrypt.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {RequestAttachments} from '../../../DTO`s/requestAttachments';
import {loadRequestAttachmentss} from '../../../store/general/lookups/requestAttachments/actions/request-attachments.actions';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {RequestAttachment} from '../../../DTO`s/requestAttachment';
import {addTransactionRequestAttachment, deleteTransactionRequestAttachment} from './store/actions/transaction-request-attachment.actions';
import {AttachmentsService} from '../../services/attachments.service';
import {AuthService} from '../../../auth/services/auth.service';
import {ValidationMessagesService} from '../../../services/config/validation-messages.service';

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
  displayedColumns: string[] = ['position', 'attachmentType', 'edit-delete'];

  constructor(private store: Store<fromApp.State>,
              private formBuilder: FormBuilder,
              private encryptDecryptService: EncryptDecryptService,
              private attachmentsService: AttachmentsService,
              private validationMessagesService: ValidationMessagesService,
              private authService: AuthService,
              private activatedRout: ActivatedRoute) { }

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
      attachmentTypeId: [1, Validators.required],
      requestId: [],
      file: ['', Validators.required]
    });
  };


  onClick() {
    const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
    fileUpload.onchange = () => {
      this.files = [];
      for (let index = 0; index < fileUpload.files.length; index++) {
        const file = fileUpload.files[index];
        this.files.push({ data: file, state: 'in',
          inProgress: false, progress: 0, canRetry: false, canCancel: true });
      }
    };
    fileUpload.click();
  }

  cancelFile(file: RequestAttachment) {
   // file.sub.unsubscribe();
    this.removeFileFromArray(file);
  }
  private removeFileFromArray(file: RequestAttachment) {
    const index = this.files.indexOf(file);
    if (index > -1) {
      this.files.splice(index, 1);
    }
  }
  retryFile(file: RequestAttachment) {
    this.uploadFile(file);
    file.canRetry = false;
  }

   uploadFile(file) {
    if (this.requestAttachmentForm.valid) {
      this.store.dispatch(addTransactionRequestAttachment({transactionRequestAttachment: file, requestID: this.requestId}));
      this.files = [];
      this.requestAttachmentForm.reset({attachmentTypeId: 1});
    } else {
      this.validationMessagesService.validateAllFormFields(this.requestAttachmentForm);
    }

  }

   uploadFiles() {
    this.files.forEach(file => {
      this.requestAttachmentForm.controls.file.setValue(file.data);
      this.uploadFile(this.requestAttachmentForm.value);
    });
  }

  viewAttachment = (e) => {
    const params = {
      docId: `${e.id}`,
      xat: this.authService.getToken()
    };
    this.attachmentsService.imageView(params);
  };

  deleteRequestAttachment = (id) => {
    this.store.dispatch(deleteTransactionRequestAttachment({id: {data: { reqCustAttachId: id }}}));
  }
}
