import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ClashService } from '../../../service/clash.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards$: Observable <any>;

  constructor( private clashService : ClashService, private router: Router ) { 
    this.cards$ = this.clashService.cards();
  }
  ngOnInit() {
  }

}
