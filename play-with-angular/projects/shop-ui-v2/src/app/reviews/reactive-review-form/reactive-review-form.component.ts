import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-review-form',
  templateUrl: './reactive-review-form.component.html',
  styleUrl: './reactive-review-form.component.css'
})
export class ReactiveReviewFormComponent {

  @Output()
  newReview = new EventEmitter<any>();

  isOpen = false;
  reviewForm!: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.reviewForm = this.fb.group({
      rating: ['1', [Validators.required]],
      body: ['', [Validators.required, Validators.minLength(3), this.badWordValidator]],
      author: ['Nag', [Validators.required, Validators.minLength(2)]]
    })

    // this.reviewForm.statusChanges.subscribe(status => {
    //   console.log(status);
    // })
    // this.reviewForm.valueChanges.subscribe(value => {
    //   console.log(value);
    // })
    this.reviewForm.controls['rating'].valueChanges.subscribe(value => {
      if (value === '5') {
        this.reviewForm.controls['body'].clearValidators();
        this.reviewForm.controls['body'].updateValueAndValidity();
      }
      else {
        this.reviewForm.controls['body'].setValidators([Validators.required, Validators.minLength(10)]);
        this.reviewForm.controls['body'].updateValueAndValidity();
      }
    });
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  load() {
    const reviewModel: any = {
      rating: 5,
      body: 'Sample Review',
      author: 'Nag'
    }
    this.reviewForm.patchValue(reviewModel);
  }

  handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    if (this.reviewForm.valid) {
      this.newReview.emit(this.reviewForm.value);
      this.reviewForm.reset({
        rating: '1',
        body: '',
        author: 'Nag'
      });
      this.toggle()
    }
  }

  badWordValidator(control: FormControl) {
    if (control.value.includes('bad')) {
      return { badWord: true }
    }
    return null;
  }


}
