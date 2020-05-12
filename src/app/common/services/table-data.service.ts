import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  columns = [];
  displayedColumns = [];
  constructor() { }

  getBasicDataTable = () => {
    this.columns = [
      { columnDef: 'position', header: 'No.',    cell: (element: any) => `` },
      // tslint:disable-next-line:max-line-length
      { columnDef: 'customerIdType',     header: 'نوع الوثيقه',   cell: (element: any) => element.customer.customerIDType ?
          `${element.customer.customerIDType.description}` : ''},
      { columnDef: 'civilId',   header: 'الرقم المدني', cell: (element: any) => `${element.customer.customerCivilId}`},
      { columnDef: 'nationality',   header: 'الجنسية', cell: (element: any) =>  element.customer.nationality ?
          `${element.customer.nationality.description}` : ''},
      { columnDef: 'name',   header: 'الاسم', cell: (element: any) => `${element.customer.customerName}`},
      { columnDef: 'requestCustomerType',   header: 'الصفه', cell: (element: any) => `${element.customer.customerCategory.description}`},
      { columnDef: 'mobileNumber',   header: 'رقم النقال', cell: (element: any) => element.customer.mobileNo ? `${element.customer.mobileNo}` : ''},
      { columnDef: 'moql-qaser-mfwad',   header: 'موكل/قاصر/مفوض ', cell: (element: any) => ``},
      { columnDef: 'edit-delete',   header: 'تعديل/حذف', cell: (element: any) => ``}
    ];
    this.displayedColumns = this.columns.map(c => c.columnDef);
  }

  getLawerDataTable = () => {
    this.columns = [
      { columnDef: 'position', header: 'No.',    cell: (element: any) => `` },
      // tslint:disable-next-line:max-line-length
      { columnDef: 'customerIdType',     header: 'نوع الوثيقه',   cell: (element: any) => `${element.customer.customerIDType.description}`},
      { columnDef: 'civilId',   header: 'الرقم المدني', cell: (element: any) => `${element.customer.customerCivilId}`},
      { columnDef: 'nationality',   header: 'الجنسية', cell: (element: any) => `${element.customer.nationality.description}`},
      { columnDef: 'name',   header: 'الاسم', cell: (element: any) => `${element.customer.customerName}`},
      { columnDef: 'requestCustomerType',   header: 'الصفه', cell: (element: any) => `${element.requestCustomerType.description}`},
      { columnDef: 'mobileNumber',   header: 'رقم النقال', cell: (element: any) => element.customer.mobileNo !== null ? `${element.customer.mobileNo}` : ''},
      { columnDef: 'registration-number',   header: 'رقم القيد', cell: (element: any) => `${element.customer.professionId}`},
      { columnDef: 'class',   header: 'الدرجة', cell: (element: any) => `${element.customer.address}`},
      { columnDef: 'law-office',   header: 'مكتب المحاماة', cell: (element: any) => `${element.facilityData.facilityName}`},
      { columnDef: 'moql-qaser-mfwad',   header: 'موكل/قاصر/مفوض ', cell: (element: any) => ``   },
      { columnDef: 'edit-delete',   header: 'تعديل/حذف', cell: (element: any) => ``   }
    ];
    this.displayedColumns = this.columns.map(c => c.columnDef);
  }

  getLawersDataTableModal = () => {
    this.columns = [
      { columnDef: 'select', header: 'إختر', cell: (element: any) => `` },
      { columnDef: 'position', header: 'No.', cell: (element: any) => `` },
      { columnDef: 'customerIdType',     header: 'نوع الوثيقه',   cell: (element: any) => `الرقم المدني`},
      { columnDef: 'civilId',   header: 'الرقم المدني', cell: (element: any) => `${element.CustomerCivilId}`},
      { columnDef: 'name',   header: 'الاسم', cell: (element: any) => `${element.CustomerName}`},
      { columnDef: 'registration-number',   header: 'رقم القيد', cell: (element: any) => `${element.LawyerId ? element.LawyerId : ''}`},
      { columnDef: 'class',   header: 'الدرجة', cell: (element: any) => `${element.GadwalDesc ? element.GadwalDesc : ''}`},
    ];
    this.displayedColumns = this.columns.map(c => c.columnDef);
  }
  getCommercialInvestorsModal = () => {
    this.columns = [
      { columnDef: 'position', header: 'No.', cell: (element: any) => `` },
      { columnDef: 'name', header: 'الاسم',   cell: (element: any) => element.person.civilId},
      { columnDef: 'nationality', header: 'الجنسية',   cell: (element: any) => element.person.nationality.arabicName},
      { columnDef: 'civilId', header: 'الرقم المدني', cell: (element: any) => `${element.person.civilId}`},
      { columnDef: 'partnershipRatio', header: 'نسبة الشراكة', cell: (element: any) => `${element.numberOfShares}`},
      { columnDef: 'partnershipType', header: 'نوع الشراكة', cell: (element: any) => `${element.designation.arabicName}`}
    ];
    this.displayedColumns = this.columns.map(c => c.columnDef);
  }
  getCommercialSignatoriesModal = () => {
    this.columns = [
      { columnDef: 'position', header: 'No.', cell: (element: any) => `` },
      { columnDef: 'name', header: 'الاسم',   cell: (element: any) => element.arabicName},
      { columnDef: 'nationality', header: 'الجنسية',   cell: (element: any) => element.nationality.arabicName},
      { columnDef: 'civilId', header: 'الرقم المدني', cell: (element: any) => `${element.civilId ? element.civilId : element.passport.number}`}
    ];
    this.displayedColumns = this.columns.map(c => c.columnDef);
  }
  getCommercialBranchesModal = () => {
    this.columns = [
      { columnDef: 'position', header: 'No.', cell: (element: any) => `` },
      { columnDef: 'address', header: 'عنوان الفرع',   cell: (element: any) => element.address.town.arabicName},
      { columnDef: 'poaCode', header: 'الرقم المسلسل',   cell: (element: any) => element.poaCode}
    ];
    this.displayedColumns = this.columns.map(c => c.columnDef);
  }

  getMyRequestsTable = () => {
    this.columns = [
      { columnDef: 'position', header: 'No.',    cell: (element: any) => `` },
      // tslint:disable-next-line:max-line-length
      { columnDef: 'requestId',     header: 'رقم الطلب',   cell: (element: any) => element.id},
      { columnDef: 'requestDate',   header: 'تاريخ الطلب', cell: (element: any) => `${element.requestDate.day}/${element.requestDate.month}/${element.requestDate.year}`},
      { columnDef: 'requestStatus',   header: 'حالة الطلب', cell: (element: any) =>
          element.requestStatusHistory.requestStatus.description},
      { columnDef: 'requestType',   header: 'نوع الطلب', cell: (element: any) => `${element.transactionType.description}`},
      { columnDef: 'requester',   header: 'الموثق', cell: (element: any) => `${element.requesterUser.customerName}`},
      { columnDef: 'complete-request',   header: 'إستكمال الطلب', cell: (element: any) => `إستكمال الطلب`}
    ];
    this.displayedColumns = this.columns.map(c => c.columnDef);
  }
  getFeesTableModal = () => {
    this.columns = [
      { columnDef: 'position', header: 'No.', cell: (element: any) => `` },
      { columnDef: 'feesType',     header: 'نوع الرسم',   cell: (element: any) => element.feesType},
      { columnDef: 'value',   header: 'القيمة', cell: (element: any) => `${element.value}`},
      { columnDef: 'count',   header: 'العدد', cell: (element: any) => `${element.count}`},
      { columnDef: 'total',   header: 'الإجمالي', cell: (element: any) => `${element.total}`}
    ];
    this.displayedColumns = this.columns.map(c => c.columnDef);
  }
  ///////////////////////////////////
  getFeesSettingTable = () => {
    this.columns = [
      { columnDef: 'position', header: 'الجهة',    cell: (element: any) => `` },
      // tslint:disable-next-line:max-line-length
      { columnDef: 'requestId',     header: 'رقم الطلب',   cell: (element: any) =>element.id},
      { columnDef: 'requestType',   header: 'نوع الطلب', cell: (element: any) =>element.description},
      { columnDef: 'partiesFeesValue',   header: 'قيمة رسوم الاطراف', cell: (element: any) =>element.partyFees},
      { columnDef: 'copyFeesValue',   header: 'قيمة رسوم النسخ', cell: (element: any) => element.copyFees},
      { columnDef: 'requestFeesValue',   header: 'قيمة رسوم الطلب', cell: (element: any) => element.categoryFees},
      { columnDef: 'EditFee', header: '#',    cell: (element: any) => `` },
      { columnDef: 'deleteFee', header: '#',    cell: (element: any) => `` },
    ];
    this.displayedColumns = this.columns.map(c => c.columnDef);
  }


  ///////////////////////////////////
  get tableColumns() {
    return this.columns;
}
get displayColumns() {
    return this.displayedColumns;
}
}
