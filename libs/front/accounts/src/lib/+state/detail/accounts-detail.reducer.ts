import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as AccountDetailsActions from './accounts-detail.actions';
import { AccountDetailFieldsEnum, AccountOperation } from '@accounts/shared-models';

export type AccountDetailsState = EntityState<AccountOperation>;

export const adapter: EntityAdapter<AccountOperation> =
  createEntityAdapter<AccountOperation>({
    selectId:selectOrderId,
    sortComparer: sortComparerDate
  });

export function sortComparerDate(item1: AccountOperation, item2: AccountOperation){
  const timeItem1 = new Date(item1[AccountDetailFieldsEnum.ConfirmedDate]).getTime();
  const timeItem2 = new Date(item2[AccountDetailFieldsEnum.ConfirmedDate]).getTime();
  if(timeItem1 === timeItem2){
    return 0;
  }
  return timeItem1 > timeItem2 ? -1 : 1;
} 

export function selectOrderId(a: AccountOperation): string {
  return a[AccountDetailFieldsEnum.OrderId];
}

const initialState = adapter.getInitialState();

export const getAccountDetailsReducerFn = createReducer(
  initialState,
  on(AccountDetailsActions.setDetails, (state, { details }) => {
    return adapter.setAll(details, state);
  }),
  on(AccountDetailsActions.addOperation, (state, { detail }) => {
    return adapter.upsertOne(detail, { ...state });
  })
);
