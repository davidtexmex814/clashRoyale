// import { Injectable } from "@angular/core";
// import { Http } from "@angular/http";
// import 'rxjs';

// @Injectable()
// export class CommentService{
//   BASEURL: string = 'http://localhost:3000';
//   constructor(private http: Http) {}

//   saveMessages(sender,receiver,text) {
//     console.log(`Saving comment ${text} for ${sender} para ${receiver}`)
//     return this.http.post(`${this.BASEURL}/routes/messages`,{sender_id:sender,receiver_id:receiver, text})
//       .map((res) => res.json());
//   }

//   getMessages(id, text) {
//     return this.http.post(`${this.BASEURL}/routes/messages/perfil/${id}`, text)
//       .map((res) => res.json());
//   }

//   remove(id) {
//     return this.http.delete(`${this.BASEURL}/routes/messages/perfil/${id}`)
//       .map((res) => res.json());
//   }
// }