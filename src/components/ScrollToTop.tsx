'use client';

import { useEffect, useState } from 'react';
import ArrowUpIcon from '@/assets/icons/arrow-up.svg';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-white text-gray-900 rounded-full p-3 shadow-lg hover:bg-white/70 transition-all duration-300 z-50"
      aria-label="Scroll to top"
    >
      <ArrowUpIcon className="size-6" />
    </button>
  );
};