import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReviewComponent } from '../review/review.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    ReviewComponent
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input("value")
  product: any = {};

  @Output()
  buy: any = new EventEmitter<any>();

  currentTab: number = 1;
  reviews: any[] = [
    { rating: 5, author: 'who-1', body: 'body-1' },
    { rating: 3, author: 'who-2', body: 'body-2' }
  ];

  handleTabChange(event: MouseEvent, tabNumber: number) {
    event.preventDefault();
    this.currentTab = tabNumber;
  }
  isTabSelected(tabNumber: number): boolean {
    return this.currentTab === tabNumber;
  }

  handleBuy(event: MouseEvent) {
    this.buy.emit({ item: this.product });
  }


}
