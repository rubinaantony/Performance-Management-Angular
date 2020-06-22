import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './list/user-list/user-list.component';
import { UserFormComponent } from './form/user-form/user-form.component';
import { HttpClient } from 'selenium-webdriver/http';
import { UserServiceService } from './service/user-service.service';
import{FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { EmployeeComponent } from './employee/employee.component';
import { ReviewComponent } from './review/review.component';
import { ReviewFormComponent } from './form/review-form/review-form.component';
import { ReviewListComponent } from './list/review-list/review-list.component';
import { StaffComponent } from './staff/staff.component';
import { FeedbackListComponent } from './list/feedback-list/feedback-list.component';
import { LoginformComponent } from './loginform/loginform.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    AdminComponent,
    UserComponent,
    EmployeeComponent,
    ReviewComponent,
    ReviewFormComponent,
    ReviewListComponent,
    StaffComponent,
    FeedbackListComponent,
    LoginformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
