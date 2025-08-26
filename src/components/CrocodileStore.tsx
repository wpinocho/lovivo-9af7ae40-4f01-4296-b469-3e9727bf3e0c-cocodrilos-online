import React, { useState } from 'react';
import { products } from '../data/products';
import Header from './Header';
import HeroSection from './HeroSection';
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
        
        <HeroSection />
        
        <main className="container mx-auto px-4 py-16">
          <div id="productos" className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              🐊 Colección Premium de Cocodrilos 🐊
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Descubre nuestra increíble selección de cocodrilos de las mejores especies del mundo. 
              Cada uno viene con certificado de autenticidad y garantía de calidad.
            </p>
            <div className="mt-8 w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">
              ¿Por qué elegir CrocoShop? 🏆
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl mb-4">🛡️</div>
                <h4 className="font-bold text-lg mb-2">Garantía Total</h4>
                <p className="text-gray-600">Todos nuestros cocodrilos vienen con garantía de por vida</p>
              </div>
              <div className="text-center bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl mb-4">🚚</div>
                <h4 className="font-bold text-lg mb-2">Envío Especializado</h4>
                <p className="text-gray-600">Transporte seguro y climatizado para tu nueva mascota</p>
              </div>
              <div className="text-center bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl mb-4">👨‍⚕️</div>
                <h4 className="font-bold text-lg mb-2">Soporte Veterinario</h4>
                <p className="text-gray-600">Consultas gratuitas con nuestros especialistas</p>
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-green-800 text-white py-12 mt-16">
          <div className="container mx-auto px-4 text-center">
            <div className="text-6xl mb-6">🐊</div>
            <h3 className="text-2xl font-bold mb-4">CrocoShop</h3>
            <p className="text-green-200 mb-6 text-lg">La experiencia más salvaje en ecommerce</p>
            <div className="border-t border-green-700 pt-6 mt-6">
              <p className="text-sm text-green-300">
                © 2024 CrocoShop. Todos los derechos reservados. 
                Licencia para venta de reptiles #CR-2024-001
              </p>
            </div>
          </div>
        </footer>

        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default CrocodileStore;