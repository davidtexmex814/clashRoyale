import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs';
import { environment }  from '../../environments/environment';

const BASEURL:string= environment.BASEURL;

@Injectable()
export class CommentService{
  constructor(private http: Http) {}

  saveMessages(idUserS,idUserR,text) {
    console.log(`Saving comment ${text} for ${idUserS} para ${idUserR}`)
    return this.http.post(`${BASEURL}/routes/messages`, { userSender_id: idUserS, userReceiver_id: idUserR, text: text })
      .map((res) => res.json());
  }

  getMessages(id) {
    return this.http.get(`${BASEURL}/routes/messages/perfil/${id}`)
      .map((res) => res.json());
  }

  remove(id) {
    return this.http.delete(`${BASEURL}/routes/messages/delete/${id}`)
      .map((res) => res.json());
  }
}