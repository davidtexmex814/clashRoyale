import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from '../../service/session.service';
import { Observable } from 'rxjs/Observable';
import { CommentService } from '../../service/comment.service';
import { filter } from 'rxjs/operator/filter';


@Component({
  selector: 'app-chatglobal',
  templateUrl: './chatglobal.component.html',
  styleUrls: ['./chatglobal.component.css']
})
export class ChatglobalComponent implements OnInit {
  user: any;
  idUserS: any;
  comment: any;
  comments: Array<any>;
  // usuarios: Array<any>;


  constructor(
    private CommentService: CommentService,
    private SessionService : SessionService,
    private router: Router,
    public route: ActivatedRoute) {
      route.params.subscribe(params => {
        SessionService.userr().subscribe(user => {
          this.user = user;
          this.idUserS = this.SessionService.user;
        });
      });  
      this.CommentService.chatglobal().subscribe(user => {
        this.idUserS = this.SessionService.user;
        this.user = user;
        this.refreshComments();
        // this.refreshUsuarios();
      });
  }


  ngOnInit() {
    setInterval(()=>{
      this.CommentService.removesglobal().subscribe(() =>{
        this.comments = [];  
        this.comment = "";        
      })},400000000000000000000000000);
  }
  refreshComments(){
    this.CommentService.getGlobal(this.user._id).subscribe((comments) => {
      this.comments = comments;
      //this.ngOnInit();
    }) 
  }
  guardaMessages() {
    this.CommentService.saveGlobal(this.idUserS._id, this.comment).subscribe(() =>{
      this.refreshComments();
      //this.ngOnInit();
    });
    this.comment = "";
  }
}