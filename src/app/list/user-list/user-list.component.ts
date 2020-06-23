import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/user-service.service';
import { User } from 'src/app/model/user';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:User[];
  constructor(private userService: UserServiceService) { }

//-----------------------------Function to fetchthe details of all the employees---------------
  ngOnInit() {
    this.userService.findAll().subscribe(data =>{
      this.users = data;
    });
  }

  //-----------------------------Function to delete employees----------------------
  deleteEmployee(e_id){
    console.log(e_id)
    this.userService.deleteEmployee(e_id).subscribe(rst=>{this.reloadData();});
  }
  //--------------------------------END------------------------------------
  reloadData(){
    this.userService.findAll().subscribe(dt=>this.users=dt);
  }

updateForm=new FormGroup({
    e_id:new FormControl(''),
    e_number:new FormControl(''),
    e_name:new FormControl(''),
    e_username:new FormControl(''),
    e_password:new FormControl(''),
    e_address:new FormControl(''),
    e_mobile:new FormControl(''),
    e_email:new FormControl(''),
    e_role:new FormControl('')
  });

  //-----------------------------Set values to update employee form---------------------
  updateStudentForm(user:User){
    console.log(user);
    this.updateForm.setValue({
      e_id:user.e_id,
      e_number:user.e_number,
      e_name:user.e_name,
      e_username:user.e_username,
      e_password:user.e_password,
      e_address:user.e_address,
      e_mobile:user.e_mobile,
      e_email:user.e_email,
      e_role:user.e_role,
    });
    }
    //-----------------------------------END-----------------------------

      //-----------------------------Updates the values of employee details---------------------
    updateUsr(){
      this.users=this.updateForm.value;
      console.log(this.users);
      this.userService.save(this.updateForm.value).subscribe(result=>{this.reloadData();});
  }
  //-----------------------------------END------------------------------
}
