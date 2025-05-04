import { Link } from 'react-router-dom';
import { Author } from '../../types';
import { formatNumber } from '../../utils/formatters';

interface AuthorProfileProps {
  author: Author;
}

const AuthorProfile = ({ author }: AuthorProfileProps) => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-8 animate-fade-in">
            <img 
              src={author.avatarUrl} 
              alt={author.name} 
              className="h-32 w-32 rounded-full mb-4"
            />
            
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">
              {author.name}
              {author.isVerified && (
                <svg className="h-6 w-6 text-primary-500 inline ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
            </h1>
            
            <div className="flex space-x-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
              <span>{formatNumber(author.followers)} Followers</span>
              <span>•</span>
              <span>Following {formatNumber(author.following)}</span>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 max-w-lg mb-6">
              {author.bio}
            </p>
            
            <div className="flex space-x-4">
              <button className="btn btn-primary px-8">
                Follow
              </button>
              <button className="btn btn-outline">
                Share
              </button>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6 animate-slide-up">
            <div className="flex justify-center mb-8">
              <nav className="flex space-x-8">
                <Link to="#" className="text-gray-900 dark:text-white font-medium border-b-2 border-primary-500 pb-4 px-2">
                  Home
                </Link>
                <Link to="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white pb-4 px-2">
                  About
                </Link>
                <Link to="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white pb-4 px-2">
                  Recommended
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorProfile;