import { Component, OnInit } from '@angular/core';
import { userInfo } from 'os';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
user:any
  constructor(private _auth:UserService) { }

  ngOnInit(): void {
   this.user= this._auth.getDataFromToken()

  }
  
}
