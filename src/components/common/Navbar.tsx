import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import { useScrollDirection } from '../../hooks/useScrollProgress';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollDirection, scrollY } = useScrollDirection();
  
  // Handle navbar visibility based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false);
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);
  
  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };
  
  const navClasses = `fixed w-full z-40 transition-all duration-300 ${
    isScrolled 
      ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm py-2' 
      : 'bg-transparent py-4'
  } ${scrollDirection === 'down' && scrollY > 100 ? '-translate-y-full' : 'translate-y-0'}`;

  return (
    <nav className={navClasses}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-serif font-bold text-gray-900 dark:text-white">Prism</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/categories" className="nav-link">Categories</Link>
          <Link to="/about" className="nav-link">About</Link>
          
          <div className="ml-4 flex items-center space-x-2">
            <button 
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Search"
            >
              <Search className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            </button>
            
            <DarkModeToggle />
            
            <Link to="/signin" className="btn btn-primary ml-2">
              Sign In
            </Link>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex items-center space-x-2 md:hidden">
          <button 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Search"
          >
            <Search className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>
          
          <DarkModeToggle />
          
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <Menu className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link to="/" className="nav-link block py-2" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/categories" className="nav-link block py-2" onClick={() => setIsOpen(false)}>Categories</Link>
            <Link to="/about" className="nav-link block py-2" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/signin" className="btn btn-primary w-full text-center" onClick={() => setIsOpen(false)}>
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;