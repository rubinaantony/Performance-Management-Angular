import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/model/review';
import { ReviewServiceService } from 'src/app/service/review-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/login.service';
import { Login } from 'src/app/model/login';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  reviews:Review[];
  login = new Login();
  constructor(private reviewService: ReviewServiceService,private _service : LoginService) { }

  ngOnInit() {
    console.log(this.getUsername()+"bvvb");
    this.reloadData();
  }
  deleteReview(m_id){
    console.log(m_id)
    this.reviewService.deleteReview(m_id).subscribe(rst=>{this.reloadData();});
     
  }
  reloadData(){
    if(this.login.role=="admin"){
      this.reviewService.findAll().subscribe(dt=>this.reviews=dt);
    }
    else{
      this.reviewService.findAllReview().subscribe(dt=>this.reviews=dt);
    }
  }

  getUsername(){
    return this.reviewService.username;
  }
updateForm=new FormGroup({
    m_id:new FormControl(''),
    m_reviewed:new FormControl(''),
    m_message:new FormControl(''),
    m_reviewing:new FormControl('')
  });

  updateStudentForm(review:Review){
    console.log(review);
    this.updateForm.setValue({
      m_id:review.m_id,
      m_reviewed:review.m_reviewed,
      m_message:review.m_message,
      m_reviewing:review.m_reviewing,
    });
    }
    
    updateRvw(){
      this.reviews=this.updateForm.value;
      console.log(this.reviews);
      this.reviewService.save(this.updateForm.value).subscribe(result=>{this.reloadData();});
  }
}
