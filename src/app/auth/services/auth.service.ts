import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {CommonService} from '../../services/config/common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL: string;

  constructor(private http: HttpClient,
              private commonService: CommonService) {
    this.URL =  this.commonService.getURL('auth');
  }
  logIn(userName: string, password: string) {
    let headers = new HttpHeaders();
    headers = headers.append('X-User-Name', userName);
    headers = headers.append('X-Password',  password);
    return this.http.get(`${this.URL}login.do`, { headers })
      .pipe(tap<any>(user => {
        return user;
      }));
  }
  getToken = () => {
   return sessionStorage.getItem('token');
  }
  getUserFromSession = () => {
    return JSON.parse(sessionStorage.getItem('user'));
  }
}
