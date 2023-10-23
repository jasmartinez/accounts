import { InjectionToken, Provider } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import {
  AccountsListState,
  getAccountsListReducerFn,
} from './list/accounts-list.reducer';
import {
  AccountDetailsState,
  getAccountDetailsReducerFn,
} from './detail/accounts-detail.reducer';
import { AccountsExchangeRateState, getAccountExchangeRateReducerFn } from './exchange-rate/accounts-exchange-rate.reducer';

export const ACCOUNTS_FEATURE = 'accounts';
export const ACCOUNTS_LIST = 'list';
export const ACCOUNT_DETAILS = 'details';
export const ACCOUNTS_EXCHANGE_RATE = 'exchange-rate';

export interface AccountsState {
  [ACCOUNTS_LIST]: AccountsListState;
  [ACCOUNT_DETAILS]: AccountDetailsState;
  [ACCOUNTS_EXCHANGE_RATE]: AccountsExchangeRateState;
}

export const ACCOUNTS_FEATURE_TOKEN = new InjectionToken<
  ActionReducerMap<AccountsState>
>('Accounts Token');
export const getAccountsReducers = () => ({
  [ACCOUNTS_LIST]: getAccountsListReducerFn,
  [ACCOUNT_DETAILS]: getAccountDetailsReducerFn,
  [ACCOUNTS_EXCHANGE_RATE]: getAccountExchangeRateReducerFn
});

export const ACCOUNTS_STATE_PROVIDER: Provider = {
  provide: ACCOUNTS_FEATURE_TOKEN,
  useFactory: getAccountsReducers,
};
