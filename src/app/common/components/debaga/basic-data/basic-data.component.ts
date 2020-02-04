import { Component, Input, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../store';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {EncryptDecryptService} from '../../../../services/config/encrypt-decrypt.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import * as fromRequestDebagaSelectors from '../store/selectors/request-debaga.selectors';
import {addRequestDebaga, deleteRequestDebaga, updateRequestDebaga} from '../store/actions/request-debaga.actions';
import {element} from 'protractor';

@Component({
  selector: 'app-basic-data',
  templateUrl: './basic-data.component.html',
  styleUrls: ['./basic-data.component.scss']
})
export class BasicDataComponent implements OnInit {

  @Input() debagas$: Observable<any>;
  row: number;
  requestId: number;
  requestDebagas: any = [];
  debagaForm: FormGroup;
  isEdite: boolean;
  htmlElementsIDs: {};

  appStore$: Observable<fromApp.State>;
  requestDebaga$: Observable<any> = this.store.select(state => fromRequestDebagaSelectors.selectAllRequestDebaga(state));


  constructor(private store: Store<fromApp.State>,
              private formBuilder: FormBuilder,
              private encryptDecryptService: EncryptDecryptService,
              private activatedRout: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.initForms();
    this.activatedRout.params.subscribe(params => {
      if (params.requestId) {
        this.requestId = params.requestId;
      }
    });
    this.debagas$.subscribe(value => {
      const filteredValues = [];
      if (value.length > 0) {
        value.filter(type => {filteredValues.push(type.debagaTemplate); });
        filteredValues.forEach(ele => {
          if (ele.staticTemplate === true) {
            this.debagaForm.addControl(ele.id, this.formBuilder.control(''));
            this.drawObjectForSave(ele);
          }
        });
      }
    });
  //  if (this.debagaForm.contains('9286') && this.debagaForm.contains('9291')) {
    // مكان العقار
    this.debagaForm.get('9286').valueChanges.subscribe(res => {
      // بيانات العقار
      const ele = document.getElementById('9291');
      // المربع
      const ele1 = document.getElementById('9289');
      // الولايه
      const ele2 = document.getElementById('9290');
      if (ele) {
      if (res === 'داخل السلطنة') {
            ele.style.display = 'none';
            ele1.style.display = 'block';
            ele2.style.display = 'block';
          } else if (res === 'خارج السلطنة') {
        ele.style.display = 'block';
        ele1.style.display = 'none';
        ele2.style.display = 'none';
      }
        }
      });
   // }
  }

  initForms = () => {
    this.debagaForm = this.formBuilder.group({});
  }
  get f() { return this.debagaForm.controls; }
  get t() { return this.f.formArray as FormArray; }



  setValue = () => {
    this.requestDebagas.forEach((ele, i) => {
        ele = Object.assign(ele, {text: this.debagaForm.get(`${ele.debagaTemplate.id}`).value,
          groupNumber: this.isEdite ? this.row : this.getTableRows()});
    });
  }
  drawObjectForSave = (value) => {
    const obj = Object.assign({request: {id: this.requestId},
      debagaTemplate: {id: value.id},
      sortOrder: value.sortOrder
    });
    this.requestDebagas.push(obj);
  }
  addRequestDebaga = () => {
    if (this.debagaForm.dirty && this.debagaForm.touched) {
      this.setValue();
      const requestDebaga = {
        data: {
          requestDebaga: this.requestDebagas
        }
      };
      this.store.dispatch(addRequestDebaga({requestDebaga}));
      this.clearForm();
    }
  }
  updateRequestDebaga = () => {
    this.setValue();
    const requestDebaga = {
      data: {
        requestId: this.requestId,
        groupNo: this.row,
        requestDebaga: this.requestDebagas
      }
    };
    this.store.dispatch(updateRequestDebaga({requestDebaga}));
    this.clearForm();
  }

// fetch data from table to inputs
  fetchDebagaData = (ele) => {
    this.debagaForm.patchValue(ele);
    this.isEdite = true;
  }

  deleteDebaga = (ele, i) => {
    this.store.dispatch(deleteRequestDebaga({id: {data: {requestId: this.requestId, groupNo: i + 1}}}));
  }

// set value to cells of the table
  cellValue = (val, matchVal): string => {
    return val[matchVal];
  }

  getRowForUpdate = (row) => {
    this.row = row + 1;
  }

  // to set group number while saving debagas
  getTableRows = (): number => {
    const table = document.getElementById('tableId') as HTMLTableRowElement;
    return table.childElementCount;
  }


  clearForm = () => {
    this.debagaForm.reset();
    this.isEdite = false;
  }
}
