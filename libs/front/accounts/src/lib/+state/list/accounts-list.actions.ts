import { createAction, props } from "@ngrx/store";
import { AccountRow } from "../../front-account.models";
import { AccountOperation } from "@accounts/shared-models";

export const fetchAccountsList = createAction('[Accounts] Fetch Accounts'); 
export const fetchAccountsListSuccess = createAction('[Accounts] Fetch Accounts Success', props<{ 
  accounts: AccountRow[] 
  operations:AccountOperation[]
}>()); 
export const fetchAccountsListError = createAction('[Accounts] Fetch Accounts Error'); 
export const updateAccountListItem = createAction('[Accounts] UpdateAccount', props<{ accountOperation: AccountOperation}>());
