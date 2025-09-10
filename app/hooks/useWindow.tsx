import { useState, useEffect } from 'react';

interface UseWindowReturn {
  windowWidth: number;
  isMobile: boolean;
}

export const useWindow = (): UseWindowReturn => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Set initial values
    const updateWindowSize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobile(width < 768); // Common mobile breakpoint
    };

    // Set initial values
    updateWindowSize();

    // Add event listener
    window.addEventListener('resize', updateWindowSize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);

  return {
    windowWidth,
    isMobile,
  };
};
