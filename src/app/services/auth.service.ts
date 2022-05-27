import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginRespone, LoginResponeData, SignupResponse, SignupResponseData } from '../models/common';
import { SignupUser } from '../models/signupUser.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) {

  }

  public login(email: string, password: string): Observable<LoginRespone> {
    return this.http.post<LoginRespone>(environment.endpoint + '/users/Login', { email, password })
  }

  public formatUser(data: LoginResponeData) {
    const user = new User(data.email, data.name, data.role, data.token);
    return user;
  }

  public signup(name: string, email: string, password: string, role: string): Observable<SignupResponse> {
    return this.http.post<SignupResponse>(environment.endpoint + '/users/SignUp', { name, email, password, role })
  }

  public formatNewUser(data: any) {
    const user = new SignupUser(data.name, data.email, data.password, data.role);
    return user;
  }

  public setUserToLocatStorage(user: LoginResponeData): void {
    localStorage.setItem('userData', JSON.stringify(user));
  }

  public getUserFromLocalStorage() {
    const userData = localStorage.getItem('userData');
    if (userData) {
      return JSON.parse(userData);
    } else {
      return null;
    }
  }
}
