import { Plus } from 'lucide-react';
import { Product, useCartStore } from '../store/cartStore';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore((state) => state.addItem);
  
  const handleAddToCart = () => {
    console.log('Adding product to cart:', product.name);
    addItem(product);
    toast.success(`${product.name} agregado al carrito`);
  };

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 left-2">
            <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              {product.category}
            </span>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-orange-500">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white"
        >
          <Plus className="h-4 w-4 mr-2" />
          Agregar al Carrito
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;