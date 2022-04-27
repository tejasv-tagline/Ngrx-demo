import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginRespone, LoginResponeData } from '../models/common';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) {

  }

  public login(email: string, password: string):Observable<LoginRespone>{
    console.log('environment.FIREBASE_API_KEY :>> ', environment.FIREBASE_API_KEY);
    return this.http.post<LoginRespone>(environment.endpoint+'/users/Login', { email, password})
  }

  public formatUser(data:LoginResponeData){
    console.log('data to formatUser:>> ', data);
    const user = new User(data.email,data.name,data.role,data.token);
    return user;
  }
}
