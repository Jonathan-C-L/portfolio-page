//------------------------------------------------------
// Hook for DOM component fade in effect 
//------------------------------------------------------
import { useEffect } from 'react';

export const useFadeIn = (deps: unknown[] = []) => {
    useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    // Small delay ensures React has fully painted the DOM
    const timer = setTimeout(() => {
      document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    }, 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, deps); // re-runs whenever deps change
};