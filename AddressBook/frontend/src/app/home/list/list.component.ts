import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
contacts:any[]=[];
user:any
  constructor(private _contact:ContactService, private _auth:UserService) { }

  ngOnInit(): void {
    this.user= this._auth.getDataFromToken();
  
    this._contact.getByIdUser(this.user._id).subscribe({
      next:(res:any)=>{
        console.log(res);
        
       this.contacts=res;
      },
      error:(err)=>{
  console.log(err);
  
      }
    })
    }

    del(id:any){
      this._contact.delete(id).subscribe({
    next:(res)=>{
        console.log(res)
    },
    error:(err)=>{
      console.log(err);
      
    }
      })
    }
  }

  
  
