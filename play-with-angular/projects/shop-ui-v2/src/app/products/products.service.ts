import { Injectable } from '@angular/core';

@Injectable(
  //{
  // providedIn: 'root'
  //}
)
export class ProductsService {

  constructor() { 
    console.log('ProductsService created');
  }

  getProducts(){
    return [
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
    ]
  }
  getReviews(productId:number){
      return [
        {rating: 4, author: 'who-1',body:'sample-1'},
        {rating: 4, author: 'who-1',body:'sample-1'},
      ]
  }

}
