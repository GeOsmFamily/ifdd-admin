import { Component, Input } from "@angular/core";
import { faStar, faPlus } from "@fortawesome/free-solid-svg-icons";
import * as jQuery from 'jquery';

@Component({
  selector: "app-page-title",
  templateUrl: "./page-title.component.html",
})
export class PageTitleComponent {
  faStar = faStar;
  faPlus = faPlus;

  @Input() heading;
  @Input() subheading;
  @Input() icon;
  @Input() button;
  @Input() odd:string;
  @Input() osc:string;

  displayOsc = false;
  displayOdd = false;

  onPress() {
   
    if(this.odd ){
      this.displayOdd=true
      jQuery('app-creer-odd').css('display', 'block');
      
    }
   if(this.osc){
      this.displayOsc = true;
      jQuery('app-creer-osc').css('display', 'block');
    }
    console.log(this.osc + ' moi osc')
  }

  
}
