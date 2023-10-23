import { Component, Input } from '@angular/core';
import { BreadCrumbData } from '../../models/ux.models';

@Component({
  selector: 'accounts-utils-ux-layout',
  templateUrl: './shared-front-utils-ux-layout.component.html',
  styleUrls:['./shared-front-utils-ux-layout.component.scss']
})
export class AccountsSharedFrontUtilsUxLayoutComponent {
  @Input() exchangeRate:number | null = 0;
  @Input() breadCrumbData: BreadCrumbData = [];
}