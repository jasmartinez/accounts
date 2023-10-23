import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable, filter, take, tap } from 'rxjs';
import { AccountsFacadeService } from '../+state/front-accounts-state.facade';

export const accountsResolver: ResolveFn<Observable<boolean>> = (): Observable<boolean> => {
  const accountsFacadeService = inject(AccountsFacadeService);
  return accountsFacadeService.accountsListLoaded$.pipe(
    tap((loaded)=>{
      const loading = accountsFacadeService.getAccountsLoadingSnapshot();  
      if(loaded === false && loading === false){
        accountsFacadeService.fetchAccountsList();
      }
    }),
    filter((loaded)=> loaded === true),
    take(1)
  )
};