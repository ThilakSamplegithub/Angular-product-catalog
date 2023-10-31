import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: any;
  showDetails: boolean = false;
  isFavorite: boolean = false;

  @Output() addToCartEvent = new EventEmitter<any>();
  @Output() toggleFavoriteEvent = new EventEmitter<any>();

  viewDetails() {
    this.showDetails = !this.showDetails;
  }

  addToCart(product: any) {
    // Emit an event to notify the parent component (ProductListComponent) to add the product to the cart.
    this.addToCartEvent.emit(product);
  }

  toggleFavorite(product: any) {
    // Toggle the favorite status of the product.
    this.isFavorite = !this.isFavorite;

    // Emit an event to notify the parent component (ProductListComponent) of the change.
    this.toggleFavoriteEvent.emit({ product: product, isFavorite: this.isFavorite });
  }
}
