import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { ListMoviesService } from './service/list-movies.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FavoritesComponent } from './favorites/favorites.component';
import { AuthGuard } from './service/AuthGaurd';
import { AuthInterceptors } from './service/AuthInterceptors';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    ErrorComponent,
    MoviedetailsComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [ListMoviesService, AuthGuard,{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptors, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
