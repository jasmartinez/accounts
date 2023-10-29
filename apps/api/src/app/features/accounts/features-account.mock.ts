import { Types } from "mongoose";

const accountsObjectsIds = [
  new Types.ObjectId(1),
  new Types.ObjectId(2),
  new Types.ObjectId(3),
  new Types.ObjectId(4),
  new Types.ObjectId(5),
  new Types.ObjectId(6),
];

const accountsOperationsObjectsIds = [
  new Types.ObjectId(1),
  new Types.ObjectId(2),
  new Types.ObjectId(3),
  new Types.ObjectId(4),
  new Types.ObjectId(5),
  new Types.ObjectId(6),
  new Types.ObjectId(7),
  new Types.ObjectId(8),
  new Types.ObjectId(9),
  new Types.ObjectId(10)
];

export const responseMock= {
      accounts: [
        {
          accountName: 'TestAccount1',
          category: 'Affiliates',
          tags: 'testTags',
          balance: 123,
          availableBalance: 111,
          _id: accountsObjectsIds[0],
          operationIds:[
            accountsOperationsObjectsIds[0],
            accountsOperationsObjectsIds[1],
            accountsOperationsObjectsIds[2],
            accountsOperationsObjectsIds[3],
            accountsOperationsObjectsIds[4]
          ]
        },
        {
          accountName: 'TestAccount2',
          category: 'Credit Player',
          tags: 'testTags',
          balance: 12,
          availableBalance: 5,
          _id: accountsObjectsIds[1],
          operationIds:[
            accountsOperationsObjectsIds[5]
          ]
        },
        {
          accountName: 'TestAccount3',
          category: 'Affiliates',
          tags: 'testTags',
          balance: 233,
          availableBalance: 230,
          _id: accountsObjectsIds[2],
          operationIds:[
            accountsOperationsObjectsIds[6]
          ]
        },
        {
          accountName: 'TestAccount4',
          category: 'Affiliates',
          tags: 'testTags',
          balance: 268,
          availableBalance: 40,
          _id: accountsObjectsIds[3],
          operationIds:[
            accountsOperationsObjectsIds[7]
          ]
        },
        {
          accountName: 'TestAccount5',
          category: 'Credit Player',
          tags: 'testTags',
          balance: 12,
          availableBalance: 14,
          _id: accountsObjectsIds[4],
          operationIds:[
            accountsOperationsObjectsIds[8]
          ]
        },
        {
          accountName: 'TestAccount6',
          category: 'Affiliates',
          tags: 'testTags',
          balance: 1.5,
          availableBalance: 0.5,
          _id: accountsObjectsIds[5],
          operationIds:[
            accountsOperationsObjectsIds[9]
          ]
        },
      ],
      operations: [
        {
          _id: accountsOperationsObjectsIds[0],
          accountId: accountsObjectsIds[0],
          confirmedDate: '2023-02-01',
          orderId: '1A1234',
          orderCode: 'ON RAMP',
          transactionType: 'SENT',
          debit: 10,
          credit: null,
          balance: 155,
        },
        {
          _id: accountsOperationsObjectsIds[1],
          accountId: accountsObjectsIds[0],
          confirmedDate: '2023-02-02',
          orderId: '1B1234',
          orderCode: 'DEPOSIT',
          transactionType: 'RECEIVED',
          debit: null,
          credit: 10,
          balance: 145,
        },
        {
          _id: accountsOperationsObjectsIds[2],
          accountId: accountsObjectsIds[0],
          confirmedDate: '2023-02-03',
          orderId: '1C1234',
          orderCode: 'SETTLEMENT',
          transactionType: 'SENT',
          debit: 10,
          credit: null,
          balance: 155,
        },
        {
          _id: accountsOperationsObjectsIds[3],
          accountId: accountsObjectsIds[0],
          confirmedDate: '2023-02-04',
          orderId: '1D1324',
          orderCode: 'DEPOSIT',
          transactionType: 'RECEIVED',
          debit: null,
          credit: 15,
          balance: 170,
        },
        {
          _id: accountsOperationsObjectsIds[4],
          accountId: accountsObjectsIds[0],
          confirmedDate: '2023-02-05',
          orderId: '1E1234',
          orderCode: 'SETTLEMENT',
          transactionType: 'SENT',
          debit: 47,
          credit: null,
          balance: 123
        },
        {
          _id: accountsOperationsObjectsIds[5],
          accountId: accountsObjectsIds[1],
          confirmedDate: '2023-02-06',
          orderId: '1E12341',
          orderCode: 'SETTLEMENT',
          transactionType: 'RECEIVED',
          debit: null,
          credit: 5,
          balance: 12
        },
        {
          _id: accountsOperationsObjectsIds[6],
          accountId: accountsObjectsIds[2],
          confirmedDate: '2023-02-07',
          orderId: '1E12342',
          orderCode: 'DEPOSIT',
          transactionType: 'RECEIVED',
          debit: null,
          credit: 5,
          balance: 233
        },
        {
          _id: accountsOperationsObjectsIds[7],
          accountId: accountsObjectsIds[3],
          confirmedDate: '2023-02-08',
          orderId: '1E12343',
          orderCode: 'DEPOSIT',
          transactionType: 'RECEIVED',
          debit: null,
          credit: 5,
          balance: 268
        },
        {
          _id: accountsOperationsObjectsIds[8],
          accountId: accountsObjectsIds[4],
          confirmedDate: '2023-02-09',
          orderId: '1E12344',
          orderCode: 'DEPOSIT',
          transactionType: 'RECEIVED',
          debit: null,
          credit: 5,
          balance: 12
        },
        {
          _id: accountsOperationsObjectsIds[9],
          accountId: accountsObjectsIds[5],
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