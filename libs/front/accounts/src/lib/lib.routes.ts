import { Route } from '@angular/router';
import { FrontAccountsListComponent } from './list/front-accounts-list.component';
import { BreadCrumbData } from '@accounts/shared-front-utils';
import { FrontAccountsDetailComponent } from './detail/font-accounts-detail.component';
import { AccountBreadCrumbs } from './front-account.models';
import { accountsResolver } from './resolvers/accounts.resolver';
import { exchangeResolver } from './resolvers/exchange-rate.resolver';

export const frontAccountsRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    data: ((): { breadCrumbData: BreadCrumbData } => ({
      breadCrumbData: [
        AccountBreadCrumbs.accounts,
      ],
    }))(),
    component: FrontAccountsListComponent,
    resolve: {
      exchangeRate: exchangeResolver,
      accounts: accountsResolver
    }
  },
  {
    path: 'detail/:accountId',
    pathMatch: 'full',
    component: FrontAccountsDetailComponent,
    resolve: {
      exchangeRate: exchangeResolver,
      accounts: accountsResolver
    },
    data: ((): { breadCrumbData: BreadCrumbData } => ({
      breadCrumbData: [
        AccountBreadCrumbs.accounts,
        AccountBreadCrumbs.detail,
      ],
    }))(),
  },

  { path: '*', redirectTo: '' },
];
