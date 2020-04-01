import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ Favorites} from './Favorites';
import { Movie } from './Movie';
@Injectable({
  providedIn: 'root'
})
export class FavoriteMovieService {

  // private getFavoriteUrl:string="http://localhost:3000/movies";
  private getFavoriteUrl:string="http://localhost:8080/movie-api/v1/movie";

  constructor(private http:HttpClient) { }

  getMovieDetails(): Observable<Movie[]> {
         return this.http.get<Movie[]>(this.getFavoriteUrl);
  }

  getPostMovie(data) {
    let id = data.id;
    console.log(id);
    return this.http.put<any>(this.getFavoriteUrl+"/"+id, data);
  }

  deleateMovie(data)
  {
    let id =data.id;
    return this.http.delete(this.getFavoriteUrl+"/"+id,data);
  }
}
