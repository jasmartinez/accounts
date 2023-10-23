import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ACCOUNTS_EXCHANGE_RATE, ACCOUNTS_FEATURE, AccountsState } from '..';

export const selectAccountsState =
  createFeatureSelector<AccountsState>(ACCOUNTS_FEATURE);
export const selectAccountExchangeRateState = createSelector(
  selectAccountsState,
  (state) => state[ACCOUNTS_EXCHANGE_RATE]
);
export const selectAccountExchangeRate = createSelector(
  selectAccountExchangeRateState,
  (state) => state.rate
);

export const selectAccountExchangeRateLoaded = createSelector(
  selectAccountExchangeRateState,
  (state) => state.loaded
);

export const selectAccountExchangeRateLoading= createSelector(
  selectAccountExchangeRateState,
  (state) => state.loading
);
