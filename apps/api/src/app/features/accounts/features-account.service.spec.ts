import { Test } from '@nestjs/testing';
import { FeaturesAccountService } from './features-accounts.service';
import { responseMock } from './features-account.mock';
import { AccountModel, AccountSchema } from '../../db/schemas/account.schema';
import { getModelToken } from '@nestjs/mongoose';
import {
  AccountOperationModel,
  AccountOperationSchema,
} from '../../db/schemas/operations.schema';
import { Connection, Model, connect } from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { firstValueFrom, take } from 'rxjs';

describe('FeaturesAccountService', () => {
  let service: FeaturesAccountService;
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

    const app = await Test.createTestingModule({
      imports: [],
      providers: [
        FeaturesAccountService,
        { provide: getModelToken(AccountModel.name), useValue: account },
        {
          provide: getModelToken(AccountOperationModel.name),
          useValue: accountOperation,
        },
      ],
    }).compile();

    account = app.get<Model<AccountModel>>(getModelToken(AccountModel.name));
    accountOperation = app.get<Model<AccountOperationModel>>(
      getModelToken(AccountOperationModel.name)
    );
    await account.insertMany(responseMock.accounts);
    await accountOperation.insertMany(responseMock.operations);
    service = app.get<FeaturesAccountService>(FeaturesAccountService);
  });

  it('should return true if service its defined', () => {
    expect(service).toBeDefined();
  });

  it('It must return the same number of elements as in the mock.', async () => {
    const result = await firstValueFrom(service.getData().pipe(take(1)));
    expect(result.accounts.length).toBe(responseMock.accounts.length);
    expect(result.operations.length).toBe(responseMock.operations.length);
  });

  afterAll(async () => {
    await mongoConnection.dropDatabase();
    await mongoConnection.close();
    await mongod.stop();
  });
});
