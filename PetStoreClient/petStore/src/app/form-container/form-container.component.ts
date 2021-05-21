import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../auth/service/login.service';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css']
})
export class FormContainerComponent implements OnInit {

  
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  public isSignedIn(): boolean{
    return this.loginService.signedIn;
  }

  public login() {
    this.router.navigate(['/auth/login']);
  }

  public logout() {
    this.loginService.logout();
  }
}
