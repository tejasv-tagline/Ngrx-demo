import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  createExam(data:any){
    return this.http.post(environment.endpoint + '/dashboard/Teachers/Exam',data,{
      headers:this.headers
    })
  }

  viewExams(){
    return this.http.get(environment.endpoint+ '/dashboard/Teachers/viewExam',{
      headers:this.headers
    })
  }

  deleteExam(id:string){
    return this.http.delete(environment.endpoint+ `/dashboard/Teachers/deleteExam?id=${id}`,{
      headers:this.headers
    })
  }

  viewParticularExam(id:string){
    return this.http.get(environment.endpoint + `/dashboard/Teachers/examDetail?id=${id}`,{
      headers:this.headers
    })
  }
}
