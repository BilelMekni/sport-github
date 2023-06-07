import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ResultComponent } from './components/result/result.component';
import { NewsComponent } from './components/news/news.component';
import { StatsComponent } from './components/stats/stats.component';
import { BlogComponent } from './components/blog/blog.component';
import { InfoComponent } from './components/info/info.component';
import { ArticleComponent } from './components/article/article.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/player/player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { PlayersTabComponent } from './components/players-tab/players-tab.component';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { AddCountryComponent } from './components/add-country/add-country.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { AsterixPipe } from './pipes/asterix.pipe';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { GenderPipe } from './pipes/gender.pipe';
import {HttpClientModule } from "@angular/common/http"; // ecrire manuellement
import { ReversePipe } from './pipes/reverse.pipe';
import { SearchMatchesComponent } from './components/search-matches/search-matches.component';
import { MyFilterPipe } from './pipes/my-filter.pipe';
import { WeatherComponent } from './components/weather/weather.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { SeConnecterComponent } from './components/se-connecter/se-connecter.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ModifierComponent } from './components/modifier/modifier.component';
import { JwPaginationModule } from 'jw-angular-pagination';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    CupEventComponent,
    ResultComponent,
    NewsComponent,
    StatsComponent,
    BlogComponent,
    InfoComponent,
    ArticleComponent,
    AddMatchComponent,
    AddTeamComponent,
    AddPlayerComponent,
    HomeComponent,
    BannerComponent,
    MatchesComponent,
    PlayersComponent,
    PlayerComponent,
    AdminComponent,
    PlayersTabComponent,
    MatchesTableComponent,
    TeamsTableComponent,
    AddCountryComponent,
    AddStadiumComponent,
    MatchInfoComponent,
    PlayerInfoComponent,
    AsterixPipe,
    UsersTableComponent,
    GenderPipe,
    ReversePipe,
    SearchMatchesComponent,
    MyFilterPipe,
    WeatherComponent,
    InscriptionComponent,
    SeConnecterComponent,
    ClientsComponent,
    ModifierComponent
    
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,   // ecrir manuellemnt
    JwPaginationModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
