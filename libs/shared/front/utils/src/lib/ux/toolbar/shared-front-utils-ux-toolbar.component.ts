import { Component, Input } from '@angular/core';

@Component({
  selector: 'accounts-utils-ux-toolbar',
  templateUrl: './shared-front-utils-ux-toolbar.component.html',
  styleUrls:['./shared-front-utils-ux-toolbar.component.scss']
})

export class AccountsSharedFrontUtilsUxToolbarComponent {
  @Input() exchangeRate: number | null = 0;
}