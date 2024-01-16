import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { 
    console.log("CartService created");
  }

  private cart: Array<any> = [];
  private cartStream: Observable<Array<any>> = new BehaviorSubject(this.cart);

  addToCart(product: any) {
    this.cart.push(product);
    (this.cartStream as BehaviorSubject<Array<any>>).next(this.cart);
  }
  removeCartLine(product: any) {
    let index = this.cart.indexOf(product);
    if (index >= 0) {
      this.cart.splice(index, 1);
      (this.cartStream as BehaviorSubject<Array<any>>).next(this.cart);
    }
  }
  getCart() {
    return Object.assign([], this.cart);
  }
  getCartStream() {
    return this.cartStream;
  }

}
