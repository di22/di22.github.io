import { Action, createReducer, on } from '@ngrx/store';
import * as CustomerActions from '../actions/customer.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

export const customerFeatureKey = 'customer';

export interface Customer {
  id: number;
}

export interface State extends EntityState<Customer> {
  selectedCustomerId: number;
  ROPCustomer: any;
  error: any;
}

export const adapter: EntityAdapter<Customer> = createEntityAdapter<Customer>({
  selectId: model => model.id
});

export const initialState: State = adapter.getInitialState({
  selectedCustomerId: null,
  ROPCustomer: {},
  error: null
});



const customerReducer = createReducer(
  initialState,

  on(CustomerActions.createCustomerSuccess, (state, action) => adapter.addOne(action.customer, state)),
  on(CustomerActions.updateCustomerSuccess, (state, action) => adapter.upsertOne(action.customer, state)),
  on(CustomerActions.deleteCustomerSuccess, (state, action) => adapter.removeOne(action.id, state)),
  on(CustomerActions.loadCustomersSuccess, (state, action) => adapter.addAll(action.customers, state)),
   on(CustomerActions.getROPCustomerSuccess, (state, action) => ({state, error: null,
     ids: state.ids, entities: state.entities, ROPCustomer: action.customer, selectedCustomerId: state.selectedCustomerId}))
  // on(CustomerActions.loadCustomersFailure, (state, action) => ({state, error: action.error, ids: state.ids, entities: state.entities}))
  // tslint:disable-next-line:max-line-length
 // on(CustomerActions.loadCustomersFailure, (state, action) => adapter.({state, error: action.error, customers: state.customers, customer: {}, customerId: null})),

);

export function reducer(state: State | undefined, action: Action) {
  return customerReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
