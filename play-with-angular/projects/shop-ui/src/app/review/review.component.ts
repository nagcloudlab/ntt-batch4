import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {

  @Input("value")
  review: any = {}

}
