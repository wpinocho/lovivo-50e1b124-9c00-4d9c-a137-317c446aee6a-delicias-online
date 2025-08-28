import { ShoppingCart, Store } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { Button } from './ui/button';

interface HeaderProps {
  onCartClick: () => void;
}

const Header = ({ onCartClick }: HeaderProps) => {
  const totalItems = useCartStore((state) => state.getTotalItems());
  
  console.log('Header rendered, total items:', totalItems);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Store className="h-8 w-8 text-orange-500" />
            <h1 className="text-2xl font-bold text-gray-800">FoodieStore</h1>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
              Inicio
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
              Menú
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
              Sobre Nosotros
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
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