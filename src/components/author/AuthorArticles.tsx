import { Link } from 'react-router-dom';
import { Article } from '../../types';
import { formatDate, formatReadingTime } from '../../utils/formatters';

interface AuthorArticlesProps {
  articles: Article[];
}

const AuthorArticles = ({ articles }: AuthorArticlesProps) => {
  return (
    <section className="py-8">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif font-bold mb-8">Latest Articles</h2>
          
          <div className="space-y-8">
            {articles.map((article) => (
              <div key={article.id} className="border-b border-gray-200 dark:border-gray-800 pb-8 animate-fade-in">
                <Link to={`/category/${article.category.toLowerCase()}`} className="text-xs font-semibold text-accent-600 uppercase tracking-wider mb-2 inline-block">
                  {article.category}
                </Link>
                
                <h3 className="text-xl md:text-2xl font-serif font-bold mb-2 hover:text-primary-600 transition-colors">
                  <Link to={`/article/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {article.subtitle}
                </p>
                
                <div className="flex justify-between items-center text-sm">
                  <div className="text-gray-500 dark:text-gray-400">
                    <span>{formatDate(article.publishedDate)}</span>
                    <span className="mx-2">•</span>
                    <span>{formatReadingTime(article.readingTime)}</span>
                  </div>
                  
                  <div className="flex space-x-4 text-gray-500 dark:text-gray-400">
                    <span>{article.likes} likes</span>
                    <span>{article.comments} comments</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorArticles;