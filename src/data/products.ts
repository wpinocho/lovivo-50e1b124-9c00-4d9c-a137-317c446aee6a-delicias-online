import { Product } from '../store/cartStore';

export const products: Product[] = [
  {
    id: '1',
    name: 'Pizza Margherita',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop',
    description: 'Pizza clásica con tomate, mozzarella fresca y albahaca',
    category: 'Pizza'
  },
  {
    id: '2',
    name: 'Hamburguesa Clásica',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    description: 'Hamburguesa de carne con lechuga, tomate, cebolla y queso',
    category: 'Hamburguesas'
  },
  {
    id: '3',
    name: 'Sushi Variado',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    description: 'Selección de sushi fresco con salmón, atún y aguacate',
    category: 'Sushi'
  },
  {
    id: '4',
    name: 'Tacos Mexicanos',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    description: 'Tres tacos con carne asada, cilantro y cebolla',
    category: 'Mexicana'
  },
  {
    id: '5',
    name: 'Pasta Carbonara',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop',
    description: 'Pasta con salsa carbonara, panceta y queso parmesano',
    category: 'Pasta'
  },
  {
    id: '6',
    name: 'Ensalada César',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop',
    description: 'Ensalada fresca con pollo, crutones y aderezo césar',
    category: 'Ensaladas'
  },
  {
    id: '7',
    name: 'Ramen Japonés',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
    description: 'Ramen con caldo rico, huevo, cebollín y carne de cerdo',
    category: 'Asiática'
  },
  {
    id: '8',
    name: 'Helado Artesanal',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
    description: 'Helado artesanal de vainilla con toppings variados',
    category: 'Postres'
  }
];

export const categories = [
  'Todos',
  'Pizza',
  'Hamburguesas',
  'Sushi',
  'Mexicana',
  'Pasta',
  'Ensaladas',
  'Asiática',
  'Postres'
];