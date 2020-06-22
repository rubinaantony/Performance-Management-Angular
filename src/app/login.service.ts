import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import {HttpClient} from '@angular/common/http'
import { Login } from './model/login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
constructor(private _http : HttpClient) { }

  
public loginUserFromRemote(login :Login):Observable<Login>{
    
return this._http.post<Login>("http://localhost:8888/login",login)

  }
}
