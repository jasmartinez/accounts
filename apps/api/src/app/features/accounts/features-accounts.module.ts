
import { Module } from '@nestjs/common';
import { FeaturesAccountController } from './features-accounts.controller';
import { FeaturesAccountService } from './features-accounts.service';

@Module({
  imports: [],
  controllers: [FeaturesAccountController],
  providers: [FeaturesAccountService],
})
export class FeaturesAccountModule {}
