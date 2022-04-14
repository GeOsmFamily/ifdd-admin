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
    
   


  creerODD(data:any){
    this.apiService.post_requete('/api/odd',data)
    .then((result:any) => {
      if(result.success){
        this.notifier.notify("succès", "Création réussie");
      }
      else{
        this.notifier.notify("error", "Création échouée");
      }
     // console.log(result)
    });
  }

    creerOSC(data:any){
      this.apiService.post_requete('/api/osc',data)
      .then((result:any) => {
        if(result.success){
          this.notifier.notify("succès", "Création réussie");
        }
        else{
          this.notifier.notify("error", "Création échouée");
        }
       // console.log(result)
      });
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
}
