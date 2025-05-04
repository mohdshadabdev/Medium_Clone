import BlogCard from './BlogCard';
import { articles } from '../../data/mockData';

const BlogFeed = () => {
  const featuredArticle = articles[0];
  const remainingArticles = articles.slice(1);
  
  return (
    <section className="py-8">
      <div className="container-custom">
        <BlogCard article={featuredArticle} featured={true} />
        
        <div className="grid grid-cols-1 gap-6 mb-12">
          {remainingArticles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogFeed;