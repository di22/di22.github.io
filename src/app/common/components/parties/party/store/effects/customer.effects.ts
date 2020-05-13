import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, map, concatMap, tap} from 'rxjs/operators';
import { of } from 'rxjs';

import * as CustomerActions from '../actions/customer.actions';
import {CustomerService} from '../../../../../services/customer.service';
import {MessageService} from '../../../../../../services/config/message.service';
import * as RequestActions from '../../../../request/store/actions/request.actions';



@Injectable()
export class CustomerEffects {

  getROPCustomer$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CustomerActions.getROPCustomer),
      concatMap((action) =>
        this.customerService.getCustomerFromROP(action.data).pipe(
          map(customer => CustomerActions.getROPCustomerSuccess({customer: customer.items[0]})),
          catchError(error => of(CustomerActions.loadCustomersFailure({ error }))))
      )
    );
  });

  createCustomer$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CustomerActions.createCustomer),
      concatMap((action: any) =>
        this.customerService.createCustomer({data: {procurationCustomer: action.customer}}).pipe(
          map(data => RequestActions.GetRequestDetails({requestId: action.customer.request.id})),
          tap( customers => this.messageService.successMessage('تم إضافة الطرف بنجاح')),
          catchError(error => of(CustomerActions.loadCustomersFailure({ error }))))
      )
    );
  });


  updateCustomer$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CustomerActions.updateCustomer),
      concatMap((action: any) =>
        this.customerService.updateCustomer({data: {procurationCustomer: action.customer}}).pipe(
          map(data => RequestActions.GetRequestDetails({requestId: action.customer.request.id})),
          tap( customers => this.messageService.successMessage('تم تعديل الطرف بنجاح')),
          catchError(error => of(CustomerActions.loadCustomersFailure({ error }))))
      )
    );
  });


  deleteCustomer$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CustomerActions.deleteCustomer),
      concatMap((action) =>
        this.customerService.deleteCustomer(action.id).pipe(
          map(customers => CustomerActions.deleteCustomerSuccess({id: action.entityId})),
          tap( customers => this.messageService.successMessage('تم حذف الطرف بنجاح')),
          catchError(error => of(CustomerActions.loadCustomersFailure({ error }))))
      )
    );
  });

  constructor(private actions$: Actions,
              private customerService: CustomerService,
              private messageService: MessageService) {}

}
