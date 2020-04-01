import { Component, OnInit } from '@angular/core';
import { ListMoviesService } from '../service/list-movies.service';
import { Movie } from '../service/Movie';
import { Favorites } from '../service/Favorites';


@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
  public moviesInfo;
  public responseData;
  movies: Movie[] = [];
  moviesFinal: Movie[] = [];
  public searchText;
   public value:string;


  constructor(private listMoviesService: ListMoviesService) { }

  ngOnInit() {
    this.listMoviesService.getMovieDetails().subscribe(response => {
      this.responseData = response;
      this.moviesInfo = this.responseData.results;
      for (let movieRes of this.moviesInfo) {
        let movie = new Movie();
        movie.title = movieRes.title;
        movie.overview = movieRes.overview;
        movie.vote_average = movieRes.vote_average;
        movie.poster_path = "https://image.tmdb.org/t/p/w500" + movieRes.poster_path;
        this.movies.push(movie);
      }
      // debugger;
      // this.moviesFinal=this.movies.splice(0,30);
      this.moviesFinal = this.movies;
    });


  }

  searchMovie(searchText)
  {
   this.listMoviesService.getSearchedMovie(searchText).subscribe(response =>{
     this.movies=[];
     this.moviesFinal=[];
    this.responseData = response;
    this.moviesInfo = this.responseData.results;
    for (let movieRes of this.moviesInfo) {
      let movie = new Movie();
      movie.title = movieRes.title;
      movie.overview = movieRes.overview;
      movie.vote_average = movieRes.vote_average;
      movie.poster_path = "https://image.tmdb.org/t/p/w500" + movieRes.poster_path;
      this.movies.push(movie);
    }
    this.moviesFinal = this.movies;

   });
  }

  save(){
    this.value = window.prompt("Enter your comments");
   }

   getItems(data){
     let fav = new Movie();
    //  fav.comments = this.value;
     fav=data;
     fav.comments=this.value;
     console.log(fav);
     this.listMoviesService.postMovie(fav).subscribe();
   }

}
