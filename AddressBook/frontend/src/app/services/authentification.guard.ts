import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuard implements CanActivate {
  constructor(private _auth:UserService, private router:Router){

  }
  canActivate(){
    if(this._auth.isLoggedIn()== true){
      return true;
    }else{
      this.router.navigate(['/login']);
    return false;
    
    }
  
  }}
