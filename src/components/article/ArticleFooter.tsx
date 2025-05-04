import { Link } from 'react-router-dom';
import { Article, Author } from '../../types';
import { formatNumber } from '../../utils/formatters';

interface ArticleFooterProps {
  article: Article;
}

const ArticleFooter = ({ article }: ArticleFooterProps) => {
  const { author } = article;
  
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img 
            src={author.avatarUrl} 
            alt={author.name} 
            className="h-20 w-20 rounded-full"
          />
          
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-serif font-bold mb-2">
              <Link to={`/author/${author.id}`} className="hover:text-primary-600 transition-colors">
                {author.name}
              </Link>
            </h3>
            
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {formatNumber(author.followers)} Followers
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {author.bio}
            </p>
            
            <Link to={`/author/${author.id}`} className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              See all from {author.name}
            </Link>
          </div>
          
          <div>
            <button className="btn btn-primary">
              Follow
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleFooter;