import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  languages = ["English", "Arabic", "French"];
  selectedLanguage = "English";

  constructor() { }

  ngOnInit(): void {
  }

}
