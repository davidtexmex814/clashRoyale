import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import "rxjs";
import { environment }  from '../../environments/environment';

const BASEURL:string= environment.BASEURL;

@Injectable()
export class ClashService {

  constructor(private http: Http) { }

  cards() {
    return this.http.get(`${BASEURL}/api/cards`)
      .map((res) => res.json());
  }
  cardsdetails(id) {
    return this.http.get(`${BASEURL}/api/cards/${id}`)
      .map((res) => res.json());
  }
  randomCards() {
    return this.http.get(`${BASEURL}/api/randomCards`)
      .map((res) => res.json());
  }
  arenas() {
    return this.http.get(`${BASEURL}/api/arenas`)
      .map((res) => res.json());
  }
  arenasdetails(id) {
    return this.http.get(`${BASEURL}/api/arenas/${id}`)
      .map((res) => res.json());
  }
  randomArena() {
    return this.http.get(`${BASEURL}/api/randomArena`)
      .map((res) => res.json());
  }
  chests() {
    return this.http.get(`${BASEURL}/api/chests`)
      .map((res) => res.json());
  }
  chestsdetails(id) {
    return this.http.get(`${BASEURL}/api/chests/${id}`)
      .map((res) => res.json());
  }
  leagues() {
    return this.http.get(`${BASEURL}/api/leagues`)
      .map((res) => res.json());
  }
  leaguesdetails(id) {
    return this.http.get(`${BASEURL}/api/leagues/${id}`)
      .map((res) => res.json());
  }
  players() {
    return this.http.get(`${BASEURL}/api/players`)
      .map((res) => res.json());
  }
  playersdetails(id) {
    return this.http.get(`${BASEURL}/api/players/${id}`)
      .map((res) => res.json());
  }

}
