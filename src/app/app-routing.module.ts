import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './list/user-list/user-list.component';
import { UserFormComponent } from './form/user-form/user-form.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { ReviewComponent } from './review/review.component';
import { ReviewFormComponent } from './form/review-form/review-form.component';
import { ReviewListComponent } from './list/review-list/review-list.component';
import { StaffComponent } from './staff/staff.component';
import { FeedbackListComponent } from './list/feedback-list/feedback-list.component';
import { LoginformComponent } from './loginform/loginform.component';


const routes: Routes = [
  {path: 'users',component: UserListComponent},
  {path: 'adduser',component: UserFormComponent},
  {path: 'admin',component: AdminComponent},
  {path: 'employee',component: EmployeeComponent},
  {path: 'review',component: ReviewComponent},
  {path: 'addreview',component: ReviewFormComponent},
  {path: 'reviews',component: ReviewListComponent},
  {path: 'feedback',component: FeedbackListComponent},
  {path: 'staff',component: StaffComponent},
  {path: 'loginpage',component:LoginformComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
