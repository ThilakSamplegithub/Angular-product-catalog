import { Injectable } from '@angular/core';
import { Product } from './product.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Product[] = []; // Array to store added products

  addToCart(product: Product) {
    this.cartItems.push(product);
  }

  getCartItems() {
    return this.cartItems;
  }
}
