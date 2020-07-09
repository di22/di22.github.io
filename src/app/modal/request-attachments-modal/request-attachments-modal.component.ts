import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import * as fromApp from '../../store';
import * as fromTransactionRequestAttachmentSelectors
  from '../../common/components/request-attachment/store/selectors/transaction-request-attachment.selectors';
import {Store} from '@ngrx/store';
import {AttachmentsService} from '../../common/services/attachments.service';
import {ValidationMessagesService} from '../../services/config/validation-messages.service';
import {AuthService} from '../../auth/services/auth.service';
import {deleteTransactionRequestAttachment
} from '../../common/components/request-attachment/store/actions/transaction-request-attachment.actions';

@Component({
  selector: 'app-request-attachments-modal',
  templateUrl: './request-attachments-modal.component.html',
  styleUrls: ['./request-attachments-modal.component.scss']
})
export class RequestAttachmentsModalComponent implements OnInit {

  files: Array<any> = [];

  transactionId: number;
  requestId: string;

  appStore$: Observable<fromApp.State>;

  transactionRequestAttachments$: Observable<any> = this.store.select(stat =>
    fromTransactionRequestAttachmentSelectors.transactionRequestAttachmentsSelector(stat));
  displayedColumns: string[] = ['position', 'attachmentType', 'edit-delete'];

  constructor(private store: Store<fromApp.State>,
              private attachmentsService: AttachmentsService,
              private validationMessagesService: ValidationMessagesService,
              private authService: AuthService) { }

  ngOnInit() {

   // this.appStore$ = this.store.select(stat => stat);

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
