import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as jQuery from 'jquery';
import { IfddApiService } from 'src/app/services/ifdd-api/ifdd-api.service';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';
import { Datum } from 'src/app/shared/osc';
import { Router } from '@angular/router';


@Component({
  selector: 'app-creer-osc',
  templateUrl: './creer-osc.component.html',
  styleUrls: ['./creer-osc.component.sass']
})
export class CreerOscComponent implements OnInit {

  //formulaire de création des osc
  OscForm!: FormGroup;
  private readonly notifier: NotifierService;
idCategoriesOdd= new Array() 

//calendar
model: NgbDateStruct;

data:any
loading=false

  constructor( private router: Router, notifierService: NotifierService,private fb: FormBuilder,private ifddApiService: IfddApiService) {
    this.notifier = notifierService;
   
   }
   addItem(data:any) {
    // Get a reference to the table
    console.log("ajout")
    var table: HTMLTableElement = <HTMLTableElement> document.getElementById("oscTable");
    var row = table.insertRow(-1);
   this.addCell(row,0,data.name)
   this.addCell(row,1,data.pays)
   this.addCell(row,2,data.date_fondation)
  }
   addCell(row,index,text){
    let newCell = row.insertCell(index);
    let newText = document.createTextNode(text);
    newCell.appendChild(newText);
   } 
  
  
   getZoneInterventionsArray(): FormArray {  
    return this.OscForm.get("zoneInterventions") as FormArray  
  }  
  getOsccategoriesOddArray(): FormArray {  
    return this.OscForm.get("osccategoriesOdd") as FormArray  
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

  
  addZoneIntervention() {  
    console.log("taille tab= "+  this.getZoneInterventionsArray().length)
    console.log(""+  this.getZoneInterventionsArray())
    this.getZoneInterventionsArray().push(this.newZoneIntervention());  
  }
  addOsccategoriesOdd() {  
    console.log("taille tab= "+  this.getOsccategoriesOddArray().length)
    console.log(this.getOsccategoriesOddArray().length)
    this.getOsccategoriesOddArray().push(this.newOsccategoriesOdd());  
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
  removeAllOsccategoriesOdd(){
    for (let index = this.getOsccategoriesOddArray().length-1; index > 0; index--){
        this.getOsccategoriesOddArray().removeAt(index)
        console.log("delete.........")
        
        
    }}
  
  ngOnInit(): void {

   
    
    //initialisation du formulaire de création de l'OSC
    this.OscForm = this.fb.group({
      name: ['',Validators.required],
      abbreviation: ['',Validators.required],
      pays: ['',Validators.required],
      date_fondation: [''],
      description: ['', ],
      personne_contact: ['', ],
      telephone: [''],
      email_osc: [''],
      site_web: ['',],
      facebook: ['',],
      twitter: ['', ],
      instagram: ['', ],
      linkedin: ['',],
      longitude: [''],
      latitude: [''],
      siege: [''],
      zoneInterventions:this.fb.array([]), 
      osccategoriesOdd: this.fb.array([]),
      
    });
    
    this.getZoneInterventionsArray().push(this.newZoneIntervention());
    this.getOsccategoriesOddArray().push(this.newOsccategoriesOdd());
  
    

    //get odd categories
    this.idCategoriesOdd=this.ifddApiService.getAllCategoriesOdd()

  }
  submit(){
    this.loading=true
    console.log("dta  = "+this.OscForm.value.date_fondation)
   
    if(this.OscForm.valid){
     
      //construction du tableau des zones d'intervention
    var zoneInterventionArray=new Array()
    var zoneInterventions = this.OscForm.get('zoneInterventions') as FormArray;
    for (let index = 0; index < zoneInterventions.length; index++) {
      zoneInterventionArray.push({'name':zoneInterventions.at(index).value.name,
                                  'longitude':zoneInterventions.at(index).value.longitude,
                                'latitude':zoneInterventions.at(index).value.latitude})

    }
    console.log(zoneInterventionArray)

     //construction du tableau des catégories d'odd de l'osc
     var oddCategories=new Array()
     var categoriesOdd = this.OscForm.get('osccategoriesOdd') as FormArray;
    for (let index = 0; index < categoriesOdd.length; index++) {
      oddCategories.push({'id':categoriesOdd.at(index).get('idCategoriesOdd').value,
                                  'description':categoriesOdd.at(index).value.description})
        console.log(categoriesOdd.at(index).get('idCategoriesOdd').value)
    }
    console.log(oddCategories)
    var data = {
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

   this.creerOsc(data)
   
    this.removeAllZoneIntervention()
    this.removeAllOsccategoriesOdd()
  

   
    

  }
}

creerOsc(data){
  this.ifddApiService.creerOSC(data).subscribe(osc => {
      if(osc.success){
        this.loading=false
        this.OscForm.reset()
        this.notifier.notify('success','création réussie');
         jQuery('app-creer-osc').css('display', 'none');

        this.router.navigate(["fiche-osc"])
      }
      else{
        this.notifier.notify('error', 'Création échouée');    
      }
   });
}
  annuler(){
    this.removeAllZoneIntervention()
    this.removeAllOsccategoriesOdd()
    this.OscForm.reset()
    jQuery('app-creer-osc').css('display', 'none');
  }

  get f() {
    return this.OscForm.controls;
  }

  
}
