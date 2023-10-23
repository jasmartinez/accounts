import { AccountOperation } from "@accounts/shared-models";
import { createAction, props } from "@ngrx/store";

export const setDetails = createAction('[Account Details] Set Details', props<{ details: AccountOperation[] }>());
export const addOperation = createAction('[Account Details] Add Operation', props<{ detail: AccountOperation }>());



