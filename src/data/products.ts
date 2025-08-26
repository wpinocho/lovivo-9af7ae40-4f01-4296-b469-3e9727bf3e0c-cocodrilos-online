import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    name: "Cocodrilo del Nilo Premium",
    price: 15000,
    image: "https://images.unsplash.com/photo-1551191916-8b7c2c1b4b5a?w=400&h=300&fit=crop",
    description: "Magnífico cocodrilo del Nilo, perfecto para coleccionistas experimentados. Incluye certificado de autenticidad.",
    species: "Crocodylus niloticus",
    size: "3.5 metros",
    habitat: "Acuático/Terrestre",
    inStock: true
  },
  {
    id: 2,
    name: "Caimán Americano Joven",
    price: 8500,
    image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400&h=300&fit=crop",
    description: "Caimán americano joven, ideal para principiantes. Muy dócil y fácil de cuidar.",
    species: "Alligator mississippiensis",
    size: "1.8 metros",
    habitat: "Pantanos",
    inStock: true
  },
  {
    id: 3,
    name: "Cocodrilo Marino Australiano",
    price: 25000,
    image: "https://images.unsplash.com/photo-1551191916-8b7c2c1b4b5a?w=400&h=300&fit=crop",
    description: "El rey de los cocodrilos! Espécimen adulto de cocodrilo marino. Solo para expertos.",
    species: "Crocodylus porosus",
    size: "5.2 metros",
    habitat: "Marino/Estuarios",
    inStock: false
  },
  {
    id: 4,
    name: "Caimán Enano Africano",
    price: 4500,
    image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400&h=300&fit=crop",
    description: "Adorable caimán enano, perfecto para espacios pequeños. Muy popular entre coleccionistas.",
    species: "Osteolaemus tetraspis",
    size: "1.2 metros",
    habitat: "Ríos tropicales",
    inStock: true
  },
  {
    id: 5,
    name: "Cocodrilo Cubano Exclusivo",
    price: 18000,
    image: "https://images.unsplash.com/photo-1551191916-8b7c2c1b4b5a?w=400&h=300&fit=crop",
    description: "Rara especie de cocodrilo cubano. Edición limitada con documentación completa.",
    species: "Crocodylus rhombifer",
    size: "2.8 metros",
    habitat: "Pantanos cubanos",
    inStock: true
  },
  {
    id: 6,
    name: "Gavial del Ganges",
    price: 22000,
    image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400&h=300&fit=crop",
    description: "Especie única con hocico alargado. Perfecto para acuarios grandes y coleccionistas serios.",
    species: "Gavialis gangeticus",
    size: "4.1 metros",
    habitat: "Ríos del Ganges",
    inStock: true
  }
];