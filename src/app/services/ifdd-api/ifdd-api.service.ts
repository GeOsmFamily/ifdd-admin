import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api/api.service';
import { catchError } from "rxjs/operators";
import { Observable, from } from "rxjs";
import { NotifierService } from 'angular-notifier';
import { OddInterface } from 'src/app/shared/oddInterface';

@Injectable({
  providedIn: 'root'
})
export class IfddApiService {
  

  private readonly notifier: NotifierService; 
  
  url_prefix = environment.backend;

  entetes = new HttpHeaders()
  .set('content-type', 'application/json')
  
  .set('Access-Control-Allow-Origin', '*')
  .set('Accept', 'application/json')
  .set(
    'X-Authorization',
    environment.apiKey
  )
  idCategoriesOdd = new Array();

  constructor( public router: Router,
    private httpClient: HttpClient,
    public apiService: ApiService,
    notifierService: NotifierService
    ) { 
      this.notifier = notifierService;
    }

  /**
   * Get header
   */
   get_header() {
    this.entetes= this.entetes
      .set("Authorization", "Bearer  " + localStorage.getItem("token"))
      .set("X-Authorization", environment.apiKey);
    return this.entetes;
  }
    
   


  creerODD(data:any):boolean{
   var  ok=false
    this.apiService.post_requete('/api/odd',data)
    .then((result:any) => {
      if(result.success){
        ok=true
        this.notifier.notify("success", "Création réussie");
      }
      else{
        ok=false
        this.notifier.notify("error", "Création échouée");
      }
     // console.log(result)
    });
    return ok
  }

    creerOSC(data:any):boolean{
      var ok=false
      this.apiService.post_requete('/api/osc',data)
      .then((result:any) => {
        if(result.success){
          ok=true
          this.notifier.notify("success", "Création réussie");
        }
        else{
          ok=false
          this.notifier.notify("error", "Création échouée");
        }
       // console.log(result)
      });
      return ok
    }

    getAllCategoriesOdd():any[]{
      this.apiService.getRequest('/api/categorieodd')
      .then((result) => {
        console.log(result)
        if(result){
          for (let index = 0; index < result.data.length; index++) {
            this.idCategoriesOdd?.push({'id':result.data[index].id,
                                        'categorie_number':result.data[index].category_number})
            
          }
         console.log(this.idCategoriesOdd)
        }
        else{
          //this.notifier.notify("error", "Création échouée");
        }
       // console.log(result)
      });

      return this.idCategoriesOdd
    }


    getAllOdd():any[]{
     var  listeOdd= new Array()
      this.apiService.getRequest('/api/odd')
      .then((result) => {
        console.log(result)
        if(result){
        for (let index = 0; index < result.data.length; index++) {
            listeOdd?.push({'id':result.data[index].id,
            'name':result.data[index].name,
                          'number':result.data[index].number,
                          'number_categorie':result.data[index].number_categorie,
                          'color':result.data[index].color,
                          'logo_odd':result.data[index].logo_odd
                          
                        }
                          )            
          }
         console.log(listeOdd)
        }
        else{
          //this.notifier.notify("error", "Création échouée");
        }
       // console.log(result)
      });

      return listeOdd
    }

    getAllOsc():any[]{
      var  listeOsc= new Array()
       this.apiService.getRequest('/api/osc')
       .then((result) => {
         console.log(result)
         if(result){
         for (let index = 0; index < result.data.length; index++) {
             listeOsc?.push({'id':result.data[index].id,
             'name':result.data[index].name,
             'numero_osc':result.data[index].numero_osc,
                           'pays':result.data[index].pays,
                           'date_fondation':result.data[index].date_fondation,
                                                      
                         }
                           )            
           }
          console.log(listeOsc)
         }
         else{
           //this.notifier.notify("error", "Création échouée");
         }
        // console.log(result)
       });
 
       return listeOsc
     }

     updateOdd(data:any):boolean{
      var ok=false

      this.apiService.put_requete('/api/odd/'+data.id,data)
      .then((result:any) => {
        if(result.success){
          ok=true
          this.notifier.notify("success", "Mise à jour réussie");
        }
        else{
          ok=false
          this.notifier.notify("error", "Mise à jour échouée");
        }
       // console.log(result)
      });
      return false
     }
}
