import { Link } from 'react-router-dom';
import { Article } from '../../types';
import { formatDate, formatReadingTime } from '../../utils/formatters';
import { Twitter, Facebook, Linkedin, Link2 } from 'lucide-react';

interface ArticleHeaderProps {
  article: Article;
}

const ArticleHeader = ({ article }: ArticleHeaderProps) => {
  const { 
    title, 
    subtitle, 
    author, 
    publishedDate, 
    readingTime,
    category,
  } = article;
  
  const handleShare = (platform: string) => {
    // This would be implemented to share on social platforms
    console.log(`Sharing on ${platform}`);
  };
  
  const handleCopyLink = () => {
    // This would copy the current URL to clipboard
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        alert('Link copied to clipboard');
      })
      .catch((err) => {
        console.error('Failed to copy link: ', err);
      });
  };

  return (
    <header className="pt-24 pb-8 md:pt-32 md:pb-12">
      <div className="max-w-3xl mx-auto px-4">
        <Link to={`/category/${category.toLowerCase()}`} className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-4 inline-block">
          {category}
        </Link>
        
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          {title}
        </h1>
        
        <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-serif mb-8">
          {subtitle}
        </h2>
        
        <div className="flex items-center mb-6">
          <Link to={`/author/${author.id}`} className="flex-shrink-0">
            <img 
              src={author.avatarUrl} 
              alt={author.name} 
              className="h-12 w-12 rounded-full"
            />
          </Link>
          <div className="ml-3">
            <div className="flex items-center">
              <Link to={`/author/${author.id}`} className="text-base font-medium text-gray-900 dark:text-white hover:underline">
                {author.name}
              </Link>
              {author.isVerified && (
                <svg className="h-4 w-4 text-primary-500 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <div className="flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <span>{formatDate(publishedDate)}</span>
              <span>•</span>
              <span>{formatReadingTime(readingTime)}</span>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-2 border-t border-b border-gray-200 dark:border-gray-800 py-4">
          <button 
            onClick={() => handleShare('twitter')}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Share on Twitter"
          >
            <Twitter className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>
          
          <button 
            onClick={() => handleShare('facebook')}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Share on Facebook"
          >
            <Facebook className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>
          
          <button 
            onClick={() => handleShare('linkedin')}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>
          
          <button 
            onClick={handleCopyLink}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Copy link"
          >
            <Link2 className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default ArticleHeader;