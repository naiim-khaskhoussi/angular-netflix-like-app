import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../interfaces/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  languages = ["English", "Arabic", "French"];
  selectedLanguage = "English";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.users.push({
      username: "naiim",
      password: "",
      followers: [],
      following: [],
      role: Role.USER
    })
  }

  getCurrentUser() {
    return this.authService.getLoggedUser();
  }

  logOut() {
    this.authService.logOutUser();
    this.router.navigate(["/login"]);
  }

}
