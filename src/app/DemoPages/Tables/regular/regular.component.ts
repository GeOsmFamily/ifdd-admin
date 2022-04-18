import { IfddApiService } from 'src/app/services/ifdd-api/ifdd-api.service';
import { Component, Input, OnInit } from "@angular/core";

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: "Russia",
    flag: "f/f3/Flag_of_Russia.svg",
    area: 17075200,
    population: 146989754,
  },
  {
    name: "Canada",
    flag: "c/cf/Flag_of_Canada.svg",
    area: 9976140,
    population: 36624199,
  },
  {
    name: "United States",
    flag: "a/a4/Flag_of_the_United_States.svg",
    area: 9629091,
    population: 324459463,
  },
  {
    name: "China",
    flag: "f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
    area: 9596960,
    population: 1409517397,
  },
];

@Component({
  selector: "app-regular",
  templateUrl: "./regular.component.html",
  styles: [],
})
export class RegularComponent implements OnInit {
  heading = "Regular Tables";
  subheading = "Tables are the backbone of almost all web applications.";
  icon = "pe-7s-drawer icon-gradient bg-happy-itmeo";
  @Input() tableTitle;
  @Input() organisation;
  @Input() listOrganisation;
  @Input() allOsc;

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
  //  this.listeOsc= this.ifddApiService.getAllOdd()
    this.collectionSize = this.allOsc.length;
  }

  search(value: string): void {
    this.allOsc = this.allOsc.filter((val) => val.name.toLowerCase().includes(value));
    this.collectionSize = this.allOsc.length;
  }
}
