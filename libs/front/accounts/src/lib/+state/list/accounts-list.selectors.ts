import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ACCOUNTS_FEATURE, ACCOUNTS_LIST, AccountsState } from "..";
import { adapter } from "./accounts-list.reducer";

export const selectAccountsState = createFeatureSelector<AccountsState>(ACCOUNTS_FEATURE)
export const selectAccountsListState = createSelector(selectAccountsState,(state)=> state[ACCOUNTS_LIST]);
export const selectAccountList = createSelector(selectAccountsListState,(state)=> adapter.getSelectors().selectAll(state) || []);
export const selectAccountListLoaded = createSelector(selectAccountsListState,(state)=> state.loaded);
export const selectAccountListLoading = createSelector(selectAccountsListState,(state)=> state.loading);
export const selectAccountListById = (id:string) => createSelector(selectAccountsListState,(state)=>  adapter.getSelectors().selectEntities(state)[id] || null);
export const selectAccountListStateById = (id:string) => createSelector(selectAccountListById(id),(state)=>  state?.status || null);



