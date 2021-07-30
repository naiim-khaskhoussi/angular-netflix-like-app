import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  categories: string[] = [];
  keywords: string = "";
  category: string = "Select category";
  moviesResult: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.categories = this.movieService.getAllCategories();
    console.log(this.categories);
  }

  explore() {
    this.moviesResult = this.movieService.searchMovies(this.keywords, this.category);
  }

}
