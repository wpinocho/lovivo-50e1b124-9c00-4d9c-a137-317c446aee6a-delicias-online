import { categories } from '../data/products';
import { Button } from './ui/button';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  console.log('CategoryFilter rendered, selected:', selectedCategory);

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={`${
            selectedCategory === category
              ? "bg-orange-500 hover:bg-orange-600 text-white"
              : "hover:bg-orange-50 hover:text-orange-600"
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;