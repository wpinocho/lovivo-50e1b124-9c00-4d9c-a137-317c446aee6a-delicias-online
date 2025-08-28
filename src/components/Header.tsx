import { ShoppingCart, Store } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { Button } from './ui/button';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onCartClick: () => void;
}

const Header = ({ onCartClick }: HeaderProps) => {
  const totalItems = useCartStore((state) => state.getTotalItems());
  const location = useLocation();
  
  console.log('Header rendered, total items:', totalItems);

  const scrollToMenu = () => {
    if (location.pathname !== '/') {
      // Si no estamos en la página principal, navegar primero
      window.location.href = '/#menu';
    } else {
      // Si estamos en la página principal, hacer scroll
      const menuSection = document.getElementById('menu');
      menuSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Store className="h-8 w-8 text-orange-500" />
            <h1 className="text-2xl font-bold text-gray-800">FoodieStore</h1>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              Inicio
            </Link>
            <button
              onClick={scrollToMenu}
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              Menú
            </button>
            <Link 
              to="/about" 
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              Sobre Nosotros
            </Link>
            <a 
              href="#contact" 
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              Contacto
            </a>
          </nav>
          
          <Button
            onClick={onCartClick}
            variant="outline"
            size="sm"
            className="relative"
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;