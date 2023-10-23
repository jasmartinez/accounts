import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'accounts',
    loadChildren: () =>
      import('@accounts/front-accounts').then(
        (m) => m.FrontAccountsModule
      ),
  },
  {
    path: '**',
    redirectTo: 'accounts',
  },
];
