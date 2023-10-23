import { createReducer, on } from '@ngrx/store';
import * as AccountsExchangeRateActions from './accounts-exchange-rate.actions';

export type AccountsExchangeRateState = {
  loaded: boolean;
  loading: boolean;
  rate: number | null;
};

const initialState: AccountsExchangeRateState = {
  loaded: false,
  rate: 0,
  loading: false,
};

export const getAccountExchangeRateReducerFn = createReducer(
  initialState,
  on(AccountsExchangeRateActions.setExchangeRate, (state, { value }) => ({
    loaded: true,
    loading: false,
    rate: value,
  })),
  on(AccountsExchangeRateActions.fetchExchangeRate, () => ({
    loaded: false,
    loading: true,
    rate: null,
  })),
  on(
    AccountsExchangeRateActions.fetchExchangeRateSuccess,
    (state, { value }) => ({
      loaded: true,
      loading: false,
      rate: value,
    })
  ),
  on(AccountsExchangeRateActions.fetchExchangeRateError, () => ({
    loaded: false,
    loading: false,
    rate: null,
  }))
);
