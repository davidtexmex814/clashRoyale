import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from '../../../service/session.service';
import { Observable } from 'rxjs/Observable';
import { CommentService } from '../../../service/comment.service';
import { filter } from 'rxjs/operator/filter';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  user: any;
  idUserS: any;
  idUserR: any;
  comment: any;
  comments: Array<any>;
  isMe: boolean = false;
  myComments: Array<any>;

  constructor(
    private CommentService: CommentService,
    private SessionService : SessionService,
    private router: Router,
    public route: ActivatedRoute) {
    route.params.subscribe(params => {
      SessionService.perfil(params.id).subscribe(user => {
        // this.SessionService.user = user;
        this.idUserS = this.SessionService.user;
        this.idUserR = user;
        (this.idUserR._id == this.idUserS._id) ? this.isMe = true : this.isMe = false;
        this.user = user;
        this.refreshComments();
      });
    });
  }
  ngOnInit() {

  }
  filterComments() {
    this.myComments = this.comments.filter(c => {
      // console.log(`sender: ${c.userSender_id._id}`)
      // console.log(`usuario: ${this.SessionService.user._id}`)
      return (c.userSender_id._id == this.SessionService.user._id)
    });
    // console.log(this.myComments)
  }
  refreshComments(){
    this.CommentService.getMessages(this.user._id).subscribe(comments => {
      this.comments = comments;
      this.filterComments();
    })
    
  }

  guardaMessages() {
    this.CommentService.saveMessages(this.idUserS._id,this.idUserR._id, this.comment).subscribe(() =>{
      this.refreshComments();
    });
    this.comment = "";
  }
  removeMessages(id) {
    this.CommentService.remove(id).subscribe(() => {
      this.refreshComments();
    });
  }
}