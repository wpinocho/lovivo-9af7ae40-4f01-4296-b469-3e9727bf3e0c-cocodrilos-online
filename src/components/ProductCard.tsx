import React from 'react';
import { ShoppingCart, Info } from 'lucide-react';
import { Product } from '../types/product';
import { useCart } from '../context/CartContext';
import { useToast } from '../hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (!product.inStock) {
      toast({
        title: "Producto agotado",
        description: "Este cocodrilo no está disponible en este momento.",
        variant: "destructive",
      });
      return;
    }

    addItem(product);
    toast({
      title: "¡Agregado al carrito!",
      description: `${product.name} ha sido agregado a tu carrito.`,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-bold text-lg">AGOTADO</span>
          </div>
        )}
        <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-sm">
          {product.size}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.species}</p>
        <p className="text-gray-700 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold text-green-600">
            ${product.price.toLocaleString()}
          </span>
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <Info className="h-4 w-4" />
            <span>{product.habitat}</span>
          </div>
        </div>
        
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`w-full py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 ${
            product.inStock
              ? 'bg-green-600 hover:bg-green-700 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ShoppingCart className="h-4 w-4" />
          <span>{product.inStock ? 'Agregar al Carrito' : 'No Disponible'}</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;