import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonService} from '../../services/config/common.service';
import {AttachmentsModalComponent} from '../../modal/attachments-modal/attachments-modal.component';
import {DomSanitizer} from '@angular/platform-browser';
import {MatDialog} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class AttachmentsService {

  URL: string;
  imageURL: string;
  constructor(private http: HttpClient,
              private commonService: CommonService,
              private domSanitizer: DomSanitizer,
              private dialog: MatDialog) {
    this.URL = this.commonService.getURL('moj.om.report').substr(0, this.commonService.getURL('moj.om.report').length - 1);
    this.imageURL = this.commonService.getURL('request')+'download-file.do';
  }

  mo7rrView = (params) => {
     this.http.get(`${this.URL}`, {responseType: 'arraybuffer', params}).subscribe(res => {

       const file = new Blob([res], {type: 'application/pdf'});
       const dataLocalUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(file));
       const dialogRef = this.dialog.open(AttachmentsModalComponent, {
         width: '830px',
         data: {pdf: dataLocalUrl}
       });

       dialogRef.afterClosed().subscribe(result => {
       });
     });
  }

  imageView = (params) => {
     this.http.get(this.imageURL, {responseType: 'blob', params}).subscribe((res: any) => {

       let image;
       let reader = new FileReader();
       reader.addEventListener("load", () => {
         image = reader.result;
         const dataLocalUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(image);
         const dialogRef = this.dialog.open(AttachmentsModalComponent, {
           width: '830px',
           data: {image: dataLocalUrl}
         });

         dialogRef.afterClosed().subscribe(result => {
         });
       }, false);

       if (res) {
         reader.readAsDataURL(res);
       }

     });
  }
}
