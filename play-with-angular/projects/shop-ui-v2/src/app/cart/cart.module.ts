import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartBadgeComponent } from './cart-badge/cart-badge.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { FooComponent } from '../foo.component';



@NgModule({
  declarations: [
    CartBadgeComponent,
    CartViewComponent
  ],
  imports: [
    CommonModule,
    FooComponent
  ],
  exports: [
    CartBadgeComponent,
    CartViewComponent
  ]
})
export class CartModule { }
