import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ACCOUNTS_FEATURE, ACCOUNTS_FEATURE_TOKEN, ACCOUNTS_STATE_PROVIDER } from '.';
import { AccountsFacadeService } from './front-accounts-state.facade';
import { AccountsService } from './front-accounts.service';
import { EffectsModule } from '@ngrx/effects';
import { AccountsEffects } from './front-accounts-state.effects';
import { AccountSocketsService } from './front-account-sockets.service';


@NgModule({
  imports: [
    StoreModule.forFeature(
      ACCOUNTS_FEATURE,
      ACCOUNTS_FEATURE_TOKEN
    ),
    EffectsModule.forFeature(AccountsEffects),
  ],
  exports: [],
  declarations: [],
  providers: [
    ACCOUNTS_STATE_PROVIDER,
    AccountsFacadeService,
    AccountsService,
    AccountsEffects,
    AccountSocketsService
  ],
})
export class AccountsFeatureStateModule {
  constructor(private readonly accountSocketsService:AccountSocketsService){}
}
