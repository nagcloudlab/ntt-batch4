import { CommonModule } from '@angular/common';
import { Component, ContentChild, ElementRef, Input, SimpleChange, ViewChild, ViewChildren } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [
    CommonModule,
    HighlightDirective
  ],
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css'
})
export class CartViewComponent {

  //@Input("value")
  cart: Array<any> = [];

  @ViewChild("cardHeader")
  cardHeaderEle!: ElementRef;

  @ViewChildren("tableRows")
  tableRowEles!: ElementRef[];

  @ContentChild("h")
  hEle!: ElementRef;

  @ContentChild("w")
  wEle!: ElementRef;

  tickCount: number = 0;
  intervalId: any = null;
  unsubscribe: any | null;

  constructor(private cartService: CartService) {
    console.log("CartViewComponent::constructor()");
    // why we need constructor in Angular component?
    // - to inject services
  }

  handleRemove(cartLine:any) {
    this.cartService.removeCartLine(cartLine);
  }

  ngOnChanges(changes: SimpleChange) {
    console.log("CartViewComponent::ngOnChanges()");
    console.log(changes);
    // why we need ngOnChanges() in Angular component?
    // - to react to changes in input properties
  }

  ngOnInit() {
    console.log("CartViewComponent::ngOnInit()");
    // why we need ngOnInit() in Angular component?
    // - to initialize the component
    // - to make service calls
    // - to subscribe to observables
    this.intervalId = setInterval(() => {
      console.log("tick");
      this.tickCount++;
    }, 1000);

    //this.cart = this.cartService.getCart();
    this.unsubscribe = this.cartService.getCartStream().subscribe({
      next: (cart) => {
        this.cart = cart;
      }
    });

  }

  ngOnDestroy() {
    console.log("CartViewComponent::ngOnDestroy()");
    clearInterval(this.intervalId);
    if (this.unsubscribe) {
      //this.unsubscribe();
    }
    // why we need ngOnDestroy() in Angular component?
    // - to clean up resources
    // - to unsubscribe from observables
  }

  ngAfterContentInit() {
    console.log("CartViewComponent::ngAfterContentInit()");
    // why we need ngAfterContentInit() in Angular component?
    // - to access projected content
    const hEleNativeEle = this.hEle.nativeElement;
    hEleNativeEle.style.backgroundColor = "lightgreen";
  }


  ngAfterViewInit() {
    console.log("CartViewComponent::ngAfterViewInit()");
    // why we need ngAfterViewInit() in Angular component?
    // - to access DOM elements
    const cardHeaderNativeEle = this.cardHeaderEle.nativeElement;
    cardHeaderNativeEle.style.backgroundColor = "lightgreen";
    cardHeaderNativeEle.addEventListener("mouseover", () => {
      cardHeaderNativeEle.style.backgroundColor = "lightblue";
    });
    this.tableRowEles.forEach((ele, idx) => {
      ele.nativeElement.style.cursor = "pointer";
    });
  }




}
