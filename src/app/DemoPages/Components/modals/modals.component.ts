import { ZoneIntervention } from './../../../shared/osc';
import { Component, Input, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbModal, ModalDismissReasons, NgbModalOptions, NgbModalRef, NgbDateStruct, NgbCalendar } from "@ng-bootstrap/ng-bootstrap";
import { Datum } from "src/app/shared/osc";
import { DateFormatHelperService } from "./dateFormatHelper/date-format-helper.service";
import { ModalConfig } from "./modal.config";
import { IfddApiService } from 'src/app/services/ifdd-api/ifdd-api.service';

@Component({
  selector: "app-modals",
  templateUrl: "./modals.component.html",
  styleUrls: ['./modals.scss']
})
export class ModalsComponent implements OnInit {
  heading = "Modals";
  subheading =
    "Wide selection of modal dialogs styles and animations available.";
  icon = "pe-7s-phone icon-gradient bg-premium-dark";

  closeResult: string;

 public modalConfig: ModalConfig
  @ViewChild('modal') private modalContent: TemplateRef<ModalsComponent>
  @Input() osc:Datum
  private modalRef: NgbModalRef
  modalOptions:NgbModalOptions;

  //calendar
model: NgbDateStruct;


//cibles odd
idCategoriesOdd= new Array() 

OscForm!: FormGroup;

constructor(private ifddApiService: IfddApiService,private fb: FormBuilder,private modalService: NgbModal,private dateTransform: DateFormatHelperService) { 
    
  }
  
ngAfterViewInit(): void {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  
 
   // this.convertArrayToFormArray()
}

ngOnInit(): void { 

    //get odd categories
   // this.idCategoriesOdd=this.ifddApiService.getAllCategoriesOdd()

    
    this.modalConfig={
      modalTitle:"hhh",
      dismissButtonLabel: "annuler",
      closeButtonLabel: "annuler",
     
    }
    this.OscForm = this.fb.group({
      name: [this.osc.name],
      abbreviation: [this.osc.abbreviation],
      pays: [this.osc.pays],
      date_fondation: [this.osc.date_fondation],
      description: [this.osc.description ],
      personne_contact: [this.osc.personne_contact],
      telephone: [this.osc.telephone],
      email_osc: [this.osc.email_osc],
      site_web: [this.osc.site_web],
      facebook: [this.osc.facebook],
      twitter: [this.osc.twitter],
      instagram: [this.osc.instagram],
      linkedin: [this.osc.linkedin],
      longitude: [this.osc.longitude, Validators.required],
      latitude: [this.osc.latitude, Validators.required],
      siege: [this.osc.siege, Validators.required],
      zoneInterventions:new FormArray([]), 
      osccategoriesOdd:new FormArray([]),
      addOscCategoriesOdd:new FormArray([])
      
    });
    this.model=this.transformDatetoArray(this.osc.date_fondation)
  this.convertZoneInterventionArrayToFormArray()
  this.convertCategorieOddArrayToFormArray()
   
  //  console.log(this.getZoneInterventionsArray().length)
     }
  
     convertCategorieOddArrayToFormArray(){

     
      let formGroupArray=new FormArray([]);
     var  n=this.osc.categorie_odds.length
    
 
      for(let i=0; i < n; i++){
        //console.log(this.osc.zone_interventions[i].name)
        var formGroup = this.fb.group({
          idCategoriesOdd: [this.osc.categorie_odds[i].category_number],
          description:[this.osc.categorie_odds[i].intitule],
         
    }) 

         
         
     this.getOsccategoriesOddArray().push(formGroup)
      }
      //this.OscForm.setControl('zoneInterventions',formGroupArray);

      
     }
     convertZoneInterventionArrayToFormArray(){

     
      let formGroupArray=new FormArray([]);
     var  n=this.osc.zone_interventions.length
    
 
      for(let i=0; i < n; i++){
        //console.log(this.osc.zone_interventions[i].name)
        var formGroup = this.fb.group({
          name: [this.osc.zone_interventions[i].name],
          longitude:[this.osc.zone_interventions[i].longitude],
          latitude:[this.osc.zone_interventions[i].latitude]
    }) 

         
         
     this.getZoneInterventionsArray().push(formGroup)
      }
      //this.OscForm.setControl('zoneInterventions',formGroupArray);

      
     }
     getZoneInterventionsArray(): FormArray {  
      // console.log(this.OscForm.get("zoneInterventions") as FormArray )
      return this.OscForm.get("zoneInterventions") as FormArray  
    }  
    getAddOscCategoriesOddArray(): FormArray {  
      // console.log(this.OscForm.get("zoneInterventions") as FormArray )
      return this.OscForm.get("addOscCategoriesOdd") as FormArray  
    }  
    
 transformDatetoArray(date:string){
   this.model=this.dateTransform.parsengbDate(date)
    return this.dateTransform.parsengbDate(date)
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
  open(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.modalRef = this.modalService.open(this.modalContent)
      this.modalRef.result.then(resolve, resolve)
    })
  }

  async close(): Promise<void> {
    if (this.modalConfig.shouldClose === undefined || (await this.modalConfig.shouldClose())) {
      const result = this.modalConfig.onClose === undefined || (await this.modalConfig.onClose())
      this.modalRef.close(result)
    }
  }

  async dismiss(): Promise<void> {
    if (this.modalConfig.shouldDismiss === undefined || (await this.modalConfig.shouldDismiss())) {
      const result = this.modalConfig.onDismiss === undefined || (await this.modalConfig.onDismiss())
      this.modalRef.dismiss(result)
    }
  }
  removeZoneIntervention(i:number) {  
    this. getZoneInterventionsArray().removeAt(i);  
  }
  removeAllZoneIntervention(){
    for (let index = this.getZoneInterventionsArray().length-1; index > 0; index--){
        this.getZoneInterventionsArray().removeAt(index)
        console.log("delete.........")
        
        
    }
  } 
  removeOsccategoriesOdd(i:number) {  
    this. getOsccategoriesOddArray().removeAt(i);  
  } 
  addZoneIntervention() {  
    console.log("taille tab= "+  this.getZoneInterventionsArray().length)
    console.log(""+  this.getZoneInterventionsArray())
    this.getZoneInterventionsArray().push(this.newZoneIntervention());  
  }
  newZoneIntervention(): FormGroup {  
    return this.fb.group({  
      name: ['', Validators.required],
          longitude: ['', Validators.required],
          latitude: ['', Validators.required], 
    })  
  } 
  newOsccategoriesOdd(): FormGroup {  
    return this.fb.group({  
      idCategoriesOdd: '',
      description: '', 
    })  
  }  
  addOscCategoriesOddNew(){
    this.getAddOscCategoriesOddArray().push(this.newOsccategoriesOdd()); 
    
  }
  removeAddOsccategoriesOdd(i:number) {  
    this.getAddOscCategoriesOddArray().removeAt(i);  
  } 
  addOsccategoriesOdd() {  
    console.log("taille tab= "+  this.getOsccategoriesOddArray().length)
    console.log(this.getOsccategoriesOddArray().length)
    this.getOsccategoriesOddArray().push(this.newOsccategoriesOdd());  
  } 
  getOsccategoriesOddArray(): FormArray {  
    return this.OscForm.get("osccategoriesOdd") as FormArray  
  }

  updateOsc(){

   
     
      //construction du tableau des zones d'intervention
    var zoneInterventionArray=new Array()
    var zoneInterventions = this.OscForm.get('zoneInterventions') as FormArray;
    for (let index = 0; index < zoneInterventions.length; index++) {
      zoneInterventionArray.push({'name':zoneInterventions.at(index).value.name,
                                  'longitude':zoneInterventions.at(index).value.longitude,
                                'latitude':zoneInterventions.at(index).value.latitude})

    }

    //construction du tableau des catégories d'odd de l'osc
     var oddCategories=new Array()
     var categoriesOdd = this.OscForm.get('osccategoriesOdd') as FormArray;
    for (let index = 0; index < categoriesOdd.length; index++) {
      oddCategories.push({'id':categoriesOdd.at(index).get('idCategoriesOdd').value,
                                  'description':categoriesOdd.at(index).value.description})
        console.log(categoriesOdd.at(index).get('idCategoriesOdd').value)
    }

    var categoriesOdd = this.OscForm.get('addOscCategoriesOdd') as FormArray;
    for (let index = 0; index < categoriesOdd.length; index++) {
      oddCategories.push({'id':categoriesOdd.at(index).get('idCategoriesOdd').value,
                                  'description':categoriesOdd.at(index).value.description})
        console.log(categoriesOdd.at(index).get('idCategoriesOdd').value)
    }

    console.log(oddCategories)
    var data = {
      id:this.osc.id,
      name: this.OscForm.value.name,
      abbreviation: this.OscForm.value.abbreviation,
      pays: this.OscForm.value.pays,
      date_fondation: this.model.year+"/"+this.model.month+"/"+this.model.day,
      description: this.OscForm.value.description,
      personne_contact: this.OscForm.value.personne_contact,
      telephone: this.OscForm.value.telephone,
      email_osc:this.OscForm.value.email_osc,
      site_web:this.OscForm.value.site_web,
      facebook: this.OscForm.value.facebook,
      twitter: this.OscForm.value.twitter,
      instagram: this.OscForm.value.instagram,
      linkedin: this.OscForm.value.linkedin,
      longitude: this.OscForm.value.longitude,
      latitude: this.OscForm.value.latitude,
      siege: this.OscForm.value.siege,
      zone_intervention: zoneInterventionArray,
      osccategoriesOdd: oddCategories,
      
    };
    this.ifddApiService.updateOsc(data)
  }
  }

  


