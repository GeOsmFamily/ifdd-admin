import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";
import { catchError } from "rxjs/operators";
import { map } from "rxjs/operators";
import { LoginResponse } from "src/app/shared/login-interface";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthApiService {
  headers: HttpHeaders = new HttpHeaders({});
  url_prefix = environment.backend;

  constructor(private http: HttpClient) {
    this.headers.append("Content-Type", "application/json");
    this.headers.append("Accept", "application/json");
    this.headers.append("X-Authorization", environment.apiKey);
  }

  /**
   * Get header
   */
  get_header() {
    this.headers = this.headers
      .set("Authorization", "Bearer  " + localStorage.getItem("token"))
      .set("X-Authorization", environment.apiKey);
    return this.headers;
  }

  /**
   * Store token and refresh token
   * @param token string
   * @param refresh string
   */
  storeToken(token: string) {
    localStorage.setItem("token", token);
  }

  deleteToken() {
    localStorage.removeItem("token");
  }

  /**
   * get user who is connect
   */
  getUserConnect(): Observable<LoginResponse> {
    return from(this.getRequest("/api/user/me")).pipe(
      map((user: LoginResponse) => {
        return user;
      }),
      catchError((err) => {
        throw new Error(err);
      })
    );
  }

  /**
   * Login a user and store his tokens
   * @param email
   * @param pwd
   * @returns boolean
   */
  login(email: string, pwd: string): Promise<{ error: boolean; msg?: string }> {
    return new Promise((resolve, reject) => {
      from(
        this.post_requete("/api/auth/login", {
          email: email,
          password: pwd,
        })
      )
        .pipe(
          catchError((err) => {
            console.log("ERROR")
            resolve({
              error: true,
              msg: "",
            });
            // return ''
            throw new Error(err);
          })
        )
        .subscribe(
          (login: LoginResponse) => {
            this.storeToken(login.data.token);
            console.log(login.data.token)
            resolve({
              error: false,
            });
          },
          (err) => {
            reject({
              resolve: true,
            });
          }
        );
    });
  }

  logout(): Promise<{ error: boolean; msg?: string }> {
    return new Promise((resolve, reject) => {
      from(this.getRequest("/api/auth/logout"))
        .pipe(
          catchError((err) => {
            resolve({
              error: true,
              msg: "",
            });
            // return ''
            throw new Error(err);
          })
        )
        .subscribe(
          (login: LoginResponse) => {
            this.deleteToken();
            resolve({
              error: false,
            });
          },
          (err) => {
            reject({
              resolve: true,
            });
          }
        );
    });
  }

  /**
   * Make a get request to Backend
   * @param string path url
   */
  getRequest(path: string): Promise<any> {
    let promise = new Promise((resolve, reject) => {
      this.http
        .get(this.url_prefix + path, { headers: this.get_header() })
        .toPromise()
        .then(
          (res) => {
            resolve(res);
          },
          (msg) => {
            // Error
            reject(msg);
          }
        );
    });

    return promise;
  }

  /**
   * Make a Post request to Backend
   * @param string path url
   * @param Object data
   */
  post_requete(url: string, data: Object): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.url_prefix + url, data, { headers: this.get_header() })
        .toPromise()
        .then(
          (res) => {
            resolve(res);
          },
          (msg) => {
            // Error

            reject(msg.error);
          }
        );
    });
  }
}
