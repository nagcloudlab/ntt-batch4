import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DiscountPipe } from './discount.pipe';
import { ReviewsModule } from '../reviews/reviews.module';
import { ProductsService } from './products.service';



@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    DiscountPipe
  ],
  imports: [
    CommonModule,
    ReviewsModule
  ],
  exports: [
    ProductListComponent
  ],
  // providers:[
  //   ProductsService
  // ]
})
export class ProductsModule { }
