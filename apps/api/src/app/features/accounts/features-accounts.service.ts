import { Injectable } from '@nestjs/common';
import { Observable, forkJoin, of } from 'rxjs';
import { getRandomInt } from '../../gateways/events/events.functions';
import { AccountModel } from '../../db/schemas/account.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AccountOperationModel } from '../../db/schemas/operations.schema';
import { AccountsApiResponse } from '@accounts/shared-models';


@Injectable()
export class FeaturesAccountService {
  constructor(
    @InjectModel(AccountModel.name) private accountModel: Model<AccountModel>,
    @InjectModel(AccountOperationModel.name)
    private accountOperationModel: Model<AccountOperationModel>
  ) {}

  getData(): Observable<AccountsApiResponse> {
    return forkJoin({
      accounts: this.accountModel
        .find()
        .exec(),
      operations: this.accountOperationModel
        .find()
        .exec()
    });
  }

  getExchangeRate() {
    return of(getRandomInt(5000, 12000));
  }
}
