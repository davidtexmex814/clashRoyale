import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ClashService } from '../../../service/clash.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {

  leagues$: Observable <any>;

  constructor( private clashService : ClashService, private router: Router ) { 
    this.leagues$ = this.clashService.leagues();
  }
  ngOnInit() {
  }

}
