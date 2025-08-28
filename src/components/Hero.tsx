import { Button } from './ui/button';

const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    menuSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Deliciosa Comida
          <span className="block text-yellow-300">A Domicilio</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Descubre los mejores sabores de la ciudad. Comida fresca, rápida y deliciosa 
          directamente a tu puerta.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={scrollToMenu}
            size="lg"
            className="bg-white text-orange-500 hover:bg-gray-100 font-semibold px-8 py-3"
          >
            Ver Menú
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-orange-500 font-semibold px-8 py-3"
          >
            Sobre Nosotros
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">30min</div>
            <div className="text-lg">Entrega Rápida</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">100+</div>
            <div className="text-lg">Platos Disponibles</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-lg">Servicio</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;