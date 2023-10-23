import { Controller, Get } from '@nestjs/common';
import { FeaturesAccountService } from './features-accounts.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { AccountsApiResponse } from '@accounts/shared-models';
import { AccountsApiResponseDto } from './dto/accounts-dto.response';


@Controller('accounts')
export class FeaturesAccountController {
  constructor(private readonly accountsService: FeaturesAccountService) {}
  @ApiOkResponse({type:AccountsApiResponseDto})
  @Get()
  getData():Observable<AccountsApiResponse> {
    return this.accountsService.getData();
  }

  @Get('exchange-rate')
  getExchangeRate():Observable<number> {
    return this.accountsService.getExchangeRate();
  }
}
