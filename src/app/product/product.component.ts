import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product = {} as Product;


  showDetails: boolean = false;
  isFavorite: boolean = false;

  @Output() addToCartEvent = new EventEmitter<Product>();
  @Output() toggleFavoriteEvent = new EventEmitter<any>();

  constructor(private cartService: CartService) {} // Inject the CartService

  viewDetails() {
    this.showDetails = !this.showDetails;
  }

  addToCart(product: Product) {
    // Use the CartService to add the product to the cart
    this.cartService.addToCart(product);
    alert('Product added to the cart!'); // Show an alert message
  }

  toggleFavorite(product: Product) {
    // Toggle the favorite status of the product.
    this.isFavorite = !this.isFavorite;

    // Emit an event to notify the parent component (ProductListComponent) of the change.
    this.toggleFavoriteEvent.emit({ product: product, isFavorite: this.isFavorite });
  }
}
