import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonService} from '../../services/config/common.service';
import {Observable} from 'rxjs';
import {Mo7rrModalComponent} from '../../modal/mo7rr-modal/mo7rr-modal.component';
import {DomSanitizer} from '@angular/platform-browser';
import {MatDialog} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class PDFService {

  URL: string;
  constructor(private http: HttpClient,
              private commonService: CommonService,
              private domSanitizer: DomSanitizer,
              private dialog: MatDialog) {
    this.URL = this.commonService.getURL('moj.om.report').substr(0, this.commonService.getURL('moj.om.report').length - 1);
  }

  mo7rrView = (params) => {
     this.http.get(`${this.URL}`, {responseType: 'arraybuffer', params}).subscribe(res => {

       const file = new Blob([res], {type: 'application/pdf'});
       const dataLocalUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(file));
       const dialogRef = this.dialog.open(Mo7rrModalComponent, {
         width: '830px',
         data: {pdf: dataLocalUrl}
       });

       dialogRef.afterClosed().subscribe(result => {
       });
     });
  }
}
