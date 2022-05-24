import { IfddApiService } from 'src/app/services/ifdd-api/ifdd-api.service';
import { Component, Input, OnInit } from "@angular/core";

import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}


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


  //modal dialog
  title = 'ng-bootstrap-modal-demo';
  closeResult: string;
  modalOptions:NgbModalOptions;

  editData:any = {};
   showModalPopUp : boolean = false;

  constructor(private ifddApiService:IfddApiService,private modalService: NgbModal) {
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    }
  }

  editPopUpmodal = (data) => {
    this.showModalPopUp = true;
    this.editData = Object.assign(data);
 }

  open(content,data) {
    this.editData = Object.assign(data);
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  ngOnInit() {
  //  this.listeOsc= this.ifddApiService.getAllOdd()
    this.collectionSize = this.allOsc.length;
  }

  search(value: string): void {
    this.allOsc = this.allOsc.filter((val) => val.name.toLowerCase().includes(value));
    this.collectionSize = this.allOsc.length;
  }

  update(data:any){

    var donnes={
      'id':data.id,
      'name':data.name,
      'number':data.number,
      'number_categorie':data.number_categorie,
      'logo_odd':data.logo_odd,
      'color':data.color
    }
    this.ifddApiService.updateOdd(donnes)
    this.closeModal('mymodal')
  }
  closeModal(id: string) {
    this.modalService.dismissAll(id)
}
}
