import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/model/review';
import { ReviewServiceService } from 'src/app/service/review-service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  reviews:Review[];
  constructor(private reviewService: ReviewServiceService) { }

  ngOnInit() {
    this.reviewService.findAll().subscribe(data =>{
      this.reviews = data;
    });
  }
  deleteReview(m_id){
    console.log(m_id)
    this.reviewService.deleteReview(m_id).subscribe(rst=>{this.reloadData();});
     
  }
  reloadData(){
    this.reviewService.findAll().subscribe(dt=>this.reviews=dt);
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
