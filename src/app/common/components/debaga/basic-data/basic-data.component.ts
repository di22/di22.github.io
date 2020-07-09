import { Component, Input, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../store';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import * as fromRequestDebagaSelectors from '../store/selectors/request-debaga.selectors';
import {deleteRequestDebaga} from '../store/actions/request-debaga.actions';
import {GetRequestDetails} from '../../request/store/actions/request.actions';
import {DebagaService} from '../../../services/debaga.service';
import {MessageService} from '../../../../services/config/message.service';
import {environment} from '../../../../../environments/environment';
import {CustomerService} from '../../../services/customer.service';
import moment from 'moment';
import {DeleteModalComponent} from '../../../../modal/delete-modal/delete-modal.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-basic-data',
  templateUrl: './basic-data.component.html',
  styleUrls: ['./basic-data.component.scss']
})
export class BasicDataComponent implements OnInit {

  @Input() debagas: any[];
  @Input() requestId: number;
  addGroupNumber = 0;
  editDeleteGroupNumber = 0;
  mociData: any;
  debagaList = [];
  requestDebagas = new Set();
  debagaForm: FormGroup;
  isEdite: boolean;
  isMulti: boolean;
  dateInputs = {};
  requestDebaga$: Observable<any> = this.store.select(state => fromRequestDebagaSelectors.selectAllRequestDebaga(state));


  constructor(private store: Store<fromApp.State>,
              private formBuilder: FormBuilder,
              private debagaService: DebagaService,
              private messageService: MessageService,
              private customerService: CustomerService,
              private dialog: MatDialog,
              private router: Router) { }

  ngOnInit() {
    this.isMulti = true;
    this.initForms();

       this.debagas.forEach((ele: any) => {
            this.debagaForm.addControl(ele.id, this.formBuilder.control(''));
            this.drawObjectForSave(ele);
          if (ele.columnType === 'DATE') {
            this.dateInputs[ele.id] = ele.id;
          }
        });


    this.requestDebaga$.subscribe(requestDebaga => {
      if (requestDebaga && requestDebaga.length > 0) {
        this.debagaList = requestDebaga;
        requestDebaga.forEach((item, i) => {
          if (item.groupNumber) {
            if (this.router.url.includes('POA_PASSPORT_ISSUANCE')) {
              this.isMulti = false;
            }
            this.addGroupNumber = item.groupNumber;
          }
        });
      }
    });
    if (this.debagaForm.contains('9286') && this.debagaForm.contains('9291')) {
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
    }
  }

  initForms = () => {
    this.debagaForm = this.formBuilder.group({});
  };
  get f() { return this.debagaForm.controls; }
  get t() { return this.f.formArray as FormArray; }



  setValue = (groupNumber) => {
    this.requestDebagas.forEach((ele: any, i) => {
     const value = this.isInputDates(ele.debagaTemplate.id);
     if (value) {
       this.debagaForm.get(`${ele.debagaTemplate.id}`).patchValue(`${value._i.year}/${value._i.month}/${value._i.date}`);
     }
     ele = Object.assign(ele, {text: this.debagaForm.get(`${ele.debagaTemplate.id}`).value,
          groupNumber: groupNumber});
    });
  };
  drawObjectForSave = (value) => {
    const obj = Object.assign({request: {id: this.requestId},
      debagaTemplate: {id: value.id},
      sortOrder: value.sortOrder
    });
    this.requestDebagas.add(obj);
  };
  addRequestDebaga = () => {
    if (this.debagaForm.dirty && this.debagaForm.touched) {
      this.addGroupNumber++;
      this.setValue(this.addGroupNumber);
      const requestDebaga = {
        data: {
          requestDebaga: Array.from(this.requestDebagas)
        }
      };
      this.debagaService.createRequestDebaga(requestDebaga).subscribe(res => {
        this.messageService.successMessage('تم إضافة النماذج بنجاح');
        this.clearForm();
        this.store.dispatch(GetRequestDetails({requestId: this.requestId}));
      });
    }
  };
  updateRequestDebaga = () => {
    this.setValue(this.editDeleteGroupNumber);
    const requestDebaga = {
      data: {
        requestId: this.requestId,
        groupNo: this.editDeleteGroupNumber,
        requestDebaga: Array.from(this.requestDebagas)
      }
    };
    this.debagaService.updateRequestDebagaByGroup(requestDebaga).subscribe(res => {
      this.messageService.successMessage('تم تعديل النماذج بنجاح');
      this.clearForm();
      this.store.dispatch(GetRequestDetails({requestId: this.requestId}));
    });
  };

// fetch fees-package from table to inputs
  fetchDebagaData = (ele) => {
    this.getEditDeleteGroupNumber(ele);
    this.debagaForm.patchValue(this.getDebagasForFetch(ele));
    for (const i in ele ) {
      const value = this.isInputDates(i);
      if (value) {
        this.debagaForm.get(`${i}`).patchValue(`${moment(new Date(ele[i].split('/').reverse().join('/'))).format('YYYY-MM-DD')}`);
      }
    }
    this.isEdite = true;
  };

  deleteDebaga = (ele: Object) => {
    this.getEditDeleteGroupNumber(ele);
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '550px',
      data: {message: 'هل انت متأكد ؟'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(deleteRequestDebaga({id: {data: {requestId: this.requestId, groupNo: this.editDeleteGroupNumber}}}));
      }
    });

  };
getDebagasForFetch = (elements) => {
  const data = {...elements};
  for(let e in data) {
    data[e] = data[e].text
  }
  return data;
}
getEditDeleteGroupNumber = (elements) => {
  const data = {...elements};
  for(let e in data) {
    this.editDeleteGroupNumber = data[e].groupNumber;
  }
   this.editDeleteGroupNumber;
}
  getCommercials = (debaga, event) => {
    if (!this.mociData) {
      if (debaga.code.includes('CR_NUMBER')) {
      if (event.target.value) {
      if (environment.production) {
        this.customerService.getMociData(+event.target.value).subscribe(res => {
          this.mociData = res.data;
        });
      } else {
        this.mociData = this.customerService.getMociDataMocaup(+event.target.value);
      }
      if (this.debagaForm.contains('8897')) {
        this.debagaForm.get('8897').patchValue(this.mociData.data.companySummary.company.arabicName);
        this.debagaForm.get('8897').disable();
      }
      }
      }
    }
  };

  isInputDates = (id) => {
    let value = null;
        if (this.debagaForm.contains(`${this.dateInputs[id]}`)) {
           value = this.debagaForm.get(`${this.dateInputs[id]}`).value;
        }
        return value;
  }
  onChangesDate = (event, id) => {
   // this.dateInputs[id] = id;
  };
// set value to cells of the table
  cellValue = (val, matchVal): string => {
    return val[matchVal.id].text;
  };

  clearForm = () => {
    this.debagaForm.reset();
    this.debagaForm.enable();
    this.isEdite = false;
  }
}
