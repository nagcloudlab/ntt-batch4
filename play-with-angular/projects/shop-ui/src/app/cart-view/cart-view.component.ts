import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css'
})
export class CartViewComponent {

  @Input("value")
  cart: Array<any> = [];

}
