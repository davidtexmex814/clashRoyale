import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ClashService } from '../../../service/clash.service';

@Component({
  selector: 'app-chests',
  templateUrl: './chests.component.html',
  styleUrls: ['./chests.component.css']
})
export class ChestsComponent implements OnInit {

  chests$: Observable <any>;

  constructor( private clashService : ClashService, private router: Router ) { 
    this.chests$ = this.clashService.chests();
  }
  ngOnInit() {
  }

}
