import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  categories = [
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4"
  ];
  movies: Movie[] = [
    {
      name: "Movie 1",
      category: "Category 1",
      publisher: "colombia"
    },
    {
      name: "Movie 2",
      category: "Category 1",
      publisher: "colombia"
    },
    {
      name: "Movie 3",
      category: "Category 2",
      publisher: "hama"
    }
  ]
  constructor() { }

  getAllCategories() {
    return this.categories;
  }

  getMoviesByPublisher(publisher: string) {
    return this.movies
      .filter(movie => movie.publisher == publisher);
  }

  searchMovies(keywords: string, category: string) {
    let resMovies: Movie[] = [];
    this.movies.forEach(movie => {
      if (movie.name.includes(keywords) || movie.category == category) {
        resMovies.push(movie)
      }
    });
    return resMovies;
  }

}
