import { Component, OnInit } from '@angular/core';
import { FavoriteMovieService } from '../service/favorite-movie.service';
import { Movie } from '../service/Movie';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  public responseData;
  public favMovieInfo;
  favorite: Movie[] = [];
  favoriteFinal: Movie[] = [];
  value:string;


  constructor(private favoriteMovieService:FavoriteMovieService) { }

  ngOnInit() {

   this.favoriteMovieService.getMovieDetails().subscribe(response =>{
    this.responseData=response;
    //  this.favMovieInfo=this.responseData;
    //  console.log(this.favMovieInfo);
    for(let curr of this.responseData)
    {
      let fav = new Movie();
      fav.title=curr.title;
      fav.overview=curr.overview;
      fav.poster_path=curr.poster_path;
      fav.comments=curr.comments;
      fav.id=curr.id;
      this.favorite.push(fav);
     }
    //  this.favoriteFinal=this.favorite;
  
  });
  }
  upDate(updatedComment) {
    this.value = updatedComment;
    console.log(updatedComment);
  }
  getComments(data) {
    console.log(data);
    data.comments=this.value;
    this.favoriteMovieService.getPostMovie(data).subscribe();
  }

  deleateMovie(movieData)
  {
    console.log(movieData);
    this.favoriteMovieService.deleateMovie(movieData).subscribe(data=>{
      this.favorite=this.favorite.filter(item=>item.id != movieData.id);
    });
  }


   }



