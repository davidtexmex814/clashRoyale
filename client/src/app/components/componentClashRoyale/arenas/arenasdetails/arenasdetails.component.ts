import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClashService } from '../../../../service/clash.service';

@Component({
  selector: 'app-arenasdetails',
  templateUrl: './arenasdetails.component.html',
  styleUrls: ['./arenasdetails.component.css']
})
export class ArenasdetailsComponent implements OnInit {

  arenas$: any;

  constructor( public route: ActivatedRoute, public router: Router, private clashService : ClashService) {
    route.params.subscribe(params => {
      clashService.arenasdetails(params.id).subscribe(arena => {
        this.arenas$ = arena;
      });
    });
  }
  ngOnInit() {
  }

}
