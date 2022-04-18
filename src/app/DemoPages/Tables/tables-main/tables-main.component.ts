import { IfddApiService } from 'src/app/services/ifdd-api/ifdd-api.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tables-main",
  templateUrl: "./tables-main.component.html",
})
export class TablesMainComponent implements OnInit {
  heading = "Bootstrap 5 Tables";
  subheading = "Tables are the backbone of almost all web applications.";
  icon = "pe-7s-drawer icon-gradient bg-happy-itmeo";

  //for bootstraptable
  searchTerm: string;
  page = 1;
  pageSize = 10;
  collectionSize: number;
  currentRate = 8;
  countries=new Array();
  listeOsc= new Array()
  constructor(private ifddApiService:IfddApiService) {}

  ngOnInit() {
      this.listeOsc= this.ifddApiService.getAllOsc()
      this.collectionSize = this.listeOsc.length;
    }
  
    search(value: string): void {
      this.listeOsc = this.listeOsc.filter((val) => val.name.toLowerCase().includes(value));
      this.collectionSize = this.listeOsc.length;
    }
}
