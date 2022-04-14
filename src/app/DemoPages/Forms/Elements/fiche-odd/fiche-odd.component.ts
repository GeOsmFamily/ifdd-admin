import { Component, OnInit, ViewChild  } from "@angular/core";
import { ComponentHelper } from "src/app/helpers/componentHelper";
import { PageTitleComponent } from "src/app/Layout/Components/page-title/page-title.component";

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
  @ViewChild(PageTitleComponent, { static: true })
  pageTitleComponent:  PageTitleComponent | undefined;

  display_fiche=false

  odd=[
    {
      "name": "Molecule Man",

     "ville":"hôtel",
     "status":"en attente"
     }
    ,
    {
      "name": " Man",

     "ville":"hôtel",
     "status":"validée"  },
    {
      "name": " Man",

      "ville":"hôtel",
      "status":"en attente"    }
  ]
  constructor(public componentHelper: ComponentHelper) {}

  ngOnInit(): void {
    //console.log(this.heading)
  }
  ngAfterViewInit(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    //console.log(this.heading)
   
    
  }

}
