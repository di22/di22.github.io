import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  private subject = new BehaviorSubject<any>('');
  item$: Observable<any> = this.subject.asObservable();
  columns = [];
  displayedColumns = [];
  constructor() { }

  getBasicDataTable = () => {
    this.columns = [
      { columnDef: 'position', header: 'No.',    cell: (element: any) => `` },
      // tslint:disable-next-line:max-line-length
      { columnDef: 'customerIdType',     header: 'نوع الوثيقه',   cell: (element: any) => element.customer.customerIDType?
          `${element.customer.customerIDType.description}` : ''},
      { columnDef: 'civilId',   header: 'الرقم المدني', cell: (element: any) => `${element.customer.customerCivilId}`},
      { columnDef: 'nationality',   header: 'الجنسية', cell: (element: any) =>  element.customer.nationality ?
          `${element.customer.nationality.description}` : ''},
      { columnDef: 'name',   header: 'الاسم', cell: (element: any) => `${element.customer.customerName}`},
      { columnDef: 'requestCustomerType',   header: 'الصفه', cell: (element: any) => `${element.customer.customerCategory.description}`},
      { columnDef: 'mobileNumber',   header: 'رقم النقال', cell: (element: any) => element.customer.mobileNo ? `${element.customer.mobileNo}` : ''},
      { columnDef: 'moql-qaser-mfwad',   header: 'موكل/قاصر/مفوض ', cell: (element: any) => ``},
      { columnDef: 'check',   header: 'تحقق', cell: (element: any) => ``},
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
      { columnDef: 'check',   header: 'تحقق', cell: (element: any) => ``   },
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
  get tableColumns() {
    return this.columns;
}
get displayColumns() {
    return this.displayedColumns;
}
}
