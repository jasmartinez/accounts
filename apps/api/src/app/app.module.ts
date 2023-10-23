import { Module } from '@nestjs/common';
import { FeaturesAccountModule } from './features/accounts/features-accounts.module';
import { EventsModule } from './gateways/events/events.module';

@Module({
  imports: [FeaturesAccountModule,EventsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
