
import { Module, OnModuleInit } from '@nestjs/common';
import { FeaturesAccountController } from './features-accounts.controller';
import { FeaturesAccountService } from './features-accounts.service';
import { InjectModel, MongooseModule } from '@nestjs/mongoose';
import { AccountModel, AccountSchema } from '../../db/schemas/account.schema';
import { Model } from 'mongoose';
import { AccountOperationSchema, AccountOperationModel } from '../../db/schemas/operations.schema';
import { responseMock } from './features-account.mock';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AccountModel.name, schema: AccountSchema },
      { name: AccountOperationModel.name, schema: AccountOperationSchema },
    ]),
  ],
  controllers: [FeaturesAccountController],
  providers: [FeaturesAccountService],
})
export class FeaturesAccountModule implements OnModuleInit {
  constructor(
    @InjectModel(AccountModel.name) private accountModel: Model<AccountModel>,
    @InjectModel(AccountOperationModel.name)
    private operationModel: Model<AccountOperationModel>
  ) {}
  onModuleInit() {
    this.accountModel.insertMany(responseMock.accounts);
    this.operationModel.insertMany(responseMock.operations);
  }
}
