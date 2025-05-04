import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import ArticleHeader from '../components/article/ArticleHeader';
import ArticleContent from '../components/article/ArticleContent';
import ArticleFooter from '../components/article/ArticleFooter';
import { getArticleBySlug } from '../data/mockData';

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Get article data
  const article = slug ? getArticleBySlug(slug) : undefined;
  
  // If article not found, redirect to home
  useEffect(() => {
    if (!article) {
      navigate('/');
    }
  }, [article, navigate]);
  
  if (!article) {
    return null;
  }
  
  return (
    <MainLayout showScrollProgress={true}>
      <ArticleHeader article={article} />
      <ArticleContent article={article} />
      <ArticleFooter article={article} />
    </MainLayout>
  );
};

export default ArticlePage;