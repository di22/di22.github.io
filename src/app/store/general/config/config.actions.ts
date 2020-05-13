import { createAction, props } from '@ngrx/store';

export const SetRelative = createAction(
  '[Config] Set Relative',
  props<{ relative: any }>()
);

export const SetTransaction = createAction(
  '[Config] Set Transaction',
  props<{ transaction: any }>()
);

export const SetExpiryDate = createAction(
  '[config/API] Set Expiry Date',
  props<{ date: any }>()
);

export const SetTransactionId = createAction(
  '[config/API] Set Transaction ID',
  props<{ Id: any }>()
);

export const SetRequester = createAction(
  '[config/API] Set Requester',
  props<{requester: boolean}>()
);

export const ResetConfig = createAction(
  '[config/API] Reset Config'
);
