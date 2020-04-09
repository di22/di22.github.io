import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private router: Router) { }
  route = (requestType, requestId) => {
    switch (requestType) {
      case 'POA_PURCHASE_SALE_LAND':
        this.router.navigate([`/notary/Agencies/RealEstates/${requestType}`, requestId]);
        break;
      case 'POA_PURCHASE_SALE_MULTI_LANDS':
        this.router.navigate([`/notary/Agencies/RealEstates/${requestType}`, requestId]);
        break;
        case 'POA_FOR_RELATIVES':
        this.router.navigate([`/notary/Agencies/litigation/${requestType}`, requestId]);
        break;
        case 'POA_LAWYER':
        this.router.navigate([`/notary/Agencies/litigation/${requestType}`, requestId]);
        break;
        case 'DEBIT_ENDORSEMENT':
        this.router.navigate([`/notary/acknowledgments-undertakings/acknowledgments/${requestType}`, requestId]);
        break;
    }
  }
}
