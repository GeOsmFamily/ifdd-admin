import { IfddApiService } from 'src/app/services/ifdd-api/ifdd-api.service';
import { Component, OnInit, ViewChild } from "@angular/core";
import { Datum } from 'src/app/shared/osc';
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";

import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cible } from 'src/app/shared/categorieOdd';



@Component({
  selector: "app-tables-main",
  templateUrl: "./tables-main.component.html",
  styleUrls: ['./tables-main.scss']
})
export class TablesMainComponent implements OnInit {
  heading = "Bootstrap 5 Tables";
  subheading = "Tables are the backbone of almost all web applications.";
  icon = "pe-7s-drawer icon-gradient bg-happy-itmeo";

  //for bootstraptable
  searchTerm: string;
  page = 1;
  //pageSize = 10;
  collectionSize: number;
  currentRate = 8;
  countries=new Array();
  listeOsc?:Datum[]=[]

  searchString: string;
  loading=false
  actualiser=false
  rowData:any

  title = "datatables";
  dtOptions: DataTables.Settings = {};

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();

  
  isLoading = false;
  totalRows =0;
  pageSize = 50;
  currentPage = 0;
  nextPage=""
  prevPage=0
  lastPage=0
  pageSizeOptions: number[] = [];

  displayedColumns: string[] = ['name', 'pays', 'date_fondation','active','actions'];
  dataSource: MatTableDataSource<Datum> = new MatTableDataSource();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  idCategoriesOdd:Cible[]=[]
  constructor(private ifddApiService:IfddApiService) {
   
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    
  }
  ListeOsc(){
  
     this.ifddApiService.findOscPerPage(this.currentPage+1).subscribe(oscs => {
      this.isLoading = true;
      this.listeOsc =oscs.data.data
      this.lastPage=oscs.data.last_page
    this.paginator.pageIndex=this.currentPage
     // this.currentPage=this.nextPage
    
      this.totalRows=oscs.data.total
      //this.paginator.pageIndex = this.currentPage;
      console.log( "pageIndex= "+ this.paginator.pageIndex)
      console.log("second")
      console.log("currentPage= "+this.currentPage)
      this.dataSource=new MatTableDataSource(oscs.data.data)
      
      this.loading=true
      //console.log("hello")
      console.log(this.dataSource)
     });
   
  }
  
  
 
  pageChanged(event: PageEvent) {
    this.isLoading=false
    console.log(event.pageIndex);
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.ListeOsc()
   
  }
  ngOnInit(): void {
       //get odd categories
       this.ifddApiService.getAllCategoriesOdd().subscribe(cibles => {
        this.idCategoriesOdd=cibles.data
        
      });
    //Load initial data
   this.ListeOsc()
  
  }
  clickMethod(element:Datum) {
    console.log(element.id)
    if(confirm("Voulez vous vraiment supprimer l'OSC  "+element.name)) {
      this.ifddApiService.deleteOsc(element.id.toString())
    }
  }

    deleteOsc(id:string){
      this.ifddApiService.deleteOsc(id)
    }
}
