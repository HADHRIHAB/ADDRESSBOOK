import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={
    email:"",
    password:"",
  }
  constructor(private http: HttpClient, private route:Router, private _auth:UserService) { }

  ngOnInit(): void {
  }
  login(user:any){
    this._auth.login(user).subscribe({
      next:(res)=>{
        let tokenObject: any=res;
        localStorage.setItem('token', tokenObject.mytoken);
        
        
        this.route.navigate(['/home']);
      },
      error:(err)=>{
       console.log(err);
      }
      
    }) 
    }
  }

