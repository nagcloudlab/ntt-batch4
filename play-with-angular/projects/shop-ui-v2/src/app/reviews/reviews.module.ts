import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './review/review.component';
import { ReactiveReviewFormComponent } from './reactive-review-form/reactive-review-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReviewComponent,
    ReactiveReviewFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ReviewComponent,
    ReactiveReviewFormComponent
  ]
})
export class ReviewsModule { }
