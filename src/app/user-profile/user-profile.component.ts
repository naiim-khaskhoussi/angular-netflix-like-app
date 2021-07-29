import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  getCurrentUser() {
    return this.authService.getLoggedUser();
  }

  follow() {
    return;
  }

  getUser(username: any) {
    return this.authService.getUser(username);
  }

}
