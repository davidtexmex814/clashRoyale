import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../service/session.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {
  username: string;
  password: string;
  
  constructor(public sessionService: SessionService, public router: Router) { }

  ngOnInit() {
  } 
  login() {
    this.sessionService.login(this.username, this.password).subscribe( () => {
      console.log(this.username, this.password)
      this.router.navigate(['/'])
    });
  }
  
}