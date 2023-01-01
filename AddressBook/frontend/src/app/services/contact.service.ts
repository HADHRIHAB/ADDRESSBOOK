import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  url= 'http://127.0.0.1:3000/contact/';

  add(contact:any){
    return this.http.post(this.url+'add', contact)
  }
  getById(id:any){
   return this.http.get(this.url+'getbyid/'+ id)
  }
  getByIdUser(idUser:any){
   return this.http.get(this.url+'getbyiduser/'+ idUser)
  }
delete(id:any){
 return this.http.delete(this.url+'delete/'+ id)
}
update(id:any, contact:any){
  return this.http.put(this.url+'update/'+ id, contact)
}
}
