import { Component, OnInit } from '@angular/core';
import { ReviewServiceService } from 'src/app/service/review-service.service';
import { Review } from 'src/app/model/review';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {

  reviews:Review[];
  constructor(private reviewService: ReviewServiceService) { }

  ngOnInit() {
    this.reviewService.findAll().subscribe(data =>{
      this.reviews = data;
    });
  }
  reloadData(){
    this.reviewService.findAll().subscribe(dt=>this.reviews=dt);
  }

updateForm=new FormGroup({
    m_id:new FormControl(''),
    m_reviewed:new FormControl(''),
    m_message:new FormControl(''),
    m_reviewing:new FormControl(''),
    m_feedback:new FormControl('')
  });

  updateFeedbackForm(review:Review){
    console.log(review);
    this.updateForm.setValue({
      m_id:review.m_id,
      m_reviewed:review.m_reviewed,
      m_message:review.m_message,
      m_reviewing:review.m_reviewing,
      m_feedback:review.m_feedback,
    });
    }
    
    updateRvw(){
      this.reviews=this.updateForm.value;
      console.log(this.reviews);
      this.reviewService.save(this.updateForm.value).subscribe(result=>{this.reloadData();});
  }
}
