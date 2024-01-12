import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-review-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.css'
})
export class ReviewFormComponent {

  isOpen = true;

  reviewModel: any = {
    rating: 5,
    body: '',
    author: 'Nag'
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  handleSubmit(event: SubmitEvent, reviewForm: NgForm) {
    event.preventDefault();
    //console.log(reviewForm.value);
    console.log(this.reviewModel);
  }

}
