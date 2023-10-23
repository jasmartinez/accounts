import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as AccountsListActions from './accounts-list.actions';
import { AccountRow } from '../../front-account.models';
import { AccountBalanceStatusEnum, AccountDetailFieldsEnum, AccountListFieldsEnum } from '@accounts/shared-models';

export const ACCOUNTS_LIST = 'accounts-list';
export type AccountsListState = EntityState<AccountRow> & {
  loading: boolean;
  loaded: boolean;
  error: boolean;
};
// !@TODO Define sorting
// !@TODO Define Adapter to add extra properties
export const adapter: EntityAdapter<AccountRow> =
  createEntityAdapter<AccountRow>({});

const initialState = adapter.getInitialState({
  loading: false,
  loaded: false,
  error: false,
});

export const getAccountsListReducerFn = createReducer(
  initialState,
  on(AccountsListActions.fetchAccountsList, (state) => {
    return adapter.removeAll({
      ...state,
      loaded: false,
      loading: true,
    });
  }),
  on(AccountsListActions.fetchAccountsListError, (state) => {
    return adapter.removeAll({
      ...state,
      loaded: false,
      loading: false,
    });
  }),
  on(AccountsListActions.fetchAccountsListSuccess, (state, { accounts }) => {
    return adapter.setAll(accounts, {
      ...state,
      loaded: true,
      loading: false,
    });
  }),
  on(
    AccountsListActions.updateAccountListItem,
    (state, { accountOperation }) => {
      const status: AccountBalanceStatusEnum =
        accountOperation[AccountDetailFieldsEnum.Debit] === null
          ? AccountBalanceStatusEnum.Increase
          : AccountBalanceStatusEnum.Decrease;
      return adapter.updateOne(
        {
          id: accountOperation.accountId,
          changes: {
            status,
            balance: accountOperation[AccountDetailFieldsEnum.Balance],
          },
        },
        state
      );
    }
  )
);
