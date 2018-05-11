import { Component } from '@angular/core';
import { SessionService } from '../../service/session.service';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-fondohome',
  templateUrl: './fondohome.component.html',
  styleUrls: ['./fondohome.component.css']
})
export class FondohomeComponent {

  constructor(public sessionService: SessionService, public router: Router) {}

}
