
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DbMongoDbMemoryModule } from './mongo-db-memory.module';
import { DB_URI_TOKEN } from './db-injection.token';


@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports:[DbMongoDbMemoryModule],
      useFactory: async (uri:string) => ({
        uri
      }),
      inject: [DB_URI_TOKEN],
    })
  ],
})
export class DbMongooseRootConfigModule {
}
