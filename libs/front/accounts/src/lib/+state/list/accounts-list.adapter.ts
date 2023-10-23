import { Account, AccountBalanceStatusEnum } from "@accounts/shared-models";
import { AccountRow } from "../../front-account.models";

export const accountListAdapterFn = (accounts:Account[]):AccountRow[] =>{
  if(!(Array.isArray(accounts) && accounts.length > 0)){
    return [];
  }
  return accounts.map((account)=>({
    ...account,
    status:AccountBalanceStatusEnum.Equal
  }))
}