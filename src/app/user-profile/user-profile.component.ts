import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interfaces/user';
import { Movie } from '../interfaces/movie';
import { AuthService } from '../services/auth.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User = { } as User;
  userMovies : Movie[] = []

  constructor(
    private authService: AuthService, 
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.user = this.getUser(this.activatedRoute.snapshot.params.username);
    this.userMovies = this.movieService.getMoviesByPublisher(this.user.username);
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
