import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs';

@Injectable()
export class CommentService{
  BASEURL: string = 'http://localhost:3000';
  constructor(private http: Http) {}

  saveMessages(idUserS,idUserR,text) {
    console.log(`Saving comment ${text} for ${idUserS} para ${idUserR}`)
    return this.http.post(`${this.BASEURL}/routes/messages`, { userSender_id: idUserS, userReceiver_id: idUserR, text: text })
      .map((res) => res.json());
  }

  getMessages(id) {
    return this.http.get(`${this.BASEURL}/routes/messages/perfil/${id}`)
      .map((res) => res.json());
  }

  remove(id) {
    return this.http.delete(`${this.BASEURL}/routes/messages/delete/${id}`)
      .map((res) => res.json());
  }
}