// product-list.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    {
      id:1,
      name: 'Laptop',
      description: 'Powerful laptop with high-resolution display.',
      image: 'https://m.media-amazon.com/images/I/71yjoXu2ZAL._AC_UY327_FMwebp_QL65_.jpg',
      price: 999.99,
      category: 'Electronics',
      isFavorite: false,
      specifications: {
        size: '15-inch',
        color: 'Silver',
        storage: '512GB SSD',
        processor: 'Intel Core i7',
      },
      reviews: ['Great laptop!', 'Fast performance.'],
      relatedProducts: [
        { name: 'Wireless Mouse', price: 19.99 },
        { name: 'Laptop Bag', price: 29.99 },
      ],
    },
    {
      id:2,
      name: 'T-shirt',
      description: 'Comfortable cotton t-shirt in various colors.',
      image: 'https://m.media-amazon.com/images/I/71pN0U+-MPL._AC_UL480_FMwebp_QL65_.jpg',
      price: 14.99,
      category: 'Clothing',
      isFavorite: true,
      specifications: {
        size: 'Medium',
        color: 'Red',
        material: '100% cotton',
      },
      reviews: ['Great fit!', 'Nice quality fabric.'],
      relatedProducts: [
        { name: 'Jeans', price: 39.99 },
        { name: 'Sneakers', price: 49.99 },
      ],
    },
    {
      id:3,
      name: 'Smartphone',
      description: 'Feature-packed smartphone with a sleek design.',
      image: 'https://m.media-amazon.com/images/I/71DSxfKzkJL._AC_UY327_FMwebp_QL65_.jpg',
      price: 799.99,
      category: 'Electronics',
      isFavorite: false,
      specifications: {
        screenSize: '6.2 inches',
        color: 'Black',
        storage: '128GB',
        camera: '20MP',
      },
      reviews: ['Excellent phone!', 'Amazing camera quality.'],
      relatedProducts: [
        { name: 'Phone Case', price: 9.99 },
        { name: 'Screen Protector', price: 4.99 },
      ],
    },
    {
      id:4,
      name: 'Desk Chair',
      description: 'Ergonomic desk chair for comfortable work.',
      image: 'https://m.media-amazon.com/images/I/618214NCqhL._AC_UL480_FMwebp_QL65_.jpg',
      price: 149.99,
      category: 'Furniture',
      isFavorite: false,
      specifications: {
        color: 'Black',
        material: 'Leather',
        dimensions: '25"W x 25"D x 40"H',
        weightCapacity: '250 lbs',
      },
      reviews: ['Great chair!', 'Very comfortable.'],
      relatedProducts: [
        { name: 'Office Desk', price: 199.99 },
        { name: 'Table Lamp', price: 29.99 },
      ],
    },
    {
      id:5,
      name: 'Running Shoes',
      description: 'High-performance running shoes for athletes.',
      image: 'https://m.media-amazon.com/images/I/61dIRciRNIL._AC_UL480_FMwebp_QL65_.jpg',
      price: 79.99,
      category: 'Footwear',
      isFavorite: false,
      specifications: {
        color: 'Blue',
        size: 'US 10',
        soleMaterial: 'Rubber',
        style: 'Lace-up',
      },
      reviews: ['Excellent shoes!', 'Perfect for running.'],
      relatedProducts: [
        { name: 'Sports Socks', price: 9.99 },
        { name: 'Running Shorts', price: 29.99 },
      ],
    },
    {
      id:6,
      name: 'Gaming Laptop',
      description: 'High-performance gaming laptop for gamers.',
      image: 'https://m.media-amazon.com/images/I/51tLJ+LVusL._AC_UY327_FMwebp_QL65_.jpg',
      price: 1299.99,
      category: 'Electronics',
      isFavorite: true,
      specifications: {
        size: '17-inch',
        color: 'Black',
        CPU: 'Intel Core i9',
        GPU: 'NVIDIA RTX 3080',
      },
      reviews: ['Awesome gaming laptop!', 'Incredible graphics.'],
      relatedProducts: [
        { name: 'Gaming Mouse', price: 49.99 },
        { name: 'Gaming Headset', price: 79.99 },
      ],
    },
    {
      id:7,
      name: 'Coffee Maker',
      description: 'Automatic coffee maker for home or office.',
      image: 'https://m.media-amazon.com/images/I/71DQ5wGWIZL._AC_UY327_FMwebp_QL65_.jpg',
      price: 69.99,
      category: 'Appliances',
      isFavorite: false,
      specifications: {
        color: 'Stainless Steel',
        capacity: '12 cups',
        brewingTime: '5 minutes',
      },
      reviews: ['Great coffee maker!', 'Quick and convenient.'],
      relatedProducts: [
        { name: 'Coffee Filters', price: 4.99 },
        { name: 'Coffee Grinder', price: 29.99 },
      ],
    },
    // Add more product objects as needed
  ];
  filteredProducts = [...this.products]; // Create a copy to store filtered results

  filterByCategory(category: string) {
    this.filteredProducts = this.products.filter(product =>
      !category || product.category === category
    );
  }
 // Add a property to track the current sorting order
currentSortOrder: string = 'none';

sortProducts(sortOrder: string) {
  this.currentSortOrder = sortOrder;
  switch (sortOrder) {
    case 'nameAsc':
      this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'nameDesc':
      this.filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'priceAsc':
      this.filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'priceDesc':
      this.filteredProducts.sort((a, b) => b.price - a.price);
      break;
    default:
      // If 'Default' is selected, reset the sorting
      this.filteredProducts = [...this.products];
  }
}

}

