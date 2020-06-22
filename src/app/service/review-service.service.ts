import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../model/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewServiceService {

  
username: string;
  constructor(private http: HttpClient) { }
  public findAll(): Observable<Review[]>{
    return this.http.get<Review[]>("http://localhost:8888/review/view/"+this.username);
  }
  public deleteReview(id){
    return this.http.delete("http://localhost:8888/review/delete/"+id);
  }
  public addReview(obj:Review){
   return this.http.post<Review>("http://localhost:8888/review/insert",obj);
  }
  public save(obj:Review[]){
    console.log(obj+"going to update");
    return this.http.post<Review>("http://localhost:8888/review/insert",obj);
  }
}

