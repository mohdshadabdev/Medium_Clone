import { Link } from 'react-router-dom';
import { Bookmark } from 'lucide-react';
import { Article } from '../../types';
import { formatDate, formatReadingTime, truncateText } from '../../utils/formatters';

interface BlogCardProps {
  article: Article;
  featured?: boolean;
}

const BlogCard = ({ article, featured = false }: BlogCardProps) => {
  const { 
    title, 
    subtitle, 
    author, 
    publishedDate, 
    readingTime, 
    coverImage,
    slug,
    category
  } = article;

  if (featured) {
    return (
      <div className="relative group mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="order-2 md:order-1">
            <Link to={`/category/${category.toLowerCase()}`} className="text-xs font-semibold text-accent-600 uppercase tracking-wider mb-2 inline-block">
              {category}
            </Link>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-3 group-hover:text-primary-600 transition-colors">
              <Link to={`/article/${slug}`}>{title}</Link>
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{subtitle}</p>
            <div className="flex items-center">
              <Link to={`/author/${author.id}`} className="flex-shrink-0">
                <img 
                  src={author.avatarUrl} 
                  alt={author.name} 
                  className="h-10 w-10 rounded-full"
                />
              </Link>
              <div className="ml-3">
                <Link to={`/author/${author.id}`} className="text-sm font-medium text-gray-900 dark:text-white hover:underline">
                  {author.name}
                </Link>
                <div className="flex space-x-2 text-xs text-gray-500 dark:text-gray-400">
                  <span>{formatDate(publishedDate)}</span>
                  <span>•</span>
                  <span>{formatReadingTime(readingTime)}</span>
                </div>
              </div>
              <div className="ml-auto">
                <button 
                  className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  aria-label="Save article"
                >
                  <Bookmark className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 h-64 md:h-80 overflow-hidden rounded-lg">
            <Link to={`/article/${slug}`} className="block h-full w-full transition duration-300 transform group-hover:scale-105">
              <img 
                src={coverImage} 
                alt={title} 
                className="h-full w-full object-cover"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8 items-start">
        <div className="md:col-span-8">
          <Link to={`/category/${category.toLowerCase()}`} className="text-xs font-semibold text-accent-600 uppercase tracking-wider mb-2 inline-block">
            {category}
          </Link>
          <h2 className="text-xl md:text-2xl font-serif font-bold mb-2 group-hover:text-primary-600 transition-colors">
            <Link to={`/article/${slug}`}>{title}</Link>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm md:text-base">
            {truncateText(subtitle, 120)}
          </p>
          <div className="flex items-center">
            <Link to={`/author/${author.id}`} className="flex-shrink-0">
              <img 
                src={author.avatarUrl} 
                alt={author.name} 
                className="h-6 w-6 rounded-full"
              />
            </Link>
            <div className="ml-2">
              <Link to={`/author/${author.id}`} className="text-xs font-medium text-gray-900 dark:text-white hover:underline">
                {author.name}
              </Link>
              <div className="flex space-x-2 text-xs text-gray-500 dark:text-gray-400">
                <span>{formatDate(publishedDate)}</span>
                <span>•</span>
                <span>{formatReadingTime(readingTime)}</span>
              </div>
            </div>
            <div className="ml-auto">
              <button 
                className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                aria-label="Save article"
              >
                <Bookmark className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 h-40 md:h-32 overflow-hidden rounded-lg">
          <Link to={`/article/${slug}`} className="block h-full w-full transition duration-300 transform group-hover:scale-105">
            <img 
              src={coverImage} 
              alt={title} 
              className="h-full w-full object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;