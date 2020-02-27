import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
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
import * as fromRelativesSelectors from '../../../store/general/lookups/relatives/selectors/relatives.selectors';
import * as fromLawOfficesSelectors from '../../../store/general/lookups/law-offices/selectors/law-office.selectors';
import * as fromTransactionCustomerTypesSelectors from '../../../store/general/lookups/transaction-cust-types/selectors/transaction-cust-type.selectors';
import * as fromRequestSelectors from './store/request/selectors/request.selectors';
import * as fromCustomerSelectors from './store/customer/selectors/customer.selectors';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
import {createCustomer, deleteCustomer, updateCustomer} from './store/customer/actions/customer.actions';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialog} from '@angular/material/dialog';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {TransactionCategories} from '../../data/transactionCategories';
import {CustomerService} from '../../services/customer.service';
import {ValidationMessagesService} from '../../../services/config/validation-messages.service';
import moment from 'moment';
import {DeleteModalComponent} from '../../../modal/delete-modal/delete-modal.component';
import {loadRelatives} from '../../../store/general/lookups/relatives/actions/relatives.actions';
import {loadLawers, loadLawOffices} from '../../../store/general/lookups/law-offices/actions/law-office.actions';
import {TableDataService} from '../../services/table-data.service';
import {LawyersModalComponent} from '../../../modal/lawyers-modal/lawyers-modal.component';
import {loadTransactionCustTypes} from '../../../store/general/lookups/transaction-cust-types/actions/transaction-cust-type.actions';
import {environment} from '../../../../environments/environment';
import {CommericalComponent} from '../../../modal/commerical/commerical.component';
import {RequestService} from '../../services/request.service';

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
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}]
})
export class PartyComponent implements OnInit {
  @Input() participantType: number;
  procurationCustomer: FormGroup;
  request: FormGroup;
  lawOffices: FormControl = new FormControl('');
  requestId: number;
  transactionId: number;
  expiryDate: any;
  companyExpiryDate: any;
  embassyDate: any;
  birthDate: any;
  widowingDate: {};
  url: string;
  maxLength = 9;
  institutionId: number;
  lawOfficeName: string;
  requestCustomerType: any;
  mociData: any;
  transactionCategories: TransactionCategories = new TransactionCategories();
  appStore$: Observable<fromApp.State>;
  requestCustomerTypes$: Observable<RequestCustomerType[]> = this.store.select(state =>
    state[fromRequestCustomerTypes.getRequestCustomerTypeFeatureKey].types);
  customerIdTypes$: Observable<CustomerIdType[]> = this.store.select(state => state[fromCustomerIdTypes.customerIdTypeFeatureKey].Id);
  nationalities$: Observable<Nationality[]> = this.store.select(state => state[fromNationalities.nationalitiesFeatureKey].nationalities);
  adminTypes$: Observable<AdminTypes[]> = this.store.select(state => fromAdminTypesSelectors.selectFeatureAdminTypes(state));
  relatives$: Observable<any> = this.store.select(state => fromRelativesSelectors.relativesSelector(state));
  lawOffices$: Observable<any> = this.store.select(state => fromLawOfficesSelectors.lawOfficesSelector(state));
  transactionCustomerTypes$: Observable<any> = this.store.select(state =>
    fromTransactionCustomerTypesSelectors.selectTranscationCustomerTypes(state));
  request$: Observable<Request> = this.store.select(state => fromRequestSelectors.selectFeatureRequestState(state));
  customers$: Observable<any> = this.store.select(state => fromCustomerSelectors.selectUserEntities(state));
  customerROP$: Observable<any> = this.store.select(state => fromCustomerSelectors.selectROPCustomer(state));
  displayedColumns: string[];
  columns: any;
  validationTypes$: Observable<any> = this.validationMessagesService.getMessages();


  constructor(private store: Store<State>,
              private formBuilder: FormBuilder,
              private encryptDecryptService: EncryptDecryptService,
              private validationMessagesService: ValidationMessagesService,
              private customerService: CustomerService,
              private requestService: RequestService,
              private activatedRout: ActivatedRoute,
              private router: Router,
              private ref: ChangeDetectorRef,
              private dialog: MatDialog,
              private tableDataService: TableDataService) {
    if (this.router.url.includes('POA_LAWYER') && this.participantType === 2) {
      this.tableDataService.getLawerDataTable();
    } else {
      this.tableDataService.getBasicDataTable();
    }
    this.columns = this.tableDataService.tableColumns;
    this.displayedColumns = this.tableDataService.displayColumns;
  }

  ngOnInit() {
    this.appStore$ = this.store.select(state => state);
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
      this.procurationCustomer.get('customer').get('idExpiryDate').updateValueAndValidity();
      this.procurationCustomer.get('customer').get('customerCivilId').updateValueAndValidity();
    });
    this.procurationCustomer.controls.customer.get('customerCategory').valueChanges.subscribe(value => {
      this.procurationCustomer.get('procuration').get('issuer').updateValueAndValidity();
      this.procurationCustomer.get('procuration').get('repProcurationSerial').updateValueAndValidity();
      this.procurationCustomer.get('procuration').get('procurationNote').updateValueAndValidity();

      if (value !== 55 || value !== 64 || value !== 6) {
        this.procurationCustomer.get('facilityData').reset();
      }
      this.procurationCustomer.get('facilityData').get('commericalRegister').updateValueAndValidity();
      this.procurationCustomer.get('facilityData').get('expiryDate').updateValueAndValidity();
      this.procurationCustomer.get('facilityData').get('facilityName').updateValueAndValidity();
      this.mociData = null;
    });
    this.procurationCustomer.get('procuration').get('manualFlag').valueChanges.subscribe(value => {
      if (value === false) {
        this.procurationCustomer.get('procuration').get('procurationNote').reset();
      } else if (value === true) {
        this.procurationCustomer.get('procuration').get('repProcurationSerial').reset();
      }
      this.procurationCustomer.get('procuration').get('repProcurationSerial').updateValueAndValidity();
      this.procurationCustomer.get('procuration').get('procurationNote').updateValueAndValidity();
    });
    this.activatedRout.data.subscribe(params => {
      this.transactionId = params.transactionId;
    });
    this.activatedRout.params.subscribe(params => {
      if (params.requestId) {
        this.requestId = params.requestId;
        this.procurationCustomer.controls.request.setValue({id: this.requestId});
        if (this.participantType === 1) {
        this.store.dispatch(GetRequestDetails( {requestId: this.requestId}));
          } else if (this.participantType === 2) {
          this.store.dispatch(loadRelatives({transactionId: {data: {transactionId: this.transactionId}}}));
         // if (this.router.url.includes('POA_LAWYER')) {
          this.store.dispatch(loadLawOffices({resourc_id: window.btoa('LawyerCompanyPartner')}));
        //  }
        }
      }
    });
    this.procurationCustomer.controls.particpantType.setValue({id: this.participantType});
    if (this.participantType === 1) {
      this.store.dispatch(loadGetRequestCustomerTypes());
      this.store.dispatch(loadCustomerIdTypes());
      this.store.dispatch(loadNationalities());
      this.store.dispatch(loadAdminTypes());
      this.store.dispatch(loadTransactionCustTypes({id: {data: {transactionId: this.transactionId}}}));
    }
    this.lawOffices.valueChanges.subscribe(value => {
      if (value && typeof value === 'object' && value.constructor === Object) {
      this.institutionId = value.InstitutionId;
      this.lawOfficeName = value.InstitutionName;
      this.store.dispatch(loadLawers({resourc_id: 'T2ZmaWNlc0xhd3llcg==', InstitutionId: window.btoa(`?q=InstitutionId=${value.InstitutionId}`)}));
      }
    });


    if (this.participantType === 3) {
      this.procurationCustomer.controls.customer.get('customerCategory').setValue(70);
    }
  }

  initForms = () => {
    this.procurationCustomer = this.formBuilder.group({
      id: [],
      facilityData: this.formBuilder.group({
        commericalRegister: [null, [this.validationMessagesService.facilityConditionallyRequiredValidator]],
        expiryDate: [null, [this.validationMessagesService.validateDateMore,
          this.validationMessagesService.facilityConditionallyRequiredValidator]],
        signatories: [],
        humanPartners: [],
        branches: [],
        establishmentPartners: [],
        facilityNo: [],
        facilityName: [{value: '', disabled: true}, [this.validationMessagesService.facilityConditionallyRequiredValidator]],
        postalBox: [],
        telephone: []
      }),
      customer: this.formBuilder.group({
        customerName: ['', [Validators.required, Validators.pattern('^\\s*\\S+(?:\\s+\\S+)+\\s*$')]],
        customerNameEn: [''],
        customerStatus: [{id: 1}],
        customerType: [{id: 1}],
        customerCategory: [2, [Validators.required, this.validationMessagesService.validateSelectInput]],
        nationality: ['', [Validators.required, this.validationMessagesService.validateSelectInput]],
        customerIDType: [1, [Validators.required, this.validationMessagesService.validateSelectInput]],
        customerCivilId: ['', [Validators.required, Validators.maxLength(this.maxLength)]],
        job: [''],
        address: ['', [this.validationMessagesService.addressConditionallyRequiredValidator]],
        tribeName: [''],
        birthDate: [null, [this.validationMessagesService.validateDateLess]],
        government: [{id: 2}],
        tbookId: [3],
        birthPlace: [''],
        jobPlace: [''],
        idExpiryDate: [moment(new Date()), [ this.validationMessagesService.validateDateMore,
          this.validationMessagesService.idExpiryDateConditionallyRequiredValidator]],
        customerGender: [{id: 1}],
        customerReligion: [{id: 4}],
        mobileNo: ['', [Validators.maxLength(15), Validators.minLength(8),
          this.validationMessagesService.mobileNoConditionallyRequiredValidator]],
        professionId: [{value: null, disabled: true}],
        qualificationId: [],
        workStatusId: [null, [this.validationMessagesService.validateSelectInput,
          this.validationMessagesService.workStatusIdConditionallyRequiredValidator]],
        governorateId: [],
        embassyDocNo: [null, [this.validationMessagesService.embassyDocNoConditionallyRequiredValidator]],
        embassyDocDate: [null, [this.validationMessagesService.validateDateLess,
          this.validationMessagesService.embassyDocDateConditionallyRequiredValidator]],
        legalDate: [],
        motherName: [''],
        governorateDate: [],
        isManualPassport: [],
        passportIssueDate: [],
        licenseNo: [],
        guardianRelationId: [],
        guardianReasonId: [],
        courtApprovalNo: [],
        courtApprovalDate: [],
        courtName: [],
        widowingNo: [null, [this.validationMessagesService.widowingConditionallyRequiredValidator]],
        widowingDate: [null, [this.validationMessagesService.widowingConditionallyRequiredValidator]],
        widowingIssuePlace: [null, [this.validationMessagesService.widowingConditionallyRequiredValidator]]
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
        repProcurationSerial: [0, [this.validationMessagesService.repProcurationSerialConditionallyRequiredValidator]],
        repProcurationYear: [''],
        issuer: [0, [this.validationMessagesService.issuerConditionallyRequiredValidator]],
        procurationType: ['true'],
        repName: [null],
        procurationNote: [null, [this.validationMessagesService.procurationNoteConditionallyRequiredValidator]],
        repOrganizationUnitId: [1],
        parentProcurationSerial: [],
        manualFlag: [false]
      })
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

  creatProcurationCustomer = (customerObject: FormGroup) => {

    if (customerObject.valid) {
      const savedCustomer = Object.assign({}, customerObject.getRawValue());
      // const customer = {data: {procurationCustomer: customerObj}};
      if (!savedCustomer.id) {
        delete savedCustomer.id;
      }
      savedCustomer.requestCustomerType = Object.assign({}, {id: JSON.parse(JSON.stringify(savedCustomer.customer.customerCategory))});
      savedCustomer.customer.customerCategory = Object.assign({}, {id: 1});
      savedCustomer.customer.customerIDType = {id: savedCustomer.customer.customerIDType};
      savedCustomer.customer.nationality = {id: savedCustomer.customer.nationality};
      savedCustomer.customer.idExpiryDate = this.expiryDate ? this.expiryDate : null;
      savedCustomer.id ? this.store.dispatch(updateCustomer({customer: savedCustomer, savedCustomer}))
        : this.store.dispatch(createCustomer({customer: savedCustomer}));
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
    this.procurationCustomer.get('customer').get('idExpiryDate').setValue(customer.customer.idExpiryDate ?
      moment(customer.customer.idExpiryDate) : '');
  }


  deleteProcurationCustomer = (id, entityId) => {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '550px',
      data: {message: 'هل انت متأكد ؟'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const data = {success: true, status: null, data: {id}};
        this.store.dispatch(deleteCustomer({id: data, entityId}));
      }
    });
  }
  onChangesExpiryDate = (event: any) => {
    this.expiryDate = {
      day: `${event.value._i.date}`,
      month: `${event.value._i.month + 1}`,
      year: `${event.value._i.year}`
    };
    if (this.procurationCustomer.controls.customer.get('customerCivilId').value) {
      this.customerService.getCustomerFromROP({
        civilNumber: this.procurationCustomer.controls.customer.get('customerCivilId').value,
        dateOfExpiry: `${this.expiryDate.day}-${this.expiryDate.month}-${this.expiryDate.year}`
      }).subscribe(response => {
        if (response.items) {
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
        }
      });
    }
  }
  getCustomerType = (type) => {
    this.requestCustomerType = type;
  }
  getCommercials = () => {
    if (!this.mociData) {
    if (environment.production) {
      this.customerService.getMociData(this.procurationCustomer.controls.facilityData.get('commericalRegister').value).subscribe(res => {
        this.mociData = res.data;
      });
    } else {
    this.mociData = this.customerService.getMociDataMocaup(this.procurationCustomer.controls.facilityData.get('commericalRegister').value);
    }
    this.procurationCustomer.controls.facilityData.get('facilityName').patchValue(this.mociData.data.companySummary.company.arabicName);
    }
  }
  openCommercialDialog = () => {
    const dialogRef = this.dialog.open(CommericalComponent, {
      width: '200vh',
      height: '80%',
      data:  this.mociData
    });

    dialogRef.afterClosed().subscribe(result => {
    });
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
  onChangesWidowingDate = (event: any) => {
    this.widowingDate = {
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
  getFormControlFacilityData = (control) => {
    return this.procurationCustomer.controls.facilityData.get(`${control}`);
  }
  getFormControlProcurationValue = (control) => {
    return this.procurationCustomer.controls.procuration.value[`${control}`];
  }
  getFormControlProcuration = (control) => {
    return this.procurationCustomer.controls.procuration.get(`${control}`);
  }
  clearForm = () => {
    this.procurationCustomer.reset({
      customer: {
        customerCategory: 2,
        customerIDType: 1,
        idExpiryDate: moment(new Date()),
        customerName: '',
        customerNameEn: '',
        customerStatus: {id: 1},
        customerType: {id: 1},
        nationality: '',
        customerCivilId: '',
        job: '',
        address: '',
        tribeName: '',
        birthDate: null,
        government: {id: 2},
        tbookId: 3,
        birthPlace: '',
        jobPlace: '',
        customerGender: {id: 1},
        customerReligion: {id: 4},
        mobileNo: '',
        professionId: null,
        qualificationId: null,
        workStatusId: null,
        governorateId: null,
        embassyDocNo: null,
        embassyDocDate: null,
        legalDate: null,
        motherName: '',
        governorateDate: null,
        isManualPassport: null,
        passportIssueDate: null,
        licenseNo: null,
        guardianRelationId: null,
        guardianReasonId: null,
        courtApprovalNo: null,
        courtApprovalDate: null,
        courtName: null,
        widowingNo: null,
        widowingDate: null,
        widowingIssuePlace: null
      },
      procuration: {
        repProcurationSerial: 0,
        repProcurationYear: '',
        issuer: 0,
        procurationType: 'true',
        repName: null,
        procurationNote: null,
        repOrganizationUnitId: 1,
        parentProcurationSerial: null,
        manualFlag: false
      },
      facilityData: {
        commericalRegister: null,
        expiryDate: null,
        signatories: null,
        humanPartners: null,
        branches: null,
        establishmentPartners: null,
        facilityNo: null,
        facilityName: '',
        postalBox: null,
        telephone: null
      },
      customerNo: 0,
      status: 'true',
      requesterFlag: false,
      ffdFlag: 'true',
      signFlag: 'true',
      signNotes: 'Sign Notes',
      fpCustomerDeliver: 'true',
      hasParentRep: 'true',
      notes: null,
      delegateList: null,
      relativeRelation: null,
      requestNo: '',
      customerType: {id: 1},
      requestCustomerType: null,
      particpantType: {id : this.participantType},
      request: {id: this.requestId}
    });
  }
  openLawersDialog(): void {
    const dialogRef = this.dialog.open(LawyersModalComponent, {
      width: '250vh'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.length > 0) {
        result.forEach((e, i) => {
          this.clearForm();
          this.procurationCustomer.patchValue({
            facilityData: {
              commericalRegister: e.InstitutionId,
              facilityName: this.lawOfficeName,
            },
            customer: {
              customerName: e.CustomerName,
              customerStatus: {id: 1},
              customerType: {id: 1},
              customerCategory: {id: 1},
              nationality: {id: e.NationalityTypeNo},
              customerIDType: {id: 1},
              customerCivilId: e.CustomerCivilId,
              address: e.GadwalDesc,
              government: {id: 2},
              idExpiryDate: null,
              customerGender: {id: 1},
              customerReligion: {id: 4},
              professionId: e.LawyerId
            },
            customerType: {id: 1},
            requestCustomerType: {id: 56},
          });
          this.store.dispatch(createCustomer({customer: this.procurationCustomer.getRawValue() }));
        });
      }
    });
  }
  getDisplayFn(office): string {
    return office && office.InstitutionName ? office.InstitutionName : '';
  }

  encryption = (data) => {
    return this.encryptDecryptService.encryptUsingAES256(data);
  }

}
