import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../store';
import {FormBuilder} from '@angular/forms';
import {EncryptDecryptService} from '../../../services/config/encrypt-decrypt.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import * as fromDebagaSelectors from '../../../components/side-menu-pages/admin-debaga/store/selectors/debaga.selectors';
import {loadDebagas} from '../../../components/side-menu-pages/admin-debaga/store/actions/debaga.actions';

@Component({
  selector: 'app-debaga',
  templateUrl: './debaga.component.html',
  styleUrls: ['./debaga.component.scss']
})
export class DebagaComponent implements OnInit {

  appStore$: Observable<fromApp.State>;
  debagas$: Observable<any> = this.store.select(state => fromDebagaSelectors.selectDebagaEntities(state));

  transactionId: number;
  constructor(private store: Store<fromApp.State>,
              private formBuilder: FormBuilder,
              private encryptDecryptService: EncryptDecryptService,
              private activatedRout: ActivatedRoute) { }

  ngOnInit() {
    this.appStore$ = this.store.select(state => state);
    this.activatedRout.data.subscribe(params => {
      this.transactionId = params.transactionId;
      this.getTransactionDebaga(this.transactionId);
    });
  }

  getTransactionDebaga = (transactionId) => {
    this.store.dispatch(loadDebagas({transactionId}));
  }
}