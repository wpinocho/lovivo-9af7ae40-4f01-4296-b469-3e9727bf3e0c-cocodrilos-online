export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  species: string;
  size: string;
  habitat: string;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}