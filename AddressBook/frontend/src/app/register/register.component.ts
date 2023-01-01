import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _auth:UserService, private router:Router ) { }

  ngOnInit(): void {
  }

user={
  name:"",
  lastname:"",
  email:"",
  password:"",
}
save(user:any){
this._auth.register(user).subscribe({
  next:(res)=>{
    this.router.navigate(['/login']);
  },
  error:(err)=>{
   console.log(err);
  }
  
})
}
}
