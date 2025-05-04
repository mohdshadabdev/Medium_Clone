import MainLayout from '../layout/MainLayout';
import Hero from '../components/home/Hero';
import BlogFeed from '../components/home/BlogFeed';
import CategoryBanner from '../components/home/CategoryBanner';

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <CategoryBanner />
      <BlogFeed />
    </MainLayout>
  );
};

export default HomePage;