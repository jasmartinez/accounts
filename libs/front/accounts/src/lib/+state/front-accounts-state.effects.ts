import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import * as AccountsActions from './list/accounts-list.actions';
import * as AccountsDetailActions from './detail/accounts-detail.actions';
import * as ExchangeRateActions from './exchange-rate/accounts-exchange-rate.actions';
import { AccountsService } from './front-accounts.service';
import { accountListAdapterFn } from './list/accounts-list.adapter';
import { AccountsApiResponse } from '@accounts/shared-models';
 
@Injectable()
export class AccountsEffects {
  loadAccounts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountsActions.fetchAccountsList),
      switchMap(() =>
        this.accountsService.fetchAccounts().pipe(
          map((accountsResponse: AccountsApiResponse) =>
            AccountsActions.fetchAccountsListSuccess({
              accounts: accountListAdapterFn(accountsResponse.accounts),
              operations: accountsResponse.operations,
            })
          ),
          catchError(() => of(AccountsActions.fetchAccountsListError))
        )
      )
    )
  );

  setOperations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountsActions.fetchAccountsListSuccess),
      switchMap((action) =>
        of(AccountsDetailActions.setDetails({ details: action.operations }))
      )
    )
  );

  loadExchangeRate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExchangeRateActions.fetchExchangeRate),
      switchMap(() =>
        this.accountsService.fetchExchangeRate().pipe(
          map((response: number) =>
            ExchangeRateActions.fetchExchangeRateSuccess({ value: response })
          ),
          catchError(() => of(ExchangeRateActions.fetchExchangeRateError()))
        )
      )
    )
  );

  addOperation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountsDetailActions.addOperation),
      switchMap(({ detail }) =>
        of(AccountsActions.updateAccountListItem({ accountOperation: detail }))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private accountsService: AccountsService
  ) {}
}