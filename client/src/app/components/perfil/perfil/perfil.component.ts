import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from '../../../service/session.service';
import { Observable } from 'rxjs/Observable';
// import { CommentService } from '../../../service/comment.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  user: any;
  // sender: any;
  // receiver: any;
  comment: string;
  comments: Array<object>;

  constructor(
    // private CommentService: CommentService,
    private SessionService : SessionService,
    private router: Router,
    public route: ActivatedRoute) {
    route.params.subscribe(params => {
      SessionService.perfil(params.id).subscribe(user => {
        // this.sender = user;
        // this.receiver = user;
        this.user = user;
      });
    });


  }
  ngOnInit() {
  }


  // saveMessages() {
  //   console.log(this.comment);
  //   this.CommentService.saveMessages(this.sender._id,this.receiver._id, this.comment).subscribe(() =>{
  //   });
  //   this.comment = "";
  // }
  // removeMessages() {
  //   console.log("DELETED MESSAGE");
  //   this.CommentService.remove(this.user._id).subscribe(() => {
  //   });
  // }
}