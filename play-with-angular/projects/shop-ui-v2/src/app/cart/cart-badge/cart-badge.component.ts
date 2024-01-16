import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-badge',
  templateUrl: './cart-badge.component.html',
  styleUrl: './cart-badge.component.css'
})
export class CartBadgeComponent {

  //@Input("value")
  cartCount: number = 0;

  unsubscribe: any | null;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    console.log("CartBadgeComponent.ngOnInit");
    this.unsubscribe = this.cartService.getCartStream().subscribe({
      next: (cart) => {
        this.cartCount = cart.length;
      }
    });
  }

  ngOnDestroy() {
    console.log("CartBadgeComponent.ngOnDestroy");
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

}
