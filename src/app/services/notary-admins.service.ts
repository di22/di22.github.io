import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CommonService} from './config/common.service';
import {AdminTypes} from '../DTO`s/admin-types';

@Injectable({
  providedIn: 'root'
})

export class NotaryAdminsService {

  URL: string;

  constructor(private http: HttpClient,
              private commonService: CommonService) {
    this.URL = this.commonService.getNotaryURL();
  }

  getNotaryAdmins = () => {
    const params = new HttpParams()
        .set('limit', '999999999')
        .set('onlyData', 'true');

    return this.http.get<AdminTypes[] | any>(`${this.URL}rest/1/notaryAdmins`, {params});
  }  

}
