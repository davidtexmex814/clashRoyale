import { Component } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { SessionService } from '../../service/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user:any;
  constructor(public sessionService: SessionService, public router: Router) {
    this.sessionService.userEvent.subscribe( user => {
      this.user = user;
    })
   }  
   
  logout(){
    this.sessionService.logout().subscribe(() => console.log("logged out"))
     this.router.navigate(['/'])
  }
}