import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable, filter, take, tap } from 'rxjs';
import { AccountsFacadeService } from '../+state/front-accounts-state.facade';

export const exchangeResolver: ResolveFn<Observable<boolean>> = (): Observable<boolean> => {
  const accountsFacadeService = inject(AccountsFacadeService);
  return accountsFacadeService.exchangeRateLoaded$.pipe(
    tap((loaded)=>{
      const loading = accountsFacadeService.getExchangeRateLoadingSnapshot();  
      if(loaded === false && loading === false){
        accountsFacadeService.fetchExchangeRate();
      }
    }),
    filter((loaded)=> loaded === true),
    take(1)
  )
};