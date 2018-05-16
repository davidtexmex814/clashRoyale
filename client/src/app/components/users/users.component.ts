import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../service/session.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: any;
  mensaje: string;

  constructor(public SessionService: SessionService, public router: Router, public route: ActivatedRoute) {
    route.params.subscribe(params => {
      SessionService.userr().subscribe(user => {
        this.user = user;
      });
    });  
  }
  ngOnInit() {
  }
  message() {
    const mensaje = {
      mensaje: this.mensaje,
    };
    this.SessionService.messages(mensaje).subscribe(() => {
      console.log("entro");
      this.router.navigate(['/'])
    })
  }
}