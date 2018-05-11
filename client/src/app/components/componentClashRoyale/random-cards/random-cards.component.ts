import { Component, OnInit } from '@angular/core';
import { ClashService } from '../../../service/clash.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-random-cards',
  templateUrl: './random-cards.component.html',
  styleUrls: ['./random-cards.component.css']
})
export class RandomCardsComponent implements OnInit {
  randomCards$: Observable <any>;
  constructor( private clashService : ClashService, private router: Router ) { 
    this.randomCards$ = this.clashService.randomCards();
  }
  ngOnInit() {
  }

}
