import { AccountsSharedFrontUtilsUxPaginatorComponent, BreadCrumbData } from '@accounts/shared-front-utils';
import { AfterViewInit, Component, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountRow } from '../front-account.models';
import { sortingAccountManager } from './front-accounts-list.functions';
import { MatSort } from '@angular/material/sort';
import { AccountBalanceStatusEnum, AccountListFieldsEnum } from '@accounts/shared-models';
import { AccountsFacadeService } from '../+state/front-accounts-state.facade';
import { Subscription } from 'rxjs';

@Component({
  selector: 'accounts-front-accounts-list',
  templateUrl: './front-accounts-list.component.html',
  styleUrls:['./front-accounts-list.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class FrontAccountsListComponent implements AfterViewInit, OnDestroy {
  breadcrumbData: BreadCrumbData = [];
  columns = AccountListFieldsEnum;
  accountBalanceStatuses = AccountBalanceStatusEnum;

  dataSource = new MatTableDataSource<AccountRow>([]);
  displayedColumns: string[] = Object.values(this.columns);
  exchangeRate$ = this.accountsFacade.exchangeRate$;

  private _subscriptions = new Subscription();

  @ViewChild(AccountsSharedFrontUtilsUxPaginatorComponent)
  customPaginatorCmp: AccountsSharedFrontUtilsUxPaginatorComponent | null =
    null;
  @ViewChild(MatSort) sort: MatSort | undefined;
  constructor(
    private readonly router:Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly accountsFacade: AccountsFacadeService
  ) {
    this.breadcrumbData =
      this.activatedRoute.snapshot.data['breadCrumbData'] || [];
    this.dataSource.sortData = sortingAccountManager;
    this._setupListeners();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.customPaginatorCmp?.paginatorCmp || null;
    this.dataSource.sort = this.sort || null;
  }

  private _setupListeners() {
    this._subscriptions.add(
      this.accountsFacade.accountsList$.subscribe((accounts:AccountRow[])=>{
        this.dataSource.data = accounts;
      })
    )
  }

  navigateToDetail(accountId:string){
    this.router.navigate(['accounts', 'detail', accountId]);
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }
}