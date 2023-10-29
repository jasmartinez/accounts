// ACCOUNTS
export enum AccountListFieldsEnum {
  AccountName = 'accountName',
  Category = 'category',
  Tags = 'tags',
  Balance = 'balance',
  AvailableBalance = 'availableBalance'
}

export interface Account {
  id?:string,
  [AccountListFieldsEnum.AccountName]:string,
  [AccountListFieldsEnum.Category]:string,
  [AccountListFieldsEnum.Tags]:string,
  [AccountListFieldsEnum.Balance]:number,
  [AccountListFieldsEnum.AvailableBalance]:number,
}
// OPERATIONS

export enum AccountDetailFieldsEnum {
  ConfirmedDate = 'confirmedDate',
  OrderId= 'orderId',
  OrderCode= 'orderCode',
  TransactionType  = 'transactionType',
  Debit = 'debit',
  Credit = 'credit',
  Balance = 'balance'
} 

export interface AccountOperation {
  accountId:string,
  [AccountDetailFieldsEnum.ConfirmedDate]:string,
  [AccountDetailFieldsEnum.OrderId]:string,
  [AccountDetailFieldsEnum.OrderCode]:string,
  [AccountDetailFieldsEnum.TransactionType]:string,
  [AccountDetailFieldsEnum.Debit]:number | null,
  [AccountDetailFieldsEnum.Credit]:number | null,
  [AccountDetailFieldsEnum.Balance]:number,
}

export interface AccountsApiResponse {
  accounts:Account[],
  operations:AccountOperation[],
}

export enum AccountBalanceStatusEnum {
  Increase = 'increase',
  Decrease = 'decrease',
  Equal = 'equal'
}