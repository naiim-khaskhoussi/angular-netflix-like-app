import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  }

  getCurrentUser() {
    return this.authService.getLoggedUser();
  }

  logOut() {
    this.authService.logOut();
    this.router.navigate(["/login"]);
  }

}
