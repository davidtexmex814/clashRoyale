import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClashService } from '../../../../service/clash.service';

@Component({
  selector: 'app-leaguesdetails',
  templateUrl: './leaguesdetails.component.html',
  styleUrls: ['./leaguesdetails.component.css']
})
export class LeaguesdetailsComponent implements OnInit {

  leagues: any;

  constructor( public route: ActivatedRoute, public router: Router, private clashService : ClashService) {
    route.params.subscribe(params => {
      clashService.leaguesdetails(params.id).subscribe(league => {
        this.leagues = league;
      });
    });
  }
  ngOnInit() {
  }

}
