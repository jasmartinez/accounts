import { Test, TestingModule } from '@nestjs/testing';

import { FeaturesAccountController } from './features-accounts.controller';
import { FeaturesAccountService } from './features-accounts.service';
import { responseMock } from './features-account.mock';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { Model, Connection, connect } from 'mongoose';
import { AccountModel, AccountSchema } from '../../db/schemas/account.schema';
import {
  AccountOperationModel,
  AccountOperationSchema,
} from '../../db/schemas/operations.schema';
import { getModelToken } from '@nestjs/mongoose';
import { firstValueFrom, take } from 'rxjs';

describe('FeaturesAccountController', () => {
  let app: TestingModule;
  let account: Model<AccountModel>;
  let accountOperation: Model<AccountOperationModel>;
  let mongod: MongoMemoryServer;
  let mongoConnection: Connection;

  beforeAll(async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    mongoConnection = (await connect(uri)).connection;
    account = mongoConnection.model(AccountModel.name, AccountSchema);
    accountOperation = mongoConnection.model(
      AccountOperationModel.name,
      AccountOperationSchema
    );

    app = await Test.createTestingModule({
      controllers: [],
      providers: [
        FeaturesAccountController,
        FeaturesAccountService,
        { provide: getModelToken(AccountModel.name), useValue: account },
        {
          provide: getModelToken(AccountOperationModel.name),
          useValue: accountOperation,
        },
      ],
    }).compile();

    await account.insertMany(responseMock.accounts);
    await accountOperation.insertMany(responseMock.operations);
  });

  it('should return "responseMock"', async () => {
    const accountController = app.get<FeaturesAccountController>(
      FeaturesAccountController
    );
    const result = await firstValueFrom(
      accountController.getData().pipe(take(1))
    );
    expect(result.accounts.length).toBe(responseMock.accounts.length);
    expect(result.operations.length).toBe(responseMock.operations.length);
  });

  afterAll(async () => {
    await mongoConnection.dropDatabase();
    await mongoConnection.close();
    await mongod.stop();
  });
});
