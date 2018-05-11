import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ClashService } from '../../../service/clash.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players$: Observable <any>;

  constructor( private clashService : ClashService, private router: Router ) { 
    this.players$ = this.clashService.players();
  }
  ngOnInit() {
  }

}
