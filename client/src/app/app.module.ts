import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SessionService } from "./service/session.service";
import { RouterModule } from "@angular/router";
import { routes } from './routes/routes';

import { AppComponent } from './componentePricipal/app.component';
import { AuthLoginComponent } from './components/logearse/auth-login/auth-login.component';
import { AuthSignupComponent } from './components/logearse/auth-signup/auth-signup.component';
import { HomeComponent } from './components/navbarentodoslados/home.component';
import { FondohomeComponent } from './components/fondohome/fondohome.component';
import { CardsComponent } from './components/componentClashRoyale/cards/cards.component';
import { ClashService } from './service/clash.service';
import { ArenasComponent } from './components/componentClashRoyale/arenas/arenas.component';
import { LeaguesComponent } from './components/componentClashRoyale/leagues/leagues.component';
import { ChestsComponent } from './components/componentClashRoyale/chests/chests.component';
import { PlayersComponent } from './components/componentClashRoyale/players/players.component';
import { CardsdetailsComponent } from './components/componentClashRoyale/cards/cardsdetails/cardsdetails.component';
import { ArenasdetailsComponent } from './components/componentClashRoyale/arenas/arenasdetails/arenasdetails.component';
import { ChestsdetailsComponent } from './components/componentClashRoyale/chests/chestsdetails/chestsdetails.component';
import { LeaguesdetailsComponent } from './components/componentClashRoyale/leagues/leaguesdetails/leaguesdetails.component';
import { PlayersdetailsComponent } from './components/componentClashRoyale/players/playersdetails/playersdetails.component';
import { FileSelectDirective } from "ng2-file-upload";

@NgModule({
  declarations: [
    AppComponent,
    AuthLoginComponent,
    AuthSignupComponent,
    HomeComponent,
    FondohomeComponent,
    CardsComponent,
    ArenasComponent,
    LeaguesComponent,
    ChestsComponent,
    PlayersComponent,
    CardsdetailsComponent,
    ArenasdetailsComponent,
    ChestsdetailsComponent,
    LeaguesdetailsComponent,
    PlayersdetailsComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService, ClashService],
  bootstrap: [AppComponent]
})
export class AppModule { }
