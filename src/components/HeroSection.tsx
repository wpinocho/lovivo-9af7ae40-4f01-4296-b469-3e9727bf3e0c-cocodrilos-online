import React from 'react';
import { ShoppingBag, Star, Shield } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=1200&h=600&fit=crop&crop=center")'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <div className="mb-6">
            <div className="text-6xl lg:text-8xl mb-4 animate-bounce">🐊</div>
            <h1 className="text-4xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                CrocoShop
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-green-200 mb-8 font-medium">
              La experiencia más salvaje en ecommerce
            </p>
          </div>

          {/* Subtitle */}
          <div className="mb-12">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">
              Cocodrilos Premium de Todo el Mundo
            </h2>
            <p className="text-lg lg:text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Descubre nuestra colección exclusiva de cocodrilos de las mejores especies. 
              Cada ejemplar viene con certificado de autenticidad y garantía de por vida.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="bg-green-600 p-4 rounded-full mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Garantía Total</h3>
              <p className="text-green-200 text-sm">Certificados de autenticidad incluidos</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-600 p-4 rounded-full mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Calidad Premium</h3>
              <p className="text-green-200 text-sm">Solo las mejores especies del mundo</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-600 p-4 rounded-full mb-4">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Envío Especializado</h3>
              <p className="text-green-200 text-sm">Transporte seguro y climatizado</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => {
                document.getElementById('productos')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
              className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Ver Cocodrilos 🐊
            </button>
            <button className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300">
              Conocer Más
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-400">500+</div>
              <div className="text-green-200 text-sm">Cocodrilos Vendidos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400">15</div>
              <div className="text-green-200 text-sm">Especies Disponibles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400">98%</div>
              <div className="text-green-200 text-sm">Satisfacción</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400">24/7</div>
              <div className="text-green-200 text-sm">Soporte Veterinario</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L50 105C100 90 200 60 300 45C400 30 500 30 600 37.5C700 45 800 60 900 67.5C1000 75 1100 75 1150 75L1200 75V120H1150C1100 120 1000 120 900 120C800 120 700 120 600 120C500 120 400 120 300 120C200 120 100 120 50 120H0Z" fill="rgb(243 244 246)"/>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;