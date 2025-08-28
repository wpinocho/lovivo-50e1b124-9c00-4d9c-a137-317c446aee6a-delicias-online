import Header from '../components/Header';
import { useState } from 'react';
import Cart from '../components/Cart';
import { Users, Heart, Award, Clock } from 'lucide-react';

const AboutUs = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onCartClick={() => setIsCartOpen(true)} />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Sobre Nosotros
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En FoodieStore, nos apasiona llevar la mejor comida directamente a tu mesa. 
            Desde 2020, hemos estado sirviendo a nuestra comunidad con ingredientes frescos 
            y sabores auténticos.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestra Historia</h2>
            <p className="text-gray-600 mb-4">
              Todo comenzó con una simple idea: hacer que la comida deliciosa y de calidad 
              sea accesible para todos. Fundada por un grupo de amigos apasionados por la 
              gastronomía, FoodieStore nació del deseo de conectar a las personas con 
              sabores auténticos de todo el mundo.
            </p>
            <p className="text-gray-600 mb-4">
              Comenzamos como un pequeño restaurante local y hemos crecido hasta convertirnos 
              en una plataforma de entrega que sirve a miles de familias cada día. Nuestro 
              compromiso con la calidad y el servicio al cliente sigue siendo el mismo desde 
              el primer día.
            </p>
            <p className="text-gray-600">
              Cada plato que preparamos lleva consigo nuestra pasión por la excelencia 
              culinaria y nuestro amor por hacer felices a nuestros clientes.
            </p>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop"
              alt="Nuestro equipo cocinando"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Nuestros Valores
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Pasión</h3>
              <p className="text-gray-600">
                Cada plato es preparado con amor y dedicación por nuestro equipo de chefs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Calidad</h3>
              <p className="text-gray-600">
                Utilizamos solo los ingredientes más frescos y de la mejor calidad.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Rapidez</h3>
              <p className="text-gray-600">
                Entregamos tu comida caliente y fresca en tiempo récord.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Comunidad</h3>
              <p className="text-gray-600">
                Somos parte de la comunidad y nos enorgullece servir a nuestros vecinos.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Nuestro Equipo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                alt="Chef Principal"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Carlos Mendoza</h3>
              <p className="text-orange-500 font-medium mb-2">Chef Principal</p>
              <p className="text-gray-600 text-sm">
                Con más de 15 años de experiencia en cocina internacional, 
                Carlos lidera nuestro equipo culinario con pasión y creatividad.
              </p>
            </div>
            
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
                alt="Gerente de Operaciones"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">María González</h3>
              <p className="text-orange-500 font-medium mb-2">Gerente de Operaciones</p>
              <p className="text-gray-600 text-sm">
                María se asegura de que cada pedido llegue perfecto y a tiempo. 
                Su dedicación al servicio al cliente es incomparable.
              </p>
            </div>
            
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
                alt="Chef de Repostería"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Diego Ramírez</h3>
              <p className="text-orange-500 font-medium mb-2">Chef de Repostería</p>
              <p className="text-gray-600 text-sm">
                Diego crea los postres más deliciosos que endulzan el final 
                perfecto para cada comida.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-orange-500 text-white rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-lg">Pedidos Entregados</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8★</div>
              <div className="text-lg">Calificación Promedio</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-lg">Platos en el Menú</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg">Servicio Disponible</div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            ¿Tienes alguna pregunta?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Nos encantaría escuchar de ti. Contáctanos en cualquier momento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1234567890"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Llamar Ahora
            </a>
            <a
              href="mailto:info@foodiestore.com"
              className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Enviar Email
            </a>
          </div>
        </div>
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
                <li><a href="/" className="hover:text-white">Inicio</a></li>
                <li><a href="/#menu" className="hover:text-white">Menú</a></li>
                <li><a href="/about" className="hover:text-white">Sobre Nosotros</a></li>
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

export default AboutUs;