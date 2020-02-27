import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromRequest from '../parties/party/store/request/reducers/request.reducer';
import {InjectionToken} from '@angular/core';
import * as fromCustomer from '../parties/party/store/customer/reducers/customer.reducer';
import * as fromCompleteRequest from '../components/complete-request/store/reducers/complete-request.reducer';

export const commonFeatureKey = 'common';

export interface State {
  [fromRequest.requestFeatureKey]: fromRequest.State;
  [fromCustomer.customerFeatureKey]: fromCustomer.State;  [fromCompleteRequest.completeRequestFeatureKey]: fromCompleteRequest.State;

}

export const reducers: ActionReducerMap<State> = {
  [fromRequest.requestFeatureKey]: fromRequest.reducer,
  [fromCustomer.customerFeatureKey]: fromCustomer.reducer,
  [fromCompleteRequest.completeRequestFeatureKey]: fromCompleteRequest.reducer,
};

export const REDUCERS_TOKEN = new InjectionToken<ActionReducerMap<State>>('common Reducers');
export const reducerProvider = { provide: REDUCERS_TOKEN, useValue: reducers };
export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
