import {
  AccountBalanceStatusEnum,
  AccountDetailFieldsEnum,
  AccountEvent,
  AccountOperation,
  EventTypesEnum,
} from '@accounts/shared-models';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { io } from 'socket.io-client';
import { AccountsFacadeService } from './front-accounts-state.facade';

@Injectable()
export class AccountSocketsService {
  socket = io({
    path:'/socket.io',
    transports:['websocket','polling']
  });  
  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor(private readonly accountsFacade: AccountsFacadeService) {
    this.socket.on(EventTypesEnum.ExchangeRate, (data) => {
      this.accountsFacade.setExchangeRate(data);
    });

    this.socket.on(EventTypesEnum.Account, (data) => {
      this.accountsFacade.addOperation(this._transactionBuilder(data));
    });
  }

  private _transactionBuilder(data: AccountEvent['payload']): AccountOperation {
    const dateTimestamp = Date.now() + Math.random().toString(36).substr(2, 9);
    const lastOperation =
      this.accountsFacade.getLastOperationSnapshotByAccountId(data.accountId);

    const response = {
      accountId: data.accountId,
      [AccountDetailFieldsEnum.ConfirmedDate]: new Date().toISOString(),
      [AccountDetailFieldsEnum.OrderId]: dateTimestamp,
      [AccountDetailFieldsEnum.OrderCode]: 'Deposit',
      [AccountDetailFieldsEnum.TransactionType]:
        data.status === AccountBalanceStatusEnum.Decrease ? 'SENT' : 'RECEIVED',
      [AccountDetailFieldsEnum.Debit]:
        data.status === AccountBalanceStatusEnum.Decrease ? data.amount : null,
      [AccountDetailFieldsEnum.Credit]:
        data.status !== AccountBalanceStatusEnum.Decrease ? data.amount : null,
      [AccountDetailFieldsEnum.Balance]:
        data.status === AccountBalanceStatusEnum.Decrease
          ? (lastOperation?.[AccountDetailFieldsEnum.Balance] || 0) -
            data.amount
          : (lastOperation?.[AccountDetailFieldsEnum.Balance] || 0) +
            data.amount,
    };
    return response;
  }
}
