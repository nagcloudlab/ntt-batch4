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

  products: Array<any> = [
    {
      id: 1,
      name: 'Laptop',
      price: {
        amount: 14500.0,
        currencyCode: 'INR'
      },
      makeDate: Date.now(),
      description: 'This is a laptop',
      imagePath: 'assets/Laptop.png',
      isAvailable: true,
    },
    {
      id: 2,
      name: 'Mobile',
      price: {
        amount: 1500.0,
        currencyCode: 'INR'
      },
      makeDate: Date.now(),
      description: 'This is a mobile',
      imagePath: 'assets/Mobile.png',
      isAvailable: true,
    },
  ];

}
