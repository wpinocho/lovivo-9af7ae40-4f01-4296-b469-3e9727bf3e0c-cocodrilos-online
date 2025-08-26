import React from 'react';
import { ShoppingCart, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <header className="bg-green-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-3xl">🐊</div>
            <h1 className="text-2xl font-bold">CrocoShop</h1>
            <span className="text-sm text-green-200">La tienda de cocodrilos más salvaje</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Buscar cocodrilos..."
                className="bg-green-700 text-white placeholder-green-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-green-300" />
            </div>
            
            <button
              onClick={onCartClick}
              className="relative bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden sm:inline">Carrito</span>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;