import { IfddApiService } from 'src/app/services/ifdd-api/ifdd-api.service';
import { Component, OnInit } from "@angular/core";

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
  listeOsc= new Array()
  
  constructor(private ifddApiService:IfddApiService) {}

  ngOnInit(): void {
   // this.listeOsc= this.ifddApiService.getAllOsc()
  }
  


}
