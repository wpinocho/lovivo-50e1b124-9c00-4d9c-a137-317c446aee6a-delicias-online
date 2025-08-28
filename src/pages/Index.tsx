import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';
import Cart from '../components/Cart';
import { products } from '../data/products';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  console.log('Index page rendered, selected category:', selectedCategory);

  const filteredProducts = selectedCategory === 'Todos' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onCartClick={() => setIsCartOpen(true)} />
      
      <Hero />
      
      <main className="container mx-auto px-4 py-12" id="menu">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nuestro Menú
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explora nuestra selección de platos frescos y deliciosos, 
            preparados con los mejores ingredientes.
          </p>
        </div>
        
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No se encontraron productos en esta categoría.
            </p>
          </div>
        )}
      </main>
      
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FoodieStore</h3>
              <p className="text-gray-300">
                La mejor comida de la ciudad, entregada directamente a tu puerta.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Inicio</a></li>
                <li><a href="#" className="hover:text-white">Menú</a></li>
                <li><a href="#" className="hover:text-white">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-white">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Categorías</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Pizza</a></li>
                <li><a href="#" className="hover:text-white">Hamburguesas</a></li>
                <li><a href="#" className="hover:text-white">Sushi</a></li>
                <li><a href="#" className="hover:text-white">Postres</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-gray-300">
                <p>📞 (555) 123-4567</p>
                <p>📧 info@foodiestore.com</p>
                <p>📍 123 Food Street, Ciudad</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 FoodieStore. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
      
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Index;