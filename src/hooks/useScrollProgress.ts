import { useState, useEffect } from 'react';

/**
 * Hook to track scroll progress
 */
export const useScrollProgress = (): number => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScrollPos = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      
      if (scrollHeight > 0) {
        const percentage = (currentScrollPos / scrollHeight) * 100;
        setProgress(percentage);
      }
    };

    // Update on mount
    updateScrollProgress();
    
    // Add scroll event listener
    window.addEventListener('scroll', updateScrollProgress);
    
    // Clean up
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return progress;
};

/**
 * Hook to track scroll direction
 */
export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > prevScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < prevScrollY) {
        setScrollDirection('up');
      }
      
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return { scrollDirection, scrollY: prevScrollY };
};