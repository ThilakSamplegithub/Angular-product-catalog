// cart.component.ts

import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: Product[] = [];

  constructor(private cartService: CartService) {
    this.cartItems = cartService.getCartItems();
  }
}
