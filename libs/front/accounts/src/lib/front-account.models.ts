import { BreadCrumbItem } from "@accounts/shared-front-utils"
import { Account, AccountBalanceStatusEnum } from "@accounts/shared-models";

export enum AccountRoutesEnum {
  Accounts = 'accounts',
  Detail = 'detail',
}

export type AccountBreadCrumbsType = {
  [Values in AccountRoutesEnum]: BreadCrumbItem;
};

export const AccountBreadCrumbs: AccountBreadCrumbsType = {
  [AccountRoutesEnum.Accounts]: {
    name: 'Accounts',
    route: 'accounts',
    title: 'Accounts'
  },
  [AccountRoutesEnum.Detail]: {
    name: 'Details',
    route: 'detail',
    title: 'Account detail'
  },
};

// LIST

export type AccountRow = Account & {
  status:AccountBalanceStatusEnum
} 

