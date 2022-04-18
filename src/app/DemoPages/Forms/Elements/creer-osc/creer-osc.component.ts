import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as jQuery from 'jquery';
import { IfddApiService } from 'src/app/services/ifdd-api/ifdd-api.service';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-creer-osc',
  templateUrl: './creer-osc.component.html',
  styleUrls: ['./creer-osc.component.sass']
})
export class CreerOscComponent implements OnInit {

  //formulaire de création des osc
  OscForm!: FormGroup;

idCategoriesOdd= new Array() 

//calendar
model: NgbDateStruct;
date: {year: number, month: number};
  constructor(private calendar: NgbCalendar,private fb: FormBuilder,private ifddApiService: IfddApiService) {
   
   
   }

   selectToday() {
    this.model = this.calendar.getToday();
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
      name: ['', [Validators.required]],
      abbreviation: ['', Validators.required],
      numero_osc: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      pays: ['', Validators.required],
      date_fondation: ['', Validators.required],
      description: ['', ],
      personne_contact: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      email_osc: ['',  [Validators.required, Validators.email]],
      site_web: ['',],
      facebook: ['',],
      twitter: ['', ],
      instagram: ['', ],
      linkedin: ['',],
      longitude: ['', Validators.required],
      latitude: ['', Validators.required],
      siege: ['', Validators.required],
      zoneInterventions:this.fb.array([],[Validators.required]), 
      osccategoriesOdd: this.fb.array([]),
      
    });
    
    this.getZoneInterventionsArray().push(this.newZoneIntervention());
    this.getOsccategoriesOddArray().push(this.newOsccategoriesOdd());
  
    

    //get odd categories
    this.idCategoriesOdd=this.ifddApiService.getAllCategoriesOdd()

  }
  submit(){
    console.log("dta  = "+this.OscForm.value.date_fondation)
   
    if(this.OscForm.valid){
      alert("valid")
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
      numero_osc: this.OscForm.value.numero_osc,
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

    var ok=this.ifddApiService.creerOSC(data)
    this.removeAllZoneIntervention()
    this.removeAllOsccategoriesOdd()
    if(ok)
      this.OscForm.reset()
    jQuery('app-creer-osc').css('display', 'none');
   // alert(" création réussie")
   
    }
    else{
     // alert("formulaire non valide")
      //this.notifier.notify('error', 'Echec de Connexion');

    }
  }
  annuler(){
    this.removeAllZoneIntervention()
    this.removeAllOsccategoriesOdd()
    jQuery('app-creer-osc').css('display', 'none');
  }

  get f() {
    return this.OscForm.controls;
  }

  
}
