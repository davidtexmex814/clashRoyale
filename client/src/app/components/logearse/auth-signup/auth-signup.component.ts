import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../service/session.service';
import { Router } from '@angular/router';
import{ FileUploader } from 'ng2-file-upload';
import { environment }  from '../../../../environments/environment';

const BASEURL:string= environment.BASEURL;
@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: `${BASEURL}/routes/auth/signup`
  });
  username: string;
  name: string;
  password: string;


  constructor(public sessionService: SessionService, public router: Router) { }

  ngOnInit() {
  }

  signup() {
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('username', this.username);
      form.append('password', this.password);
      form.append('name', this.name);

    };

    this.uploader.uploadAll();
    this.uploader.onCompleteItem = () => {
      this.router.navigate(['/login']);
    }
  }
}