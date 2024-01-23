import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = ''
  logged:boolean=false;
  constructor() { }

  login(){
    this.logged = true;
  }

  isAuth(){
    if(this.logged){
      return true;
    }else{
      return false;
    }
  }
}