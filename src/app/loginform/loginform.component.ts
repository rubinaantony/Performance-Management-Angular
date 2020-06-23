import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Login } from '../model/login';
import { ReviewServiceService } from '../service/review-service.service';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
login = new Login();
msg='';
  constructor(private _service : LoginService,private _router :Router,private reviewService: ReviewServiceService) { }
  ngOnInit() {
  }
setUsername(username:string){
  this.reviewService.username=username;
  console.log(this.reviewService.username+"ghg");
}

//Checks the user credentials and role and redirects based on the role-----------------------------
  loginUser(){
    this._service.loginUserFromRemote(this.login).subscribe(
      data=>{
        this.login = data;
        this.setUsername(this.login.username);
        if(this.login.role=="admin")
          this._router.navigate(['/admin'])
        else if(this.login.role=="employee")
        this._router.navigate(['/staff'])
      },
      error=>{
        console.log("exception occured");
        this.msg="Bad credentials, Please Enter Valid data";
      }
      
    )
  }
}