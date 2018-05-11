import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ClashService } from '../../../service/clash.service';

@Component({
  selector: 'app-arenas',
  templateUrl: './arenas.component.html',
  styleUrls: ['./arenas.component.css']
})
export class ArenasComponent implements OnInit {
  arenas$: Observable <any>;

  constructor( private clashService : ClashService, private router: Router ) { 
    this.arenas$ = this.clashService.arenas();
  }
  ngOnInit() {
  }

}