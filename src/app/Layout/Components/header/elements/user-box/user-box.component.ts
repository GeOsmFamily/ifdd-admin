import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NotifierService } from "angular-notifier";
import { AuthApiService } from "src/app/services/auth/auth-api.service";
import { ThemeOptions } from "../../../../../theme-options";

@Component({
  selector: "app-user-box",
  templateUrl: "./user-box.component.html",
})
export class UserBoxComponent implements OnInit {
  
  private readonly notifier: NotifierService;

  constructor(public globals: ThemeOptions,private authService:AuthApiService,notifierService: NotifierService,
    private router: Router) {
      this.notifier = notifierService;
    }

  ngOnInit() {}

  deconnexion(){
    this.authService.logout().then((response: { error: boolean; msg?: string }) => {
      if (response.error) {
        this.notifier.notify('error', 'Echec de Déconnexion');
        console.log(response);
        
      } else {
       // this.loading=false
        //this.router.navigate([""]);
        
        this.notifier.notify('success', 'Déconnexion réussie');
        this.router.navigate(["/login"]);
       
      }
    });
  }
}
