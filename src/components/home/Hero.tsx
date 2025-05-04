import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 mb-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 animate-fade-in">
            Where good ideas find you
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-up">
            Read and share new perspectives on just about any topic. Everyone's welcome.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up">
            <Link 
              to="/signin" 
              className="btn btn-primary px-8 py-3"
            >
              Get started
            </Link>
            <Link 
              to="/about" 
              className="btn btn-outline px-8 py-3"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;