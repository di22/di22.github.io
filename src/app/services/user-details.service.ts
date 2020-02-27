import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonService} from './config/common.service';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  URL: string;
  constructor(private http: HttpClient,
              private commonService: CommonService) {
    this.URL =  this.commonService.getNotaryURL();
  }
  getUserDetails = (userId) => {
    return this.http.get<any>(`${this.URL}rest/1/user/${userId}?_=1581681831676`);
  }
}
