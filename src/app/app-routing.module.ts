import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { AddCountryComponent } from './components/add-country/add-country.component';
import { AdminComponent } from './components/admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { SignupComponent } from './components/signup/signup.component';
import { SearchMatchesComponent } from './components/search-matches/search-matches.component';
import { WeatherComponent } from './components/weather/weather.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { SeConnecterComponent } from './components/se-connecter/se-connecter.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ModifierComponent } from './components/modifier/modifier.component';


const routes: Routes = [
  //http://localhost:4200/
  {path: "", component: HomeComponent},
  //http://localhost:4200/connexion ==> Afiicher login component
  {path: "login", component: LoginComponent},
  //http://localhost:4200/connexion ==> Afiicher signup component
  {path: "subscription", component: SignupComponent},
   //http://localhost:4200/connexion ==> Afiicher signupadmin component
   {path: "signupAdmin", component: SignupComponent},
  //http://localhost:4200/connexion ==> Afiicher add match component
  {path: "addMatch", component: AddMatchComponent},
  //http://localhost:4200/connexion ==> Afiicher edit match component
  {path: "editMatch/:x", component: AddMatchComponent},
  //http://localhost:4200/connexion ==> Afiicher add player component
  {path: "addPlayer", component: AddPlayerComponent},
   //http://localhost:4200/connexion ==> Afiicher modifier player component
   {path: "editPlayer/:x", component: AddPlayerComponent},
  //http://localhost:4200/connexion ==> Afiicher add team component
  {path: "addTeam", component: AddTeamComponent},
   //http://localhost:4200/connexion ==> Afiicher modifier team component
   {path: "editTeam/:x", component: AddTeamComponent},
    //http://localhost:4200/connexion ==> Afiicher matches component
  {path:"matches",component : MatchesComponent},
  //http://localhost:4200/connexion ==> Afiicher players component
  {path:"players",component: PlayersComponent},
  //http://localhost:4200/connexion ==> Afiicher admin component
  {path:"admin" ,component:AdminComponent},
   //http://localhost:4200/connexion ==> Afiicher add country component
  {path:"addCountry" ,component:AddCountryComponent},
   //http://localhost:4200/connexion ==> Afiicher add staduim component
   {path:"addStaduim" ,component:AddStadiumComponent},
    //http://localhost:4200/matchinfo/3 ==> Afiicher match info component
   {path: "matchsInfo/:id", component:  MatchInfoComponent},
   //http://localhost:4200/connexion ==> Afiicher add player component
   {path: "playerInfo/:id", component:PlayerInfoComponent},
   //http://localhost:4200/connexion ==> Afiicher Search component
   {path: "searchMatches", component:SearchMatchesComponent},
   //http://localhost:4200/connexion ==> Afiicher send weather component
   {path: "Weather", component:WeatherComponent},
    //http://localhost:4200/connexion ==> Afiicher send weather component
    {path: "apiTeams", component:WeatherComponent},
   //http://localhost:4200/connexion ==> Afiicher inscription component
   {path: "inscription", component:InscriptionComponent},
   //http://localhost:4200/connexion ==> Afiicher login component
   {path: "loginhomwork", component:SeConnecterComponent},
   {path: "clients", component:ClientsComponent},
   {path: "modifierClient/:id", component:ModifierComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
