import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { TypeFess } from '../DTO`s/type-fess';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PaymentFeesService {

  constructor(private http:HttpClient) { }

  getAllCategories():Observable<TypeFess[]>
  {
    return this.http.get<TypeFess[]>(environment.apiURL+'sak2/paymentfees/get-all.do')
  }
}
