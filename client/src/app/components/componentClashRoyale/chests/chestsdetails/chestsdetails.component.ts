import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClashService } from '../../../../service/clash.service';

@Component({
  selector: 'app-chestsdetails',
  templateUrl: './chestsdetails.component.html',
  styleUrls: ['./chestsdetails.component.css']
})
export class ChestsdetailsComponent implements OnInit {

  chests: any;

  constructor( public route: ActivatedRoute, public router: Router, private clashService : ClashService) {
    route.params.subscribe(params => {
      clashService.chestsdetails(params.id).subscribe(chest => {
        this.chests = chest;
      });
    });
  }
  ngOnInit() {
  }

}
