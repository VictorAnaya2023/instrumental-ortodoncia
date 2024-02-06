import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = ''
  logged:boolean=false;
  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(username:string, password:string){
    const body = new URLSearchParams()
    body.set('email', username);
    body.set('password', password);
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('https://api.instrumentaldeortodoncia.com/api/login', body.toString(), {headers})
  }

  checkAccessTokenCookie() {
    const accessTokenExists = this.cookieService.check('accessToken');
    if (accessTokenExists) {
      return true
    } else {
      return false
    }
  }

  isAuth(){
    if(this.checkAccessTokenCookie()){
      return true;
    }else{
      return false;
    }
  }
}