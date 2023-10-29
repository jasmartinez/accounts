import { Account, AccountListFieldsEnum } from '@accounts/shared-models';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { AccountOperationModel } from './operations.schema';

export type AccountDocument = HydratedDocument<AccountModel>;

@Schema({ toJSON: { virtuals: true, versionKey: false }, versionKey: false })
export class AccountModel implements Omit<Account, 'id'> {
  @Prop()
  [AccountListFieldsEnum.AccountName]: string;
  @Prop()
  [AccountListFieldsEnum.Category]: string;
  @Prop()
  [AccountListFieldsEnum.Tags]: string;
  @Prop()
  [AccountListFieldsEnum.Balance]: number;
  @Prop()
  [AccountListFieldsEnum.AvailableBalance]: number;
  @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'AccountOperationModel' }])
  operationIds: AccountOperationModel[];
}

export const AccountSchema = SchemaFactory.createForClass(AccountModel);
// Duplicate the ID field.
AccountSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
AccountSchema.set('toJSON', {
    virtuals: true
});