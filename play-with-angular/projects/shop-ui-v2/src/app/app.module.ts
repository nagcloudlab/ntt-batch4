import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { ReviewsModule } from './reviews/reviews.module';
import { CartModule } from './cart/cart.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FooComponent } from './foo.component';
import { ProductsService } from './products/products.service';

import { Foo } from './foo.config';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ProductsModule,
    CartModule,
    AppRoutingModule,
    FooComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    ProductsService,
    {provide:"AUTH_TOKEN", useValue:"1234567890"},
    {provide:"API_ENDPOINT", useValue:"http://localhost:7070/api"},
    {provide:"FOO_CONFIG",useClass:Foo},
    {provide:"APP_CONFIG",useFactory:()=>({p1:"v1",p2:"v2"})},
  ]
})
export class AppModule { }
