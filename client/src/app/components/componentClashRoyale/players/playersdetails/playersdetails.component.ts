import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClashService } from '../../../../service/clash.service';

@Component({
  selector: 'app-playersdetails',
  templateUrl: './playersdetails.component.html',
  styleUrls: ['./playersdetails.component.css']
})
export class PlayersdetailsComponent implements OnInit {

  players: any;

  constructor( public route: ActivatedRoute, public router: Router, private clashService : ClashService) {
    route.params.subscribe(params => {
      clashService.playersdetails(params.id).subscribe(player => {
        this.players = player;
      });
    });
  }
  ngOnInit() {
  }

}
