import { AccountsApiResponse } from '@accounts/shared-models';
import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { getRandomInt } from '../../gateways/events/events.functions';

export const responseMock:AccountsApiResponse= {
      accounts: [
        {
          accountName: 'TestAccount1',
          category: 'Affiliates',
          tags: 'testTags',
          balance: 123,
          availableBalance: 111,
          id: '10001',
        },
        {
          accountName: 'TestAccount2',
          category: 'Credit Player',
          tags: 'testTags',
          balance: 12,
          availableBalance: 5,
          id: '10002',
        },
        {
          accountName: 'TestAccount3',
          category: 'Affiliates',
          tags: 'testTags',
          balance: 233,
          availableBalance: 230,
          id: '10003',
        },
        {
          accountName: 'TestAccount4',
          category: 'Affiliates',
          tags: 'testTags',
          balance: 268,
          availableBalance: 40,
          id: '10004',
        },
        {
          accountName: 'TestAccount5',
          category: 'Credit Player',
          tags: 'testTags',
          balance: 12,
          availableBalance: 14,
          id: '10005',
        },
        {
          accountName: 'TestAccount6',
          category: 'Affiliates',
          tags: 'testTags',
          balance: 1.5,
          availableBalance: 0.5,
          id: '10006',
        },
      ],
      operations: [
        {
          accountId: '10001',
          confirmedDate: '2023-02-01',
          orderId: '1A1234',
          orderCode: 'ON RAMP',
          transactionType: 'SENT',
          debit: 10,
          credit: null,
          balance: 155,
        },
        {
          accountId: '10001',
          confirmedDate: '2023-02-02',
          orderId: '1B1234',
          orderCode: 'DEPOSIT',
          transactionType: 'RECEIVED',
          debit: null,
          credit: 10,
          balance: 145,
        },
        {
          accountId: '10001',
          confirmedDate: '2023-02-03',
          orderId: '1C1234',
          orderCode: 'SETTLEMENT',
          transactionType: 'SENT',
          debit: 10,
          credit: null,
          balance: 155,
        },
        {
          accountId: '10001',
          confirmedDate: '2023-02-04',
          orderId: '1D1324',
          orderCode: 'DEPOSIT',
          transactionType: 'RECEIVED',
          debit: null,
          credit: 15,
          balance: 170,
        },
        {
          accountId: '10001',
          confirmedDate: '2023-02-05',
          orderId: '1E1234',
          orderCode: 'SETTLEMENT',
          transactionType: 'SENT',
          debit: 47,
          credit: null,
          balance: 123
        },
        {
          accountId: '10002',
          confirmedDate: '2023-02-06',
          orderId: '1E12341',
          orderCode: 'SETTLEMENT',
          transactionType: 'RECEIVED',
          debit: null,
          credit: 5,
          balance: 12
        },
        {
          accountId: '10003',
          confirmedDate: '2023-02-07',
          orderId: '1E12342',
          orderCode: 'DEPOSIT',
          transactionType: 'RECEIVED',
          debit: null,
          credit: 5,
          balance: 233
        },
        {
          accountId: '10004',
          confirmedDate: '2023-02-08',
          orderId: '1E12343',
          orderCode: 'DEPOSIT',
          transactionType: 'RECEIVED',
          debit: null,
          credit: 5,
          balance: 268
        },
        {
          accountId: '10005',
          confirmedDate: '2023-02-09',
          orderId: '1E12344',
          orderCode: 'DEPOSIT',
          transactionType: 'RECEIVED',
          debit: null,
          credit: 5,
          balance: 12
        },
        {
          accountId: '10006',
          confirmedDate: '2023-02-12',
          orderId: '1E12345',
          orderCode: 'DEPOSIT',
          transactionType: 'RECEIVED',
          debit: null,
          credit: 5,
          balance: 1.5
        },
      ],
    };

@Injectable()
export class FeaturesAccountService {
  getData(): Observable<AccountsApiResponse> {
    return of(responseMock);
  }

  getExchangeRate(){
    return of(getRandomInt(5000,12000));
  }
}
