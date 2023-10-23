import { Account, AccountDetailFieldsEnum, AccountListFieldsEnum, AccountOperation, AccountsApiResponse } from "@accounts/shared-models";
import { ApiProperty } from "@nestjs/swagger";


export class AccountResponseDto implements Account {
  @ApiProperty()
  id: string;
  @ApiProperty()
  [AccountListFieldsEnum.AccountName]: string;
  @ApiProperty()
  [AccountListFieldsEnum.Category]: string;
  @ApiProperty()
  [AccountListFieldsEnum.Tags]: string;
  @ApiProperty()
  [AccountListFieldsEnum.Balance]: number;
  @ApiProperty()
  [AccountListFieldsEnum.AvailableBalance]: number;
}

export class OperationResponseDto implements AccountOperation{
  @ApiProperty()
  accountId:string;
  @ApiProperty()
  [AccountDetailFieldsEnum.ConfirmedDate]:string;
  @ApiProperty()
  [AccountDetailFieldsEnum.OrderId]:string;
  @ApiProperty()
  [AccountDetailFieldsEnum.OrderCode]:string;
  @ApiProperty()
  [AccountDetailFieldsEnum.TransactionType]:string;
  @ApiProperty()
  [AccountDetailFieldsEnum.Debit]:number | null;
  @ApiProperty()
  [AccountDetailFieldsEnum.Credit]:number | null;
  @ApiProperty()
  [AccountDetailFieldsEnum.Balance]:number;
}

export class AccountsApiResponseDto implements AccountsApiResponse {
  @ApiProperty({type:[AccountResponseDto]})
  accounts:AccountResponseDto[]
  @ApiProperty({type:[OperationResponseDto]})
  operations:OperationResponseDto[]
}