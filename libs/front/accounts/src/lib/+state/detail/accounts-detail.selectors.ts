import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ACCOUNTS_FEATURE, ACCOUNT_DETAILS, AccountsState } from "..";
import { adapter } from "./accounts-detail.reducer";

export const selectAccountsState = createFeatureSelector<AccountsState>(ACCOUNTS_FEATURE)
export const selectAccountDetailsState = createSelector(selectAccountsState,(state)=> state[ACCOUNT_DETAILS]);
export const selectAccountDetailsStateEntries  = createSelector(selectAccountDetailsState,(state)=> adapter.getSelectors().selectAll(state) || []);
export const selectAccountDetailsEntities = createSelector(selectAccountDetailsState,(state)=> adapter.getSelectors().selectEntities(state) || {});
export const selectAccountDetailsByAccountId = (accountId:string)=> createSelector(selectAccountDetailsStateEntries,(state)=> state.filter((entry)=>entry.accountId === accountId) );
export const selectAccountDetailsOperationById = (operationId:string)=> createSelector(selectAccountDetailsEntities,(state)=> state[operationId] || null);
export const selectLastOperationByIdAccountId = (accountId:string)=> createSelector(selectAccountDetailsByAccountId(accountId),(state)=> state[0] || null);



