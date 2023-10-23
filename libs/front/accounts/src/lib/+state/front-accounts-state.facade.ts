import { Injectable } from '@angular/core';
import { AccountsState } from '.';
import { Store } from '@ngrx/store';
import * as ExchangeRateActions from './exchange-rate/accounts-exchange-rate.actions';
import * as ExchangeRateSelectors from './exchange-rate/accounts-exchange-rate.selectors';
import * as ListActions from './list/accounts-list.actions';
import * as ListSelectors from './list/accounts-list.selectors';
import * as DetailActions from './detail/accounts-detail.actions';
import * as DetailSelectors from './detail/accounts-detail.selectors';
import { Observable, take } from 'rxjs';
import { AccountOperation } from '@accounts/shared-models';

@Injectable()
export class AccountsFacadeService {
  constructor(private readonly store: Store<AccountsState>) {}

  // STREAMS
  exchangeRate$ = this.store.select(
    ExchangeRateSelectors.selectAccountExchangeRate
  );

  exchangeRateLoaded$ = this.store.select(
    ExchangeRateSelectors.selectAccountExchangeRateLoaded
  );

  exchangeRateLoading$ = this.store.select(
    ExchangeRateSelectors.selectAccountExchangeRateLoading
  );

  accountsList$ = this.store.select(ListSelectors.selectAccountList);

  accountsListLoaded$ = this.store.select(
    ListSelectors.selectAccountListLoaded
  );
  accountsListLoading$ = this.store.select(
    ListSelectors.selectAccountListLoading
  );

  accountDetails$ = this.store.select(
    DetailSelectors.selectAccountDetailsState
  );

  // EXCHANGE RATE
  setExchangeRate(value: number) {
    this.store.dispatch(ExchangeRateActions.setExchangeRate({ value }));
  }

  fetchExchangeRate() {
    this.store.dispatch(ExchangeRateActions.fetchExchangeRate());
  }

  getExchangeRateSnapshot() {
    return this._getSnapshot(this.exchangeRate$);
  }

  getExchangeRateLoadingSnapshot() {
    return this._getSnapshot(this.exchangeRateLoading$);
  }

  // ACCOUNTS LIST

  fetchAccountsList() {
    this.store.dispatch(ListActions.fetchAccountsList());
  }

  getAccountsLoadingSnapshot() {
    return this._getSnapshot(this.accountsListLoading$);
  }

  getAccountStreamById(accountId: string) {
    return this.store.select(ListSelectors.selectAccountListById(accountId));
  }

  getAccountStateStreamById(accountId: string) {
    return this.store.select(ListSelectors.selectAccountListStateById(accountId));
  }

  updateAccountListItem(accountOperation: AccountOperation) {
    this.store.dispatch(ListActions.updateAccountListItem({ accountOperation }));
  }

  // ACCOUNTS DETAILS

  setAccountDetails(details: AccountOperation[]) {
    this.store.dispatch(DetailActions.setDetails({ details }));
  }

  getAccountDetailsStreamByAccountId(accountId: string) {
    return this.store.select(
      DetailSelectors.selectAccountDetailsByAccountId(accountId)
    );
  }

  getAccountDetailsSnapshotByAccountId(accountId: string) {
    return this._getSnapshot(
      this.getAccountDetailsStreamByAccountId(accountId)
    );
  }

  getAccountDetailsOperationStreamByOperationId(operationId: string) {
    return this.store.select(
      DetailSelectors.selectAccountDetailsOperationById(operationId)
    );
  }

  getAccountDetailsOperationSnapshotByOperationId(operationId: string) {
    return this.getAccountDetailsOperationStreamByOperationId(operationId);
  }

  getLastOperationSnapshotByAccountId(accountId: string) {
    return this._getSnapshot(
      this.store.select(
        DetailSelectors.selectLastOperationByIdAccountId(accountId)
      )
    );
  }

  addOperation(detail: AccountOperation) {
    this.store.dispatch(DetailActions.addOperation({ detail }));
  }

  // UTILS
  private _getSnapshot<T>(stream$: Observable<T>): T | null {
    let response: T | null = null;
    stream$.pipe(take(1)).subscribe((data) => {
      response = data;
    });
    return response;
  }
}
