import { Data } from './../../shared/oddInterface';
import { Datum, OrganisationCivile } from './../../shared/osc';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api/api.service';
import { catchError } from "rxjs/operators";
import { Observable, from } from "rxjs";
import { NotifierService } from 'angular-notifier';
import { OddInterface } from 'src/app/shared/oddInterface';
import { map } from 'rxjs/internal/operators/map';
import { Results } from 'src/app/DemoPages/Tables/tables-main/results';
import { ListeOdd } from 'src/app/shared/odd';
import { CountOsc } from 'src/app/shared/countOsc';
import { CategoriesOdd } from 'src/app/shared/categorieOdd';

@Injectable({
  providedIn: 'root'
})
export class IfddApiService {
  
  //public categoriesOdd: BehaviourSubject<

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

    creerOSC(data:any): Observable<any>{


      return from(this.apiService.post_requete('/api/osc',data)).pipe(
        map((osc) => {
         console.log(osc)
          return osc;
        }),
        catchError(err => {
          throw new Error(err);
        })
      );
     
      
    }

    getAllCategoriesOdd():Observable<CategoriesOdd>{

      return from( this.apiService.getRequest('/api/categorieodd')).pipe(
        map((cibles) => {
         //console.log(osc)
          return cibles;
        }),
        catchError(err => {
          throw new Error(err);
        })
      );
    
     
    }


    getAllOdd(): Observable<ListeOdd> {
      return from(this.apiService.getRequest('/api/odd')).pipe(
        map((odds:ListeOdd) => {
         
          return odds;
        }),
        catchError(err => {
          throw new Error(err);
        })
      );
    }
      getAllOsc1(): Observable<Results> {
      return from(this.apiService.getRequest('/api/osc?')).pipe(
        map((oscs:Results) => {
          console.log("hello")
          console.log(oscs.data.data)
          return oscs;
        }),
        catchError(err => {
          throw new Error(err);
        })
      );
    }
    findOscPerPage(
     
      pageNumber:number):  Observable<Results> {

        return from(this.apiService.getRequest('/api/osc?page='+pageNumber,
         )).pipe(
          map((oscs:Results) => {
            console.log(oscs.data)
            console.log(pageNumber +"jjjjjjj")
            return oscs;
          }),
          catchError(err => {
            throw new Error(err);
          })
        );

     
  }

  deleteOdd(id:string){
    this.apiService.delete_requete('/api/odd/'+id)
     .then((result) => {
    
      if(result){
        this.notifier.notify("success", "Suppression réussie");
        
      }
      else{
        this.notifier.notify("error", "Suppression échouée");
      }
     // console.log(result)
    });
  }
    deleteOsc(id:string){
      this.apiService.delete_requete('/api/osc/'+id)
       .then((result) => {
      
        if(result){
          this.notifier.notify("success", "Suppression réussie");
          
        }
        else{
          this.notifier.notify("error", "Suppression échouée");
        }
       // console.log(result)
      });
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
        console.log(result)
        console.log(data.logo_odd)
      });
      return false
     }

     updateOsc(data:any):boolean{
      var ok=false

      this.apiService.put_requete('/api/osc/'+data.id,data)
      .then((result:any) => {
        if(result.success){
          ok=true
          this.notifier.notify("success", "Mise à jour réussie");
        }
        else{
          ok=false
          this.notifier.notify("error", "Mise à jour échouée");
        }
       
      });
      return false
     }

     countOsc():Observable<CountOsc> {

      return from(this.apiService.getRequest('/api/count/osc'
       )).pipe(
        map((oscs:CountOsc) => {
          
          return oscs;
        }),
        catchError(err => {
          throw new Error(err);
        })
      );
     }
}
