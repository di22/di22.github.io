import {ChangeDetectorRef, Component, Input, OnInit, Optional, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import * as fromApp from '../../../store';
import {State} from '../../../store';
import {RequestCustomerType} from '../../../DTO`s/request-customer-type';
// tslint:disable-next-line:import-spacing
import * as fromRequestCustomerTypes
  from '../../../store/general/lookups/request-custiomer-types/reducers/get-request-customer-type.reducer';
import {CustomerIdType} from '../../../DTO`s/customer-id-type';
import * as fromCustomerIdTypes from '../../../store/general/lookups/customer-id-types/reducers/custiomer-id-type.reducer';
import {Nationality} from '../../../DTO`s/nationality';
import * as fromNationalities from '../../../store/general/lookups/nationalites/reducers/nationalites.reducer';
import {AdminTypes} from '../../../DTO`s/admin-types';
import * as fromAdminTypesSelectors from '../../../store/general/lookups/admin-types/selectors/admin-type.selectors';
import * as fromRequestSelectors from './store/request/selectors/request.selectors';
import * as fromCustomerSelectors from './store/customer/selectors/customer.selectors';
import {ControlContainer, FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {EncryptDecryptService} from '../../../services/config/encrypt-decrypt.service';
// tslint:disable-next-line:max-line-length
import {loadGetRequestCustomerTypes} from '../../../store/general/lookups/request-custiomer-types/actions/get-request-customer-type.actions';
import {loadCustomerIdTypes} from '../../../store/general/lookups/customer-id-types/actions/custiomer-id-type.actions';
import {loadNationalities} from '../../../store/general/lookups/nationalites/actions/nationalites.actions';
import {loadAdminTypes} from '../../../store/general/lookups/admin-types/actions/admin-type.actions';
import {ActivatedRoute, Router} from '@angular/router';
import {CreateRequest, GetRequestDetails} from './store/request/actions/request.actions';
import {Request} from '../../../DTO`s/request';
import {createCustomer, deleteCustomer, getROPCustomer, updateCustomer} from './store/customer/actions/customer.actions';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {TransactionCategories} from '../../data/transactionCategories';
import {CustomerService} from '../../services/customer.service';
import {ValidationMessagesService} from '../../../services/config/validation-messages.service';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss'],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'ar-AR'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class PartyComponent implements OnInit {
  @Input() participantType: number;
  procurationCustomer: FormGroup;
  request: FormGroup;
  requestId: number;
  transactionId: number;
  expiryDate: any;
  companyExpiryDate: any;
  embassyDate: any;
  birthDate: any;
  dateTo: {};
  url: string;
  maxLength = 9;
  transactionCategories: TransactionCategories = new TransactionCategories();
  appStore$: Observable<fromApp.State>;
  requestCustomerTypes$: Observable<RequestCustomerType[]> = this.store.select(state =>
    state[fromRequestCustomerTypes.getRequestCustomerTypeFeatureKey].types);
  customerIdTypes$: Observable<CustomerIdType[]> = this.store.select(state => state[fromCustomerIdTypes.customerIdTypeFeatureKey].Id);
  nationalities$: Observable<Nationality[]> = this.store.select(state => state[fromNationalities.nationalitiesFeatureKey].nationalities);
  adminTypes$: Observable<AdminTypes[]> = this.store.select(state => fromAdminTypesSelectors.selectFeatureAdminTypes(state));
  request$: Observable<Request> = this.store.select(state => fromRequestSelectors.selectFeatureRequestState(state));
  customers$: Observable<any> = this.store.select(state => fromCustomerSelectors.selectUserEntities(state));
  customerROP$: Observable<any> = this.store.select(state => fromCustomerSelectors.selectROPCustomer(state));
  displayedColumns: string[] = ['position', 'customerIdType', 'civilId', 'nationality', 'name', 'requestCustomerType', 'mobileNumber', 'moql-qaser-mfwad', 'check', 'edit-delete'];

  validationTypes$: Observable<any> = this.validationMessagesService.getMessages();

  constructor(private store: Store<State>,
              private formBuilder: FormBuilder,
              private encryptDecryptService: EncryptDecryptService,
              private validationMessagesService: ValidationMessagesService,
              private customerService: CustomerService,
              private activatedRout: ActivatedRoute,
              private router: Router,
              private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.url = this.router.url.slice(this.router.url.lastIndexOf('/', this.router.url.length));
    this.initForms();
    this.procurationCustomer.controls.particpantType.setValue({id: this.participantType});
    this.procurationCustomer.get('customer').get('customerName').disable();
    this.procurationCustomer.get('customer').get('birthDate').disable();
    this.procurationCustomer.get('customer').get('nationality').disable();
    this.procurationCustomer.controls.customer.get('customerIDType').valueChanges.subscribe(value => {
      if (value === 1) {
        this.procurationCustomer.get('customer').get('customerName').disable();
        this.procurationCustomer.get('customer').get('birthDate').disable();
        this.procurationCustomer.get('customer').get('nationality').disable();
      } else {
        this.procurationCustomer.controls.customer.get('customerName').enable();
        this.procurationCustomer.controls.customer.get('birthDate').enable();
        this.procurationCustomer.controls.customer.get('nationality').enable();
      }
      this.updateProofNoMaxLenght(value);
    });
    this.activatedRout.data.subscribe(params => {
      this.transactionId = params.transactionId;
      this.request.controls.transactionType.setValue({id: this.transactionId});
    });
    this.activatedRout.params.subscribe(params => {
      if (!params.requestId) {
        if (this.participantType === 1) {
          this.createRequest(this.request.value);
        }
      } else {
        this.requestId = params.requestId;
        this.procurationCustomer.controls.request.setValue({id: this.requestId});
        if (this.participantType === 1) {
        this.store.dispatch(GetRequestDetails( {requestId: this.requestId}));
          }
      }
    });
    this.procurationCustomer.controls.particpantType.setValue({id: this.participantType});
    this.appStore$ = this.store.select(state => state);
    if (this.participantType === 1) {
      this.store.dispatch(loadGetRequestCustomerTypes());
      this.store.dispatch(loadCustomerIdTypes());
      this.store.dispatch(loadNationalities());
      this.store.dispatch(loadAdminTypes());
    }

  }

  initForms = () => {
    this.procurationCustomer = this.formBuilder.group({
      id: [],
      facilityData: this.formBuilder.group({
        commericalRegister: [],
        expiryDate: [],
        signatories: [],
        humanPartners: [],
        branches: [],
        establishmentPartners: [],
        facilityNo: [],
        facilityName: [],
        postalBox: [],
        telephone: []
      }),
      customer: this.formBuilder.group({
        customerName: ['', [Validators.required, Validators.pattern('^\\s*\\S+(?:\\s+\\S+)+\\s*$')]],
        customerNameEn: [''],
        customerStatus: [{id: 1}],
        customerType: [{id: 1}],
        customerCategory: [2, [Validators.required, this.validationMessagesService.validateSelectInput]],
        nationality: [],
        customerIDType: [1, [Validators.required, this.validationMessagesService.validateSelectInput]],
        customerCivilId: ['', [Validators.required, Validators.maxLength(this.maxLength)]],
        job: [''],
        address: [],
        tribeName: [],
        birthDate: [],
        government: [{id: 2}],
        tbookId: [3],
        birthPlace: [''],
        jobPlace: [''],
        idExpiryDate: [''],
        customerGender: [{id: 1}],
        customerReligion: [{id: 4}],
        mobileNo: ['', [Validators.maxLength(15), Validators.minLength(8)]],
        professionId: [],
        qualificationId: [],
        workStatusId: [],
        governorateId: [],
        embassyDocNo: [],
        embassyDocDate: [],
        legalDate: [],
        governorateDate: [],
        isManualPassport: [],
        passportIssueDate: []
      }),
      customerNo: [0],
      status: ['true'],
      requesterFlag: [false],
      ffdFlag: ['true'],
      signFlag: ['true'],
      signNotes: ['Sign Notes'],
      fpCustomerDeliver: ['true'],
      hasParentRep: ['true'],
      notes: [],
      delegateList: [],
      relativeRelation: [],
      request: [],
      requestNo: [''],
      customerType: [{id: 1}],
      particpantType: [],
      requestCustomerType: [],
      procuration: this.formBuilder.group({
        repProcurationSerial: [0],
        repProcurationYear: [''],
        issuer: [0],
        procurationType: ['true'],
        repName: [],
        procurationNote: [],
        repOrganizationUnitId: [1],
        parentProcurationSerial: [],
        manualFlag: [false]
      })
    }, {validators: this.validationMessagesService.conditionallyRequiredValidator});

    this.request = this.formBuilder.group({
      requestDate: [null],
      requestStatusHistory: [{statusReason: ''}],
      requestNo: [''],
      isPortal: ['0'],
      transactionType: [''],
      requestFinishDate: [''],
      requestNotes: [''],
      employeeNotes: [''],
      userIdApprove: [''],
      procurationCustomers: [[]]
    });
  }
  updateProofNoMaxLenght = (id) => {
    switch (id) {
      case 1:
        this.maxLength = 9;
        break;
      case 12:
        this.maxLength = 20;
        break;
      case 4:
        this.maxLength = 20;
        break;
      case 5:
        this.maxLength = 15;
        break;
      case 9:
        this.maxLength = 10;
        break;
      case 11:
        this.maxLength = 12;
        break;
      case 6:
        this.maxLength = 11;
        break;
      case 3:
        this.maxLength = 9;
        break;
      default:
        this.maxLength = 20;
        break;
    }
  }
  createRequest = (searchObj) => {
    const data = {data: {request: searchObj}};
    // const encryptData = this.encryption(data);
   //  this.request$.pipe(take(1)).subscribe(request => {
   //   if (!Object.entries(request).length) {
    this.store.dispatch(CreateRequest({request: data, url: this.url}));
   //   }
  //  });
  }
  creatProcurationCustomer = () => {
    if (this.procurationCustomer.valid) {
      const savedCustomer = Object.assign({}, this.procurationCustomer.getRawValue());
      // const customer = {data: {procurationCustomer: customerObj}};
      if (!savedCustomer.id) {
        delete savedCustomer.id;
      }
      savedCustomer.requestCustomerType = Object.assign({}, {id: JSON.parse(JSON.stringify(savedCustomer.customer.customerCategory))});
      savedCustomer.customer.customerCategory = Object.assign({}, {id: 1});
      savedCustomer.customer.customerIDType = {id: savedCustomer.customer.customerIDType};
      savedCustomer.customer.nationality = {id: savedCustomer.customer.nationality};
      savedCustomer.customer.idExpiryDate = this.expiryDate;
      savedCustomer.id ? this.store.dispatch(updateCustomer({customer: savedCustomer, savedCustomer}))
        : this.store.dispatch(createCustomer({customer: savedCustomer, savedCustomer}));
      this.clearForm();
    } else {
      this.validationMessagesService.validateAllFormFields(this.procurationCustomer);
    }
  }

  fetchProcurationCustomer = (customer: any) => {
    this.procurationCustomer.patchValue(customer);
    this.procurationCustomer.get('customer').get('customerCategory').setValue(customer.requestCustomerType.id);
    this.procurationCustomer.get('customer').get('customerIDType').setValue(customer.customer.customerIDType.id);
    this.procurationCustomer.get('customer').get('nationality').setValue(customer.customer.nationality.id);
  }


  deleteProcurationCustomer = (id, entityId) => {
    const data = {success: true, status: null, data: {id}};
    this.store.dispatch(deleteCustomer({id: data, entityId}));
  }
  onChangesExpiryDate = (event: any) => {
    this.expiryDate = {
      day: `${event.value._i.date}`,
      month: `${event.value._i.month + 1}`,
      year: `${event.value._i.year}`
    };
    this.customerService.getCustomerFromROP({civilNumber: this.procurationCustomer.controls.customer.get('customerCivilId').value,
      dateOfExpiry: `${this.expiryDate.day}-${this.expiryDate.month}-${this.expiryDate.year}`}).subscribe(response => {
        if (response.items.length > 0) {
          this.procurationCustomer.get('customer').get('customerName').patchValue(
            `${response.items[0].person.civilIdCard.arabicName.first} ${response.items[0].person.civilIdCard.arabicName.second} ${response.items[0].person.civilIdCard.arabicName.third} ${response.items[0].person.civilIdCard.arabicName.sixth}`
          );
          this.procurationCustomer.get('customer').get('customerNameEn').patchValue(
            `${response.items[0].person.civilIdCard.englishName.first} ${response.items[0].person.civilIdCard.englishName.second} ${response.items[0].person.civilIdCard.englishName.third} ${response.items[0].person.civilIdCard.englishName.sixth}`
          );
          if (response.items[0].person.civilIdCard.nationality.code === 'OMN') {
            this.procurationCustomer.get('customer').get('nationality').patchValue(512);
          }
          this.procurationCustomer.get('customer').get('birthDate')
            .patchValue(this.onGetBirthDateFromROP(response.items[0].person.civilIdCard.birthDetails.dateOfBirth));
        }
    });
   // this.store.dispatch(getROPCustomer({data: {civilNumber: this.procurationCustomer.controls.customer.get('customerCivilId').value,
   //   dateOfExpiry: `${this.dateFrom.day}-${this.dateFrom.month}-${this.dateFrom.year}`}}));
  }
  onChangesBirthDate = (event: any) => {
    this.birthDate = {
      day: `${event.value._i.date}`,
      month: `${event.value._i.month + 1}`,
      year: `${event.value._i.year}`
    };
  }
  onGetBirthDateFromROP = (date: string): any => {
    let d: any = date.split('-');
    d = {day: d[0], month: d[1], year: d[2]};
    return d;
  }
  onChangesEmbassyDate = (event: any) => {
    this.embassyDate = {
      day: `${event.value._i.date}`,
      month: `${event.value._i.month + 1}`,
      year: `${event.value._i.year}`
    };
  }
  onChangesCompanyExpiryDate = (event: any) => {
    this.companyExpiryDate = {
      day: `${event.value._i.date}`,
      month: `${event.value._i.month + 1}`,
      year: `${event.value._i.year}`
    };
  }
  onChangesToDate = (event: any) => {
    this.dateTo = {
      day: `${event.value._i.date}`,
      month: `${event.value._i.month + 1}`,
      year: `${event.value._i.year}`
    };
  }
  getFormControlCustomerValue = (control) => {
    return this.procurationCustomer.controls.customer.value[`${control}`];
  }
  getFormControlCustomer = (control) => {
    return this.procurationCustomer.controls.customer.get(`${control}`);
  }
  getFormControlProcurationValue = (control) => {
    return this.procurationCustomer.controls.procuration.value[`${control}`];
  }
  clearForm = () => {
    this.procurationCustomer.reset();
  }

  encryption = (data) => {
    return this.encryptDecryptService.encryptUsingAES256(data);
  }

}
