import { Routes } from '@angular/router';
import { AppComponent } from '../componentePricipal/app.component';
import { AuthLoginComponent } from '../components/logearse/auth-login/auth-login.component';
import { AuthSignupComponent } from '../components/logearse/auth-signup/auth-signup.component';
import { HomeComponent } from '../components/navbarentodoslados/home.component';
import { FondohomeComponent } from '../components/fondohome/fondohome.component';
import { CardsComponent } from '../components/componentClashRoyale/cards/cards.component';
import { ArenasComponent } from '../components/componentClashRoyale/arenas/arenas.component';
import { ChestsComponent } from '../components/componentClashRoyale/chests/chests.component';
import { LeaguesComponent } from '../components/componentClashRoyale/leagues/leagues.component';
import { PlayersComponent } from '../components/componentClashRoyale/players/players.component';
import { CardsdetailsComponent } from '../components/componentClashRoyale/cards/cardsdetails/cardsdetails.component';
import { ArenasdetailsComponent } from '../components/componentClashRoyale/arenas/arenasdetails/arenasdetails.component';
import { ChestsdetailsComponent } from '../components/componentClashRoyale/chests/chestsdetails/chestsdetails.component';
import { PlayersdetailsComponent } from '../components/componentClashRoyale/players/playersdetails/playersdetails.component';
import { LeaguesdetailsComponent } from '../components/componentClashRoyale/leagues/leaguesdetails/leaguesdetails.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: FondohomeComponent },
    { path: 'signup', component: AuthSignupComponent },
    { path: 'login', component: AuthLoginComponent },
    { path: 'cards', component: CardsComponent },
    { path: 'cards/:id', component: CardsdetailsComponent },
    { path: 'arenas', component: ArenasComponent },
    { path: 'arenas/:id', component: ArenasdetailsComponent },
    { path: 'chests', component: ChestsComponent },
    { path: 'chests/:id', component: ChestsdetailsComponent },
    { path: 'players', component: PlayersComponent },
    { path: 'players/:id', component: PlayersdetailsComponent },
    { path: 'leagues', component: LeaguesComponent },
    { path: 'leagues/:id', component: LeaguesdetailsComponent },
    { path: '**', redirectTo: '' }
  ];
  