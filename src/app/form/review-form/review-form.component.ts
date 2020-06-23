import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/model/review';
import { ReviewServiceService } from 'src/app/service/review-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {
  rvw:Review;

  constructor(private reviewservice:ReviewServiceService,private route:ActivatedRoute,private router:Router) { 
    this.rvw=new Review();
  }

  ngOnInit() {
  }
  //-----------------------On submit of button calls the function addreview() to insert reviews------------------
onSubmit(){
  this.reviewservice.addReview(this.rvw).subscribe(data=>{
    this.gotolist();

  });
}
 //---------------------------------After adding review control navigated to review list----------------
gotolist(){
  this.router.navigate(['/reviews'])
}
}
