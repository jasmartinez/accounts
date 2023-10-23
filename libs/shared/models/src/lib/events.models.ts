import { AccountBalanceStatusEnum } from './accounts.models';

export enum EventTypesEnum {
  ExchangeRate = 'exchangeRate',
  Account = 'account',
}

export type SocketEvent = ExchangeRateEvent | AccountEvent;

export type ExchangeRateEvent = {
  type: EventTypesEnum.ExchangeRate;
  payload: number;
};

export type AccountEvent = {
  type: EventTypesEnum.Account;
  payload: {
    accountId: string;
    status: Exclude<AccountBalanceStatusEnum, 'equal'>;
    amount: number;
  };
};
