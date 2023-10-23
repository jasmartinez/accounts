import { Component, EventEmitter, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator, MatPaginatorIntl, PageEvent } from '@angular/material/paginator';

export class CustomMatPaginatorIntl extends MatPaginatorIntl {
  override getRangeLabel=(page:number, pageSize:number, length:number)=>{
    return ''
  }
}

@Component({
  selector: 'accounts-utils-ux-paginator',
  templateUrl: './shared-front-utils-ux-paginator.component.html',
  styleUrls: ['./shared-front-utils-ux-paginator.component.scss'],
  providers:[{provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl}],
  encapsulation: ViewEncapsulation.None
})

export class AccountsSharedFrontUtilsUxPaginatorComponent
{
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  currentPageViewIndex = this.pageIndex + 1

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  @Output() pageEvent: EventEmitter<PageEvent> = new EventEmitter<PageEvent>() ;
  @ViewChild(MatPaginator, { read: MatPaginator }) paginatorCmp:
    | MatPaginator
    | undefined;

  handlePageEvent(e: PageEvent) {
    this.currentPageViewIndex = e.pageIndex + 1;
    this.pageEvent.emit(e);
  }
}