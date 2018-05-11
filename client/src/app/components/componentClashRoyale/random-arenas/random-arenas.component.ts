import { Component, OnInit } from '@angular/core';
import { ClashService } from '../../../service/clash.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-random-arenas',
  templateUrl: './random-arenas.component.html',
  styleUrls: ['./random-arenas.component.css']
})
export class RandomArenasComponent implements OnInit {

  randomArena$: Observable <any>;
  constructor( private clashService : ClashService, private router: Router ) { 
    this.randomArena$ = this.clashService.randomArena();
  }
  ngOnInit() {
  }

}
