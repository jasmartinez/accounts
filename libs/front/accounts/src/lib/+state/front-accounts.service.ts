import { AccountsApiResponse } from '@accounts/shared-models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = 'api'

@Injectable()
export class AccountsService {
  private _scope = '/accounts'
  constructor(
    private readonly httpClient:HttpClient
  ) { }
  
  fetchAccounts():Observable<AccountsApiResponse>{
    return this.httpClient.get<AccountsApiResponse>(`${API}${this._scope}`)
  }

  fetchExchangeRate():Observable<number>{
    return this.httpClient.get<number>(`${API}${this._scope}/exchange-rate`)
  }
}