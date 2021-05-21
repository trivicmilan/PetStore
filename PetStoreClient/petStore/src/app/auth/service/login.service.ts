import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = environment.apiUrl + 'api/auth/login';
  public signedIn: boolean = false;
  
  constructor(private fb: FormBuilder, private http: HttpClient,
    private router: Router) {
      if (localStorage.getItem('token') != null)
        this.signedIn = true; 
      }

   

  login(loginModel: Login) {
    return this.http.post(this.apiUrl, loginModel);
  }

  public logout() {
    this.signedIn = false;
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

  roleMatch(allowedRoles: any[]): boolean {
    var isMatch = false; 
    var token = localStorage.getItem('token');
    if(token == null)
      return isMatch;
    var payLoad = JSON.parse(window.atob(token.split('.')[1]));
    var userRole = payLoad.role;
    allowedRoles.forEach(element => {
      if (userRole == element) {
        isMatch = true;
      }
    });
    return isMatch;
  }
}
