import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartViewComponent } from './cart-view/cart-view.component';

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
        component: CartViewComponent,
        resolve: {

        },
        canActivate: [],
        canDeactivate: []
    },
    {
        path: '**',
        redirectTo: ''
    }
];
