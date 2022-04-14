import { Injectable } from '@angular/core';
import * as $ from 'jquery';
import { PageTitleComponent } from '../Layout/Components/page-title/page-title.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentHelper {
  pageTitleComponent:PageTitleComponent | undefined;
  
  constructor() {}

  //display and close MenuComponent
 

  setComponent(component: string, comp: any) {
    if (component == 'PageTitleComponent ') {
      this.pageTitleComponent = comp;
    }
   
  }

}


