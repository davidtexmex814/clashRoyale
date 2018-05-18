import { Injectable, EventEmitter } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs';
import { environment }  from '../../environments/environment';

const BASEURL:string= environment.BASEURL;

@Injectable()
export class CommentService{
  commentEvent: EventEmitter<any> = new EventEmitter();
  constructor(private http: Http) {}

  saveMessages(idUserS,idUserR,text) {
    console.log(`Saving comment ${text} for ${idUserS} para ${idUserR}`)
    return this.http.post(`${BASEURL}/routes/messages`, { userSender_id: idUserS, userReceiver_id: idUserR, text: text })
      .map((res) => {
        this.commentEvent.emit(res.json());
        //console.log("aiuwbr")

        //this.commentEvent.emit(this.user);
        return res.json()
      });
  }

  getMessages(id) {
    return this.http.get(`${BASEURL}/routes/messages/perfil/${id}`)
      .map((res) => res.json());
  }

  remove(id) {
    return this.http.delete(`${BASEURL}/routes/messages/delete/${id}`)
      .map((res) => res.json());
  }

  saveGlobal(idUserS,text) {
    console.log(`Saving comment ${text} for ${idUserS}`)
    return this.http.post(`${BASEURL}/routes/messages/global`, { userSender_id: idUserS, text: text })
      .map((res) => res.json());
  }
  chatglobal() {
    return this.http
      .get(`${BASEURL}/routes/messages/chatglobal`)
      .map(res => res.json());
  }
  getGlobal(id) {
    return this.http.get(`${BASEURL}/routes/messages/chatglobal`)
      .map((res) => res.json());
  }
  removesglobal() {
    return this.http.delete(`${BASEURL}/routes/messages/chatglobal/delete`)
      //.map(() => res.json());
  }
}