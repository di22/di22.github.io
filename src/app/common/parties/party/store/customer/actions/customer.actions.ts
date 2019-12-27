import { createAction, props } from '@ngrx/store';
import {Customer} from '../reducers/customer.reducer';
import {Update} from '@ngrx/entity';

export const createCustomer = createAction(
  '[Customer] Create Customer',
  props<{customer: any, savedCustomer: any}>()
);

export const createCustomerSuccess = createAction(
  '[Customer] Create Customer Success',
  props<{customer: any}>()
);

export const upsertCustomer = createAction(
  '[Customer/API] Upsert Customer',
  props<{ customer: Customer }>()
);

export const addCustomers = createAction(
  '[Customer/API] Add Customers',
  props<{ customers: Customer[] }>()
);

export const upsertCustomers = createAction(
  '[Customer/API] Upsert Customers',
  props<{ customers: Customer[] }>()
);

export const updateCustomer = createAction(
  '[Customer/API] Update Customer',
  props<{ customer: any, savedCustomer: any }>()
);
export const updateCustomerSuccess = createAction(
  '[Customer/API] Update Customer Success',
  props<{ customer: Customer }>()
);

export const clearCustomers = createAction(
  '[Customer/API] Clear Customers'
);

export const deleteCustomer = createAction(
  '[Customer] Delete Customer',
  props<{id: any, entityId: number}>()
);
export const deleteCustomerSuccess = createAction(
  '[Customer] Delete Customer Success',
  props<{id: number}>()
);

export const loadCustomersSuccess = createAction(
  '[Customer] Load Customers Success',
  props<{ customers: Customer[] }>()
);

export const loadCustomersFailure = createAction(
  '[Customer] Load Customers Failure',
  props<{ error: any }>()
);
