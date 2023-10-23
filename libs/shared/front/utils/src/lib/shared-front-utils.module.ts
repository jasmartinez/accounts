import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { AccountsSharedFrontUtilsUxLayoutComponent } from './ux/layout/shared-front-utils-ux-layout.component';
import { AccountsSharedFrontUtilsUxHeaderComponent } from './ux/header/shared-front-utils-ux-header.component';
import { AccountsSharedFrontUtilsUxToolbarComponent} from './ux/toolbar/shared-front-utils-ux-toolbar.component';
import { SharedFrontMaterialModule } from '@accounts/shared-front-material';
import { SharedFrontUtilsCustomCurrencyPipe } from './pipes/shared-front.utils-custom-currency.pipe';
import { FormsModule } from '@angular/forms';
import { AccountsSharedFrontUtilsUxPaginatorComponent } from './ux/paginator/shared-front-utils-ux-paginator.component';
import { AccountsSharedFrontUtilsUxPaginatorCounterDirective } from './ux/paginator/shared-front-utils-ux-paginator.directive';
import { SharedFrontUtilsAmountPipe } from './pipes/shared-front.utils-amount.pipe';

@NgModule({
  imports: [CommonModule, SharedFrontMaterialModule,FormsModule],
  declarations: [
    AccountsSharedFrontUtilsUxToolbarComponent,
    AccountsSharedFrontUtilsUxLayoutComponent,
    AccountsSharedFrontUtilsUxHeaderComponent,
    AccountsSharedFrontUtilsUxPaginatorComponent,
    AccountsSharedFrontUtilsUxPaginatorCounterDirective,
    SharedFrontUtilsCustomCurrencyPipe,
    SharedFrontUtilsAmountPipe
  ],
  exports: [
    AccountsSharedFrontUtilsUxToolbarComponent,
    AccountsSharedFrontUtilsUxLayoutComponent,
    AccountsSharedFrontUtilsUxHeaderComponent,
    AccountsSharedFrontUtilsUxPaginatorComponent,
    AccountsSharedFrontUtilsUxPaginatorCounterDirective,
    SharedFrontUtilsCustomCurrencyPipe,
    SharedFrontUtilsAmountPipe
  ],
  providers:[
    CurrencyPipe,
    SharedFrontUtilsCustomCurrencyPipe
  ]
})
export class SharedFrontUtilsModule {}
