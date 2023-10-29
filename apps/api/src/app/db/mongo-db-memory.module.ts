import { Module } from '@nestjs/common';
import {
  DB_INSTANCE_PROVIDER,
  DB_INSTANCE_TOKEN,
  DB_MONGO_URI_PROVIDER,
  DB_URI_TOKEN,
} from './db-injection.token';

@Module({
  providers: [DB_INSTANCE_PROVIDER, DB_MONGO_URI_PROVIDER],
  exports: [DB_INSTANCE_TOKEN, DB_URI_TOKEN],
})
export class DbMongoDbMemoryModule {}
