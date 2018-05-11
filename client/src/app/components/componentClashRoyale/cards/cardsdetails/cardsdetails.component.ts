import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClashService } from '../../../../service/clash.service';

@Component({
  selector: 'app-cardsdetails',
  templateUrl: './cardsdetails.component.html',
  styleUrls: ['./cardsdetails.component.css']
})
export class CardsdetailsComponent implements OnInit {
  cards: any;

  constructor( public route: ActivatedRoute, public router: Router, private clashService : ClashService) {
    route.params.subscribe(params => {
      clashService.cardsdetails(params.id).subscribe(card => {
        this.cards = card;
      });
    });
  }

  ngOnInit() {
  }

}
