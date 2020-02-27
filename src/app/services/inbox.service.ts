import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonService} from './config/common.service';
import {SearchInbox} from '../DTO`s/search-inbox';

@Injectable({
  providedIn: 'root'
})
export class InboxService {
URL: string;
  constructor(private http: HttpClient,
              private commonService: CommonService) {
   this.URL = this.commonService.getURL('request');
  }

  searchExternalDraftRequest = (searchObj: SearchInbox) => {
    return this.http.post(`${this.URL}search-external-draft-requests.do`, searchObj);
  }
  searchOSsDraftRequest = (searchObj: SearchInbox) => {
    return this.http.post(`${this.URL}search-oss-draft-requests.do`, searchObj);
  }
}
