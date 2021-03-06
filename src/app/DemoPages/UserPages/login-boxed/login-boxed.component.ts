import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { NotifierService } from "angular-notifier";
import { AuthApiService } from "src/app/services/auth/auth-api.service";

@Component({
  selector: "app-login-boxed",
  templateUrl: "./login-boxed.component.html",
  styles: [],
})
export class LoginBoxedComponent implements OnInit {
  /** form for login */
  loginForm: FormGroup = this.fb.group({});
  private readonly notifier: NotifierService;

  loading:Boolean
  
  constructor(
    private fb: FormBuilder,
    public authService: AuthApiService,
    notifierService: NotifierService,
    private router: Router
  ) {
    this.notifier = notifierService;
  }

  ngOnInit() {
   // localStorage.removeItem("token");
    this.initialiseLoginForm();
  }

  /**
   * initilialise login form
   */
  initialiseLoginForm() {
    this.loginForm.addControl(
      "email",
      new FormControl(
        "",
        Validators.compose([Validators.required, Validators.email])
      )
    );
    this.loginForm.addControl(
      "password",
      new FormControl("", Validators.required)
    );
  }

  /**
   * submit login form
   */
  submitLoginForm() {
    this.loading=true
    this.authService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .then((response: { error: boolean; msg?: string }) => {
        if (response.error) {
          this.notifier.notify('error', 'Echec de Connexion');
          console.log(response);
          this.loading=false
          
        } else {
          this.loading=false
          //this.router.navigate([""]);
          this.router.navigate([""]);
          this.notifier.notify('success', 'Connexion réussie');
         
        }
      });
  }
}
