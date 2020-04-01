import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AuthGuard } from './service/AuthGaurd';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movie', component: MoviedetailsComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent  },
  { path: 'logout', component: LogoutComponent ,canActivate:[AuthGuard]},
  {path:'register' , component:RegisterComponent},
  {path:'favorites',component:FavoritesComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: '/home',pathMatch:'full' },
  {path:"**", component:ErrorComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
