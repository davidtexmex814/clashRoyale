import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from '../../../service/session.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  user: any;

  constructor(private SessionService : SessionService, private router: Router, public route: ActivatedRoute) {
    this.user = this.SessionService.perfil(this.user);

    route.params.subscribe(params => {
      SessionService.perfil(params.id).subscribe(user => {
        this.user = user;
      });
    });
    
  }

  ngOnInit() {
  }

}
