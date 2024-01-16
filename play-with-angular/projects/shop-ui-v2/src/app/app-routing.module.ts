import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CartViewComponent } from './cart/cart-view/cart-view.component';
import { activateGuard } from './activate.guard';
import { deactivateGuard } from './deactivate.guard';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'products',
        component: ProductListComponent
    },
    {
        path: 'cart',
        canActivate:[activateGuard],
        canDeactivate:[deactivateGuard],
        component: CartViewComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{enableTracing:true})
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
