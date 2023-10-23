import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { BreadCrumbData, BreadCrumbItem } from '../../models/ux.models';
import { Router } from '@angular/router';

@Component({
  selector: 'accounts-utils-ux-header',
  templateUrl: './shared-front-utils-ux-header.component.html',
  styleUrls:['./shared-front-utils-ux-header.component.scss']
})

export class AccountsSharedFrontUtilsUxHeaderComponent implements OnChanges{
title = "";
@Input() breadCrumbData:BreadCrumbData = [];  
constructor(private readonly router:Router){}
  ngOnChanges(changes:SimpleChanges) {
    if(changes['breadCrumbData'] && changes['breadCrumbData'].currentValue !== changes['breadCrumbData'].previousValue){
      this.title = this.breadCrumbData[this.breadCrumbData.length - 1].title;
    }
   }

  navigate(item:BreadCrumbItem){
    this.router.navigate([item.route]);
  }
}