import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fiche-odd",
  templateUrl: "./fiche-odd.component.html",
  styleUrls: ["./fiche-odd.component.sass"],
})
export class FicheODDComponent implements OnInit {
  heading= "ODD";
  subheading= "Administration des ODD";
  icon = "pe-7s-stopwatch icon-gradient bg-amy-crisp";
  button_creer = "Créer une ODD";

  constructor() {}

  ngOnInit(): void {
    //console.log(this.heading)
  }
  ngAfter(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    //console.log(this.heading)
  }
}
