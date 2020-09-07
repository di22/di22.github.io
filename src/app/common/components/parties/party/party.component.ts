import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import { Observable, zip} from 'rxjs';
import {State} from '../../../store';
import {RequestCustomerType} from '../../../../DTO`s/request-customer-type';
import * as fromRequestCustomerTypes from '../../../../store/general/lookups/request-custiomer-types/reducers/get-request-customer-type.reducer';
import {CustomerIdType} from '../../../../DTO`s/customer-id-type';
import * as fromCustomerIdTypes from '../../../../store/general/lookups/customer-id-types/reducers/custiomer-id-type.reducer';
import {Nationality} from '../../../../DTO`s/nationality';
import * as fromNationalities from '../../../../store/general/lookups/nationalites/reducers/nationalites.reducer';
import {AdminTypes} from '../../../../DTO`s/admin-types';
import * as fromAdminTypesSelectors from '../../../../store/general/lookups/admin-types/selectors/admin-type.selectors';
import * as fromRelativesSelectors from '../../../../store/general/lookups/relatives/selectors/relatives.selectors';
import * as fromLawOfficesSelectors from '../../../../store/general/lookups/law-offices/selectors/law-office.selectors';
import * as fromTransactionCustomerTypesSelectors from '../../../../store/general/lookups/transaction-cust-types/selectors/transaction-cust-type.selectors';
import * as fromCustomerSelectors from './store/selectors/customer.selectors';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {clearCustomers, createCustomer, deleteCustomer, updateCustomer} from './store/actions/customer.actions';
import { MatDialog} from '@angular/material/dialog';
import {TransactionCategories} from '../../../transaction-data/transactionCategories';
import {CustomerService} from '../../../services/customer.service';
import {ValidationMessagesService} from '../../../../services/config/validation-messages.service';
import moment from 'moment';
import {DeleteModalComponent} from '../../../../modal/delete-modal/delete-modal.component';
import {loadLawers} from '../../../../store/general/lookups/law-offices/actions/law-office.actions';
import {TableDataService} from '../../../services/table-data.service';
import {LawyersModalComponent} from '../../../../modal/lawyers-modal/lawyers-modal.component';
import {environment} from '../../../../../environments/environment';
import {CommericalComponent} from '../../../../modal/commerical/commerical.component';
import {RequestService} from '../../../services/request.service';
import {distinct} from 'rxjs/operators';
import {MessageService} from '../../../../services/config/message.service';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss']
})
export class PartyComponent implements OnInit {
  @Input() participantType: number;
  procurationCustomer: FormGroup;
  request: FormGroup;
  lawOffices: FormControl = new FormControl('');
  fetchedCustomer: any;
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
  isCommercialValid = true;
  transactionCategories: TransactionCategories = new TransactionCategories();
  requestCustomerTypes$: Observable<RequestCustomerType[]> = this.store.select(state => state[fromRequestCustomerTypes.getRequestCustomerTypeFeatureKey].types);
  customerIdTypes$: Observable<CustomerIdType[]> = this.store.select(state => state[fromCustomerIdTypes.customerIdTypeFeatureKey].Id);
  nationalities$: Observable<Nationality[]> = this.store.select(state => state[fromNationalities.nationalitiesFeatureKey].nationalities);
  adminTypes$: Observable<AdminTypes[]> = this.store.select(state => fromAdminTypesSelectors.selectFeatureAdminTypes(state));
  relatives$: Observable<any> = this.store.select(state => fromRelativesSelectors.relativesSelector(state));
  lawOffices$: Observable<any> = this.store.select(state => fromLawOfficesSelectors.lawOfficesSelector(state));
  transactionCustomerTypes$: Observable<any> = this.store.select(state =>
    fromTransactionCustomerTypesSelectors.selectTranscationCustomerTypes(state));
  customers$: Observable<any> = this.store.select(state => fromCustomerSelectors.selectUserEntities(state));
  requester$: Observable<any> = this.store.select(state => fromCustomerSelectors.selectRequester(state));
  displayedColumns: string[];
  columns: any;


  constructor(private store: Store<State>,
              private formBuilder: FormBuilder,
              private validationMessagesService: ValidationMessagesService,
              private customerService: CustomerService,
              private requestService: RequestService,
              private messageService: MessageService,
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
   // this.url = this.router.url.slice(this.router.url.lastIndexOf('/', this.router.url.length));
    this.url = this.router.url;
    this.initForms();
    this.activatedRout.data.subscribe(params => {
      this.transactionId = params.transactionId;
    });
    this.activatedRout.params.subscribe(params => {
      if (params.requestId) {
        this.requestId = params.requestId;
        this.procurationCustomer.controls.request.setValue({id: this.requestId});
      }
    });

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
      this.updateProofNoMaxLength(value);
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

    this.procurationCustomer.controls.particpantType.setValue({id: this.participantType});
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
        id: [],
        commericalRegister: [null, [this.validationMessagesService.facilityConditionallyRequiredValidator]],
        expiryDate: [null, [this.validationMessagesService.validateDateMore,
          this.validationMessagesService.facilityConditionallyRequiredValidator]],
        signatories: [],
        humanPartners: [],
        branches: [[]],
        establishmentPartners: [],
        facilityNo: [],
        facilityName: [{value: '', disabled: true}, [this.validationMessagesService.facilityConditionallyRequiredValidator]],
        postalBox: [],
        telephone: []
      }),
      customer: this.formBuilder.group({
        id: [],
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
      particpantType: [{id: this.participantType}],
      requestCustomerType: [],
      procuration: this.formBuilder.group({
        id: [],
        repProcurationSerial: [0, [this.validationMessagesService.repProcurationSerialConditionallyRequiredValidator]],
        repProcurationYear: [''],
        issuer: [0, [this.validationMessagesService.issuerConditionallyRequiredValidator]],
        procurationType: [true],
        repName: [null],
        procurationNote: [' ', [this.validationMessagesService.procurationNoteConditionallyRequiredValidator]],
        repOrganizationUnitId: [1],
        parentProcurationSerial: [],
        manualFlag: [false]
      })
    });
  };
  updateProofNoMaxLength = (id) => {
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
  };


  creatProcurationCustomer = (customerObject: FormGroup) => {
    if (customerObject.value.customer.customerIDType != 1) {
      customerObject.controls.customer.get('idExpiryDate').clearValidators();
      customerObject.controls.customer.get('idExpiryDate').updateValueAndValidity();

    }
    if (customerObject.valid) {
      this.commercialsValidations();
      if (!this.isCommercialValid) {
        return;
      }
      const savedCustomer = Object.assign({}, customerObject.getRawValue());
      if(!savedCustomer.id) {
        delete savedCustomer.id;
        delete savedCustomer.facilityData.id;
        delete savedCustomer.procuration.id;
        delete savedCustomer.customer.id;
      } else {
        delete savedCustomer.customer.licenseNo;
        delete savedCustomer.customer.guardianRelationId;
        delete savedCustomer.customer.guardianReasonId;
        delete savedCustomer.customer.courtApprovalNo;
        delete savedCustomer.customer.courtApprovalDate;
        delete savedCustomer.customer.courtName;
        delete savedCustomer.customer.widowingNo;
        delete savedCustomer.customer.widowingDate;
        delete savedCustomer.customer.widowingIssuePlace;

      }
      if (!savedCustomer.facilityData.commericalRegister) {
        delete savedCustomer.facilityData.id;
      }

      savedCustomer.requestCustomerType = Object.assign({}, {id: JSON.parse(JSON.stringify(savedCustomer.customer.customerCategory))});
      savedCustomer.customer.customerCategory = Object.assign({}, {id: 1});
      savedCustomer.customer.customerIDType = {id: savedCustomer.customer.customerIDType};
      savedCustomer.customer.nationality = {id: savedCustomer.customer.nationality};
      savedCustomer.customer.idExpiryDate = this.expiryDate ? this.expiryDate : this.dateToObject(savedCustomer.customer.idExpiryDate);
      savedCustomer.customer.birthDate = this.birthDate ? this.birthDate : savedCustomer.customer.birthDate? savedCustomer.customer.birthDate : null;
      if (savedCustomer.facilityData.commericalRegister&& this.mociData) {
        savedCustomer.facilityData.expiryDate = this.companyExpiryDate? this.companyExpiryDate : this.dateToObject(savedCustomer.facilityData.expiryDate);
        savedCustomer.facilityData.humanPartners = this.drawCommercialHumanParteners(this.mociData.companySummary.investors);
        savedCustomer.facilityData.signatories = this.drawCommercialSignatures(this.mociData.companySummary.signatories);
      }

      savedCustomer.id ? this.store.dispatch(updateCustomer({customer: savedCustomer, savedCustomer}))
        : this.store.dispatch(createCustomer({customer: savedCustomer}));
      this.clearForm();
    } else {
      this.validationMessagesService.validateAllFormFields(this.procurationCustomer);
    }
  };

  fetchProcurationCustomer = (customer: any) => {
    this.fetchedCustomer = {...customer};
    const birthD = customer.customer.birthDate? moment(customer.customer.birthDate).subtract(1, 'months') : null;
    this.procurationCustomer.patchValue({
      id: customer.id,
      customer: {
        id: customer.customer.id,
        customerName: customer.customer.customerName,
        customerNameEn: customer.customer.customerNameEn,
        customerStatus: {id: customer.customer.customerStatus.id},
        customerType: {id: customer.customer.customerType.id},
        customerCategory: customer.requestCustomerType.id,
        nationality: customer.customer.nationality.id,
        customerIDType: customer.customer.customerIDType.id,
        customerCivilId: customer.customer.customerCivilId,
        job: '',
        address: customer.customer.address? customer.customer.address : null,
        tribeName: customer.customer.tribeName? customer.customer.tribeName : null,
        birthDate: birthD,
        government: {id: 2},
        tbookId: 3,
        birthPlace: "",
        jobPlace: "",
        idExpiryDate: customer.customer.idExpiryDate? moment(customer.customer.idExpiryDate).subtract(1, 'months') : null,
        customerGender: {id: customer.customer.customerGender.id},
        customerReligion: {id: 4},
        mobileNo: customer.customer.mobileNo? customer.customer.mobileNo : "",
        professionId: customer.customer.professionId? customer.customer.professionId : null,
        qualificationId: customer.customer.qualificationId? customer.customer.qualificationId : null,
        workStatusId: customer.customer.workStatusId? customer.customer.workStatusId : null,
        governorateId: customer.customer.governorateId? customer.customer.governorateId : null,
        embassyDocNo: customer.customer.embassyDocNo? customer.customer.embassyDocNo : null,
        embassyDocDate: customer.customer.embassyDocDate? moment(customer.customer.embassyDocDate).subtract(1, 'months') : null,
        legalDate: customer.customer.legalDate? customer.customer.legalDate : null,
        motherName: customer.customer.motherName? customer.customer.motherName : " ",
        governorateDate: customer.customer.governorateDate? customer.customer.governorateDate : null,
        isManualPassport: customer.customer.isManualPassport? customer.customer.isManualPassport : null,
        passportIssueDate: customer.customer.passportIssueDate? customer.customer.passportIssueDate : null,
      },
      customerNo: 0,
      status: 'true',
      requesterFlag: customer.requesterFlag,
      ffdFlag: 'true',
      signFlag: 'true',
      signNotes: 'Sign Notes',
      fpCustomerDeliver: 'true',
      hasParentRep: 'true',
      notes: customer.notes? customer.notes : null,
      delegateList: customer.delegateList? customer.delegateList : "",
      relativeRelation: customer.relativeRelation? customer.relativeRelation : null,
      request: {id: customer.request.id},
      requestNo: '1234',
      customerType: {id: customer.customerType.id},
      particpantType: {id: this.participantType},
    });
this.procurationCustomer.controls.customer.get('birthDate').setValue(birthD);


this.procurationCustomer.controls.facilityData.patchValue({
  commericalRegister: customer.facilityData.commericalRegister? customer.facilityData.commericalRegister : "",
  expiryDate: customer.facilityData.expiryDate? moment(customer.facilityData.expiryDate).subtract(1, 'months') : null,
  signatories: customer.facilityData.signatories? customer.facilityData.signatories : null,
  humanPartners: customer.facilityData.humanPartners? customer.facilityData.humanPartners : null,
  branches: customer.facilityData.branches? customer.facilityData.branches : [],
  establishmentPartners: customer.facilityData.establishmentPartners? customer.facilityData.establishmentPartners : [],
  facilityNo: customer.facilityData.facilityNo? customer.facilityData.facilityNo : "",
  facilityName: customer.facilityData.facilityName? customer.facilityData.facilityName : "",
  postalBox: customer.facilityData.postalBox? customer.facilityData.postalBox : "",
  telephone: customer.facilityData.telephone? customer.facilityData.telephone : ""
});


    this.procurationCustomer.controls.procuration.patchValue({
      id: customer.procuration.id? customer.procuration.id : null,
      repProcurationSerial: customer.procuration.repProcurationSerial? customer.procuration.repProcurationSerial : 0,
      repProcurationYear: customer.procuration.repProcurationYear? customer.procuration.repProcurationYear : "",
      issuer: customer.procuration.issuer? customer.procuration.issuer : 0,
      procurationType: 'true',
      repName: 'name1',
      procurationNote: customer.procuration.procurationNote? customer.procuration.procurationNote : " ",
      repOrganizationUnitId: 1,
      parentProcurationSerial: null,
      manualFlag: customer.procuration.manualFlag
})
if (customer.facilityData.commericalRegister) {
  this.getCommercials();
}
  };


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
  };
  onChangesExpiryDate = (event: any) => {
    this.expiryDate = this.dateToObject(event);
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
  };

 set customerType (type) {
    this.requestCustomerType = type;
  }
  getCommercials = () => {
    this.changeValueDataType('facilityData', 'commericalRegister');
    if (!this.mociData) {
    if (environment.production) {
      this.customerService.getMociData(this.procurationCustomer.controls.facilityData.get('commericalRegister').value).subscribe(res => {
        this.mociData = res.data;
        this.procurationCustomer.controls.facilityData.get('facilityName').patchValue(this.mociData.companySummary.company.arabicName);
        this.procurationCustomer.controls.facilityData.get('expiryDate').patchValue(moment(new Date(this.mociData.companySummary.company.expiryDate)).format('YYYY-MM-DD'));
        if (!this.mociData.companySummary?.company?.arabicName) {
          this.procurationCustomer.controls.facilityData.get('facilityName').enable()
        } else {
          this.procurationCustomer.controls.facilityData.get('facilityName').disable()
        }
      });
    } else {
    this.mociData = this.customerService.getMociDataMocaup(this.procurationCustomer.controls.facilityData.get('commericalRegister').value);
      this.procurationCustomer.controls.facilityData.get('facilityName').patchValue(this.mociData.data.companySummary.company.arabicName);
      this.procurationCustomer.controls.facilityData.get('expiryDate').patchValue(moment(new Date(this.mociData.data.companySummary.company.expiryDate)).format('YYYY-MM-DD'));
    }

    }
  };

 commercialsValidations = () => {
   this.isCommercialValid = true;
if (this.mociData) {
  if (this.procurationCustomer.controls.facilityData.get('expiryDate').value < moment(new Date()).format('YYYY-MM-DD')) {
    this.messageService.errorMessage(` السجل التجاري رقم${this.procurationCustomer.controls.facilityData.get('commericalRegister').value} الخاص ب ${this.procurationCustomer.controls.facilityData.get('facilityName')} منتهي الصلاحية بتاريخ ${this.procurationCustomer.controls.facilityData.get('expiryDate').value}`)
    this.isCommercialValid = false;
  } else if(this.procurationCustomer.controls.customer.get('customerCategory').value == 6) {
   const theOwners = this.mociData.companySummary.investors.filter( (e) => e.designation.code == 'OWNER' && e.person.civilId == this.procurationCustomer.controls.customer.get('customerCivilId').value );
   if (theOwners.length == 0 && this.procurationCustomer.controls.customer.get('customerCivilId').value) {
     this.messageService.errorMessage(` الرقم المدني${this.procurationCustomer.controls.customer.get('customerCivilId').value} غير مسجل كمالك في السجل التجاري الخاص ب ${this.procurationCustomer.controls.facilityData.get('facilityName').value}`);
     this.isCommercialValid = false;
   }

  } else if(this.procurationCustomer.controls.customer.get('customerCategory').value == 55) {
    const thePartners = this.mociData.companySummary.investors.filter( (e) =>  e.designation.code == 'LL_PARTNER' && e.person.civilId == this.procurationCustomer.controls.customer.get('customerCivilId').value );
    if (thePartners.length == 0 && this.procurationCustomer.controls.customer.get('customerCivilId').value) {
      this.messageService.errorMessage(` الرقم المدني${this.procurationCustomer.controls.customer.get('customerCivilId').value} غير مسجل كشريك مفوض في السجل التجاري الخاص ب ${this.procurationCustomer.controls.facilityData.get('facilityName').value}`);
      this.isCommercialValid = false;
    }
  } else if(this.procurationCustomer.controls.customer.get('customerCategory').value == 64) {
    const thePartners = this.mociData.companySummary.signatories.filter( (e) => e.civilId == this.procurationCustomer.controls.customer.get('customerCivilId').value );
    if (thePartners.length == 0 && this.procurationCustomer.controls.customer.get('customerCivilId').value) {
      this.messageService.errorMessage(` الرقم المدني${this.procurationCustomer.controls.customer.get('customerCivilId').value} غير مسجل كمدير مفوض في السجل التجاري الخاص ب ${this.procurationCustomer.controls.facilityData.get('facilityName').value}`);
      this.isCommercialValid = false;
    }
  }
}
 };
  changeValueDataType = (FPath,SPath) => {
    const control = this.procurationCustomer.get(`${FPath}`).get(`${SPath}`);
    control.valueChanges.pipe(distinct()).subscribe(res => {
      control.setValue(`${res}`);
    });
};
  openCommercialDialog = () => {
    const dialogRef = this.dialog.open(CommericalComponent, {
      width: '200vh',
      height: '80%',
      data:  this.mociData
    });

    dialogRef.afterClosed().subscribe(() => {
    });
  };
  onChangesBirthDate = (event: any) => {
    this.birthDate = this.dateToObject(event);
  };
  onGetBirthDateFromROP = (date: string): any => {
    let d: any = date.split('-');
    d = {day: d[0], month: d[1], year: d[2]};
    return d;
  };
  onChangesEmbassyDate = (event: any) => {
    this.embassyDate = this.dateToObject(event);
  };
  onChangesCompanyExpiryDate = (event: any) => {
    this.companyExpiryDate = this.dateToObject(event);
  };
  onChangesWidowingDate = (event: any) => {
    this.widowingDate = this.dateToObject(event);
  };
  getFormControlCustomerValue = (control) => {
    return this.procurationCustomer.controls.customer.value[`${control}`];
  };
  getFormControlCustomer = (control) => {
    return this.procurationCustomer.controls.customer.get(`${control}`);
  };
  getFormControlFacilityData = (control) => {
    return this.procurationCustomer.controls.facilityData.get(`${control}`);
  };
  getFormControlProcurationValue = (control) => {
    return this.procurationCustomer.controls.procuration.value[`${control}`];
  };
  getFormControlProcuration = (control) => {
    return this.procurationCustomer.controls.procuration.get(`${control}`);
  };
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
    this.fetchedCustomer = '';
    this.mociData = '';
  };
  openLawersDialog(): void {
    const dialogRef = this.dialog.open(LawyersModalComponent, {
      width: '250vh'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.length > 0) {
        const api = [];
        this.customers$.subscribe(res => {
          res.forEach((ele) => {
          //  this.deleteProcurationCustomer()
             api.push(this.customerService.deleteCustomer({"success":true,"status":null,"data":{"id":ele.customer.id}}));
          });
        }).unsubscribe();
        zip(...api).subscribe(() => {
          this.store.dispatch(clearCustomers());

          result.forEach((e) => {
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

       });



      }
    });
  }
  getDisplayFn(office): string {
    return office && office.InstitutionName ? office.InstitutionName : '';
  }

  isPOA = (): boolean => {
   return this.router.url.includes('POA');
  }
drawCommercialHumanParteners = (partners: any[]) => {
  return partners.map(e => ({
        humanName: e.person.arabicName,
        nationality: e.person.nationality.code,
        nIn: e.person?.civilId ? e.person?.civilId : e.person?.passport.number,
        nInTypeCode: e.person?.civilId ? '1' : '2',
        nInTypeDesc: e.person?.civilId ? 'OID' : 'PASSPORT',
        partnerTypeCode: e.designation.code,
        partnerTypeDesc: e.designation.arabicName,
        percentage: e.numberOfShares,
    }));
};

  drawCommercialSignatures = (partners: any[]) => {
    return  partners.map(e => ({
      nationality: e.nationality.code,
      nIn: e?.civilId,
      nInTypeCode: e?.civilId ? '1' : '2',
      nInTypeDesc: e?.civilId ? 'OID' : 'PASSPORT',
      partnerTypeCode: '1',
      partnerTypeDesc: 'SIGNATORY',
      signatorieName: e.arabicName,
    }));
  };
  dateToObject = (event) => {
    let i = [];
    if (typeof event === 'string') {
      i =  event.split('-');
      return {
        day: `${i[2]}`,
        month: `${i[1]}`,
        year: `${i[0]}`
      };
    } else {
      return {
        day: `${event.value?._i.date ? event.value._i.date : event._i.day}`,
        month: `${event.value?._i.month + 1 ? event.value._i.month + 1 : event._i.month}`,
        year: `${event.value?._i.year ? event.value?._i.year : event._i.year}`
      };
    }
  };

}
