import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login.model';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  public form: FormGroup = new FormGroup({});
  
  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private snackBar: MatSnackBar,
    private router: Router
    ) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('/home');

    this.form = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }
  
  public login({ value, valid }: { value: Login, valid: boolean }) {
    if (valid) {
    this.loginService.login(value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.loginService.signedIn = true;
        this.router.navigateByUrl('/home');
      },
      err => {
        if (err.status == 400)
          this.snackBar.open("Incorrect username or password.", undefined, {
            duration: 2000,
          });
        else
          console.log(err);
      }
    );
  }
  }

}
