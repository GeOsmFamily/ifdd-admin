import { Component, Input } from "@angular/core";
import { faStar, faPlus } from "@fortawesome/free-solid-svg-icons";

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

  display = false;
  onPress() {
    this.display = true;
    /*if you want the component to show and hide on click pressed, use 
    use this line
    this.display = !this.display;*/
  }
}
