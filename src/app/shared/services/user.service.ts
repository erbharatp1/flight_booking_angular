import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/app-config';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private  baseURL = 'http://localhost:3000';
// http://localhost:3000/user?userName=user&userPassword=user
  constructor(private httpclient: HttpClient) { }

  signUp(user: User): Observable<Object> {
    console.log("service" + JSON.stringify(user))

    return this.httpclient.post(this.baseURL + `/user`, user);
  }

  fetchUserList(): Observable<any> {
    return this.httpclient.get(this.baseURL + `/user`);
  }

  
  login(user: User): Observable<any> {
    console.log("service" + JSON.stringify(user))
// var urlm=  "http://localhost:3000/user?userName=user&userPassword=user";
 var url="http://localhost:3000/user?userName="+user.username+"&userPassword="+user.password;
    return this.httpclient.get(url);
  }
  fetchBooking(id:Number): Observable<any> {
    return this.httpclient.get(this.baseURL + `/Booking/${id}`);
  }
}
