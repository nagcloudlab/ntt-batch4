import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../../cart/cart.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input("value")
  product: any = {};

  // @Output()
  // buy: any = new EventEmitter<any>();

  constructor(
    private cartService: CartService,
    private productsService:ProductsService) { }

  currentTab: number = 1;
  reviews: any[] = [];

  handleTabChange(event: MouseEvent, tabNumber: number) {
    event.preventDefault();
    this.currentTab = tabNumber;
    if (this.currentTab === 3) {
      this.reviews=this.productsService.getReviews(this.product.id)
    }
  }
  isTabSelected(tabNumber: number): boolean {
    return this.currentTab === tabNumber;
  }

  handleBuy(event: MouseEvent) {
    //this.buy.emit({ item: this.product });
    this.cartService.addToCart(this.product);
  }

  handleNewReview(review: any) {
    console.log(review)
    this.reviews.push(review);
  }


}
