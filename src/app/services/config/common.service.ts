import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {AdminTypes} from '../../DTO`s/admin-types';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
 URL_LOCATION: string;
 notaryURL: string;
  constructor() { }

  getURL(url) {
   return this.URL_LOCATION = `${environment.apiURL}sak2/${url}/`;
  }
  getNotaryURL = () => {
    this.notaryURL = `${environment.apiURL}notary/`;
    return this.notaryURL;
}
}
