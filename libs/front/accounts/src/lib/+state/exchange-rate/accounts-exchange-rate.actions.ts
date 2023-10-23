import { createAction, props } from '@ngrx/store';

export const setExchangeRate = createAction(
  '[Account Exchange Rate] Set Exchange Rate',
  props<{ value: number }>()
);

export const fetchExchangeRate = createAction(
  '[Account Exchange Rate] Fetch Exchange Rate'
);

export const fetchExchangeRateSuccess = createAction(
  '[Account Exchange Rate] Fetch Exchange Rate Success',
  props<{ value: number }>()
);

export const fetchExchangeRateError= createAction(
  '[Account Exchange Rate] Fetch Exchange Rate Error'
);