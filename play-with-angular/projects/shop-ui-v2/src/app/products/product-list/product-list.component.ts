import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers:[
    ProductsService
  ]
})
export class ProductListComponent {

  products: Array<any> = [];

  constructor(private productsService:ProductsService){}

  ngOnInit(){
    this.products = this.productsService.getProducts();
  }

}
