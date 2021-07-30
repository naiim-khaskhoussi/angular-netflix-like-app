import { Component, Input, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {

  user: User = {} as User;
  passwordRetype: string = "";

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.getUser(localStorage.getItem("user"));
  }

  updateSettings() {

  }

}
