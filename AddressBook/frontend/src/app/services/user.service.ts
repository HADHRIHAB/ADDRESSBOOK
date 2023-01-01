import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http:HttpClient ) { }
url= 'http://127.0.0.1:3000/user/';

register(user:any){
  return this.http.post(this.url+'register',user);
}

login(user:any){
  return this.http.post(this.url+'login',user);
}
isLoggedIn(){
    let myTokenFromLocalStorage= localStorage.getItem('token')
    if(myTokenFromLocalStorage){
  return true;
    }else{
  return false;
    }
  }

  getDataFromToken(){
   let token = localStorage.getItem('token')

   if(token){
    let data= JSON.parse(window.atob(token.split('.')[1]));
    return data
   }
  }

























}
