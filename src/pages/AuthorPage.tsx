import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import AuthorProfile from '../components/author/AuthorProfile';
import AuthorArticles from '../components/author/AuthorArticles';
import { getAuthorById, getArticlesByAuthor } from '../data/mockData';

const AuthorPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Get author data
  const author = id ? getAuthorById(id) : undefined;
  
  // Get author's articles
  const authorArticles = id ? getArticlesByAuthor(id) : [];
  
  // If author not found, redirect to home
  useEffect(() => {
    if (!author) {
      navigate('/');
    }
  }, [author, navigate]);
  
  if (!author) {
    return null;
  }
  
  return (
    <MainLayout>
      <AuthorProfile author={author} />
      <AuthorArticles articles={authorArticles} />
    </MainLayout>
  );
};

export default AuthorPage;