export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  isFavorite: boolean;
  specifications: {
    CPU?:string;
    GPU?:string;
    capacity?:string;
    size?: string;
    color?: string;
    storage?: string;
    processor?: string;
    screenSize?: string;
    material?: string;
    dimensions?: string;
    weightCapacity?: string;
    soleMaterial?: string;
    style?: string;
    camera?: string;
    brewingTime?: string;
    // Add other optional properties
    batteryLife?: string;
    resolution?: string;
    displayTechnology?: string;
    warranty?: string;
    // Add more optional properties as needed
  };
  reviews: string[];
  relatedProducts: { name: string; price: number }[];
}
