import { Link } from 'react-router-dom';
import { categories } from '../../data/mockData';

const CategoryBanner = () => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-800 py-4 overflow-x-auto">
      <div className="container-custom">
        <div className="flex space-x-4 lg:space-x-8 whitespace-nowrap">
          <Link 
            to="/" 
            className="px-4 py-1 text-sm font-medium text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            All
          </Link>
          
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/category/${category.slug}`}
              className="px-4 py-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;