import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Movie[] = [
    {
      name: "Movie 1",
      publisher: "colombia"
    },
    {
      name: "Movie 2",
      publisher: "colombia"
    },
    {
      name: "Movie 3",
      publisher: "hama"
    }
  ]
  constructor() { }

  getMoviesByPublisher(publisher: string) {
    return this.movies
      .filter(movie => movie.publisher == publisher);
  }
}
