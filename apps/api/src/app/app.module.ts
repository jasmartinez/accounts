import { Module } from '@nestjs/common';
import { FeaturesAccountModule } from './features/accounts/features-accounts.module';
import { EventsModule } from './gateways/events/events.module';
import { DbMongooseRootConfigModule } from './db/mongoose-root-config.module';

@Module({
  imports: [FeaturesAccountModule,EventsModule,DbMongooseRootConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
