'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

declare global {
  interface Window {
    __toitoLoadingComplete?: boolean;
  }
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isReady, setIsReady] = useState(
    () => typeof window !== 'undefined' && window.__toitoLoadingComplete === true
  );
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.__toitoLoadingComplete) {
      setIsReady(true);
      return;
    }

    const handleReady = () => setIsReady(true);
    window.addEventListener('toito-loading-complete', handleReady);
    return () => window.removeEventListener('toito-loading-complete', handleReady);
  }, []);

  useEffect(() => {
    if (!isReady) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
      }
    );

    const node = elementRef.current;
    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
      observer.disconnect();
    };
  }, [hasAnimated, isReady, options.threshold, options.rootMargin]);

  return { elementRef, isVisible, hasAnimated };
}

export function useParallax() {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        setOffset(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { elementRef, offset };
}
