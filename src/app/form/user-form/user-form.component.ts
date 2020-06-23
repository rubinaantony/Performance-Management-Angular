import { Component, OnInit } from "@angular/core";
import { User } from "src/app/model/user";
import { UserServiceService } from "src/app/service/user-service.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.css"]
})
export class UserFormComponent implements OnInit {
  usr: User;
  msg: any;

  constructor(
    private userservice: UserServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.usr = new User();
  }

  ngOnInit() {}
  onSubmit() {
     //------------checks if the username is already existing if so a error message is shown or else data is inserted
    this.userservice.addEmployee(this.usr).subscribe(data => {
      if (data.e_username != null) {
        this.gotolist();
      } else {
        this.msg = "User Name already exists";
      }
    });
  }
  gotolist() {
    this.router.navigate(["/users"]);
  }
}