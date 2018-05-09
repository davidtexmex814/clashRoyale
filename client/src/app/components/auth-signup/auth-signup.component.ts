import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../service/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {
  username: string;
  name: string;
  password: string;
  img: string;


  constructor(public sessionService: SessionService, public router: Router) { }

  ngOnInit() {
  }

  signup() {
    const user = {
      username: this.username,
      name: this.name,
      password: this.password,
      img: this.img
    };
    this.sessionService.signup(user).subscribe(() => {
      this.router.navigate(['/'])
    })
  }
}
