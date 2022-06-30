import { IfddApiService } from 'src/app/services/ifdd-api/ifdd-api.service';
import { Component, OnInit } from "@angular/core";
import { Datum } from 'src/app/shared/osc';
import { Odds } from 'src/app/shared/odd';

@Component({
  selector: "app-fiche-osc",
  templateUrl: "./fiche-osc.component.html",
  styleUrls: ["./fiche-osc.component.sass"],
})
export class FicheOSCComponent implements OnInit {
  heading = "OSC";
  subheading = "Administration des OSC";
  icon = "pe-7s-stopwatch icon-gradient bg-amy-crisp";
  button_creer = "Créer une OSC";
  listeOsc:Odds[]
  

  data:any

  constructor(private ifddApiService:IfddApiService) {}

  ngOnInit(): void {
    
  }
  


}
