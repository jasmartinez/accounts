import { AccountsSharedFrontUtilsUxPaginatorComponent, BreadCrumbData } from '@accounts/shared-front-utils';
import { AfterViewInit, Component, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountRow } from '../front-account.models';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatExpansionPanel } from '@angular/material/expansion';
import { FormGroup, UntypedFormControl } from '@angular/forms';
import { AccountBalanceStatusEnum, AccountDetailFieldsEnum, AccountListFieldsEnum, AccountOperation } from '@accounts/shared-models';
import { AccountsFacadeService } from '../+state/front-accounts-state.facade';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'accounts-front-accounts-detail',
  templateUrl: './font-accounts-detail.component.html',
  styleUrls:['./font-accounts-detail.component.scss'],
  encapsulation:ViewEncapsulation.None
})

export class FrontAccountsDetailComponent implements AfterViewInit, OnDestroy{
  breadcrumbData: BreadCrumbData = [];
  columns = AccountDetailFieldsEnum;
  accountBalanceStatuses = AccountBalanceStatusEnum;

  dataSource = new MatTableDataSource<AccountOperation>([]);
  displayedColumns: string[] = Object.values(this.columns);
  range = new FormGroup({
    start: new UntypedFormControl(),
    end: new UntypedFormControl(),
  });
  exchangeRate$ = this.accountsFacade.exchangeRate$;
  account$: Observable<AccountRow | null> | undefined;
  accountState$:Observable<AccountBalanceStatusEnum| null> | undefined;
  accountFields = AccountListFieldsEnum;

  private _subscriptions = new Subscription();

  @ViewChild(AccountsSharedFrontUtilsUxPaginatorComponent) customPaginatorCmp: AccountsSharedFrontUtilsUxPaginatorComponent | null = null;
  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild(MatExpansionPanel) expansionPanelCmp: MatExpansionPanel | undefined;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly accountsFacade: AccountsFacadeService
    ) {
    this.breadcrumbData = this.activatedRoute.snapshot.data['breadCrumbData'] || [];
    const accountId = this.activatedRoute.snapshot.paramMap.get('accountId') as string;
    this.account$ = this.accountsFacade.getAccountStreamById(accountId);
    this._setupListeners(accountId);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.customPaginatorCmp?.paginatorCmp || null;
    this.dataSource.sort = this.sort || null;
  }
  resetSelection(){
    this.range.reset();
  }

  private _setupListeners(accountId:string){
    this._subscriptions.add(
      this.accountsFacade.getAccountDetailsStreamByAccountId(accountId).subscribe((operations:AccountOperation[])=>{
        this.dataSource.data = operations;
      })
    )
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }
}