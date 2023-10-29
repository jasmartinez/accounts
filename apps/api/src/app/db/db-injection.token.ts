import { Provider } from "@nestjs/common";
import { MongoMemoryServer } from 'mongodb-memory-server';

export const DB_INSTANCE_TOKEN = Symbol('DB memory instance');
export const DB_URI_TOKEN = Symbol('AsyncConnectionURI');

export const DB_INSTANCE_PROVIDER:Provider = {
  provide:DB_INSTANCE_TOKEN,
  useFactory:async () => {
    const mongod = await MongoMemoryServer.create();
    return mongod;
  }
}

export const DB_MONGO_URI_PROVIDER: Provider = {
  provide: DB_URI_TOKEN,
  useFactory: (mongod: MongoMemoryServer) => mongod.getUri(),
  inject: [DB_INSTANCE_TOKEN],
};

