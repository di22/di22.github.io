import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromAuth from '../auth/store/auth.reducer';
import * as fromMainCategories from './general/categories/main-categories.reducer';
import * as fromSideMenu from '../core/side-menu/store/side-menu.reducer';
import * as fromInbox from '../components/side-menu-pages/inbox/store/reducers/inbox.reducer';

import {InjectionToken} from '@angular/core';
import * as fromRequestStatuses from './general/lookups/request-status/reducers/request-status.reducer';
import * as fromRequestTypes from './general/lookups/request-types/reducers/request-type.reducer';
import * as fromEmployees from './general/lookups/employee/reducers/employees.reducer';
import * as fromNationalities from './general/lookups/nationalites/reducers/nationalites.reducer';
import * as fromGetRequestCustomerType from './general/lookups/request-custiomer-types/reducers/get-request-customer-type.reducer';
import * as fromCustomerIdType from './general/lookups/customer-id-types/reducers/custiomer-id-type.reducer';
import * as fromAdminType from './general/lookups/admin-types/reducers/admin-type.reducer';
import * as fromRequest from '../common/components/request/store/reducers/request.reducer';
import * as fromCustomer from '../common/components/parties/party/store/reducers/customer.reducer';
import * as fromDebaga from '../components/side-menu-pages/admin-debaga/store/reducers/debaga.reducer';
import * as fromRequestDebaga from '../common/components/debaga/store/reducers/request-debaga.reducer';
import * as fromRequestAttachments from './general/lookups/requestAttachments/reducers/request-attachments.reducer';
import * as fromTransactionRequestAttachment from '../common/components/request-attachment/store/reducers/transaction-request-attachment.reducer';
import * as fromRelatives from './general/lookups/relatives/reducers/relatives.reducer';
import * as fromLawOffice from './general/lookups/law-offices/reducers/law-office.reducer';
import * as fromExemptReason from './general/lookups/exemptReasons/reducers/exempt-reason.reducer';
import * as fromTransactionCustType from './general/lookups/transaction-cust-types/reducers/transaction-cust-type.reducer';
import * as fromUserOrg from './general/user-org-details/reducers/user-org.reducer';

export interface State {
  [fromAuth.authFeatureKey]: fromAuth.State;
  [fromMainCategories.mainCategoriesFeatureKey]: fromMainCategories.State;
  [fromSideMenu.sideMenuFeatureKey]: fromSideMenu.State;
  [fromInbox.inboxFeatureKey]: fromInbox.State;
  [fromRequestStatuses.requestStatusFeatureKey]: fromRequestStatuses.State;
  [fromRequestTypes.requestTypeFeatureKey]: fromRequestTypes.State;
  [fromEmployees.employeesFeatureKey]: fromEmployees.State;
  [fromNationalities.nationalitiesFeatureKey]: fromNationalities.State;
  [fromGetRequestCustomerType.getRequestCustomerTypeFeatureKey]: fromGetRequestCustomerType.State;
  [fromCustomerIdType.customerIdTypeFeatureKey]: fromCustomerIdType.State;
  [fromAdminType.adminTypeFeatureKey]: fromAdminType.State;
  [fromRequest.requestFeatureKey]: fromRequest.State;
  [fromCustomer.customerFeatureKey]: fromCustomer.State;
  [fromDebaga.debagasFeatureKey]: fromDebaga.State;
  [fromRequestDebaga.requestDebagaFeatureKey]: fromRequestDebaga.State;
  [fromRequestAttachments.requestAttachmentsFeatureKey]: fromRequestAttachments.State;
  [fromTransactionRequestAttachment.transactionRequestAttachmentsFeatureKey]: fromTransactionRequestAttachment.State;
  [fromRelatives.relativesFeatureKey]: fromRelatives.State;
  [fromLawOffice.lawOfficeFeatureKey]: fromLawOffice.State;
  [fromExemptReason.exemptReasonFeatureKey]: fromExemptReason.State;
  [fromTransactionCustType.transactionCustTypeFeatureKey]: fromTransactionCustType.State;
  [fromUserOrg.userOrgFeatureKey]: fromUserOrg.State;



}

export const reducers: ActionReducerMap<State> = {
  [fromAuth.authFeatureKey]: fromAuth.reducer,
  [fromMainCategories.mainCategoriesFeatureKey]: fromMainCategories.reducer,
  [fromSideMenu.sideMenuFeatureKey]: fromSideMenu.reducer,
  [fromInbox.inboxFeatureKey]: fromInbox.reducer,
  [fromRequestStatuses.requestStatusFeatureKey]: fromRequestStatuses.reducer,
  [fromRequestTypes.requestTypeFeatureKey]: fromRequestTypes.reducer,
  [fromEmployees.employeesFeatureKey]: fromEmployees.reducer,
  [fromNationalities.nationalitiesFeatureKey]: fromNationalities.reducer,
  [fromGetRequestCustomerType.getRequestCustomerTypeFeatureKey]: fromGetRequestCustomerType.reducer,
  [fromCustomerIdType.customerIdTypeFeatureKey]: fromCustomerIdType.reducer,
  [fromAdminType.adminTypeFeatureKey]: fromAdminType.reducer,
  [fromRequest.requestFeatureKey]: fromRequest.reducer,
  [fromCustomer.customerFeatureKey]: fromCustomer.reducer,
  [fromDebaga.debagasFeatureKey]: fromDebaga.reducer,
  [fromRequestDebaga.requestDebagaFeatureKey]: fromRequestDebaga.reducer,
  [fromRequestAttachments.requestAttachmentsFeatureKey]: fromRequestAttachments.reducer,
  [fromTransactionRequestAttachment.transactionRequestAttachmentsFeatureKey]: fromTransactionRequestAttachment.reducer,
  [fromRelatives.relativesFeatureKey]: fromRelatives.reducer,
  [fromLawOffice.lawOfficeFeatureKey]: fromLawOffice.reducer,
  [fromExemptReason.exemptReasonFeatureKey]: fromExemptReason.reducer,
  [fromTransactionCustType.transactionCustTypeFeatureKey]: fromTransactionCustType.reducer,
  [fromUserOrg.userOrgFeatureKey]: fromUserOrg.reducer
};

export const REDUCERS_TOKEN = new InjectionToken<ActionReducerMap<State>>('App Reducers');
export const reducerProvider = { provide: REDUCERS_TOKEN, useValue: reducers };
export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
