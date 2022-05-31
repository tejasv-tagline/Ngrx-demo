import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  public token:any = localStorage.getItem('token');
  public headers= new HttpHeaders().set('access-token',this.token)
  constructor(private http:HttpClient) { }

  getStudentList(){

    return this.http.get(environment.endpoint+ '/dashboard/Teachers',{
      headers:this.headers
    })
  }
}