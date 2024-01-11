import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    ProductComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  @Output()
  buy: any = new EventEmitter<any>();

  products: Array<any> = [
    {
      id: 1,
      name: 'Laptop',
      price: 14500.0,
      description: 'This is a laptop',
      imagePath: 'assets/Laptop.png',
      isAvailable: true,
    },
    {
      id: 2,
      name: 'Mobile',
      price: 15000.0,
      description: 'This is a mobile',
      imagePath: 'assets/Mobile.png',
      isAvailable: true,
    },
  ];

  handleBuy(event: any) {
    this.buy.emit(event);
  }
}
