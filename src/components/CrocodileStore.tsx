import React, { useState } from 'react';
import { products } from '../data/products';
import Header from './Header';
import ProductCard from './ProductCard';
import Cart from './Cart';
import { CartProvider } from '../context/CartContext';

const CrocodileStore: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  console.log('CrocodileStore rendered with', products.length, 'products');

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100">
        <Header onCartClick={() => setIsCartOpen(true)} />
        
        <main className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              🐊 Colección Premium de Cocodrilos 🐊
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre nuestra increíble selección de cocodrilos de las mejores especies del mundo. 
              Cada uno viene con certificado de autenticidad y garantía de calidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 bg-green-50 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-green-800 mb-2">
              ¿Por qué elegir CrocoShop? 🏆
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="text-center">
                <div className="text-2xl mb-2">🛡️</div>
                <h4 className="font-semibold">Garantía Total</h4>
                <p className="text-sm text-gray-600">Todos nuestros cocodrilos vienen con garantía de por vida</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🚚</div>
                <h4 className="font-semibold">Envío Especializado</h4>
                <p className="text-sm text-gray-600">Transporte seguro y climatizado para tu nueva mascota</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">👨‍⚕️</div>
                <h4 className="font-semibold">Soporte Veterinario</h4>
                <p className="text-sm text-gray-600">Consultas gratuitas con nuestros especialistas</p>
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-green-800 text-white py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            <div className="text-4xl mb-4">🐊</div>
            <h3 className="text-xl font-bold mb-2">CrocoShop</h3>
            <p className="text-green-200 mb-4">La experiencia más salvaje en ecommerce</p>
            <p className="text-sm text-green-300">
              © 2024 CrocoShop. Todos los derechos reservados. 
              Licencia para venta de reptiles #CR-2024-001
            </p>
          </div>
        </footer>

        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default CrocodileStore;