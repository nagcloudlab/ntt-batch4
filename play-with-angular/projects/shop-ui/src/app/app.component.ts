import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'shop-UI';
  products: Array<any> = [
    {
      id: 1,
      name: 'Laptop',
      price: 14500.0,
      description: 'This is a laptop',
      imagePath: 'assets/Laptop.png',
      isAvailable: true,
    },
    // {
    //   id: 2,
    //   name: 'Mobile',
    //   price: 15000.0,
    //   description: 'This is a mobile',
    //   imagePath: 'assets/Mobile.png',
    //   isAvailable: true,
    // },
  ];

  currentTab: number = 1;
  handleTabChange(event: MouseEvent, tabNumber: number) {
    event.preventDefault();
    this.currentTab = tabNumber;
  }
  isTabSelected(tabNumber: number): boolean {
    return this.currentTab === tabNumber;
  }

  handleAddToCart(event: MouseEvent) {
    console.log(event);
  }
}
