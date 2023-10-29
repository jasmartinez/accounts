
import { AccountOperation } from '@accounts/shared-models';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AccountOperationDocument = HydratedDocument<AccountOperationModel>;

@Schema({ toJSON: { virtuals: true, versionKey: false }, versionKey: false })
export class AccountOperationModel implements Omit<AccountOperation, 'id'> {
  @Prop()
  confirmedDate: string;
  @Prop()
  orderId: string;
  @Prop()
  orderCode: string;
  @Prop()
  transactionType: string;
  @Prop()
  debit: number;
  @Prop()
  credit: number;
  @Prop()
  balance: number;
  @Prop()
  accountId: string;
}

export const AccountOperationSchema = SchemaFactory.createForClass(AccountOperationModel);
// Duplicate the ID field.
AccountOperationSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
AccountOperationSchema.set('toJSON', {
    virtuals: true
});