import { Injectable } from '@angular/core';
import {of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CommonService} from './config/common.service';

@Injectable({
  providedIn: 'root'
})
export class AdminDebagaService {

  URL: string;
  debagaURL: string;
  constructor(private http: HttpClient,
              private commonService: CommonService) {
    this.URL = this.commonService.getURL('transaction');
    this.debagaURL = this.commonService.getURL('debagaadmin');
  }

  getTransactionDebagaTemplates = (object) => {
    return this.http.post(`${this.URL}get-transaction-debaga-templates.do`, object);
  }

  addDebaga = (object) => {
    return this.http.post(`${this.debagaURL}add-debaga.do`, object);
  }
  updateDebaga = (object) => {
    return this.http.post(`${this.debagaURL}update-debaga.do`, object);
  }
  deleteDebaga = (object) => {
    return this.http.post(`${this.debagaURL}delete-debaga.do`, object);
  }
  getHtmlComponents = () => {
    return of([
        { id: 7, ar: 'بند رئيسي', en: 'GRID' },
        { id: 6, ar: 'قائمة منسدلة', en: 'DROPDOWNLIST' },
        { id: 9, ar: 'قائمة منسدلة متعددة', en: 'MULTIDROPDOWNLIST' },
        { id: 10, ar: 'جدول', en: 'TABLEDATA' },
        { id: 3, ar: 'ملصق', en: 'LABEL' },
        { id: 4, ar: 'نص', en: 'TEXT' },
        { id: 1, ar: 'زر الراديو', en: 'RADIOBUTTON' },
        { id: 2, ar: 'زر تحقق', en: 'CHECKBOX' },
        { id: 5, ar: 'نص كبير', en: 'TEXTAREA' }
    ]);
  }

  getFiledsTypes = () => {
    return of([
      { id: 1, ar: 'أبجدي', en: 'ALPHANUMERIC' },
      { id: 2, ar: 'نقدي', en: 'MONEY' },
      { id: 3, ar: 'تاريخ', en: 'DATE' },
      { id: 4, ar: 'مميز', en: 'SPECIAL' },
      { id: 5, ar: 'أحرف', en: 'CHAR' },
      { id: 6, ar: 'أرقام', en: 'DIGIT' }
    ]);
  }

  getDateTypes = () => {
    return of([
      { id: 1, ar: 'غير محدد', en: 'DATENOTHING' },
      { id: 2, ar: 'أقل من تاريخ اليوم', en: 'DATE_BEFORE_TODAY' },
      { id: 3, ar: 'أقل من أو يساوي تاريخ اليوم', en: 'DATE_BEFORE_OR_EQUAL_TODAY' },
      { id: 4, ar: 'أكبر من تاريخ اليوم', en: 'DATE_AFTER_TODAY' },
      { id: 5, ar: 'أكبر من أو يساوي تاريخ اليوم', en: 'DATE_AFTER_OR_EQUAL_TODAY' }
    ]);
  }
}
