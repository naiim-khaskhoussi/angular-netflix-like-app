import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginInfo } from '../interfaces/login-info';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css']
})
export class SigninFormComponent implements OnInit {

  login: LoginInfo = {
    username: "",
    password: "",
    rememberMe: false
  };
  authError = "";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  authenticate() {
    if (this.authService.authenticate(this.login)){
      this.router.navigate([`/${this.login.username}`]);
      this.authError = "";
    } else {
      this.login.username = "";
      this.login.password = "";
      this.login.rememberMe = false;
      this.authError = "Please enter a valid email or phone number.";
    }
  }

}
