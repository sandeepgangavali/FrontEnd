import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './Movie';
import { Favorites } from './Favorites';


@Injectable({
  providedIn: 'root'
})
export class ListMoviesService {

  private url: string = "https://api.themoviedb.org/3/discover/movie?api_key=002a7ece7ff93fe03722f889ca1a6e21&language=en-IN&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
  private searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=002a7ece7ff93fe03722f889ca1a6e21&query=";
  // private postMoviesUrl="http://localhost:3000/movies";
  private postMoviesUrl="http://localhost:8080/movie-api/v1/movie";

  private finalSearchUrl;
  constructor(private http: HttpClient) { }


  getMovieDetails(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url);
  }

  getSearchedMovie(key): Observable<Movie[]> {
    this.finalSearchUrl = this.searchUrl + key;
    console.log(this.finalSearchUrl);
    return this.http.get<Movie[]>(this.finalSearchUrl);

  }
  // this.post<Movie>('localhost:3000', data, )

  postMovie (data): Observable<Movie> {
    return this.http.post<Movie>(this.postMoviesUrl, data);
  }
}
