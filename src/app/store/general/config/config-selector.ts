import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromConfig from './config.reducer';

export const selectConfigState = createFeatureSelector<fromConfig.State>(
  fromConfig.configKey
);

export const selectRelative = createSelector(
  selectConfigState,
  (state: fromConfig.State) => state.relative
);

export const selectTransaction = createSelector(
  selectConfigState,
  (state: fromConfig.State) => state.transaction
);

export const selectExpiryDate = createSelector(
  selectConfigState,
  (state: fromConfig.State) => state.expiryDate
);

export const selectTransactionId = createSelector(
  selectConfigState,
  (state: fromConfig.State) => state.transactionID
);
