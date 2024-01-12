import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReviewComponent } from '../review/review.component';
import { HighlightDirective } from '../highlight.directive';
import { DiscountPipe } from '../discount.pipe';
import { CartService } from '../cart.service';
import { ReviewFormComponent } from '../review-form/review-form.component';
import { ReactiveReviewFormComponent } from '../reactive-review-form/reactive-review-form.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    ReviewComponent,
    HighlightDirective,
    DiscountPipe,
    ReviewFormComponent,
    ReactiveReviewFormComponent
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input("value")
  product: any = {};

  // @Output()
  // buy: any = new EventEmitter<any>();

  constructor(private cartService: CartService) { }

  currentTab: number = 1;
  reviews: any[] = [];

  handleTabChange(event: MouseEvent, tabNumber: number) {
    event.preventDefault();
    this.currentTab = tabNumber;
  }
  isTabSelected(tabNumber: number): boolean {
    return this.currentTab === tabNumber;
  }

  handleBuy(event: MouseEvent) {
    //this.buy.emit({ item: this.product });
    this.cartService.addToCart(this.product);
  }

  handleNewReview(review: any) {
    this.reviews.push(review);
  }


}
