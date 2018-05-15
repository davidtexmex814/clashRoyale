import { Injectable, EventEmitter } from "@angular/core";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs";
import { Location } from "@angular/common";

const BASEURL = "http://localhost:3000";
@Injectable()
export class SessionService {
  user: any;
  userEvent: EventEmitter<any> = new EventEmitter();
  options: any = { withCredentials: true };

  constructor(private location: Location, private http: Http) {
    this.isLoggedIn().subscribe();
  }
  handleError(e) {
    return Observable.throw(e.json().message);
  }

  handleUser(user?: object) {
    this.user = user;
    this.userEvent.emit(this.user);
    return this.user;
  }

  signup(user) {
    return this.http
      .post(`${BASEURL}/routes/auth/signup`, user, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }

  login(username, password) {
    return this.http.post(`${BASEURL}/routes/auth/login`, { username, password }, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }
  logout() {
    return this.http
      .get(`${BASEURL}/routes/auth/logout`, this.options)
      .map(() => this.handleUser())
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http
      .get(`${BASEURL}/routes/auth/loggedin`, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }

  perfil(id) {
    return this.http
      .get(`${BASEURL}/routes/auth/perfil/${id}`)
      .map(res => res.json());
  }
}
