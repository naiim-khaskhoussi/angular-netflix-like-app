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
      publisher: "colombia",
      image: "https://www.looper.com/img/gallery/365-days-part-2-release-date-cast-and-plot-what-we-know-so-far/l-intro-1621027334.jpg"
    },
    {
      name: "Movie 2",
      category: "Category 1",
      publisher: "colombia",
      image: ""
    },
    {
      name: "Movie 3",
      category: "Category 2",
      publisher: "hama",
      image: ""
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
      if (movie.name.includes(keywords) && movie.category == category) {
        resMovies.push(movie)
      }
    });
    return resMovies;
  }

}
