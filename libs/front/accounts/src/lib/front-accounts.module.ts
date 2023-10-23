import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { frontAccountsRoutes } from './lib.routes';
import { FrontAccountsListComponent } from './list/front-accounts-list.component';
import { SharedFrontMaterialModule } from '@accounts/shared-front-material';
import { SharedFrontUtilsModule } from '@accounts/shared-front-utils';
import { FrontAccountsDetailComponent } from './detail/font-accounts-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountsFeatureStateModule } from './+state/front-accounts-state.module';

@NgModule({
  imports: [
    CommonModule,
    SharedFrontMaterialModule,
    SharedFrontUtilsModule,
    FormsModule,
    ReactiveFormsModule,
    AccountsFeatureStateModule,
    RouterModule.forChild(frontAccountsRoutes),
  ],
  declarations: [FrontAccountsListComponent, FrontAccountsDetailComponent],
  exports: [FrontAccountsListComponent, FrontAccountsDetailComponent],
})
export class FrontAccountsModule {}
