import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }
  public findAll(): Observable<User[]>{
    return this.http.get<User[]>("http://localhost:8888/employee/view");
  }
  public deleteEmployee(id){
    return this.http.delete("http://localhost:8888/employee/delete/"+id);
  }
  public addEmployee(obj:User){
   return this.http.post<User>("http://localhost:8888/employee/insert",obj);
  }
  public save(obj:User[]){
    console.log(obj+"going to update");
    return this.http.post<User>("http://localhost:8888/employee/update",obj);
  }

  
}

